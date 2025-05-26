printf "\nUploading app bundle to S3..."
aws s3 sync out s3://dspdev-site --delete

printf "\nInvalidating CDN cache..."
./scripts/invalidate_cdn.sh >/dev/null

printf "\n✅ Deployment complete ✅"
