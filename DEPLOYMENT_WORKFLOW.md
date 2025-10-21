# 🚀 Deployment Workflow

## Your Site is Live!

**URL:** https://myconsulting-network-osfc7yil5q-uc.a.run.app

---

## 📦 Current Setup: Manual Deployment

Right now, to deploy changes you need to run commands manually.

---

## 🔄 Option 1: Quick Deploy Script (Available Now!)

I've created `deploy.ps1` for you. Just run:

```powershell
.\deploy.ps1
```

**What it does:**
- Builds your site
- Deploys to Cloud Run
- Shows you the live URL
- Takes 5-10 minutes

**Your workflow:**
```powershell
# 1. Make changes to your code

# 2. Test locally (optional)
npm run dev

# 3. Deploy
.\deploy.ps1
```

---

## 🤖 Option 2: Automatic Deployment (Recommended!)

Set up once, then just `git push` and it deploys automatically!

### **One-Time Setup:**

1. **Go to:** https://console.cloud.google.com/cloud-build/triggers/connect?project=myconsulting-network

2. **Connect GitHub:**
   - Click **"GitHub"**
   - Click **"Continue"**
   - Sign in to GitHub
   - Click **"Authorize Google Cloud Build"**
   - Select: **ranvir01/myco-website**
   - Click **"Connect"**

3. **Create Trigger:**
   - **Name:** `auto-deploy-main`
   - **Region:** `us-central1`
   - **Event:** `Push to a branch`
   - **Branch:** `^main$`
   - **Configuration:** `Cloud Build configuration file`
   - **Location:** `cloudbuild.yaml`
   - Click **"CREATE"**

### **After Setup - Your New Workflow:**

```powershell
# 1. Make changes to your code

# 2. Commit and push
git add .
git commit -m "Update website"
git push origin main

# 3. That's it! 
# Cloud Build automatically deploys in 5-10 minutes
# Check status: https://console.cloud.google.com/cloud-build/builds
```

---

## 📊 Comparison

| Method | Steps | Time | When to Use |
|--------|-------|------|-------------|
| **Quick Script** | Run `.\deploy.ps1` | 5-10 min | Quick fixes, testing |
| **Auto Deploy** | Just `git push` | 5-10 min | Regular updates, best workflow |

---

## 🎯 Recommended Workflow

**Start with:** Quick Deploy Script (`.\deploy.ps1`)

**Upgrade to:** Automatic Deployment (follow setup above)

---

## 📝 Quick Commands

### Deploy Now:
```powershell
.\deploy.ps1
```

### View Deployment Status:
```powershell
gcloud builds list --limit=5
```

### View Live Logs:
```powershell
gcloud run services logs read myconsulting-network --region=us-central1 --tail
```

### Get Service URL:
```powershell
gcloud run services describe myconsulting-network --region=us-central1 --format='value(status.url)'
```

---

## ✅ Next Steps

1. **Deploy Changes:**
   - Use `.\deploy.ps1` for quick deploys
   - Or set up automatic deployment

2. **Map Custom Domain:**
   - See `SQUARESPACE_DNS_SETUP.md`
   - Map `myconsulting.network` to your site

3. **Go Live:**
   - Your professional domain
   - Fully automated workflow
   - Easy content updates

---

## 🎉 You're All Set!

Your website is deployed and ready. Choose your deployment method and start updating your site!

**Need help?** See the other documentation files or let me know!

