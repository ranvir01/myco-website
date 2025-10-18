#!/bin/bash

# Quick Deploy Script - Run this after gcloud is installed and configured
# This automates Step 4 & 5 from MANUAL_SETUP_STEPS.md

set -e

echo "🚀 MyConsulting Network - Quick Deploy"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

PROJECT_ID="myconsulting-network"
SERVICE_NAME="myconsulting-network"
REGION="us-central1"

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}❌ Google Cloud CLI (gcloud) is not installed!${NC}"
    echo ""
    echo "Please install it first:"
    echo "  brew install --cask google-cloud-sdk"
    echo ""
    exit 1
fi

echo -e "${GREEN}✅ Google Cloud CLI found${NC}"
echo ""

# Check if authenticated
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" &> /dev/null; then
    echo -e "${YELLOW}⚠️  Not authenticated with Google Cloud${NC}"
    echo "Please run: gcloud auth login"
    exit 1
fi

ACCOUNT=$(gcloud auth list --filter=status:ACTIVE --format="value(account)" | head -n1)
echo -e "${GREEN}✅ Authenticated as: $ACCOUNT${NC}"
echo ""

# Set project
echo "Setting project to: $PROJECT_ID"
gcloud config set project $PROJECT_ID 2>/dev/null || {
    echo -e "${RED}❌ Project '$PROJECT_ID' not found${NC}"
    echo ""
    echo "Create it with:"
    echo "  gcloud projects create $PROJECT_ID --name='MyConsulting Network'"
    exit 1
}

echo -e "${GREEN}✅ Project set${NC}"
echo ""

# Enable APIs
echo "📦 Enabling required APIs..."
gcloud services enable run.googleapis.com containerregistry.googleapis.com cloudbuild.googleapis.com --quiet

echo -e "${GREEN}✅ APIs enabled${NC}"
echo ""

# Deploy
echo "🚀 Deploying to Cloud Run..."
echo "This will take 5-10 minutes..."
echo ""

gcloud run deploy $SERVICE_NAME \
    --source . \
    --region=$REGION \
    --platform=managed \
    --allow-unauthenticated \
    --memory=512Mi \
    --cpu=1 \
    --min-instances=0 \
    --max-instances=10 \
    --port=8080 \
    --quiet

echo ""
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""

# Get service URL
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME \
    --region=$REGION \
    --format='value(status.url)')

echo "=================================================="
echo -e "${GREEN}🎉 SUCCESS! Your website is deployed!${NC}"
echo "=================================================="
echo ""
echo -e "${BLUE}Service URL:${NC}"
echo "  $SERVICE_URL"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo ""
echo "1. Test your site: $SERVICE_URL"
echo ""
echo "2. Map your custom domain:"
echo "   gcloud run domain-mappings create \\"
echo "     --service=$SERVICE_NAME \\"
echo "     --domain=myconsulting.network \\"
echo "     --region=$REGION"
echo ""
echo "3. Get DNS records:"
echo "   gcloud run domain-mappings describe \\"
echo "     --domain=myconsulting.network \\"
echo "     --region=$REGION"
echo ""
echo "4. Add DNS records to Google Workspace (admin.google.com)"
echo ""
echo -e "${GREEN}All done! 🎉${NC}"

