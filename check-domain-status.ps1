# Check Domain Connection Status

Write-Host ""
Write-Host "Checking myconsulting.network domain status..." -ForegroundColor Cyan
Write-Host ""

# Check A record
Write-Host "Checking A record (IPv4):" -ForegroundColor Yellow
$aRecord = nslookup myconsulting.network 2>$null | Select-String "Address:" | Select-Object -Last 1
if ($aRecord) {
    Write-Host "✓ A record found: $aRecord" -ForegroundColor Green
} else {
    Write-Host "✗ A record not found or not propagated yet" -ForegroundColor Red
}
Write-Host ""

# Check www CNAME
Write-Host "Checking www subdomain:" -ForegroundColor Yellow
$wwwRecord = nslookup www.myconsulting.network 2>$null
if ($wwwRecord) {
    Write-Host "✓ www subdomain configured" -ForegroundColor Green
} else {
    Write-Host "⚠ www subdomain not configured" -ForegroundColor Yellow
}
Write-Host ""

# Check MX records
Write-Host "Checking MX records (email):" -ForegroundColor Yellow
$mxRecords = nslookup -type=MX myconsulting.network 2>$null | Select-String "mail exchanger"
if ($mxRecords) {
    Write-Host "✓ MX records found - Email should work" -ForegroundColor Green
    $mxRecords | ForEach-Object { Write-Host "  $_" -ForegroundColor White }
} else {
    Write-Host "✗ MX records not found - EMAIL WILL NOT WORK!" -ForegroundColor Red
    Write-Host "  Add MX records in Squarespace DNS immediately!" -ForegroundColor Yellow
}
Write-Host ""

# Check if domain is accessible
Write-Host "Checking if website is accessible:" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "https://myconsulting.network" -UseBasicParsing -TimeoutSec 10 -ErrorAction Stop
    if ($response.StatusCode -eq 200) {
        Write-Host "✓ Website is accessible at https://myconsulting.network" -ForegroundColor Green
    }
} catch {
    Write-Host "⚠ Website not accessible yet - DNS may not be propagated" -ForegroundColor Yellow
    Write-Host "  Current status: $($_.Exception.Message)" -ForegroundColor White
}
Write-Host ""

# Check Cloud Run service
Write-Host "Checking Cloud Run service:" -ForegroundColor Yellow
$serviceUrl = gcloud run services describe myconsulting-network --region=us-central1 --format='value(status.url)' 2>$null
if ($serviceUrl) {
    Write-Host "✓ Cloud Run service is running" -ForegroundColor Green
    Write-Host "  Service URL: $serviceUrl" -ForegroundColor White
} else {
    Write-Host "✗ Could not get Cloud Run service status" -ForegroundColor Red
}
Write-Host ""

# Summary
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "SUMMARY" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Current Cloud Run URL:" -ForegroundColor White
Write-Host "  https://myconsulting-network-osfc7yil5q-uc.a.run.app" -ForegroundColor Yellow
Write-Host ""
Write-Host "Target Custom Domain:" -ForegroundColor White
Write-Host "  https://myconsulting.network" -ForegroundColor Yellow
Write-Host ""
Write-Host "Check DNS propagation at:" -ForegroundColor White
Write-Host "  https://whatsmydns.net/?d=myconsulting.network&t=A" -ForegroundColor Yellow
Write-Host ""
Write-Host "Google Cloud domain mappings:" -ForegroundColor White
Write-Host "  https://console.cloud.google.com/run/domains?project=myconsulting-network" -ForegroundColor Yellow
Write-Host ""

# Final status
Write-Host "DNS Propagation Status:" -ForegroundColor Cyan
if ($aRecord -and $mxRecords) {
    Write-Host "✓ DNS appears to be configured correctly!" -ForegroundColor Green
    Write-Host "  If website isn't loading yet, wait 1-24 hours for propagation" -ForegroundColor White
} elseif ($aRecord -and -not $mxRecords) {
    Write-Host "⚠ Domain configured but MX records missing!" -ForegroundColor Yellow
    Write-Host "  Website will work but EMAIL WILL NOT!" -ForegroundColor Red
    Write-Host "  Add MX records in Squarespace immediately!" -ForegroundColor Yellow
} else {
    Write-Host "⚠ DNS not fully configured or not propagated yet" -ForegroundColor Yellow
    Write-Host "  Complete DNS setup in Squarespace, then wait for propagation" -ForegroundColor White
}
Write-Host ""

