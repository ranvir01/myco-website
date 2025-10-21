# 🌐 Connect Your Custom Domain - Step by Step

I've opened the domain mapping page in your browser. Follow these steps to connect `myconsulting.network` to your website.

---

## 🎯 PART 1: Map Domain in Google Cloud Run

### **In the browser window I just opened:**

1. Click **"ADD MAPPING"** or **"Map Custom Domain"** button

2. **Verify ownership screen:**
   - Enter domain: `myconsulting.network`
   - Click **"Continue"**
   - You may need to verify domain ownership (see below if needed)

3. **Select service:**
   - Select: `myconsulting-network`
   - Click **"Continue"**

4. **Get DNS records:**
   - Google will show you the DNS records to add
   - **Keep this page open** - you'll need these records for Squarespace!

---

## 📝 PART 2: Update DNS in Squarespace

### **Step 1: Go to Squarespace DNS**

1. Open a new tab: https://account.squarespace.com
2. Go to **Settings** → **Domains**
3. Click on **myconsulting.network**
4. Click **DNS Settings** or **Advanced DNS**

---

### **Step 2: IMPORTANT - Take a Screenshot First!**

**Before making ANY changes:**
- Take a screenshot of ALL your current DNS records
- This is your backup if something goes wrong
- Make sure you capture all MX records (for email)

---

### **Step 3: Add Google Cloud DNS Records**

From the Google Cloud Console page, you'll see records like:

**A Record:**
```
Type: A
Name: @ (or root)
Value: 216.239.32.21 (example - use the actual IP shown)
```

**AAAA Record (IPv6):**
```
Type: AAAA
Name: @ (or root)
Value: 2001:4860:4802:32::15 (example - use actual value)
```

**Add these in Squarespace:**

1. Click **"Add Record"** for each
2. Select record type (A or AAAA)
3. Enter:
   - **Host:** `@` (or leave blank for root)
   - **Value:** The IP address from Google Cloud
   - **TTL:** 3600
4. Click **Save**

---

### **Step 4: Add WWW Subdomain (Optional)**

Back in Google Cloud, you may also want to map `www.myconsulting.network`:

1. In Cloud Run domains page, click **"ADD MAPPING"** again
2. Enter: `www.myconsulting.network`
3. Select service: `myconsulting-network`
4. Get the CNAME record

**In Squarespace:**
1. Add a CNAME record:
   - **Type:** CNAME
   - **Host:** `www`
   - **Value:** `ghs.googlehosted.com` (or value shown by Google)
   - **TTL:** 3600
2. Click **Save**

---

## ⚠️ CRITICAL: Keep Your Email Working!

### **DO NOT DELETE THESE MX RECORDS:**

Make sure these records are still present in Squarespace:

```
Type: MX, Priority: 1,  Host: @, Value: aspmx.l.google.com
Type: MX, Priority: 5,  Host: @, Value: alt1.aspmx.l.google.com
Type: MX, Priority: 5,  Host: @, Value: alt2.aspmx.l.google.com
Type: MX, Priority: 10, Host: @, Value: alt3.aspmx.l.google.com
Type: MX, Priority: 10, Host: @, Value: alt4.aspmx.l.google.com
```

**If any are missing, ADD THEM BACK immediately!**

Also keep any TXT records for:
- `google-site-verification` (domain verification)
- `v=spf1` (email authentication)

---

## ⏰ PART 3: Wait for DNS Propagation

### **How long?**
- **Minimum:** 15 minutes
- **Typical:** 1-2 hours
- **Maximum:** 24-48 hours

### **What's happening?**
DNS changes need to propagate across the internet. This is automatic - you don't need to do anything!

---

## ✅ PART 4: Verify Everything Works

### **Check DNS Propagation:**

**Option 1: Online Tool**
1. Go to: https://whatsmydns.net
2. Enter: `myconsulting.network`
3. Select: A record
4. Check if it shows Google Cloud IP

**Option 2: PowerShell**
```powershell
# Check A record
nslookup myconsulting.network

# Check CNAME for www
nslookup www.myconsulting.network

# Check MX records (email)
nslookup -type=MX myconsulting.network
```

---

### **Check SSL Certificate:**

Google Cloud automatically provisions SSL certificates. This can take 15 minutes to 24 hours.

**Check status:**
```powershell
# In the Cloud Console, go to the domain mappings page
# You should see a green checkmark when SSL is ready
```

---

### **Test Your Website:**

Once DNS propagates:

1. **Test main domain:**
   ```
   https://myconsulting.network
   ```
   Should show your website with green padlock (SSL)

2. **Test www subdomain:**
   ```
   https://www.myconsulting.network
   ```
   Should also work (if you mapped it)

3. **Test on mobile:**
   Open on your phone to verify mobile experience

---

## 📧 PART 5: Verify Email Still Works

After DNS changes:

1. **Send a test email** from your `@myconsulting.network` address
2. **Receive a test email** at your `@myconsulting.network` address
3. Both should work as before

**If email stops working:**
- Check MX records in Squarespace
- Make sure all 5 MX records are present
- Wait for DNS propagation (can take up to 48 hours)

---

## 🎉 SUCCESS CHECKLIST

Your domain is fully connected when:

- [ ] DNS records added to Squarespace
- [ ] MX records still present (email working)
- [ ] DNS propagation complete (check whatsmydns.net)
- [ ] SSL certificate active (green padlock)
- [ ] https://myconsulting.network loads your site
- [ ] https://www.myconsulting.network works (if mapped)
- [ ] Mobile version works
- [ ] Email sending works
- [ ] Email receiving works

---

## 🔧 Troubleshooting

### **Issue: Domain doesn't load**

**Possible causes:**
- DNS not propagated yet (wait longer)
- Wrong IP address entered
- Typo in DNS records

**Fix:**
```powershell
# Verify DNS is pointing correctly
nslookup myconsulting.network
# Should show Google Cloud IP
```

---

### **Issue: SSL certificate not working**

**Cause:** Google is still provisioning the certificate (can take up to 24 hours)

**Fix:** Just wait - it will appear automatically

---

### **Issue: Email stopped working**

**Fix:**
1. Go back to Squarespace DNS
2. Verify all 5 MX records are present
3. Add them back if missing
4. Wait 1-2 hours for DNS update

---

## 📊 Quick Reference

### **What You're Setting Up:**

```
Current URL:    https://myconsulting-network-osfc7yil5q-uc.a.run.app
↓
New URL:        https://myconsulting.network
WWW URL:        https://www.myconsulting.network

Email:          Stays at @myconsulting.network (no change)
```

### **DNS Records to Add:**

From Google Cloud Console:
- **A record** → Root domain to Google IP
- **AAAA record** → Root domain to Google IPv6
- **CNAME record** → www to Google Cloud

Keep existing:
- **MX records** → All 5 for email (DO NOT DELETE!)
- **TXT records** → For verification and SPF

---

## 🎯 Next Steps After Domain is Live

1. **Update email signature** with new website
2. **Share on social media**
3. **Submit sitemap:**
   - Go to: https://search.google.com/search-console
   - Add property: `myconsulting.network`
   - Submit sitemap: `https://myconsulting.network/sitemap.xml`

4. **Set up Google Analytics** (optional)
5. **Monitor with:**
   ```powershell
   # View logs
   gcloud run services logs read myconsulting-network --region=us-central1 --tail
   ```

---

## 🆘 Need Help?

**If you get stuck:**
1. Check the browser window I opened
2. Follow steps carefully
3. Don't delete MX records!
4. Wait for DNS propagation
5. Let me know if you see any errors

---

## 🚀 You're Almost There!

**Complete the setup in your browser, update DNS in Squarespace, then wait for propagation!**

Your professional domain will be live soon! 🎉

