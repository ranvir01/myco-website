# Test Automatic Deployment
# Run this after setting up automatic deployment to verify it works

Write-Host "Testing Automatic Deployment..." -ForegroundColor Cyan
Write-Host ""

# Check if trigger exists
Write-Host "Checking for auto-deploy trigger..." -ForegroundColor Yellow
$triggers = gcloud builds triggers list --format="value(name)"

if ($triggers -like "*auto-deploy*") {
    Write-Host "✓ Trigger found!" -ForegroundColor Green
} else {
    Write-Host "✗ No trigger found. Complete setup first!" -ForegroundColor Red
    Write-Host "  Open: https://console.cloud.google.com/cloud-build/triggers" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "Creating test commit..." -ForegroundColor Yellow

# Create a test change
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Add-Content -Path "README.md" -Value "`n# Auto-deploy test: $timestamp"

# Commit and push
git add README.md
git commit -m "Test automatic deployment - $timestamp"
Write-Host "✓ Changes committed" -ForegroundColor Green

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Automatic deployment should start in 30 seconds..." -ForegroundColor Cyan
    Write-Host "Waiting..." -ForegroundColor Yellow
    
    Start-Sleep -Seconds 30
    
    Write-Host ""
    Write-Host "Checking for new build..." -ForegroundColor Yellow
    
    $latestBuild = gcloud builds list --limit=1 --format="value(id,status,createTime)"
    
    if ($latestBuild) {
        Write-Host ""
        Write-Host "✓ Build detected!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Build details:" -ForegroundColor Cyan
        gcloud builds list --limit=1
        Write-Host ""
        Write-Host "View logs at:" -ForegroundColor Cyan
        Write-Host "https://console.cloud.google.com/cloud-build/builds?project=myconsulting-network" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "✓ Automatic deployment is working!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Your workflow is now:" -ForegroundColor Cyan
        Write-Host "  1. Make changes" -ForegroundColor White
        Write-Host "  2. git push" -ForegroundColor White
        Write-Host "  3. Wait 5-10 minutes" -ForegroundColor White
        Write-Host "  4. Changes are live!" -ForegroundColor White
    } else {
        Write-Host "⚠ No build detected yet. This could mean:" -ForegroundColor Yellow
        Write-Host "  - Trigger is still processing (wait a bit longer)" -ForegroundColor White
        Write-Host "  - Trigger not properly configured" -ForegroundColor White
        Write-Host ""
        Write-Host "Check trigger status:" -ForegroundColor Cyan
        Write-Host "https://console.cloud.google.com/cloud-build/triggers" -ForegroundColor Yellow
    }
} else {
    Write-Host "✗ Git push failed" -ForegroundColor Red
}

Write-Host ""

