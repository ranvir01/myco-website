# MyConsulting Network Website

A modern, SEO-optimized website for MyConsulting Network built with Next.js 14, featuring interactive animations and responsive design.

## 🚀 Features

- **SEO Optimized**: Server-side rendering with Next.js, meta tags, structured data, and sitemap
- **Interactive 3D Globe**: Animated network visualization using Three.js
- **Business/Talent Toggle**: Dynamic content switching with smooth animations
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Contact Form**: Integrated quote request modal with validation
- **Modern Animations**: Smooth transitions using Framer Motion
- **Fast Performance**: Optimized for Core Web Vitals

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

## 🚀 Deployment to Netlify

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Leave other settings as default
6. Click "Deploy site"

### Method 2: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build your site:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod
```

4. Follow the prompts to authenticate and deploy

## 🌐 Connecting Your Squarespace Domain

1. In Netlify, go to your site settings → "Domain management"
2. Click "Add custom domain"
3. Enter your domain name
4. Netlify will provide you with DNS settings
5. In Squarespace:
   - Go to Settings → Domains → [Your Domain] → DNS Settings
   - Add the DNS records provided by Netlify
   - This typically includes:
     - A record pointing to Netlify's IP
     - CNAME record for www subdomain
6. Wait for DNS propagation (can take up to 48 hours, usually much faster)
7. Enable HTTPS in Netlify (automatic after DNS verification)

### DNS Records Example:
```
Type: A
Name: @
Value: 75.2.60.5 (Netlify's load balancer IP)

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

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

