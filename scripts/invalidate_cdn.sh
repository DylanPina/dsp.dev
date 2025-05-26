# Refreshes CDN cache

DISTRIBUTION_ID="E1ZE1HIBG6PJEI"
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
