# MyConsulting Network - Google Cloud Deployment Script (PowerShell)
# This script automates the deployment process for Windows users

# Configuration
$PROJECT_ID = "myconsulting-network"
$SERVICE_NAME = "myconsulting-network"
$REGION = "us-central1"

# Colors for output
function Write-Success {
    param($Message)
    Write-Host "[SUCCESS] $Message" -ForegroundColor Green
}

function Write-Error {
    param($Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

function Write-Info {
    param($Message)
    Write-Host "[INFO] $Message" -ForegroundColor Cyan
}

function Write-Warning {
    param($Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "MyConsulting Network - Google Cloud Deployment" -ForegroundColor Blue
Write-Host "==================================================" -ForegroundColor Blue
Write-Host ""

# Check if gcloud is installed
Write-Host "Checking for Google Cloud CLI..."
try {
    $gcloudVersion = gcloud --version 2>&1 | Select-Object -First 1
    Write-Success "Google Cloud CLI is installed"
    Write-Info "$gcloudVersion"
} catch {
    Write-Error "Google Cloud CLI (gcloud) is not installed!"
    Write-Host ""
    Write-Info "Install it from: https://cloud.google.com/sdk/docs/install"
    Write-Host ""
    Write-Info "Or use Chocolatey:"
    Write-Host "  choco install gcloudsdk"
    Write-Host ""
    exit 1
}

Write-Host ""

# Check if user is authenticated
Write-Host "Checking authentication..."
$activeAccount = gcloud auth list --filter=status:ACTIVE --format="value(account)" 2>$null | Select-Object -First 1

if (-not $activeAccount) {
    Write-Warning "Not authenticated with Google Cloud"
    Write-Info "Running: gcloud auth login"
    gcloud auth login
    $activeAccount = gcloud auth list --filter=status:ACTIVE --format="value(account)" 2>$null | Select-Object -First 1
}

Write-Success "Authenticated as: $activeAccount"
Write-Host ""

# Set project
Write-Host "Setting project to: $PROJECT_ID"
$projectExists = gcloud projects describe $PROJECT_ID 2>$null

if (-not $projectExists) {
    Write-Warning "Project '$PROJECT_ID' does not exist"
    $createProject = Read-Host "Do you want to create it? (y/n)"
    
    if ($createProject -eq "y" -or $createProject -eq "Y") {
        Write-Info "Creating project..."
        gcloud projects create $PROJECT_ID --name="MyConsulting Network"
        Write-Success "Project created"
    } else {
        Write-Error "Cannot proceed without a project"
        exit 1
    }
}

gcloud config set project $PROJECT_ID
Write-Success "Project set to: $PROJECT_ID"
Write-Host ""

# Check billing
Write-Host "Checking billing status..."
$billingEnabled = gcloud billing projects describe $PROJECT_ID --format="value(billingEnabled)" 2>$null

if ($billingEnabled -ne "True") {
    Write-Warning "Billing is not enabled for this project"
    Write-Info "You need to enable billing to deploy to Cloud Run"
    Write-Host ""
    Write-Info "Steps to enable billing:"
    Write-Host "  1. Visit: https://console.cloud.google.com/billing/linkedaccount?project=$PROJECT_ID"
    Write-Host "  2. Link a billing account"
    Write-Host "  3. Run this script again"
    Write-Host ""
    Write-Host "Press Enter to open the billing page in your browser..."
    Read-Host
    Start-Process "https://console.cloud.google.com/billing/linkedaccount?project=$PROJECT_ID"
    exit 1
}

Write-Success "Billing is enabled"
Write-Host ""

# Enable required APIs
Write-Host "Enabling required APIs..."
Write-Info "This may take a few minutes..."

gcloud services enable run.googleapis.com containerregistry.googleapis.com cloudbuild.googleapis.com --quiet

Write-Success "APIs enabled"
Write-Host ""

# Deploy to Cloud Run
Write-Host "Deploying to Cloud Run..." -ForegroundColor Blue
Write-Info "This will take 5-10 minutes for the first deployment"
Write-Host ""

gcloud run deploy $SERVICE_NAME `
    --source . `
    --region=$REGION `
    --platform=managed `
    --allow-unauthenticated `
    --memory=512Mi `
    --cpu=1 `
    --min-instances=0 `
    --max-instances=10 `
    --port=8080 `
    --quiet

if ($LASTEXITCODE -eq 0) {
    Write-Success "Deployment complete!"
} else {
    Write-Error "Deployment failed!"
    exit 1
}

Write-Host ""

# Get service URL
$serviceUrl = gcloud run services describe $SERVICE_NAME --region=$REGION --format='value(status.url)'

Write-Host "==================================================" -ForegroundColor Green
Write-Success "Deployment Successful!"
Write-Host "==================================================" -ForegroundColor Green
Write-Host ""
Write-Info "Your site is now live at:"
Write-Host ""
Write-Host "  $serviceUrl" -ForegroundColor Yellow
Write-Host ""
Write-Info "Next steps:"
Write-Host ""
Write-Host "1. Test your site by visiting the URL above"
Write-Host "2. Map your custom domain with:"
Write-Host "   gcloud run domain-mappings create --service=$SERVICE_NAME --domain=myconsulting.network --region=$REGION"
Write-Host ""
Write-Host "3. View logs with:"
Write-Host "   gcloud run services logs read $SERVICE_NAME --region=$REGION --tail"
Write-Host ""
Write-Info "For detailed instructions, see COMPLETE_DEPLOYMENT_GUIDE.md"
Write-Host ""

# Ask if user wants to open the URL
$openSite = Read-Host "Open the deployed site in your browser? (y/n)"
if ($openSite -eq "y" -or $openSite -eq "Y") {
    Start-Process $serviceUrl
}

Write-Host ""
Write-Success "All done!"
Write-Host ""
