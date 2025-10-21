# 🚀 Complete Deployment Guide for MyConsulting Network

## Overview
This guide will help you deploy your website to Google Cloud Run and connect it with:
- ✅ Google Workspace (for email)
- ✅ Google Cloud Platform (for hosting)
- ✅ Squarespace (for domain management)

---

## 🎯 What I've Done For You

### ✅ Code & Configuration Ready
- ✅ Production-ready Next.js application
- ✅ Docker configuration (`Dockerfile`)
- ✅ Google Cloud Build configuration (`cloudbuild.yaml`)
- ✅ Automated deployment script (`deploy-to-gcloud.sh`)
- ✅ Cloud ignore file (`.gcloudignore`)
- ✅ Environment variables template (`.env.example`)
- ✅ SEO optimization with sitemap & robots.txt
- ✅ Formspree contact form integration
- ✅ Mobile-responsive design
- ✅ 3D globe animation with Three.js

### ✅ What Works Out of the Box
- Contact form connected to Formspree (endpoint: `mgvndqbr`)
- Mobile navigation and responsive layout
- All sections properly linked
- Fast performance and optimized images
- SSL/HTTPS (automatic with Cloud Run)

---

## 📋 PART 1: What YOU Need to Do (Prerequisites)

### Step 1: Install Google Cloud CLI

**For Windows (PowerShell):**
```powershell
# Download and run the installer
# Visit: https://cloud.google.com/sdk/docs/install

# Or use Chocolatey if installed:
choco install gcloudsdk

# Verify installation:
gcloud --version
```

**After Installation:**
```powershell
# Restart PowerShell, then verify:
gcloud --version
```

---

### Step 2: Set Up Google Cloud Account

1. **Go to Google Cloud Console:**
   - Visit: https://console.cloud.google.com
   - Sign in with your Google Workspace account (the same account for myconsulting.network)

2. **Enable Billing:**
   - Go to: https://console.cloud.google.com/billing
   - Click "Link a billing account" or "Create billing account"
   - **Important:** You get $300 free credit for 90 days
   - After free credit, typical cost: $0-5/month for this site

3. **Create a Project:**
   ```powershell
   # Authenticate with Google Cloud
   gcloud auth login
   
   # Create your project
   gcloud projects create myconsulting-network --name="MyConsulting Network"
   
   # Set as active project
   gcloud config set project myconsulting-network
   ```

4. **Link Billing to Project:**
   ```powershell
   # List billing accounts
   gcloud billing accounts list
   
   # Link billing (replace YOUR-BILLING-ACCOUNT-ID)
   gcloud billing projects link myconsulting-network --billing-account=YOUR-BILLING-ACCOUNT-ID
   ```

---

### Step 3: Enable Required APIs

```powershell
# Enable Cloud Run (for hosting)
gcloud services enable run.googleapis.com

# Enable Container Registry (for Docker images)
gcloud services enable containerregistry.googleapis.com

# Enable Cloud Build (for building the app)
gcloud services enable cloudbuild.googleapis.com

# Enable Compute Engine API (required for some Cloud Run features)
gcloud services enable compute.googleapis.com

# Verify APIs are enabled
gcloud services list --enabled
```

---

## 🚀 PART 2: Deploy Your Website

### Option A: Automated Deployment (Recommended)

1. **Navigate to your project folder:**
   ```powershell
   cd D:\myco-website
   ```

2. **Run the deployment script:**
   ```powershell
   # For Windows PowerShell, use bash:
   bash deploy-to-gcloud.sh
   
   # Or deploy manually (see Option B below)
   ```

### Option B: Manual Deployment

```powershell
# Make sure you're in the project directory
cd D:\myco-website

# Deploy to Cloud Run (this builds and deploys in one command)
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

# Note: First deployment takes 5-10 minutes
```

3. **Get Your Service URL:**
   ```powershell
   gcloud run services describe myconsulting-network `
     --region=us-central1 `
     --format='value(status.url)'
   ```

   This will give you a URL like: `https://myconsulting-network-xxxxx-uc.a.run.app`

4. **Test the URL in your browser!** ✅

---

## 🌐 PART 3: Connect Your Domain

### Step 3.1: Map Domain in Google Cloud

```powershell
# Map your main domain
gcloud run domain-mappings create `
  --service=myconsulting-network `
  --domain=myconsulting.network `
  --region=us-central1

# Map the www subdomain
gcloud run domain-mappings create `
  --service=myconsulting-network `
  --domain=www.myconsulting.network `
  --region=us-central1
```

### Step 3.2: Get DNS Records

```powershell
# Get the DNS records you need to add
gcloud run domain-mappings describe myconsulting.network `
  --region=us-central1
```

**You'll see output with DNS records like:**
```
resourceRecords:
- name: myconsulting.network
  type: A
  rrdata: 216.239.32.21
- name: myconsulting.network
  type: AAAA
  rrdata: 2001:4860:4802:32::15
```

**Save these DNS records - you'll need them for Squarespace!**

---

## 🔧 PART 4: Configure DNS in Squarespace

### Step 4.1: Access Squarespace DNS Settings

1. **Log in to Squarespace:**
   - Go to: https://account.squarespace.com
   - Navigate to your domain settings

2. **Go to DNS Settings:**
   - Click on your domain (`myconsulting.network`)
   - Click "DNS Settings" or "Advanced Settings"

### Step 4.2: Add Google Cloud DNS Records

**IMPORTANT: Keep your existing MX records for email!**

Add these records (use the values from `gcloud run domain-mappings describe`):

**A Record (for root domain):**
```
Type: A
Host: @
Value: 216.239.32.21 (use the IP from your gcloud output)
TTL: 3600
```

**AAAA Record (for IPv6):**
```
Type: AAAA
Host: @
Value: 2001:4860:4802:32::15 (use the IPv6 from your gcloud output)
TTL: 3600
```

**CNAME Record (for www):**
```
Type: CNAME
Host: www
Value: ghs.googlehosted.com
TTL: 3600
```

### Step 4.3: Verify Your MX Records Are Still There

**Make sure these MX records exist for Google Workspace email:**
```
Type: MX
Priority: 1
Host: @
Value: aspmx.l.google.com

Type: MX
Priority: 5
Host: @
Value: alt1.aspmx.l.google.com

Type: MX
Priority: 5
Host: @
Value: alt2.aspmx.l.google.com

Type: MX
Priority: 10
Host: @
Value: alt3.aspmx.l.google.com

Type: MX
Priority: 10
Host: @
Value: alt4.aspmx.l.google.com
```

If they're not there, add them to keep your email working!

---

## ⏰ PART 5: Wait for DNS Propagation

DNS changes can take time to propagate worldwide:
- **Minimum:** 15 minutes
- **Typical:** 1-2 hours
- **Maximum:** 24-48 hours

### Check DNS Propagation:

1. **Check with online tools:**
   - Visit: https://whatsmydns.net
   - Enter: `myconsulting.network`
   - Check if the A record points to Google Cloud IP

2. **Check with PowerShell:**
   ```powershell
   # Check A record
   nslookup myconsulting.network
   
   # Check CNAME record
   nslookup www.myconsulting.network
   ```

3. **Check SSL Certificate Status:**
   ```powershell
   gcloud run domain-mappings describe myconsulting.network `
     --region=us-central1 `
     --format='value(status.conditions)'
   ```

---

## 📧 PART 6: Verify Google Workspace Email Still Works

After DNS changes:

1. **Test sending email:**
   - Send a test email from your `@myconsulting.network` address
   - Send to yourself and an external email

2. **Test receiving email:**
   - Send an email to your `@myconsulting.network` address
   - Verify it arrives

3. **If email stops working:**
   - Check that MX records are still in Squarespace DNS
   - Wait for DNS propagation
   - Contact Squarespace or Google Workspace support

---

## ✅ PART 7: Final Verification Checklist

After DNS propagates, verify everything works:

### Website Tests:
- [ ] Visit `https://myconsulting.network` (loads correctly)
- [ ] Visit `https://www.myconsulting.network` (loads correctly)
- [ ] SSL/HTTPS is working (green padlock in browser)
- [ ] All navigation links work
- [ ] Mobile menu works on phone
- [ ] Contact form submits successfully
- [ ] Globe animation loads
- [ ] All images load correctly

### Email Tests:
- [ ] Can send email from `@myconsulting.network`
- [ ] Can receive email at `@myconsulting.network`
- [ ] Email signature links to new website

### Form Tests:
- [ ] Submit contact form
- [ ] Check Formspree dashboard: https://formspree.io/forms/mgvndqbr
- [ ] Verify email notification arrives

---

## 🔄 PART 8: Updating Your Website (After Deployment)

Whenever you want to update your website:

```powershell
# Option 1: Quick update
cd D:\myco-website
gcloud run deploy myconsulting-network --source . --region=us-central1

# Option 2: With version control
git add .
git commit -m "Update website content"
git push origin main

# Then deploy
gcloud run deploy myconsulting-network --source . --region=us-central1
```

**Tip:** Set up automatic deployment with Cloud Build triggers (see next section)

---

## 🤖 PART 9: Set Up Automatic Deployments (Optional)

This makes it so every time you push to GitHub, your site auto-deploys!

### Step 9.1: Connect GitHub to Cloud Build

1. **Go to Cloud Build Triggers:**
   - Visit: https://console.cloud.google.com/cloud-build/triggers
   - Click "Connect Repository"
   - Choose "GitHub"
   - Authenticate with GitHub
   - Select your repository: `myco-website`

2. **Create a Trigger:**
   ```powershell
   gcloud builds triggers create github `
     --repo-name=myco-website `
     --repo-owner=YOUR-GITHUB-USERNAME `
     --branch-pattern="^main$" `
     --build-config=cloudbuild.yaml `
     --region=us-central1
   ```

3. **Test It:**
   ```powershell
   # Make a change
   echo "# Updated" >> README.md
   git add .
   git commit -m "Test auto-deploy"
   git push origin main
   
   # Watch the build
   gcloud builds list --limit=1
   ```

---

## 📊 PART 10: Set Up Monitoring & Analytics (Optional)

### Google Analytics 4

1. **Create GA4 Property:**
   - Go to: https://analytics.google.com
   - Create new property for `myconsulting.network`
   - Get your Measurement ID (looks like `G-XXXXXXXXXX`)

2. **Add to Website:**
   - I can add this to your `layout.tsx` file
   - Just provide me with your GA4 Measurement ID

### Google Search Console

1. **Add Property:**
   - Go to: https://search.google.com/search-console
   - Add property: `myconsulting.network`
   - Verify ownership (DNS verification recommended)

2. **Submit Sitemap:**
   - URL: `https://myconsulting.network/sitemap.xml`
   - This is already created for you!

### Cloud Monitoring

```powershell
# View logs
gcloud run services logs read myconsulting-network --region=us-central1 --tail

# View recent errors
gcloud run services logs read myconsulting-network --region=us-central1 --limit=50 --format="value(textPayload)" | grep -i error

# Check service status
gcloud run services describe myconsulting-network --region=us-central1
```

---

## 💰 Cost Breakdown

### Google Cloud Free Tier (Monthly):
- ✅ 2 million requests
- ✅ 360,000 GB-seconds of memory
- ✅ 180,000 vCPU-seconds
- ✅ 1 GB storage

### Expected Costs for Your Site:
- **With free tier:** $0/month
- **After free tier:** $0-5/month
- **Only pay for:** Actual usage (requests, memory, CPU time)

### Cost Monitoring:
```powershell
# Check current costs
gcloud billing projects describe myconsulting-network

# View in console
# Visit: https://console.cloud.google.com/billing
```

---

## 🐛 Troubleshooting

### Issue 1: Deployment Fails

```powershell
# Check build logs
gcloud builds list --limit=5

# Get specific build log
gcloud builds log BUILD-ID

# Common fixes:
# - Ensure billing is enabled
# - Ensure all APIs are enabled
# - Check for typos in commands
```

### Issue 2: Domain Doesn't Work

```powershell
# Check domain mapping status
gcloud run domain-mappings describe myconsulting.network --region=us-central1

# Verify DNS records
nslookup myconsulting.network

# Check SSL certificate (can take 15min - 24hr)
gcloud run domain-mappings describe myconsulting.network --region=us-central1 --format='value(status.conditions)'
```

### Issue 3: Email Stops Working

**Fix:**
1. Go to Squarespace DNS settings
2. Verify MX records are still there
3. If missing, add them back (see Part 4, Step 4.3)
4. Wait for DNS propagation

### Issue 4: Form Submissions Not Working

**Fix:**
1. Check Formspree dashboard: https://formspree.io/forms/mgvndqbr
2. Verify form ID is correct in code
3. Check browser console for errors
4. Ensure you're not hitting Formspree free tier limit

---

## 📞 Support Resources

### Google Cloud:
- **Console:** https://console.cloud.google.com
- **Documentation:** https://cloud.google.com/run/docs
- **Support:** https://cloud.google.com/support
- **Pricing:** https://cloud.google.com/run/pricing

### Squarespace:
- **Help:** https://support.squarespace.com
- **DNS Guide:** https://support.squarespace.com/hc/en-us/articles/360002101888

### Google Workspace:
- **Admin Console:** https://admin.google.com
- **Support:** https://support.google.com/a

### Formspree:
- **Dashboard:** https://formspree.io/forms
- **Documentation:** https://help.formspree.io

---

## 🎯 Quick Command Reference

```powershell
# Deploy/Update site
gcloud run deploy myconsulting-network --source . --region=us-central1

# Get service URL
gcloud run services describe myconsulting-network --region=us-central1 --format='value(status.url)'

# View logs (live)
gcloud run services logs read myconsulting-network --region=us-central1 --tail

# View logs (last 50 lines)
gcloud run services logs read myconsulting-network --region=us-central1 --limit=50

# Check domain status
gcloud run domain-mappings describe myconsulting.network --region=us-central1

# List all services
gcloud run services list

# Delete service (careful!)
gcloud run services delete myconsulting-network --region=us-central1
```

---

## ✅ Success Checklist

Once everything is set up:

### Technical:
- [ ] Google Cloud project created
- [ ] Billing enabled
- [ ] APIs enabled
- [ ] Site deployed to Cloud Run
- [ ] Service URL works
- [ ] Custom domain mapped in Cloud Run
- [ ] DNS records updated in Squarespace
- [ ] DNS propagation complete
- [ ] SSL certificate active (HTTPS)

### Functional:
- [ ] Website loads at myconsulting.network
- [ ] Website loads at www.myconsulting.network
- [ ] Mobile responsiveness works
- [ ] Contact form submits successfully
- [ ] Navigation works correctly
- [ ] Globe animation loads
- [ ] All sections visible

### Email:
- [ ] Can send email from @myconsulting.network
- [ ] Can receive email at @myconsulting.network
- [ ] MX records intact

### Optional:
- [ ] Google Analytics connected
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Continuous deployment set up
- [ ] Monitoring configured

---

## 🎉 You're Live!

Congratulations! Your website is now:
- ✅ **Live** at https://myconsulting.network
- ✅ **Secure** with automatic SSL/HTTPS
- ✅ **Fast** with global CDN
- ✅ **Scalable** with automatic scaling
- ✅ **Integrated** with Google Workspace
- ✅ **Professional** with custom domain

### Share Your New Site:
- Update your email signature
- Update LinkedIn profile
- Share on social media
- Submit to Google for indexing

---

## 📝 Next Steps

1. **Test everything thoroughly**
2. **Monitor form submissions** via Formspree
3. **Set up Google Analytics** (optional)
4. **Submit sitemap** to Google Search Console
5. **Create content** and keep your site updated
6. **Share your success!** 🎉

---

## 💡 Tips for Success

1. **Regular Updates:** Keep your site fresh with new case studies
2. **Monitor Performance:** Use Google PageSpeed Insights
3. **Check Logs:** Regularly review Cloud Run logs
4. **Backup:** Your code is in GitHub - keep it updated
5. **Security:** Google handles SSL certificates automatically
6. **Costs:** Monitor your Cloud usage monthly
7. **SEO:** Submit sitemap to Google Search Console
8. **Analytics:** Track your visitors with Google Analytics

---

**Need help?** Let me know if you get stuck on any step, and I'll help you through it! 🚀

