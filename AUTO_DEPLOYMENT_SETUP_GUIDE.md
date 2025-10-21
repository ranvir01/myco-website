# 🤖 Automatic Deployment Setup Guide

I've opened the setup page in your browser. Follow these exact steps:

---

## 📋 Step-by-Step Instructions

### **Step 1: Connect to GitHub**

You should see a page titled **"Connect repository"**

1. Click the **"GitHub"** option
2. Click **"Continue"**

---

### **Step 2: Authenticate with GitHub**

A GitHub window will open:

1. **Sign in to GitHub** (if not already signed in)
2. Click **"Authorize Google Cloud Build"**
3. You may be asked to confirm your password
4. GitHub will ask: "Where do you want to install Google Cloud Build?"
   - Select: **ranvir01** (your personal account)
   - Or select: "All repositories" or "Only select repositories"
5. If selecting repositories, choose: **myco-website**
6. Click **"Install"** or **"Install & Authorize"**

---

### **Step 3: Select Your Repository**

Back in the Google Cloud Console:

1. You'll see a list of your GitHub repositories
2. Find and click: **ranvir01/myco-website**
3. Check the box: ☑ "I understand that Google will have read access..."
4. Click **"Connect"**

---

### **Step 4: Create the Trigger**

On the "Create trigger" page, fill in:

**Basic Settings:**
- **Name:** `auto-deploy-main`
- **Description:** `Automatic deployment on push to main`
- **Region:** `us-central1`

**Event:**
- Select: **"Push to a branch"**

**Source:**
- **Repository:** `ranvir01/myco-website` (already selected)
- **Branch:** `^main$` (match main branch)

**Configuration:**
- **Type:** `Cloud Build configuration file (yaml or json)`
- **Location:** Repository
- **Cloud Build configuration file location:** `cloudbuild.yaml`

**Advanced (leave defaults):**
- Service account: Use default
- Substitution variables: None needed

---

### **Step 5: Create the Trigger**

1. Review all settings
2. Click **"CREATE"** at the bottom

---

## ✅ Verification

After creating the trigger:

1. You'll see a success message
2. The trigger will appear in your list at: https://console.cloud.google.com/cloud-build/triggers

---

## 🧪 Test Automatic Deployment

Let's test it right now!

```powershell
# 1. Make a small change
echo "# Auto-deploy test - $(Get-Date)" >> README.md

# 2. Commit and push
git add .
git commit -m "Test automatic deployment"
git push origin main

# 3. Watch the build (opens in browser)
start https://console.cloud.google.com/cloud-build/builds?project=myconsulting-network
```

**Or check from command line:**
```powershell
# Wait 30 seconds for trigger to start
Start-Sleep -Seconds 30

# Check build status
gcloud builds list --limit=1
```

---

## 🎯 Your New Workflow

After setup is complete:

```powershell
# 1. Edit your website files
# Make changes...

# 2. Commit and push
git add .
git commit -m "Updated homepage content"
git push origin main

# 3. Automatic deployment!
# ✓ Cloud Build detects the push (within seconds)
# ✓ Builds your container (3-5 minutes)
# ✓ Deploys to Cloud Run (1-2 minutes)
# ✓ Site is live! (total: 5-10 minutes)
```

---

## 📊 Monitor Deployments

### **View Build Status:**
- Console: https://console.cloud.google.com/cloud-build/builds?project=myconsulting-network
- CLI: `gcloud builds list --limit=5`

### **View Logs:**
```powershell
# Get latest build ID
$BUILD_ID = gcloud builds list --limit=1 --format="value(id)"

# View logs
gcloud builds log $BUILD_ID
```

### **Check Trigger Status:**
```powershell
gcloud builds triggers list
```

---

## 🔧 Troubleshooting

### **Build Doesn't Start After Push:**

1. **Check trigger exists:**
   ```powershell
   gcloud builds triggers list
   ```

2. **Check trigger is enabled:**
   - Go to: https://console.cloud.google.com/cloud-build/triggers
   - Make sure trigger is not disabled (should be blue/enabled)

3. **Check branch name:**
   - Make sure you pushed to `main` branch
   - Check: `git branch` (should show `* main`)

### **Build Fails:**

1. **View build logs:**
   ```powershell
   gcloud builds list --limit=1
   # Copy the BUILD_ID
   gcloud builds log BUILD-ID
   ```

2. **Common issues:**
   - Check `cloudbuild.yaml` syntax is correct
   - Verify permissions are set
   - Check Docker image builds locally

### **GitHub Not Connected:**

If you see "Repository not found" or connection errors:

1. Go to: https://github.com/settings/installations
2. Find "Google Cloud Build"
3. Click "Configure"
4. Make sure `myco-website` is selected
5. Save changes

---

## 🎉 Success Indicators

Your automatic deployment is working when:

1. ✅ Trigger appears in: https://console.cloud.google.com/cloud-build/triggers
2. ✅ After `git push`, a build starts within 30 seconds
3. ✅ Build completes successfully (green checkmark)
4. ✅ New revision appears in Cloud Run
5. ✅ Your changes are live at: https://myconsulting-network-osfc7yil5q-uc.a.run.app

---

## 📝 Quick Commands Reference

```powershell
# Push changes (triggers auto-deploy)
git add .
git commit -m "Your message"
git push origin main

# Check if build started
gcloud builds list --limit=1

# View build logs
gcloud builds log $(gcloud builds list --limit=1 --format="value(id)")

# View trigger details
gcloud builds triggers describe auto-deploy-main

# Disable trigger temporarily
gcloud builds triggers update auto-deploy-main --disabled

# Re-enable trigger
gcloud builds triggers update auto-deploy-main --no-disabled
```

---

## 🎊 You're All Set!

Once you complete the setup:

- **No more manual deployment commands**
- **Just git push and it deploys automatically**
- **Full build history and logs**
- **Rollback capability if needed**
- **Professional CI/CD pipeline**

---

## 🆘 Need Help?

If you get stuck:
1. Check the browser window I opened
2. Follow the steps above carefully
3. Let me know what error message you see
4. I can help troubleshoot!

---

**Complete the setup in your browser, then test with a git push!** 🚀

