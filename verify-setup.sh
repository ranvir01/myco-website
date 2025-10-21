#!/bin/bash

# MyConsulting Network - Setup Verification Script
# This script checks if everything is ready for deployment

set -e

echo "🔍 MyConsulting Network - Setup Verification"
echo "=============================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

CHECKS_PASSED=0
CHECKS_FAILED=0

print_check() {
    if [ $2 -eq 0 ]; then
        echo -e "${GREEN}✅ $1${NC}"
        ((CHECKS_PASSED++))
    else
        echo -e "${RED}❌ $1${NC}"
        ((CHECKS_FAILED++))
    fi
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

echo "Checking local development setup..."
echo ""

# Check Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    print_check "Node.js installed ($NODE_VERSION)" 0
else
    print_check "Node.js installed" 1
    print_info "Install from: https://nodejs.org"
fi

# Check npm
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    print_check "npm installed ($NPM_VERSION)" 0
else
    print_check "npm installed" 1
fi

# Check if node_modules exists
if [ -d "node_modules" ]; then
    print_check "Dependencies installed (node_modules exists)" 0
else
    print_check "Dependencies installed" 1
    print_info "Run: npm install"
fi

# Check if package.json exists
if [ -f "package.json" ]; then
    print_check "package.json exists" 0
else
    print_check "package.json exists" 1
fi

# Check if next.config.js exists
if [ -f "next.config.js" ]; then
    print_check "next.config.js exists" 0
else
    print_check "next.config.js exists" 1
fi

# Check if Dockerfile exists
if [ -f "Dockerfile" ]; then
    print_check "Dockerfile exists" 0
else
    print_check "Dockerfile exists" 1
fi

# Check if cloudbuild.yaml exists
if [ -f "cloudbuild.yaml" ]; then
    print_check "cloudbuild.yaml exists" 0
else
    print_check "cloudbuild.yaml exists" 1
fi

echo ""
echo "Checking Google Cloud CLI setup..."
echo ""

# Check gcloud CLI
if command -v gcloud &> /dev/null; then
    GCLOUD_VERSION=$(gcloud --version | head -n1)
    print_check "Google Cloud CLI installed" 0
    print_info "$GCLOUD_VERSION"
else
    print_check "Google Cloud CLI installed" 1
    print_info "Install from: https://cloud.google.com/sdk/docs/install"
fi

# Check gcloud authentication
if command -v gcloud &> /dev/null; then
    if gcloud auth list --filter=status:ACTIVE --format="value(account)" &> /dev/null; then
        ACTIVE_ACCOUNT=$(gcloud auth list --filter=status:ACTIVE --format="value(account)" | head -n1)
        if [ -n "$ACTIVE_ACCOUNT" ]; then
            print_check "Authenticated with Google Cloud" 0
            print_info "Account: $ACTIVE_ACCOUNT"
        else
            print_check "Authenticated with Google Cloud" 1
            print_info "Run: gcloud auth login"
        fi
    else
        print_check "Authenticated with Google Cloud" 1
        print_info "Run: gcloud auth login"
    fi
fi

# Check if project is set
if command -v gcloud &> /dev/null; then
    CURRENT_PROJECT=$(gcloud config get-value project 2>/dev/null)
    if [ -n "$CURRENT_PROJECT" ] && [ "$CURRENT_PROJECT" != "(unset)" ]; then
        print_check "GCP project configured" 0
        print_info "Project: $CURRENT_PROJECT"
    else
        print_check "GCP project configured" 1
        print_info "Run: gcloud config set project YOUR-PROJECT-ID"
    fi
fi

# Check Docker (optional)
echo ""
echo "Checking Docker setup (optional)..."
echo ""

if command -v docker &> /dev/null; then
    DOCKER_VERSION=$(docker --version)
    print_check "Docker installed" 0
    print_info "$DOCKER_VERSION"
else
    print_warning "Docker not installed (optional, not required for deployment)"
    print_info "Install from: https://www.docker.com/products/docker-desktop"
fi

# Check Git
echo ""
echo "Checking Git setup..."
echo ""

if command -v git &> /dev/null; then
    GIT_VERSION=$(git --version)
    print_check "Git installed" 0
    print_info "$GIT_VERSION"
else
    print_check "Git installed" 1
fi

if git rev-parse --git-dir > /dev/null 2>&1; then
    print_check "Git repository initialized" 0
else
    print_check "Git repository initialized" 1
    print_info "Run: git init"
fi

# Check if there's a remote
if git remote -v &> /dev/null; then
    REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "")
    if [ -n "$REMOTE_URL" ]; then
        print_check "Git remote configured" 0
        print_info "Remote: $REMOTE_URL"
    else
        print_warning "Git remote not configured (optional)"
    fi
fi

# Summary
echo ""
echo "=============================================="
echo "Summary:"
echo "=============================================="
echo ""
echo -e "${GREEN}✅ Checks passed: $CHECKS_PASSED${NC}"
if [ $CHECKS_FAILED -gt 0 ]; then
    echo -e "${RED}❌ Checks failed: $CHECKS_FAILED${NC}"
fi
echo ""

if [ $CHECKS_FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All checks passed! You're ready to deploy!${NC}"
    echo ""
    print_info "Next steps:"
    echo "  1. Run: npm run build (test local build)"
    echo "  2. Run: bash deploy-to-gcloud.sh (deploy to Google Cloud)"
    echo ""
    print_info "For detailed instructions, see: COMPLETE_DEPLOYMENT_GUIDE.md"
else
    echo -e "${YELLOW}⚠️  Some checks failed. Please fix the issues above.${NC}"
    echo ""
    print_info "Common fixes:"
    echo "  - Install Node.js: https://nodejs.org"
    echo "  - Install gcloud CLI: https://cloud.google.com/sdk/docs/install"
    echo "  - Install dependencies: npm install"
    echo "  - Authenticate: gcloud auth login"
    echo ""
fi

echo ""

