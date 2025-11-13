# Quick Manual Deployment Script
# Run this if you have owner/editor permissions

Write-Host "`n=== MyCo Network Quick Deploy ===" -ForegroundColor Green
Write-Host ""

# Check current account
$account = gcloud config get-value account 2>$null
Write-Host "Current account: $account" -ForegroundColor Cyan
Write-Host ""

Write-Host "Deploying to Cloud Run..." -ForegroundColor Yellow
Write-Host "This will take 5-10 minutes..." -ForegroundColor Gray
Write-Host ""

try {
    gcloud run deploy myconsulting-network `
        --source . `
        --region=us-central1 `
        --platform=managed `
        --allow-unauthenticated `
        --memory=512Mi `
        --cpu=1 `
        --min-instances=0 `
        --max-instances=10 `
        --port=8080
    
    Write-Host "`n=== DEPLOYMENT SUCCESSFUL ===" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your site is being updated at: https://myconsulting.network" -ForegroundColor Cyan
    Write-Host "Changes should be live in 1-2 minutes!" -ForegroundColor Green
    Write-Host ""
    
    # Open the site
    $open = Read-Host "Open the site in browser? (y/n)"
    if ($open -eq "y") {
        Start-Process "https://myconsulting.network"
    }
}
catch {
    Write-Host "`n=== DEPLOYMENT FAILED ===" -ForegroundColor Red
    Write-Host ""
    Write-Host "Error: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "You may need to grant permissions first:" -ForegroundColor Yellow
    Write-Host "1. Go to: https://console.cloud.google.com/iam-admin/iam?project=myconsulting-network" -ForegroundColor White
    Write-Host "2. Click 'GRANT ACCESS'" -ForegroundColor White
    Write-Host "3. Add: $account" -ForegroundColor White
    Write-Host "4. Select roles:" -ForegroundColor White
    Write-Host "   - Cloud Run Admin" -ForegroundColor White
    Write-Host "   - Cloud Build Service Account" -ForegroundColor White
    Write-Host "   - Storage Admin" -ForegroundColor White
    Write-Host "5. Click 'SAVE' and try again" -ForegroundColor White
    Write-Host ""
}

