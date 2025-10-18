#!/bin/bash

# Google Cloud Deployment - Handy Commands Reference
# Copy and paste these commands as needed

# ==================================================
# INITIAL SETUP
# ==================================================

# Install gcloud CLI
brew install --cask google-cloud-sdk

# Authenticate
gcloud auth login

# Set project
gcloud config set project myconsulting-network

# Enable required APIs
gcloud services enable run.googleapis.com containerregistry.googleapis.com cloudbuild.googleapis.com

# ==================================================
# DEPLOYMENT
# ==================================================

# Deploy to Cloud Run (simple - one command)
gcloud run deploy myconsulting-network \
  --source . \
  --region=us-central1 \
  --platform=managed \
  --allow-unauthenticated \
  --memory=512Mi \
  --cpu=1 \
  --min-instances=0 \
  --max-instances=10 \
  --port=8080

# ==================================================
# DOMAIN MAPPING
# ==================================================

# Map root domain
gcloud run domain-mappings create \
  --service=myconsulting-network \
  --domain=myconsulting.network \
  --region=us-central1

# Map www subdomain
gcloud run domain-mappings create \
  --service=myconsulting-network \
  --domain=www.myconsulting.network \
  --region=us-central1

# Get DNS records to add to Google Workspace
gcloud run domain-mappings describe \
  --domain=myconsulting.network \
  --region=us-central1

# List all domain mappings
gcloud run domain-mappings list --region=us-central1

# ==================================================
# MONITORING & LOGS
# ==================================================

# Get service URL
gcloud run services describe myconsulting-network \
  --region=us-central1 \
  --format='value(status.url)'

# View service details
gcloud run services describe myconsulting-network --region=us-central1

# View live logs (tail)
gcloud run services logs read myconsulting-network \
  --region=us-central1 \
  --tail

# View recent logs (last 50 lines)
gcloud run services logs read myconsulting-network \
  --region=us-central1 \
  --limit=50

# View build logs
gcloud builds list --limit=5
# Then get specific build log:
# gcloud builds log [BUILD_ID]

# ==================================================
# SERVICE MANAGEMENT
# ==================================================

# List all Cloud Run services
gcloud run services list

# Update service configuration
gcloud run services update myconsulting-network \
  --region=us-central1 \
  --memory=1Gi \
  --max-instances=20

# Delete service (careful!)
# gcloud run services delete myconsulting-network --region=us-central1

# ==================================================
# CONTINUOUS DEPLOYMENT
# ==================================================

# Create Cloud Build trigger for GitHub
gcloud builds triggers create github \
  --repo-name=myco-website \
  --repo-owner=ranvir01 \
  --branch-pattern="^main$" \
  --build-config=cloudbuild.yaml \
  --region=us-central1

# List all build triggers
gcloud builds triggers list

# ==================================================
# PROJECT MANAGEMENT
# ==================================================

# View project info
gcloud projects describe myconsulting-network

# Check billing status
gcloud billing projects describe myconsulting-network

# List enabled services/APIs
gcloud services list --enabled

# View current configuration
gcloud config list

# ==================================================
# DOCKER (if building manually)
# ==================================================

# Build Docker image
docker build -t gcr.io/myconsulting-network/myconsulting-network:latest .

# Configure Docker for gcloud
gcloud auth configure-docker

# Push to Container Registry
docker push gcr.io/myconsulting-network/myconsulting-network:latest

# Deploy from existing image
gcloud run deploy myconsulting-network \
  --image=gcr.io/myconsulting-network/myconsulting-network:latest \
  --region=us-central1 \
  --platform=managed \
  --allow-unauthenticated

# ==================================================
# TROUBLESHOOTING
# ==================================================

# Check DNS propagation
dig myconsulting.network
dig www.myconsulting.network

# Test with curl
curl -I https://myconsulting-network-xxxxx.run.app

# View all Cloud Run revisions
gcloud run revisions list --service=myconsulting-network --region=us-central1

# Rollback to previous revision
# gcloud run services update-traffic myconsulting-network \
#   --to-revisions=[REVISION_NAME]=100 \
#   --region=us-central1

# ==================================================
# USEFUL INFO
# ==================================================

# View quotas
gcloud compute project-info describe --project=myconsulting-network

# Estimate costs (view in console)
echo "View costs at: https://console.cloud.google.com/billing/reports"

# Cloud Run console
echo "Cloud Run console: https://console.cloud.google.com/run"

# Domain mappings console
echo "Domain mappings: https://console.cloud.google.com/run/domains"

