# Yuvraj's Portfolio

A modern, high-performance portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Live Site

**Production:** [https://yuvrajsh.me](https://yuvrajsh.me)

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS 4.1.18
- **Animations:** Motion (Framer Motion 12.x)
- **Content:** MDX with Content Collections
- **UI Components:** Radix UI
- **Code Highlighting:** Shiki & Rehype Pretty Code
- **Deployment:** Vercel

## ⚡ Features

- ⚡ **Blazing Fast** - Optimized with Next.js 16 App Router
- 🎨 **Modern UI** - Beautiful design with Tailwind CSS
- 🌙 **Dark Mode** - Built-in theme switching
- 📱 **Fully Responsive** - Works on all devices
- 🔒 **Secure** - Security headers configured
- ♿ **Accessible** - WCAG compliant
- 📝 **MDX Blog** - Write content with MDX
- ✨ **Smooth Animations** - Engaging user experience
- 🎯 **SEO Optimized** - Meta tags and sitemap
- 🚀 **Performance** - 90+ Lighthouse scores

## 📦 Installation

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0 (or pnpm/yarn)

### Setup

1. **Clone the repository:**
```bash
git clone https://github.com/yuvrajsharmaaa/yuvrajsh.me.git
cd yuvrajsh.me
```

2. **Install dependencies:**
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open your browser:**
```
http://localhost:3000
```

## 🏗️ Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📝 Project Structure

```
├── public/              # Static assets
│   ├── fonts/          # Custom fonts
│   └── *.png           # Images
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── blog/      # Blog pages
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Homepage
│   ├── components/     # React components
│   │   ├── magicui/   # UI animations
│   │   ├── mdx/       # MDX components
│   │   ├── section/   # Page sections
│   │   └── ui/        # UI components
│   ├── data/          # Site data
│   │   └── resume.tsx # Personal info
│   └── lib/           # Utilities
├── content/           # MDX blog posts
├── next.config.mjs    # Next.js config
├── tailwind.config.ts # Tailwind config
└── tsconfig.json      # TypeScript config
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/resume.tsx`:

```typescript
export const DATA = {
  name: "Your Name",
  initials: "YN",
  url: "https://yoursite.com",
  location: "Your Location",
  description: "Your description...",
  // ... rest of your data
}
```

### Add Blog Posts

Create MDX files in the `content/` directory:

```bash
content/
  └── my-new-post.mdx
```

### Modify Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Use Tailwind classes

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Import your repository
   - Click "Deploy"

3. **Configure Custom Domain:**
   - In Vercel: Settings → Domains
   - Add your domain: `yuvrajsh.me`
   - Update DNS records as instructed

### Environment Variables

If needed, add environment variables in Vercel:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID` (for analytics)

## 🔧 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Security Vulnerabilities

```bash
# Auto-fix vulnerabilities
npm audit fix

# Force fix (use with caution)
npm audit fix --force
```

### Type Errors

```bash
# Check types
npx tsc --noEmit
```

## 📊 Performance

- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## 🔒 Security

- Security headers configured
- Content Security Policy
- XSS Protection
- HTTPS enforced (via Vercel)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Connect

- **GitHub:** [@yuvrajsharmaaa](https://github.com/yuvrajsharmaaa)
- **LinkedIn:** [Yuvraj Sharma](https://www.linkedin.com/in/yuvrajsharma03/)
- **X:** [@bacardisharma](https://x.com/bacardisharma)
- **YouTube:** [@TheEngineeRooom](https://www.youtube.com/@TheEngineeRooom)
- **Instagram:** [@work4bacardi](https://www.instagram.com/work4bacardi)

## 🙏 Acknowledgments

Built with inspiration from the amazing web development community.

---

Made with ❤️ by Yuvraj
