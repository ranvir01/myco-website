# MyConsulting Network - Setup Verification Script (PowerShell)
# This script checks if everything is ready for deployment

$checksPassedGlobal = 0
$checksFailedGlobal = 0

function Write-Check {
    param($Message, $Success)
    if ($Success) {
        Write-Host "[PASS] $Message" -ForegroundColor Green
        $script:checksPassedGlobal++
    } else {
        Write-Host "[FAIL] $Message" -ForegroundColor Red
        $script:checksFailedGlobal++
    }
}

function Write-Info {
    param($Message)
    Write-Host "[INFO] $Message" -ForegroundColor Cyan
}

function Write-Warning {
    param($Message)
    Write-Host "[WARN] $Message" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "MyConsulting Network - Setup Verification" -ForegroundColor Blue
Write-Host "==============================================" -ForegroundColor Blue
Write-Host ""

Write-Host "Checking local development setup..."
Write-Host ""

# Check Node.js
try {
    $nodeVersion = node --version 2>$null
    Write-Check "Node.js installed ($nodeVersion)" $true
} catch {
    Write-Check "Node.js installed" $false
    Write-Info "Install from: https://nodejs.org"
}

# Check npm
try {
    $npmVersion = npm --version 2>$null
    Write-Check "npm installed ($npmVersion)" $true
} catch {
    Write-Check "npm installed" $false
}

# Check if node_modules exists
if (Test-Path "node_modules") {
    Write-Check "Dependencies installed (node_modules exists)" $true
} else {
    Write-Check "Dependencies installed" $false
    Write-Info "Run: npm install"
}

# Check if package.json exists
if (Test-Path "package.json") {
    Write-Check "package.json exists" $true
} else {
    Write-Check "package.json exists" $false
}

# Check if next.config.js exists
if (Test-Path "next.config.js") {
    Write-Check "next.config.js exists" $true
} else {
    Write-Check "next.config.js exists" $false
}

# Check if Dockerfile exists
if (Test-Path "Dockerfile") {
    Write-Check "Dockerfile exists" $true
} else {
    Write-Check "Dockerfile exists" $false
}

# Check if cloudbuild.yaml exists
if (Test-Path "cloudbuild.yaml") {
    Write-Check "cloudbuild.yaml exists" $true
} else {
    Write-Check "cloudbuild.yaml exists" $false
}

Write-Host ""
Write-Host "Checking Google Cloud CLI setup..."
Write-Host ""

# Check gcloud CLI
try {
    $gcloudVersion = gcloud --version 2>$null | Select-Object -First 1
    Write-Check "Google Cloud CLI installed" $true
    Write-Info "$gcloudVersion"
} catch {
    Write-Check "Google Cloud CLI installed" $false
    Write-Info "Install from: https://cloud.google.com/sdk/docs/install"
}

# Check gcloud authentication
try {
    $activeAccount = gcloud auth list --filter=status:ACTIVE --format="value(account)" 2>$null | Select-Object -First 1
    if ($activeAccount) {
        Write-Check "Authenticated with Google Cloud" $true
        Write-Info "Account: $activeAccount"
    } else {
        Write-Check "Authenticated with Google Cloud" $false
        Write-Info "Run: gcloud auth login"
    }
} catch {
    Write-Check "Authenticated with Google Cloud" $false
    Write-Info "Run: gcloud auth login"
}

# Check if project is set
try {
    $currentProject = gcloud config get-value project 2>$null
    if ($currentProject -and $currentProject -ne "(unset)") {
        Write-Check "GCP project configured" $true
        Write-Info "Project: $currentProject"
    } else {
        Write-Check "GCP project configured" $false
        Write-Info "Run: gcloud config set project YOUR-PROJECT-ID"
    }
} catch {
    Write-Check "GCP project configured" $false
    Write-Info "Run: gcloud config set project YOUR-PROJECT-ID"
}

# Check Docker (optional)
Write-Host ""
Write-Host "Checking Docker setup (optional)..."
Write-Host ""

try {
    $dockerVersion = docker --version 2>$null
    Write-Check "Docker installed" $true
    Write-Info "$dockerVersion"
} catch {
    Write-Warning "Docker not installed (optional, not required for deployment)"
    Write-Info "Install from: https://www.docker.com/products/docker-desktop"
}

# Check Git
Write-Host ""
Write-Host "Checking Git setup..."
Write-Host ""

try {
    $gitVersion = git --version 2>$null
    Write-Check "Git installed" $true
    Write-Info "$gitVersion"
} catch {
    Write-Check "Git installed" $false
}

try {
    git rev-parse --git-dir 2>$null | Out-Null
    Write-Check "Git repository initialized" $true
} catch {
    Write-Check "Git repository initialized" $false
    Write-Info "Run: git init"
}

# Check if there's a remote
try {
    $remoteUrl = git remote get-url origin 2>$null
    if ($remoteUrl) {
        Write-Check "Git remote configured" $true
        Write-Info "Remote: $remoteUrl"
    } else {
        Write-Warning "Git remote not configured (optional)"
    }
} catch {
    Write-Warning "Git remote not configured (optional)"
}

# Summary
Write-Host ""
Write-Host "==============================================" -ForegroundColor Blue
Write-Host "Summary:" -ForegroundColor Blue
Write-Host "==============================================" -ForegroundColor Blue
Write-Host ""
Write-Host "Checks passed: $checksPassedGlobal" -ForegroundColor Green
if ($checksFailedGlobal -gt 0) {
    Write-Host "Checks failed: $checksFailedGlobal" -ForegroundColor Red
}
Write-Host ""

if ($checksFailedGlobal -eq 0) {
    Write-Host "All checks passed! You're ready to deploy!" -ForegroundColor Green
    Write-Host ""
    Write-Info "Next steps:"
    Write-Host "  1. Run: npm run build (test local build)"
    Write-Host "  2. Run: .\deploy-to-gcloud.ps1 (deploy to Google Cloud)"
    Write-Host ""
    Write-Info "For detailed instructions, see: COMPLETE_DEPLOYMENT_GUIDE.md"
} else {
    Write-Host "Some checks failed. Please fix the issues above." -ForegroundColor Yellow
    Write-Host ""
    Write-Info "Common fixes:"
    Write-Host "  - Install Node.js: https://nodejs.org"
    Write-Host "  - Install gcloud CLI: https://cloud.google.com/sdk/docs/install"
    Write-Host "  - Install dependencies: npm install"
    Write-Host "  - Authenticate: gcloud auth login"
    Write-Host ""
}

Write-Host ""
