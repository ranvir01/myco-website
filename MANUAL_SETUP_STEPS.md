# 🎯 **YOUR MANUAL SETUP STEPS**

I've prepared everything I can automatically. Here's what **YOU** need to do (step-by-step):

---

## ✅ **What I've Already Done For You:**

✅ Created Dockerfile  
✅ Created Docker configuration files  
✅ Created Cloud Build configuration  
✅ Updated Next.js config for deployment  
✅ Fixed build issues  
✅ Tested production build  
✅ Created deployment scripts  

---

## 🚀 **What YOU Need to Do (5 Steps):**

---

### **📍 STEP 1: Install Homebrew & Google Cloud CLI** (5 minutes)

Open your **Terminal** and run these commands **one at a time**:

#### Install Homebrew:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- Press **Enter** when prompted
- Enter your **Mac password** when asked
- Wait 3-5 minutes for installation

#### Install Google Cloud CLI:

```bash
brew install --cask google-cloud-sdk
```

- Wait 2-3 minutes

#### Verify Installation:

```bash
gcloud --version
```

You should see version info ✅

---

### **📍 STEP 2: Login & Setup Project** (5 minutes)

#### Login to Google Cloud:

```bash
gcloud auth login
```

- Browser will open
- **Sign in with your Google Workspace account** (the one with myconsulting.network)
- Click **Allow**
- Return to terminal

#### Create Project:

```bash
gcloud projects create myconsulting-network --name="MyConsulting Network"
```

#### Set Active Project:

```bash
gcloud config set project myconsulting-network
```

---

### **📍 STEP 3: Enable Billing** (5 minutes) ⚠️ **REQUIRED**

#### List Billing Accounts:

```bash
gcloud billing accounts list
```

**If you see billing accounts:**

```bash
gcloud billing projects link myconsulting-network --billing-account=BILLING_ACCOUNT_ID
```

Replace `BILLING_ACCOUNT_ID` with the actual ID from the list.

**If you DON'T have a billing account:**

1. Open: https://console.cloud.google.com/billing
2. Click **"Create Account"** or **"Add Billing Account"**
3. Enter payment details (credit/debit card)
4. **Don't worry**: You won't be charged within the free tier ($0-5/month)
5. After creating billing account, run:

```bash
gcloud billing accounts list
gcloud billing projects link myconsulting-network --billing-account=BILLING_ACCOUNT_ID
```

---

### **📍 STEP 4: Deploy Your Website** (10 minutes)

#### Enable Required APIs:

```bash
gcloud services enable run.googleapis.com containerregistry.googleapis.com cloudbuild.googleapis.com
```

Wait 1-2 minutes.

#### Navigate to Your Project:

```bash
cd /Users/ranvirthind/myco-website
```

#### Deploy to Cloud Run:

```bash
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
```

- When asked to continue, type `Y` and press Enter
- **This takes 5-10 minutes**
- Wait for it to complete

#### Get Your Service URL:

After deployment, you'll see:

```
Service URL: https://myconsulting-network-xxxxx-uc.a.run.app
```

**Copy that URL and test it in your browser!** 🎉

---

### **📍 STEP 5: Connect Your Custom Domain** (15 minutes + waiting)

#### Map Your Domain:

```bash
gcloud run domain-mappings create \
  --service=myconsulting-network \
  --domain=myconsulting.network \
  --region=us-central1

gcloud run domain-mappings create \
  --service=myconsulting-network \
  --domain=www.myconsulting.network \
  --region=us-central1
```

#### Get DNS Records:

```bash
gcloud run domain-mappings describe \
  --domain=myconsulting.network \
  --region=us-central1
```

**Copy the output** - you'll need these DNS records.

#### Update DNS in Google Workspace:

1. Go to: https://admin.google.com
2. Sign in with your admin account
3. Click **"Domains"** → **"Manage Domains"**
4. Click **"myconsulting.network"**
5. Click **"DNS"** or **"Manage DNS"**
6. Click **"Add Record"** and add:

**Record 1 (A Record):**
- Type: `A`
- Name: `@`
- Value: `[IP from gcloud command]` (e.g., 216.239.32.21)
- TTL: `3600`

**Record 2 (AAAA Record):**
- Type: `AAAA`
- Name: `@`
- Value: `[IPv6 from gcloud command]`
- TTL: `3600`

**Record 3 (CNAME Record):**
- Type: `CNAME`
- Name: `www`
- Value: `ghs.googlehosted.com`
- TTL: `3600`

7. **Keep your MX records** (for email!)
8. Click **Save**

#### Wait for DNS Propagation:

- Takes 1-24 hours (usually 1-2 hours)
- Check status: `dig myconsulting.network`

Once propagated, visit:
- **https://myconsulting.network** ✅
- **https://www.myconsulting.network** ✅

---

## 🎉 **You're Done!**

Your website will be live at `https://myconsulting.network`

---

## 💡 **Quick Commands for Later**

### Update Your Website:

```bash
cd /Users/ranvirthind/myco-website
gcloud run deploy myconsulting-network --source . --region=us-central1
```

### View Logs:

```bash
gcloud run services logs read myconsulting-network --region=us-central1 --tail
```

### Get Service URL:

```bash
gcloud run services describe myconsulting-network --region=us-central1 --format='value(status.url)'
```

---

## 🆘 **Troubleshooting**

| Problem | Solution |
|---------|----------|
| Homebrew install asks for password | Enter your Mac login password |
| "Billing not enabled" | Complete Step 3 properly |
| Build fails during deploy | Check logs: `gcloud builds list --limit=5` |
| Domain not working | Wait more time (DNS takes hours) |
| Can't find DNS settings | Search "DNS" in Google Admin Console |

---

## 📞 **Need Help?**

- **Step 1 Issues:** Check if you're admin on your Mac
- **Step 3 Issues:** Visit https://console.cloud.google.com/billing directly
- **Step 4 Issues:** Run `npm run build` first to test locally
- **Step 5 Issues:** Make sure you're signed in to admin.google.com

---

## ✅ **Your Checklist:**

- [ ] Step 1: Install Homebrew & gcloud CLI
- [ ] Step 2: Login & setup project
- [ ] Step 3: Enable billing
- [ ] Step 4: Deploy to Cloud Run
- [ ] Step 5: Connect custom domain

**Start with Step 1 and work through each one!** 🚀

