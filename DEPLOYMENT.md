# Deployment Guide for AutomateFlow Portfolio

## Deploying to Supabase with Custom Domain

### Prerequisites
- Supabase account (sign up at https://supabase.com)
- Your domain: **automateflow.live**
- Node.js and npm installed

### Step 1: Build Your Project

Build the production version of your site:

```bash
npm run build
```

This creates a `dist/` folder with your production-ready files.

### Step 2: Deploy to Supabase Storage

#### Option A: Using Supabase Dashboard (Recommended for First Deploy)

1. **Go to Supabase Dashboard**
   - Navigate to https://app.supabase.com
   - Create a new project or select existing project
   - Name: `automateflow` (or your preferred name)
   - Database Password: Create a secure password
   - Region: Choose closest to your users

2. **Enable Storage**
   - Go to Storage section in left sidebar
   - Create a new bucket named `website` or `portfolio`
   - Set bucket to **Public** (Important for hosting)

3. **Upload Your Built Files**
   - Click on your bucket
   - Upload all files from the `dist/` folder
   - Make sure to upload the folder structure, not just individual files
   - Ensure `index.html` is at the root level

4. **Configure Storage Policies**
   - Go to Storage > Policies
   - Enable public read access:
   ```sql
   CREATE POLICY "Public Access"
   ON storage.objects FOR SELECT
   USING ( bucket_id = 'website' );
   ```

#### Option B: Using Supabase CLI

1. **Install Supabase CLI**
   ```bash
   npm install -g supabase
   ```

2. **Login to Supabase**
   ```bash
   supabase login
   ```

3. **Link Your Project**
   ```bash
   supabase link --project-ref your-project-ref
   ```
   (Find your project ref in Project Settings > General)

4. **Deploy Storage Bucket**
   Create a bucket and upload files using the CLI or API

### Step 3: Deploy Using Alternative Hosting (Recommended)

**Supabase Storage is primarily for data storage, not static site hosting.**

For a production website with custom domain, use one of these better alternatives:

#### Option 1: Vercel (Recommended) ⭐

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   - Follow prompts
   - Link to your GitHub repo (optional but recommended)

3. **Add Custom Domain**
   - Go to Vercel Dashboard > Your Project > Settings > Domains
   - Add `automateflow.live`
   - Add DNS records to your domain provider:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

#### Option 2: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod
   ```
   - Choose `dist` as publish directory

3. **Add Custom Domain**
   - Go to Domain Settings
   - Add `automateflow.live`
   - Update DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   ```

#### Option 3: Cloudflare Pages

1. **Connect GitHub Repository**
   - Go to https://pages.cloudflare.com
   - Connect your GitHub account
   - Select your repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Framework preset: Vite

3. **Add Custom Domain**
   - Go to Custom Domains
   - Add `automateflow.live`
   - Cloudflare will automatically configure DNS if domain is on Cloudflare

### Step 4: Configure Custom Domain DNS

If your domain registrar is not Cloudflare, add these DNS records:

**For Vercel:**
```
A Record:
Name: @
Value: 76.76.21.21
TTL: Automatic

CNAME Record:
Name: www
Value: cname.vercel-dns.com
TTL: Automatic
```

**For Netlify:**
```
A Record:
Name: @
Value: 75.2.60.5
TTL: Automatic

CNAME Record:
Name: www
Value: [your-site-name].netlify.app
TTL: Automatic
```

### Step 5: Verify SSL Certificate

After DNS propagation (can take up to 48 hours, usually 1-2 hours):
- SSL certificate should be automatically provisioned
- Your site will be accessible at https://automateflow.live

### Continuous Deployment (Recommended)

#### Using Vercel with GitHub:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/automateflow.git
   git push -u origin main
   ```

2. **Connect Vercel to GitHub**
   - Go to https://vercel.com/new
   - Import your repository
   - Every push to `main` branch will auto-deploy

#### Using Netlify with GitHub:

1. **Push to GitHub** (same as above)

2. **Connect Netlify to GitHub**
   - Go to https://app.netlify.com/start
   - Choose "Import from Git"
   - Select your repository
   - Configure build settings
   - Every push will auto-deploy

### Environment Variables (If Needed Later)

If you add backend features:

**Vercel:**
- Go to Project Settings > Environment Variables
- Add variables like `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`

**Netlify:**
- Go to Site Settings > Build & Deploy > Environment
- Add environment variables

### Performance Optimization

Your site is already optimized, but for production:

1. **Enable Compression**
   - Vercel/Netlify handle this automatically

2. **Set Cache Headers**
   - Create `vercel.json`:
   ```json
   {
     "headers": [
       {
         "source": "/assets/(.*)",
         "headers": [
           {
             "key": "Cache-Control",
             "value": "public, max-age=31536000, immutable"
           }
         ]
       }
     ]
   }
   ```

3. **Add Redirect Rules**
   - Create `public/_redirects` (for Netlify):
   ```
   /*    /index.html   200
   ```

## Summary

**Recommended Deployment Path:**

1. ✅ Build: `npm run build`
2. ✅ Deploy to Vercel: `vercel --prod`
3. ✅ Add domain: `automateflow.live` in Vercel dashboard
4. ✅ Update DNS records at your domain registrar
5. ✅ Wait for DNS propagation (1-2 hours)
6. ✅ Access your site at https://automateflow.live

**Cost:** Free tier is sufficient for your portfolio site
**SSL:** Automatic and free
**CDN:** Global edge network included
**Updates:** Push to GitHub to auto-deploy

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Domain DNS Help:** Contact your domain registrar support

## Your Current Setup

- Domain: `automateflow.live`
- Tech Stack: Vite + React + TypeScript
- Build Output: `dist/`
- Build Command: `npm run build`
