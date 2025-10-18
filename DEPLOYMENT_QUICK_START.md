# ⚡ Quick Start - Deploy to Google Cloud in 5 Minutes

## 🎯 Prerequisites
- Google Cloud account
- Billing enabled
- Domain: `myconsulting.network`

---

## 🚀 Super Quick Deployment (3 Commands)

### 1️⃣ Install Google Cloud CLI

```bash
brew install --cask google-cloud-sdk
```

### 2️⃣ Login & Set Project

```bash
gcloud auth login
gcloud config set project myconsulting-network
```

### 3️⃣ Run Deployment Script

```bash
./deploy-to-gcloud.sh
```

**That's it!** The script handles everything automatically! ✅

---

## 🔗 After Deployment: Map Your Domain

### Step 1: Map Domain to Cloud Run

```bash
# Map root domain
gcloud run domain-mappings create \
  --service=myconsulting-network \
  --domain=myconsulting.network \
  --region=us-central1

# Map www subdomain
gcloud run domain-mappings create \
  --service=myconsulting-network \
  --domain=www.myconsulting.network \
  --region=us-central1
```

### Step 2: Get DNS Records

```bash
gcloud run domain-mappings describe \
  --domain=myconsulting.network \
  --region=us-central1
```

### Step 3: Update DNS

Go to [admin.google.com](https://admin.google.com) → Domains → DNS and add the records from Step 2.

---

## 🔄 Update Your Site (After Initial Deploy)

```bash
# Make changes, then:
git add .
git commit -m "Update website"
git push

# Deploy
gcloud run deploy myconsulting-network --source . --region=us-central1
```

---

## 📊 Useful Commands

```bash
# View logs
gcloud run services logs read myconsulting-network --region=us-central1 --tail

# Get service URL
gcloud run services describe myconsulting-network --region=us-central1 --format='value(status.url)'

# Check domain status
gcloud run domain-mappings list --region=us-central1

# View service info
gcloud run services describe myconsulting-network --region=us-central1
```

---

## 💰 Cost

**Expected: $0-5/month** (likely $0 with free tier)

Free tier includes:
- 2M requests/month
- 360K GB-seconds memory
- 180K vCPU-seconds

---

## 📚 Full Documentation

For detailed instructions, see: **[GOOGLE_CLOUD_DEPLOYMENT.md](./GOOGLE_CLOUD_DEPLOYMENT.md)**

---

## 🆘 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| `gcloud: command not found` | Install with `brew install --cask google-cloud-sdk` |
| `Billing not enabled` | Visit [console.cloud.google.com/billing](https://console.cloud.google.com/billing) |
| Build fails | Check logs: `gcloud builds list --limit=5` |
| Domain not working | Wait 1-24 hours for DNS propagation |

---

## ✅ Success Checklist

- [ ] Google Cloud CLI installed
- [ ] Authenticated with `gcloud auth login`
- [ ] Project created & billing enabled
- [ ] Ran `./deploy-to-gcloud.sh`
- [ ] Service is running (check Cloud Run URL)
- [ ] Domain mapped to Cloud Run
- [ ] DNS records updated in Google Workspace
- [ ] SSL certificate active (automatic)
- [ ] Website accessible at `https://myconsulting.network`

---

## 🎉 You're Done!

Your site is now:
- ✅ Hosted on Google Cloud Run
- ✅ Auto-scaling based on traffic
- ✅ Using Google's global CDN
- ✅ Protected with automatic SSL
- ✅ Costing $0-5/month

**Questions?** See [GOOGLE_CLOUD_DEPLOYMENT.md](./GOOGLE_CLOUD_DEPLOYMENT.md) for full details.

