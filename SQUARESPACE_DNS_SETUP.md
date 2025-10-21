# 🌐 Squarespace DNS Setup Guide

## Overview
This guide shows you exactly how to configure DNS in Squarespace to point your domain to Google Cloud Run while keeping Google Workspace email working.

---

## ⚠️ IMPORTANT: Before You Start

**CRITICAL:** Do NOT delete your existing MX records! Your email will stop working!

**What we're doing:**
- ✅ Adding new A and AAAA records for your website
- ✅ Adding new CNAME record for www subdomain
- ✅ KEEPING all existing MX records for email
- ✅ KEEPING any existing TXT records for domain verification

---

## 📋 Step 1: Get Your DNS Values from Google Cloud

First, you need to get the DNS values from Google Cloud:

```powershell
# Get DNS records for your domain
gcloud run domain-mappings describe myconsulting.network `
  --region=us-central1
```

**Save these values - you'll need them!** They will look like:

```
resourceRecords:
- name: myconsulting.network
  type: A
  rrdata: 216.239.32.21
- name: myconsulting.network
  type: AAAA
  rrdata: 2001:4860:4802:32::15
```

---

## 📋 Step 2: Log into Squarespace

1. Go to: https://account.squarespace.com
2. Log in with your Squarespace account
3. Click on your domain: **myconsulting.network**

---

## 📋 Step 3: Access DNS Settings

### Option A: Squarespace Domains

1. Go to **Settings** → **Domains**
2. Click on **myconsulting.network**
3. Click **DNS Settings**
4. Click **Manage DNS Records**

### Option B: External Domain (if domain is not hosted by Squarespace)

1. Go to **Settings** → **Domains**
2. Click on **myconsulting.network**
3. Click **Advanced Settings**
4. Click **External DNS**

---

## 📋 Step 4: Take a Screenshot of Current DNS

**VERY IMPORTANT:** Before making any changes:

1. Take a screenshot of all your current DNS records
2. Save this screenshot somewhere safe
3. This is your backup in case something goes wrong

**Look for and document:**
- All MX records (for email)
- Any TXT records (for domain verification)
- Any existing A or CNAME records

---

## 📋 Step 5: Add/Update DNS Records

### Record 1: A Record (Root Domain)

**If an A record already exists for @ or root domain:**
1. Click **Edit** next to the existing A record
2. Update the value to the IP from your gcloud command (e.g., `216.239.32.21`)

**If no A record exists:**
1. Click **Add Record**
2. Select **A Record**
3. Fill in:
   - **Host:** `@` (or leave blank if Squarespace uses @ automatically)
   - **Value:** The IP from gcloud (e.g., `216.239.32.21`)
   - **TTL:** `3600` (1 hour)
4. Click **Save**

---

### Record 2: AAAA Record (IPv6)

1. Click **Add Record**
2. Select **AAAA Record**
3. Fill in:
   - **Host:** `@` (or leave blank)
   - **Value:** The IPv6 from gcloud (e.g., `2001:4860:4802:32::15`)
   - **TTL:** `3600`
4. Click **Save**

---

### Record 3: CNAME Record (WWW Subdomain)

**If a CNAME record already exists for www:**
1. Click **Edit** next to the existing CNAME record
2. Update the value to: `ghs.googlehosted.com`

**If no CNAME record exists:**
1. Click **Add Record**
2. Select **CNAME Record**
3. Fill in:
   - **Host:** `www`
   - **Value:** `ghs.googlehosted.com`
   - **TTL:** `3600`
4. Click **Save**

---

## 📋 Step 6: Verify Email Records Are Still There

**CRITICAL:** Make sure these MX records still exist:

```
Type: MX
Priority: 1
Host: @ (or root)
Value: aspmx.l.google.com

Type: MX
Priority: 5
Host: @ (or root)
Value: alt1.aspmx.l.google.com

Type: MX
Priority: 5
Host: @ (or root)
Value: alt2.aspmx.l.google.com

Type: MX
Priority: 10
Host: @ (or root)
Value: alt3.aspmx.l.google.com

Type: MX
Priority: 10
Host: @ (or root)
Value: alt4.aspmx.l.google.com
```

**If any are missing, ADD THEM BACK!**

To add MX records:
1. Click **Add Record**
2. Select **MX Record**
3. Fill in the priority and value from above
4. Repeat for all 5 MX records

---

## 📋 Step 7: Check for TXT Records

Look for any TXT records, especially:

1. **Google Workspace Verification**
   - Looks like: `google-site-verification=XXXXXXXXXXXXX`
   - **Keep this!**

2. **SPF Record for Email**
   - Looks like: `v=spf1 include:_spf.google.com ~all`
   - **Keep this!**

3. **DKIM Records**
   - Host usually looks like: `google._domainkey`
   - **Keep these!**

**If you accidentally deleted any, you can re-verify your domain in Google Workspace.**

---

## 📋 Step 8: Save All Changes

1. Review all your DNS records one more time
2. Make sure MX records are intact
3. Click **Save** or **Apply Changes**
4. Close the DNS settings

---

## ⏰ Step 9: Wait for DNS Propagation

**How long?**
- Minimum: 15 minutes
- Typical: 1-2 hours
- Maximum: 24-48 hours

**Why so long?**
- DNS changes need to propagate across the internet
- Different DNS servers update at different times
- TTL (Time To Live) settings affect this

---

## ✅ Step 10: Verify DNS Changes

### Method 1: Online Tools

1. Go to: https://whatsmydns.net
2. Enter: `myconsulting.network`
3. Select: **A** record type
4. Check if it shows your Google Cloud IP address

Repeat for:
- `www.myconsulting.network` (CNAME, should show `ghs.googlehosted.com`)
- `myconsulting.network` (AAAA, should show IPv6 address)

### Method 2: PowerShell Commands

```powershell
# Check A record
nslookup myconsulting.network

# Check CNAME (www)
nslookup www.myconsulting.network

# Check MX records (email)
nslookup -type=MX myconsulting.network
```

### Method 3: Google Cloud Command

```powershell
# Check domain mapping status
gcloud run domain-mappings describe myconsulting.network `
  --region=us-central1
```

---

## 📧 Step 11: Verify Email Still Works

After DNS changes propagate:

### Send Test:
1. Open Gmail
2. Compose new email from your `@myconsulting.network` address
3. Send to your personal email
4. Verify it arrives

### Receive Test:
1. From your personal email, send to `@myconsulting.network`
2. Check if it arrives in your Gmail

### If Email Doesn't Work:
1. Check MX records in Squarespace (Step 6)
2. Wait for DNS propagation (can take 24-48 hours)
3. Check Google Workspace admin: https://admin.google.com
4. Contact Google Workspace support if needed

---

## 🌐 Step 12: Verify Website Works

Once DNS propagates:

1. **Test main domain:**
   - Visit: https://myconsulting.network
   - Should show your new website
   - Should have green padlock (SSL)

2. **Test www subdomain:**
   - Visit: https://www.myconsulting.network
   - Should show your new website
   - Should redirect or show same content

3. **Test mobile:**
   - Open on your phone
   - Check navigation
   - Check contact form

---

## 🐛 Troubleshooting

### Issue 1: Website Not Loading

**Possible causes:**
- DNS not propagated yet → Wait longer
- Wrong IP address → Double-check gcloud output
- Typo in DNS record → Review Squarespace DNS

**Fix:**
```powershell
# Get correct values again
gcloud run domain-mappings describe myconsulting.network --region=us-central1

# Check current DNS
nslookup myconsulting.network
```

---

### Issue 2: Email Stopped Working

**Possible causes:**
- MX records deleted or modified
- DNS propagation in progress
- Wrong MX record values

**Fix:**
1. Go back to Squarespace DNS settings
2. Verify all 5 MX records are present
3. Correct values (see Step 6)
4. Wait 1-2 hours for DNS update

---

### Issue 3: SSL Certificate Not Working

**Symptoms:**
- "Not Secure" warning in browser
- Certificate errors

**Cause:**
- Google Cloud needs time to provision SSL certificate
- Can take 15 minutes to 24 hours

**Fix:**
```powershell
# Check SSL certificate status
gcloud run domain-mappings describe myconsulting.network `
  --region=us-central1 `
  --format='value(status.conditions)'
```

Wait for certificate to be provisioned automatically.

---

### Issue 4: WWW Not Working

**Cause:**
- CNAME record not set or incorrect

**Fix:**
1. Verify CNAME record in Squarespace:
   - Host: `www`
   - Value: `ghs.googlehosted.com`
2. Wait for DNS propagation

---

### Issue 5: Can't Find DNS Settings in Squarespace

**Solution 1:** Make sure you're in the right place:
- Settings → Domains → [Your Domain] → DNS Settings

**Solution 2:** Check if domain is managed by Squarespace:
- If domain is external, you need to manage DNS at your domain registrar
- Contact Squarespace support: https://support.squarespace.com

**Solution 3:** Use Squarespace Name Servers:
- Your domain might not be using Squarespace name servers
- Check name servers in domain registrar
- Update to Squarespace name servers if needed

---

## 📞 Getting Help

### Squarespace Support:
- **Help Center:** https://support.squarespace.com
- **DNS Guide:** https://support.squarespace.com/hc/en-us/articles/360002101888
- **Contact:** Use chat in Squarespace dashboard

### Google Cloud Support:
- **Documentation:** https://cloud.google.com/run/docs/mapping-custom-domains
- **Community:** https://stackoverflow.com/questions/tagged/google-cloud-run
- **Support:** https://cloud.google.com/support

### Google Workspace Support:
- **Admin Console:** https://admin.google.com
- **MX Records:** https://support.google.com/a/answer/174125
- **Support:** https://support.google.com/a

---

## 📋 DNS Records Quick Reference

### Website Records (Add These):

```
Type: A
Host: @
Value: [IP from gcloud command]
TTL: 3600

Type: AAAA
Host: @
Value: [IPv6 from gcloud command]
TTL: 3600

Type: CNAME
Host: www
Value: ghs.googlehosted.com
TTL: 3600
```

### Email Records (Keep These):

```
Type: MX, Priority: 1, Host: @, Value: aspmx.l.google.com
Type: MX, Priority: 5, Host: @, Value: alt1.aspmx.l.google.com
Type: MX, Priority: 5, Host: @, Value: alt2.aspmx.l.google.com
Type: MX, Priority: 10, Host: @, Value: alt3.aspmx.l.google.com
Type: MX, Priority: 10, Host: @, Value: alt4.aspmx.l.google.com

Type: TXT, Host: @, Value: v=spf1 include:_spf.google.com ~all
Type: TXT, Host: google._domainkey, Value: [from Google Workspace]
```

---

## ✅ Final Checklist

Before considering the setup complete:

- [ ] A record added/updated for root domain
- [ ] AAAA record added for IPv6
- [ ] CNAME record added/updated for www
- [ ] All 5 MX records present
- [ ] SPF TXT record present
- [ ] DKIM records present
- [ ] Screenshot taken of all DNS records
- [ ] Changes saved in Squarespace
- [ ] DNS propagation checked (whatsmydns.net)
- [ ] Website loads at myconsulting.network
- [ ] Website loads at www.myconsulting.network
- [ ] SSL certificate active (green padlock)
- [ ] Can send email from @myconsulting.network
- [ ] Can receive email at @myconsulting.network

---

## 🎉 Success!

If all checks pass, you're done! Your domain is now:
- ✅ Pointing to your new website on Google Cloud
- ✅ Email is working with Google Workspace
- ✅ SSL certificate is active
- ✅ WWW subdomain is working

**Next steps:**
- Update your email signature with new website
- Share your website on social media
- Submit sitemap to Google Search Console

---

**Need more help?** See the main guide: `COMPLETE_DEPLOYMENT_GUIDE.md`

