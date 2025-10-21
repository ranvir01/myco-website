# 🌐 Add DNS Records to Google Workspace Admin

## Your Cloud Run Service is Live!

**Current URL:** https://myconsulting-network-osfc7yil5q-uc.a.run.app ✅

**Target Domain:** myconsulting.network

---

## 📋 DNS Records You Need to Add

### **A Record (IPv4):**
```
Type: A
Host: @
Value: 216.239.32.21
TTL: 3600
```

### **AAAA Record (IPv6):**
```
Type: AAAA
Host: @
Value: 2001:4860:4802:32::15
TTL: 3600
```

---

## 🎯 Step-by-Step: Add to Google Workspace

### **STEP 1: Open Google Workspace Admin Console**

1. Go to: **https://admin.google.com**
2. Sign in with: **ethan@myconsulting.network**
3. You should see the Admin console dashboard

---

### **STEP 2: Navigate to DNS Settings**

**Option A: Using Left Menu**
1. Click **"Domains"** in the left sidebar
2. Click **"Manage domains"**
3. Click on **myconsulting.network**
4. Click **"Manage DNS"** or **"DNS"** button

**Option B: Using Search**
1. Use the search bar at top
2. Type: **"DNS"**
3. Click on DNS settings for myconsulting.network

**Option C: Direct Link**
Try this URL:
```
https://admin.google.com/ac/domains/manage/myconsulting.network
```

---

### **STEP 3: Update the A Record**

**You currently have (from Squarespace):**
```
Host: @
Type: A
Data: 198.49.23.144
```

**Change it to (Google Cloud Run):**
```
Host: @
Type: A
Data: 216.239.32.21
```

**How to do it:**
1. Find the A record in the DNS list
2. Look for: Host `@`, Type `A`, Value `198.49.23.144`
3. Click **Edit** or the pencil icon
4. Change the value from `198.49.23.144` to `216.239.32.21`
5. Keep TTL as is (probably 3600 or 1 hour)
6. Click **Save** or **Update**

---

### **STEP 4: Add AAAA Record**

1. Click **"Add record"** or **"Add DNS record"** or **"Create new record"**
2. Fill in:
   - **Type:** AAAA
   - **Host:** @ (or leave blank if it says "root")
   - **Value/Data:** `2001:4860:4802:32::15`
   - **TTL:** 3600 (or 1 hour)
3. Click **Save** or **Add**

---

### **STEP 5: Verify MX Records Are Still There**

⚠️ **CRITICAL:** Make sure you still have these MX records for email!

```
Type: MX, Priority: 1,  Host: @, Value: smtp.google.com
(or the standard Google Workspace MX records)
```

**DO NOT delete any:**
- MX records (email)
- TXT records (verification, SPF, DKIM)
- CNAME records (unless they conflict)

**ONLY change:**
- A record (from Squarespace IP to Cloud Run IP)
- Add new AAAA record

---

## ✅ What Your DNS Should Look Like After Changes

### **Must Have:**
```
@ A     216.239.32.21                     (Cloud Run - NEW/UPDATED)
@ AAAA  2001:4860:4802:32::15            (Cloud Run - NEW)
@ MX    1 smtp.google.com                (Email - KEEP)
@ TXT   google-site-verification=...     (Verification - KEEP)
@ TXT   v=DKIM1...                       (Email - KEEP)
```

### **Can Have (optional):**
```
www CNAME ext-sq.squarespace.com         (Can change or remove)
```

---

## ⏰ After Adding Records

### **DNS Propagation Time:**
- **Minimum:** 15 minutes
- **Typical:** 1-2 hours
- **Maximum:** 24-48 hours

### **What Happens:**
1. ✅ You save changes in Google Workspace Admin
2. 🔄 DNS changes propagate across the internet
3. ⏳ Wait for propagation (automatic)
4. ✅ Your domain starts pointing to Cloud Run
5. 🔒 Google automatically provisions SSL certificate
6. 🎉 Your site is live at https://myconsulting.network

---

## 🧪 Test After Propagation

### **Check DNS Propagation:**

**Online Tool:**
1. Go to: https://whatsmydns.net
2. Enter: `myconsulting.network`
3. Select: A record
4. Check if it shows: `216.239.32.21`

**PowerShell:**
```powershell
# Check A record
nslookup myconsulting.network

# Should eventually show: 216.239.32.21
```

### **Check Your Website:**

Once DNS propagates, test:
```
https://myconsulting.network
```

Should show your website with green padlock (SSL)!

---

## 📧 Test Email Still Works

After DNS changes:
1. **Send** a test email from @myconsulting.network
2. **Receive** a test email at @myconsulting.network
3. Both should work normally

**If email stops working:**
- Check that MX records are still present
- Wait for DNS propagation
- May take up to 48 hours

---

## 🔍 Troubleshooting

### **Can't Find DNS Settings in Google Workspace?**

Try these locations:
1. **Home** → **Domains** → **Manage domains** → myconsulting.network → **DNS**
2. **Apps** → **Google Workspace** → **Settings for Gmail** → **Advanced**
3. Search for "DNS" in the admin console search bar

### **Can't Edit A Record?**

If you see a message about Squarespace managing the domain:
- This is expected - you're taking control back
- Just edit the record anyway - Google Workspace allows it
- The warning just means Squarespace was managing it before

### **Don't See "Add Record" Button?**

Look for:
- "Create new record"
- "Add DNS record"
- "+" icon
- "Add" button at bottom of record list

### **A Record vs. AAAA Record?**

- **A record:** IPv4 address (like 216.239.32.21)
- **AAAA record:** IPv6 address (like 2001:4860:4802:32::15)
- **You need BOTH** for best compatibility

---

## 🎯 Summary - Quick Action Items

**Do this right now:**

1. ✅ Go to: https://admin.google.com
2. ✅ Navigate to: Domains → myconsulting.network → DNS
3. ✅ Update A record: `198.49.23.144` → `216.239.32.21`
4. ✅ Add AAAA record: `2001:4860:4802:32::15`
5. ✅ Verify MX records still there
6. ✅ Save changes
7. ⏳ Wait 1-2 hours
8. ✅ Test: https://myconsulting.network

---

## 🆘 Still Stuck?

### **Can't access Google Workspace Admin:**
- Make sure you're signing in with: ethan@myconsulting.network
- Make sure you're a Super Admin (domain owner)
- Try: https://admin.google.com

### **Need more help:**
Let me know what error message you see or where you're stuck!

---

## 🎉 Success Indicators

Your domain is properly configured when:

- [ ] A record shows: 216.239.32.21
- [ ] AAAA record shows: 2001:4860:4802:32::15
- [ ] MX records are still present (email works)
- [ ] https://myconsulting.network loads your site
- [ ] Green padlock appears (SSL certificate)
- [ ] No browser warnings
- [ ] Email still works

---

## 📝 Notes

- **Current Cloud Run URL:** https://myconsulting-network-osfc7yil5q-uc.a.run.app (still works)
- **Target Domain:** https://myconsulting.network (will work after DNS)
- **DNS Records Source:** Standard Google Cloud Run IPs (work for all Cloud Run services)
- **No Downtime:** Your Cloud Run URL keeps working during DNS transition

---

**Go add those DNS records to Google Workspace now!** 🚀

The specific IPs above (216.239.32.21 and 2001:4860:4802:32::15) are the standard Google Cloud Run DNS endpoints and will work for your service.

