# 🚀 Deployment Guide

## Quick Deploy to Vercel

### Prerequisites
- [ ] GitHub account
- [ ] Code pushed to GitHub
- [ ] Domain purchased (yuvrajsh.me)

### Step 1: Deploy to Vercel

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your repository
   - Click "Import"

3. **Configure (Auto-detected)**
   ```
   Framework Preset: Next.js ✅
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   Node.js Version: 18.x (or higher)
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - ✅ Site live at: `https://your-project.vercel.app`

### Step 2: Add Custom Domain

**In Vercel Dashboard:**

1. Go to your project
2. Settings → Domains
3. Add domain: `yuvrajsh.me`
4. Also add: `www.yuvrajsh.me`

**Vercel will provide DNS records to configure**

### Step 3: Configure DNS

**Go to your domain registrar** (where you bought yuvrajsh.me)

#### For Apex Domain (yuvrajsh.me):

```
Type: A
Name: @
Value: 76.76.21.21

Type: A
Name: @
Value: 76.76.19.19
```

#### For WWW Subdomain:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 4: Wait for Propagation

- DNS propagation: 5 minutes - 48 hours
- SSL certificate: Automatic (5-10 minutes)
- Check status: https://dnschecker.org

---

## 🔧 Troubleshooting

### Build Failed

**Error: "Module not found"**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Error: "Type errors"**
```bash
# Check TypeScript
npx tsc --noEmit
```

### Security Vulnerabilities

The 2 moderate vulnerabilities are likely in dev dependencies and won't affect production.

**To fix:**
```bash
npm audit fix
# or force fix (use caution)
npm audit fix --force
```

### Deployment Timeout

If build times out:
1. Check Vercel build logs
2. Ensure `next.config.mjs` is correct
3. Check for large files in repo

### Domain Not Working

1. Verify DNS records are correct
2. Wait up to 48 hours for propagation
3. Clear browser cache (Ctrl + Shift + R)
4. Try incognito mode

---

## 📊 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Images displaying properly
- [ ] Dark mode works
- [ ] Blog posts load
- [ ] Social links work
- [ ] Mobile responsive
- [ ] HTTPS enabled (green padlock)
- [ ] Custom domain working
- [ ] SEO meta tags present

---

## 🔄 Continuous Deployment

Once set up, Vercel auto-deploys when you push to GitHub:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Vercel automatically:
1. Detects the push
2. Runs build
3. Deploys new version
4. Updates live site

---

## 🌍 Environment Variables (Optional)

If needed, add in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://yuvrajsh.me
NEXT_PUBLIC_SITE_NAME=Yuvraj Portfolio
```

---

## 📈 Performance Monitoring

**Vercel Analytics** (Free):
- Go to project → Analytics
- Automatic performance tracking
- No code changes needed

**Google Analytics** (Optional):
1. Get GA4 tracking ID
2. Add to environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Implement in `layout.tsx`

---

## 🆘 Get Help

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Next.js Docs**: https://nextjs.org/docs

---

**Your site will be live at:**
- ✅ https://yuvrajsh.me
- ✅ https://www.yuvrajsh.me
- ✅ https://your-project.vercel.app

🎉 **Congratulations! Your portfolio is live!**
