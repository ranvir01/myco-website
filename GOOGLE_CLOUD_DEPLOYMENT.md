# 🚀 Google Cloud Platform Deployment Guide

This guide will help you deploy the MyConsulting Network website to Google Cloud Platform.

## ✅ Prerequisites Checklist

- [ ] Google Workspace account with `myconsulting.network`
- [ ] Google Cloud Platform account (same Google account)
- [ ] Billing enabled on GCP (required, but has free tier)
- [ ] Google Cloud CLI installed

---

## 📦 STEP 1: Install Google Cloud CLI

### For macOS:

```bash
# Using Homebrew (recommended)
brew install --cask google-cloud-sdk

# Or download the installer
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
```

### Verify Installation:

```bash
gcloud --version
```

---

## 🔐 STEP 2: Authenticate & Set Up Project

```bash
# Login to your Google account
gcloud auth login

# Set your project ID
gcloud config set project myconsulting-network

# If project doesn't exist, create it:
gcloud projects create myconsulting-network --name="MyConsulting Network"

# Set the project
gcloud config set project myconsulting-network

# Link billing account (required)
# First, list your billing accounts:
gcloud billing accounts list

# Then link it (replace BILLING_ACCOUNT_ID):
gcloud billing projects link myconsulting-network --billing-account=BILLING_ACCOUNT_ID
```

---

## 🔌 STEP 3: Enable Required APIs

```bash
# Enable Cloud Run API
gcloud services enable run.googleapis.com

# Enable Container Registry API
gcloud services enable containerregistry.googleapis.com

# Enable Cloud Build API (for automated deployments)
gcloud services enable cloudbuild.googleapis.com

# Verify enabled services
gcloud services list --enabled
```

---

## 🏗️ STEP 4: Build & Deploy to Cloud Run

### Option A: Deploy Directly (Simple)

```bash
# Deploy from source (Cloud Build will handle everything)
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

# This will build and deploy in one command!
```

### Option B: Build & Deploy Separately (More Control)

```bash
# Build the Docker image
docker build -t gcr.io/myconsulting-network/myconsulting-network:latest .

# Configure Docker to use gcloud for authentication
gcloud auth configure-docker

# Push to Container Registry
docker push gcr.io/myconsulting-network/myconsulting-network:latest

# Deploy to Cloud Run
gcloud run deploy myconsulting-network \
  --image=gcr.io/myconsulting-network/myconsulting-network:latest \
  --region=us-central1 \
  --platform=managed \
  --allow-unauthenticated \
  --memory=512Mi \
  --cpu=1 \
  --min-instances=0 \
  --max-instances=10 \
  --port=8080
```

---

## 🌐 STEP 5: Get Your Service URL

```bash
# Get the Cloud Run service URL
gcloud run services describe myconsulting-network \
  --region=us-central1 \
  --format='value(status.url)'

# Test your deployment
# The URL will look like: https://myconsulting-network-xxxxx-uc.a.run.app
```

**Test the URL in your browser!** ✅

---

## 🔗 STEP 6: Map Custom Domain

### Add Your Domain to Cloud Run:

```bash
# Map your domain
gcloud run domain-mappings create \
  --service=myconsulting-network \
  --domain=myconsulting.network \
  --region=us-central1

# Also map www subdomain
gcloud run domain-mappings create \
  --service=myconsulting-network \
  --domain=www.myconsulting.network \
  --region=us-central1
```

### Get DNS Records:

```bash
# Get the DNS records you need to add
gcloud run domain-mappings describe \
  --domain=myconsulting.network \
  --region=us-central1
```

---

## 🔧 STEP 7: Update DNS in Google Workspace

1. Go to [admin.google.com](https://admin.google.com) → **Domains** → **Manage Domains**
2. Click on `myconsulting.network`
3. Go to **DNS** settings
4. Add the following records (from the output above):

```
Type: A
Name: @
Value: [IP address from gcloud command]
TTL: 3600

Type: AAAA
Name: @
Value: [IPv6 address from gcloud command]
TTL: 3600

Type: CNAME
Name: www
Value: ghs.googlehosted.com
TTL: 3600
```

5. **IMPORTANT**: Keep your existing MX records for email!
6. Save changes
7. Wait for DNS propagation (1-24 hours, usually 1-2 hours)

---

## 🔄 STEP 8: Set Up Continuous Deployment (Optional)

### Connect GitHub Repository:

```bash
# Install GitHub app integration
# Visit: https://console.cloud.google.com/cloud-build/triggers/connect

# Or use gcloud to create a trigger:
gcloud builds triggers create github \
  --repo-name=myco-website \
  --repo-owner=ranvir01 \
  --branch-pattern="^main$" \
  --build-config=cloudbuild.yaml \
  --region=us-central1
```

**After this setup, every push to `main` will automatically deploy!** 🎉

---

## 📊 STEP 9: Verify & Monitor

### Check Service Status:

```bash
# View service details
gcloud run services describe myconsulting-network --region=us-central1

# View recent logs
gcloud run services logs read myconsulting-network --region=us-central1 --limit=50

# Check domain mapping status
gcloud run domain-mappings describe myconsulting.network --region=us-central1
```

### Test Your Site:

1. **Cloud Run URL**: `https://myconsulting-network-xxxxx.run.app`
2. **Custom Domain** (after DNS propagation): `https://myconsulting.network`
3. **WWW subdomain**: `https://www.myconsulting.network`

---

## 🔄 Update Your Website (After Initial Deployment)

### Manual Updates:

```bash
# After making changes locally
git add .
git commit -m "Update website"
git push origin main

# Deploy changes
gcloud run deploy myconsulting-network --source . --region=us-central1
```

### Automatic Updates (if CD is set up):

```bash
# Just push to GitHub
git add .
git commit -m "Update website"
git push origin main

# Cloud Build will automatically deploy! ✅
```

---

## 💰 Cost Breakdown (Estimated)

**Free Tier Includes:**
- ✅ 2 million requests/month
- ✅ 360,000 GB-seconds of memory
- ✅ 180,000 vCPU-seconds
- ✅ 1 GB Cloud Storage

**Expected Costs for Small Business Site:**
- **Typical**: $0-5/month (likely $0 with free tier)
- **No traffic**: $0
- **High traffic**: Scales automatically, ~$0.10 per 1000 requests

**Monitoring Costs:**

```bash
# Check current month's estimated costs
gcloud billing projects describe myconsulting-network
```

---

## 🐛 Troubleshooting

### Build Fails:

```bash
# Check build logs
gcloud builds list --limit=5
gcloud builds log [BUILD_ID]
```

### Service Not Starting:

```bash
# Check service logs
gcloud run services logs read myconsulting-network --region=us-central1 --limit=100

# Check service status
gcloud run services describe myconsulting-network --region=us-central1
```

### Domain Not Working:

```bash
# Verify domain mapping
gcloud run domain-mappings describe myconsulting.network --region=us-central1

# Check DNS propagation
dig myconsulting.network
dig www.myconsulting.network
```

### SSL Certificate Issues:

```bash
# Google automatically provisions SSL certificates
# It can take 15 minutes to 24 hours
# Check status:
gcloud run domain-mappings describe myconsulting.network --region=us-central1 --format='value(status.conditions)'
```

---

## 🎯 Quick Commands Reference

```bash
# Deploy/Update
gcloud run deploy myconsulting-network --source . --region=us-central1

# View logs
gcloud run services logs read myconsulting-network --region=us-central1 --tail

# Get service URL
gcloud run services describe myconsulting-network --region=us-central1 --format='value(status.url)'

# View all Cloud Run services
gcloud run services list

# Delete service (if needed)
gcloud run services delete myconsulting-network --region=us-central1

# Check quota usage
gcloud compute project-info describe --project=myconsulting-network
```

---

## ✅ Post-Deployment Checklist

- [ ] Cloud Run service is running
- [ ] Service URL is accessible
- [ ] Custom domain is mapped
- [ ] DNS records are updated in Google Workspace
- [ ] SSL certificate is active (check for HTTPS)
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Mobile responsiveness verified
- [ ] Performance tested (Google PageSpeed Insights)
- [ ] Continuous deployment set up (optional)
- [ ] Monitoring/alerts configured (optional)

---

## 📞 Support Resources

- **Google Cloud Console**: [console.cloud.google.com](https://console.cloud.google.com)
- **Cloud Run Documentation**: [cloud.google.com/run/docs](https://cloud.google.com/run/docs)
- **Pricing Calculator**: [cloud.google.com/products/calculator](https://cloud.google.com/products/calculator)
- **Support**: [cloud.google.com/support](https://cloud.google.com/support)

---

## 🎉 Success!

Once DNS propagates, your site will be live at:
- **https://myconsulting.network**
- **https://www.myconsulting.network**

With automatic SSL, global CDN, and automatic scaling! 🚀

