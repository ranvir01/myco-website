# 🚀 Quick Reference - Deployment Commands

## One-Page Cheat Sheet for Deployment

---

## 🎯 First Time Setup (Do Once)

```powershell
# 1. Install Google Cloud CLI
# Download from: https://cloud.google.com/sdk/docs/install

# 2. Authenticate
gcloud auth login

# 3. Create & Set Project
gcloud projects create myconsulting-network --name="MyConsulting Network"
gcloud config set project myconsulting-network

# 4. Link Billing
gcloud billing accounts list
gcloud billing projects link myconsulting-network --billing-account=YOUR-BILLING-ID

# 5. Enable APIs
gcloud services enable run.googleapis.com containerregistry.googleapis.com cloudbuild.googleapis.com
```

---

## 🚀 Deploy Website (Every Time You Update)

```powershell
# Navigate to project
cd D:\myco-website

# Deploy (one command does it all!)
gcloud run deploy myconsulting-network --source . --region=us-central1 --allow-unauthenticated
```

**Takes 3-5 minutes. First time takes 5-10 minutes.**

---

## 🌐 Connect Custom Domain (Do Once)

```powershell
# 1. Map domain in Google Cloud
gcloud run domain-mappings create --service=myconsulting-network --domain=myconsulting.network --region=us-central1
gcloud run domain-mappings create --service=myconsulting-network --domain=www.myconsulting.network --region=us-central1

# 2. Get DNS records to add to Squarespace
gcloud run domain-mappings describe myconsulting.network --region=us-central1

# 3. Add DNS records to Squarespace (see SQUARESPACE_DNS_SETUP.md)
#    - Add A record: @ → [IP from gcloud]
#    - Add AAAA record: @ → [IPv6 from gcloud]
#    - Add CNAME: www → ghs.googlehosted.com
#    - KEEP all MX records for email!

# 4. Wait 1-24 hours for DNS propagation
```

---

## 📊 Monitoring & Management

```powershell
# Get service URL
gcloud run services describe myconsulting-network --region=us-central1 --format='value(status.url)'

# View live logs
gcloud run services logs read myconsulting-network --region=us-central1 --tail

# View last 50 log lines
gcloud run services logs read myconsulting-network --region=us-central1 --limit=50

# Check domain status
gcloud run domain-mappings describe myconsulting.network --region=us-central1

# Check SSL certificate status
gcloud run domain-mappings describe myconsulting.network --region=us-central1 --format='value(status.conditions)'

# List all services
gcloud run services list
```

---

## 🔄 Updating Your Website

```powershell
# Method 1: Local changes
cd D:\myco-website
# Make your changes to files...
gcloud run deploy myconsulting-network --source . --region=us-central1

# Method 2: From Git
cd D:\myco-website
git add .
git commit -m "Update website"
git push origin main
gcloud run deploy myconsulting-network --source . --region=us-central1
```

---

## 🧪 Testing Locally

```powershell
cd D:\myco-website

# Install dependencies (first time only)
npm install

# Run dev server
npm run dev
# Visit: http://localhost:3000

# Test production build
npm run build
npm start
# Visit: http://localhost:3000
```

---

## 🔍 Verification Commands

```powershell
# Check if website is accessible
# Visit in browser: https://myconsulting-network-xxxxx-uc.a.run.app

# Check DNS propagation
nslookup myconsulting.network
nslookup www.myconsulting.network

# Check MX records (email)
nslookup -type=MX myconsulting.network

# Check online
# Visit: https://whatsmydns.net
# Enter: myconsulting.network
```

---

## 🐛 Common Issues & Quick Fixes

### Website Not Deploying
```powershell
# Check last build
gcloud builds list --limit=5

# View build log
gcloud builds log BUILD-ID

# Verify billing is enabled
gcloud billing projects describe myconsulting-network
```

### Domain Not Working
```powershell
# Check domain mapping
gcloud run domain-mappings describe myconsulting.network --region=us-central1

# Verify DNS
nslookup myconsulting.network

# Wait for DNS propagation (can take 24-48 hours)
```

### Email Stopped Working
```
1. Go to Squarespace DNS settings
2. Verify all 5 MX records are present:
   - aspmx.l.google.com (priority 1)
   - alt1.aspmx.l.google.com (priority 5)
   - alt2.aspmx.l.google.com (priority 5)
   - alt3.aspmx.l.google.com (priority 10)
   - alt4.aspmx.l.google.com (priority 10)
3. If missing, add them back
4. Wait 1-2 hours
```

### SSL Certificate Not Active
```powershell
# Check status (can take 15min - 24hr to provision)
gcloud run domain-mappings describe myconsulting.network --region=us-central1 --format='value(status.conditions)'

# Just wait - Google handles it automatically
```

---

## 📞 Quick Links

### Dashboards
- **Google Cloud Console:** https://console.cloud.google.com
- **Cloud Run Services:** https://console.cloud.google.com/run
- **Formspree Dashboard:** https://formspree.io/forms/mgvndqbr
- **Google Workspace Admin:** https://admin.google.com
- **Squarespace Account:** https://account.squarespace.com

### Tools
- **DNS Checker:** https://whatsmydns.net
- **PageSpeed Insights:** https://pagespeed.web.dev
- **Google Search Console:** https://search.google.com/search-console
- **SSL Checker:** https://www.ssllabs.com/ssltest/

### Documentation
- **Cloud Run Docs:** https://cloud.google.com/run/docs
- **Squarespace DNS:** https://support.squarespace.com/hc/en-us/articles/360002101888
- **Google Workspace MX:** https://support.google.com/a/answer/174125

---

## 💰 Cost Monitoring

```powershell
# Check current costs
gcloud billing projects describe myconsulting-network

# View in console
# Visit: https://console.cloud.google.com/billing

# Expected: $0-5/month (usually $0 with free tier)
```

---

## 🔐 Security

```powershell
# SSL certificate is automatic - Google handles it
# No action needed!

# To force HTTPS (already configured in next.config.js):
# All HTTP requests automatically redirect to HTTPS
```

---

## ✅ Pre-Deployment Checklist

Before running deploy:
- [ ] All changes committed to git (optional)
- [ ] npm run build works locally
- [ ] gcloud CLI installed
- [ ] Authenticated: `gcloud auth login`
- [ ] Project set: `gcloud config get-value project`
- [ ] Billing enabled

After deployment:
- [ ] Service URL works
- [ ] All pages load
- [ ] Contact form submits
- [ ] Mobile responsive
- [ ] Images load

After DNS setup:
- [ ] myconsulting.network loads
- [ ] www.myconsulting.network loads
- [ ] SSL certificate active (green padlock)
- [ ] Email sending works
- [ ] Email receiving works

---

## 🎯 Most Common Commands

```powershell
# Deploy
gcloud run deploy myconsulting-network --source . --region=us-central1

# Get URL
gcloud run services describe myconsulting-network --region=us-central1 --format='value(status.url)'

# View logs
gcloud run services logs read myconsulting-network --region=us-central1 --tail

# Check domain
gcloud run domain-mappings describe myconsulting.network --region=us-central1
```

---

## 📱 Contact Form (Formspree)

- **Endpoint:** https://formspree.io/f/mgvndqbr
- **Dashboard:** https://formspree.io/forms/mgvndqbr
- **Free tier:** 50 submissions/month
- **Upgrade:** $10/month for unlimited

Check submissions in Formspree dashboard.

---

## 🎉 Success Indicators

Your site is live when:
- ✅ `https://myconsulting.network` loads
- ✅ Green padlock (SSL) in browser
- ✅ All sections visible and working
- ✅ Contact form submits successfully
- ✅ Mobile menu works
- ✅ Globe animation loads
- ✅ Email @myconsulting.network works

---

## 📞 Get Help

**Stuck?** Check these in order:
1. This quick reference (you're here!)
2. `COMPLETE_DEPLOYMENT_GUIDE.md` (detailed step-by-step)
3. `SQUARESPACE_DNS_SETUP.md` (DNS setup with screenshots)
4. `GOOGLE_CLOUD_DEPLOYMENT.md` (Cloud deployment details)

**Still stuck?**
- Google Cloud support: https://cloud.google.com/support
- Squarespace support: https://support.squarespace.com
- Community: Stack Overflow (tag: google-cloud-run)

---

## 🚀 Let's Go!

**Ready to deploy?**

```powershell
cd D:\myco-website
gcloud run deploy myconsulting-network --source . --region=us-central1
```

**That's it!** 🎉

---

*Last updated: Ready for deployment*
*Next.js 14 · Google Cloud Run · Squarespace DNS · Google Workspace*

