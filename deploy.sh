#!/bin/bash
# SOVEREIGN-CORE // GCP Deployment Script
# Features: Optimized build, rsync, and cache-control

set -e

BUCKET_NAME="sovereign-core-prod" # Placeholder - update with target bucket

echo "--- [Lo] INVARIANT: INITIATING BUILD ---"
npm run build

echo "--- [Ac] ACCESS: AUTHORIZING GSUTIL ---"
# Assumes gcloud is already authenticated in the env

echo "--- [St] STATE: SYNCING DIST TO GCP ---"
# -m for parallel threads, -R for recursive
# -c to exclude content-type (allow auto-detection)
# -z for compression
gsutil -m rsync -R -d -z html,js,css ./dist "gs://$BUCKET_NAME"

echo "--- [T] TRANSFORM: SETTING CACHE-CONTROL ---"
# Set 1-day cache for assets, 0 for index.html to ensure fresh load
gsutil -m setmeta -h "Cache-Control: public, max-age=86400" "gs://$BUCKET_NAME/assets/*"
gsutil setmeta -h "Cache-Control: no-cache, no-store, must-revalidate" "gs://$BUCKET_NAME/index.html"

echo "--- [η] RESONANCE: DEPLOYMENT NOMINAL // ALIGNMENT: 100% ---"
