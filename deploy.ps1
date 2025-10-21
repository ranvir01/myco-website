# Quick deployment script for MyConsulting Network

Write-Host "Deploying MyConsulting Network to Cloud Run..." -ForegroundColor Cyan
Write-Host ""

# Make sure we're in the right directory
cd D:\myco-website

# Deploy
gcloud run deploy myconsulting-network `
    --source . `
    --region=us-central1 `
    --quiet

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Deployment successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your site is live at:" -ForegroundColor Cyan
    $url = gcloud run services describe myconsulting-network --region=us-central1 --format='value(status.url)'
    Write-Host $url -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host "Deployment failed!" -ForegroundColor Red
}

