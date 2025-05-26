from aws_cdk import (
    CfnOutput,
    RemovalPolicy,
    Stack,
)
from aws_cdk import (
    aws_certificatemanager as acm,
)
from aws_cdk import (
    aws_cloudfront as cloudfront,
)
from aws_cdk import (
    aws_cloudfront_origins as origins,
)
from aws_cdk import aws_iam as iam
from aws_cdk import aws_route53 as route53
from aws_cdk import aws_route53_targets as targets
from aws_cdk import (
    aws_s3 as s3,
)
from constructs import Construct


class InfraStack(Stack):
    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        domain_name = "www.dylansp.dev"
        root_domain = "dylansp.dev"

        # Lookup hosted zone (must exist in Route 53)
        zone = route53.HostedZone.from_lookup(
            self, "HostedZone", domain_name=root_domain
        )

        # Create TLS certificate in us-east-1 (required for CloudFront)
        certificate = acm.Certificate(
            self,
            "SiteCertificate",
            domain_name=domain_name,
            validation=acm.CertificateValidation.from_dns(zone),
        )

        # S3 bucket for static site
        site_bucket = s3.Bucket(
            self,
            "S3Bucket",
            bucket_name="dspdev-site",
            website_index_document="index.html",
            website_error_document="404.html",
            auto_delete_objects=True,
            removal_policy=RemovalPolicy.DESTROY,
        )

        # Create CloudFront distribution
        distribution = cloudfront.Distribution(
            self,
            "Distribution",
            default_behavior=cloudfront.BehaviorOptions(
                origin=origins.S3BucketOrigin.with_origin_access_control(site_bucket),
                viewer_protocol_policy=cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            ),
            certificate=certificate,
            domain_names=[domain_name],
            default_root_object="index.html",
        )

        # Allow public read access to all objects in the S3 bucket
        site_bucket.add_to_resource_policy(
            iam.PolicyStatement(
                actions=["s3:GetObject"],
                resources=[site_bucket.arn_for_objects("*")],
                principals=[iam.AnyPrincipal()],
                effect=iam.Effect.ALLOW,
            )
        )

        # DNS alias record for www.dylansp.dev → CloudFront
        route53.ARecord(
            self,
            "AliasRecord",
            zone=zone,
            record_name="www",  # Creates www.dylansp.dev
            target=route53.RecordTarget.from_alias(
                targets.CloudFrontTarget(distribution)
            ),
        )

        # Outputs
        CfnOutput(self, "BucketName", value=site_bucket.bucket_name)
        CfnOutput(
            self,
            "CloudFrontURL",
            value=f"https://{distribution.distribution_domain_name}",
        )
        CfnOutput(self, "CustomDomainURL", value=f"https://{domain_name}")
