# Grant Deployment Permissions

## Quick Steps to Enable Deployment

The IAM page should be open in your browser. Follow these exact steps:

### Step 1: Grant Access
1. Click the **"GRANT ACCESS"** button at the top
2. In the "Add principals" field, enter: **rjkind01@gmail.com**

### Step 2: Assign Roles
Click "Select a role" and add these roles one by one:

1. **Cloud Run Admin**
   - Search for: "Cloud Run Admin"
   - Select it and click "Add Another Role"

2. **Cloud Build Editor**
   - Search for: "Cloud Build Editor"
   - Select it and click "Add Another Role"

3. **Service Account User**
   - Search for: "Service Account User"
   - Select it and click "Add Another Role"

4. **Storage Object Admin**
   - Search for: "Storage Object Admin"
   - Select it

### Step 3: Save
1. Click the **"SAVE"** button at the bottom
2. Wait 10-15 seconds for permissions to propagate

### Step 4: Deploy
Run this command in PowerShell:

```powershell
gcloud run deploy myconsulting-network --source . --region=us-central1 --platform=managed --allow-unauthenticated --memory=512Mi --cpu=1 --min-instances=0 --max-instances=10 --port=8080
```

---

## Alternative: Use Account with Permissions

If you have access to **ethan@myconsulting.network**, switch to that account:

```powershell
gcloud config set account ethan@myconsulting.network
gcloud auth login
gcloud run deploy myconsulting-network --source . --region=us-central1 --platform=managed --allow-unauthenticated --memory=512Mi --cpu=1 --min-instances=0 --max-instances=10 --port=8080
```

---

## Check Auto-Deployment

Your git push might have already triggered an automatic deployment!

Check here: https://console.cloud.google.com/cloud-build/builds?project=myconsulting-network

If you see a build running with commit `d3c05ac`, just wait for it to complete!

