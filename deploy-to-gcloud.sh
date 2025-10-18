#!/bin/bash

# MyConsulting Network - Google Cloud Deployment Script
# This script automates the deployment process

set -e

echo "🚀 MyConsulting Network - Google Cloud Deployment"
echo "=================================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ID="myconsulting-network"
SERVICE_NAME="myconsulting-network"
REGION="us-central1"

# Function to print colored output
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Check if gcloud is installed
echo "Checking for Google Cloud CLI..."
if ! command -v gcloud &> /dev/null; then
    print_error "Google Cloud CLI (gcloud) is not installed!"
    echo ""
    print_info "Install it with:"
    echo "  brew install --cask google-cloud-sdk"
    echo ""
    echo "Or visit: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

print_success "Google Cloud CLI is installed"
echo ""

# Check if user is authenticated
echo "Checking authentication..."
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" &> /dev/null; then
    print_warning "Not authenticated with Google Cloud"
    print_info "Running: gcloud auth login"
    gcloud auth login
fi

ACCOUNT=$(gcloud auth list --filter=status:ACTIVE --format="value(account)" | head -n1)
print_success "Authenticated as: $ACCOUNT"
echo ""

# Set project
echo "Setting project to: $PROJECT_ID"
if ! gcloud projects describe $PROJECT_ID &> /dev/null; then
    print_warning "Project '$PROJECT_ID' does not exist"
    read -p "Do you want to create it? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        gcloud projects create $PROJECT_ID --name="MyConsulting Network"
        print_success "Project created"
    else
        print_error "Cannot proceed without a project"
        exit 1
    fi
fi

gcloud config set project $PROJECT_ID
print_success "Project set to: $PROJECT_ID"
echo ""

# Check billing
echo "Checking billing status..."
BILLING_ENABLED=$(gcloud billing projects describe $PROJECT_ID --format="value(billingEnabled)" 2>/dev/null || echo "false")

if [ "$BILLING_ENABLED" != "True" ]; then
    print_warning "Billing is not enabled for this project"
    print_info "You need to enable billing to deploy to Cloud Run"
    echo ""
    print_info "Steps to enable billing:"
    echo "  1. Visit: https://console.cloud.google.com/billing/linkedaccount?project=$PROJECT_ID"
    echo "  2. Link a billing account"
    echo "  3. Run this script again"
    echo ""
    read -p "Press Enter to open the billing page in your browser..."
    open "https://console.cloud.google.com/billing/linkedaccount?project=$PROJECT_ID"
    exit 1
fi

print_success "Billing is enabled"
echo ""

# Enable required APIs
echo "Enabling required APIs..."
print_info "This may take a few minutes..."

gcloud services enable run.googleapis.com \
    containerregistry.googleapis.com \
    cloudbuild.googleapis.com \
    --quiet

print_success "APIs enabled"
echo ""

# Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
print_info "This will take 5-10 minutes for the first deployment"
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

print_success "Deployment complete!"
echo ""

# Get service URL
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME \
    --region=$REGION \
    --format='value(status.url)')

echo "=================================================="
print_success "Deployment Successful!"
echo "=================================================="
echo ""
print_info "Your site is now live at:"
echo ""
echo "  $SERVICE_URL"
echo ""
print_info "Next steps:"
echo ""
echo "1. Test your site by visiting the URL above"
echo "2. Map your custom domain with:"
echo "   gcloud run domain-mappings create --service=$SERVICE_NAME --domain=myconsulting.network --region=$REGION"
echo ""
echo "3. View logs with:"
echo "   gcloud run services logs read $SERVICE_NAME --region=$REGION --tail"
echo ""
print_info "For detailed instructions, see GOOGLE_CLOUD_DEPLOYMENT.md"
echo ""

# Ask if user wants to open the URL
read -p "Open the deployed site in your browser? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    open "$SERVICE_URL"
fi

echo ""
print_success "All done! 🎉"

