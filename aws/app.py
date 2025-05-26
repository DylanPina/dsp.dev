import os

import aws_cdk as cdk
from dotenv import load_dotenv
from infra.infra_stack import InfraStack

load_dotenv()
account = os.environ["CDK_ACCOUNT"]
region = os.environ.get("CDK_REGION", "us-east-1")  # fallback to us-east-1

app = cdk.App()

InfraStack(
    app,
    "InfraStack",
    env=cdk.Environment(account=account, region=region),
)

app.synth()
