# MyConsulting Network Website

Corporate site for **MyConsulting Network** (`myconsulting.network`) — a two-sided marketplace positioning businesses and consulting talent.

**Live:** [myconsulting.network](https://myconsulting.network)  
**Hosted on:** Google Cloud Run (Docker + Cloud Build)

## What it is

- Next.js + TypeScript + Tailwind marketing site
- Animated 3D network globe hero (Three.js / React Three Fiber)
- Business / Talent mode toggle, quote modal, Framer Motion scroll UX
- Partner referral financial model docs/calculators in-repo

## Honest note on "AI" UI labels

Some components are named with an `AI` prefix for UX polish (greetings / styled CTAs). They are **not** LLM product features. Real AI-assisted work on this project was in design/build tooling, not an in-app model.

## Quick start

```bash
npm install
npm run dev
```

## Deploy

See `START_DEPLOYMENT_HERE.md` and Cloud Run / Docker docs in this repo.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Form Validation**: React Hook Form + Zod
- **Icons**: React Icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔄 Syncing Changes Across Devices

This repository is set up to automatically sync changes across all your devices. After making any edits:

### Quick Sync (Recommended)
Run the included sync script:
```bash
./sync-changes.sh
```
Or use the git alias:
```bash
git sync
```

This will:
- ✅ Add all your changes
- 💾 Commit with an automatic timestamp message
- 🚀 Push to GitHub
- 🔄 Make changes available on all your devices

### Manual Sync Steps
If you prefer to do it manually:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### Pulling Changes on Other Devices
When working on another device:
```bash
git pull origin main
```

**Important**: Always run `git pull` before starting work on a new device to get the latest changes.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management

### Updating Network Section

Edit `src/components/Sections/NetworkSection.tsx` to add/update consultant profiles:

```typescript
const consultants = [
  { name: "Name", role: "Role Title", image: null },
  // Add more consultants
];
```

### Updating Portfolio Section

Edit `src/components/Sections/PortfolioSection.tsx` to add/update projects:

```typescript
const projects = [
  {
    icon: <Icon />,
    title: "Project Title",
    description: "Project description",
    tags: ["Tag1", "Tag2"],
  },
  // Add more projects
];
```

### Form Submission

The contact form in `src/components/ContactForm/QuoteModal.tsx` currently logs to console. To integrate with your backend:

1. Replace the `onSubmit` function with your API endpoint
2. Or integrate with services like Formspree, Netlify Forms, or EmailJS

Example with fetch:
```typescript
const onSubmit = async (data: FormData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  // Handle response
};
```

## 🚀 Deployment to Google Cloud Run

Your site is configured for Google Cloud Run with automatic SSL and global CDN.

### Quick Deploy

```powershell
# One command deployment
gcloud run deploy myconsulting-network --source . --region=us-central1 --allow-unauthenticated
```

### Complete Setup Guides

Choose the guide that fits your needs:

1. **[START_DEPLOYMENT_HERE.md](START_DEPLOYMENT_HERE.md)** - Simple step-by-step (recommended)
2. **[COMPLETE_DEPLOYMENT_GUIDE.md](COMPLETE_DEPLOYMENT_GUIDE.md)** - Comprehensive guide with all details
3. **[DEPLOYMENT_QUICK_REFERENCE.md](DEPLOYMENT_QUICK_REFERENCE.md)** - Quick command reference
4. **[SQUARESPACE_DNS_SETUP.md](SQUARESPACE_DNS_SETUP.md)** - DNS configuration guide
5. **[WHAT_I_DID_FOR_YOU.md](WHAT_I_DID_FOR_YOU.md)** - Complete feature list

### Automated Script

```bash
# Run the automated deployment script
bash deploy-to-gcloud.sh
```

The script handles:
- ✅ Authentication
- ✅ Project setup
- ✅ API enablement
- ✅ Deployment to Cloud Run
- ✅ URL generation

## 🌐 Connecting Your Squarespace Domain

After deployment, connect your custom domain:

1. **Map domain in Google Cloud:**
   ```powershell
   gcloud run domain-mappings create --service=myconsulting-network --domain=myconsulting.network --region=us-central1
   ```

2. **Get DNS records:**
   ```powershell
   gcloud run domain-mappings describe myconsulting.network --region=us-central1
   ```

3. **Update DNS in Squarespace:**
   - Add A record → Google Cloud IP
   - Add AAAA record → Google Cloud IPv6
   - Add CNAME (www) → ghs.googlehosted.com
   - **Keep MX records for email!**

**Detailed instructions:** See [SQUARESPACE_DNS_SETUP.md](SQUARESPACE_DNS_SETUP.md)

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: "#1B7F4E",
    light: "#56B365",
    dark: "#0F5A35",
  },
  // ...
}
```

### Animations

Modify animation variants in `src/lib/animations.ts`

### SEO

Update metadata in `src/app/layout.tsx`:
- Title and description
- Open Graph tags
- Structured data
- Social media links

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_GOOGLE_ANALYTICS=your-ga-id
```

## 📊 Performance

The website is optimized for:
- ✅ Core Web Vitals
- ✅ Lighthouse scores
- ✅ Fast initial load
- ✅ Smooth animations
- ✅ SEO best practices

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:
1. Delete `.next` folder and `node_modules`
2. Run `npm install` again
3. Run `npm run build`

### Three.js Canvas Issues

If the 3D globe doesn't render:
1. Ensure WebGL is supported in the browser
2. Check console for errors
3. Try disabling browser extensions

## 📞 Support

For questions or issues with the website, contact your development team or refer to the documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

## 📄 License

© 2025 MyConsulting Network. All rights reserved.

# Auto-deploy test - 10/21/2025 13:27:50
