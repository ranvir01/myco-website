# Deployment Guide - MyConsulting Network Website

## 🚀 Netlify Deployment (Recommended)

### Prerequisites
- GitHub account
- Netlify account (free tier is sufficient)
- Your Squarespace domain details

---

## Method 1: Deploy via GitHub (Easiest)

### Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
cd d:\MyCo\website
git init
git add .
git commit -m "Initial commit: MyConsulting Network website"
```

2. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it `myconsulting-network-website`
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/myconsulting-network-website.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Authorize Netlify to access your repositories
5. Select `myconsulting-network-website`

### Step 3: Configure Build Settings

Netlify should auto-detect Next.js. Verify these settings:

```
Build command: npm run build
Publish directory: .next
Node version: 18 or higher (set in netlify.toml if needed)
```

### Step 4: Deploy

1. Click "Deploy site"
2. Wait for build to complete (2-5 minutes)
3. Your site will be live at `random-name-123456.netlify.app`

### Step 5: Custom Domain Setup

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your Squarespace domain (e.g., `myconsultingnetwork.com`)
4. Netlify will show DNS configuration needed

---

## Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

Your browser will open for authentication.

### Step 3: Initialize Site

```bash
cd d:\MyCo\website
netlify init
```

Follow the prompts:
- "Create & configure a new site"
- Choose your team
- Enter site name: `myconsulting-network`
- Build command: `npm run build`
- Deploy directory: `.next`

### Step 4: Deploy

```bash
netlify deploy --prod
```

---

## 🌐 Connecting Your Squarespace Domain

### Option A: Point to Netlify (Recommended)

1. **Get Netlify DNS Records**
   - In Netlify: Site settings → Domain management → Add custom domain
   - Enter your domain name
   - Netlify will provide DNS records

2. **Update Squarespace DNS**
   - Log into Squarespace
   - Go to Settings → Domains
   - Click on your domain
   - Click "DNS Settings"
   - Add these records:

   ```
   Type: A
   Host: @
   Value: 75.2.60.5
   TTL: 3600

   Type: CNAME
   Host: www
   Value: your-site-name.netlify.app
   TTL: 3600
   ```

3. **Wait for Propagation**
   - DNS changes take 1-48 hours (usually under 2 hours)
   - Check status: https://www.whatsmydns.net/

4. **Enable HTTPS in Netlify**
   - After DNS verification, Netlify will auto-provision SSL certificate
   - Your site will be accessible via https://yourdomain.com

### Option B: Use Netlify DNS (Alternative)

1. **Add Domain in Netlify**
   - Site settings → Domain management
   - Click "Add domain"

2. **Update Nameservers in Squarespace**
   - Netlify will provide nameservers (e.g., dns1.p01.nsone.net)
   - In Squarespace: Settings → Domains → [Your Domain]
   - Click "Use Custom Nameservers"
   - Enter Netlify's nameservers
   - Save changes

3. **Wait for Propagation**
   - Can take 24-48 hours
   - Netlify will handle all DNS automatically

---

## 📝 Environment Variables

If you need environment variables:

### In Netlify Dashboard:
1. Site settings → Environment variables
2. Add variables one by one:
   - `NEXT_PUBLIC_API_URL`
   - `NEXT_PUBLIC_GA_ID`
   - etc.

### Via netlify.toml:
Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🔄 Continuous Deployment

Once connected to GitHub, Netlify automatically:
- Deploys on every push to `main` branch
- Creates preview deployments for pull requests
- Runs build checks before deployment

### To Deploy Updates:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

Netlify will auto-deploy in 2-3 minutes.

---

## 🧪 Testing Before Production

### Preview Deployment:

```bash
netlify deploy
```

This creates a preview URL to test before going live.

### Production Deployment:

```bash
netlify deploy --prod
```

Only use this after testing preview.

---

## 🚨 Troubleshooting

### Build Fails on Netlify

**Error:** "Module not found"
- **Fix:** Ensure all dependencies are in `package.json`
- Run `npm install` locally to verify

**Error:** "Build exceeded memory limit"
- **Fix:** Upgrade Netlify plan or optimize build

**Error:** TypeScript errors
- **Fix:** Run `npm run build` locally first to catch errors

### Domain Not Working

**Check DNS Propagation:**
```bash
nslookup yourdomain.com
```

Should return Netlify's IP address.

**Clear DNS Cache:**
- Windows: `ipconfig /flushdns`
- Mac: `sudo dscacheutil -flushcache`
- Linux: `sudo systemd-resolve --flush-caches`

### SSL Certificate Issues

- Wait 24 hours after DNS configuration
- Ensure DNS is properly configured
- Try "Renew certificate" in Netlify dashboard

---

## 📊 Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads at custom domain
- [ ] HTTPS is working (padlock icon in browser)
- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Images and assets load
- [ ] Mobile responsiveness works
- [ ] SEO metadata is correct (view source)
- [ ] Google can crawl site (submit sitemap to Search Console)
- [ ] No console errors (F12 to check)
- [ ] Analytics are tracking (if configured)

---

## 🎯 Optimization Tips

### Performance

1. **Enable Netlify CDN** (automatic)
2. **Compress images** before uploading
3. **Lazy load images** (already implemented)
4. **Enable Brotli compression** in Netlify

### SEO

1. **Submit sitemap** to Google Search Console:
   - URL: `https://yourdomain.com/sitemap.xml`
2. **Add Google Analytics**
3. **Set up Google Tag Manager**
4. **Monitor Core Web Vitals**

### Monitoring

1. **Netlify Analytics** ($9/month)
2. **Google Search Console** (free)
3. **Sentry for error tracking** (free tier available)
4. **Uptime monitoring** (UptimeRobot, free)

---

## 💰 Costs

**Netlify:**
- Free tier: 100GB bandwidth, 300 build minutes/month
- Pro: $19/month (unlimited bandwidth, priority builds)
- For most consulting sites, free tier is sufficient

**Domain:**
- Already owned via Squarespace
- No additional cost for DNS configuration

**SSL:**
- Free via Let's Encrypt (automatic with Netlify)

---

## 🆘 Support Resources

**Netlify:**
- Docs: https://docs.netlify.com/
- Community: https://answers.netlify.com/
- Status: https://www.netlifystatus.com/

**Next.js:**
- Docs: https://nextjs.org/docs
- Deployment: https://nextjs.org/docs/deployment

**DNS:**
- What's My DNS: https://www.whatsmydns.net/
- DNS Propagation Checker: https://dnschecker.org/

---

**Deployment Guide Version:** 1.0  
**Last Updated:** October 8, 2025  
**Status:** ✅ Ready for Production Deployment

