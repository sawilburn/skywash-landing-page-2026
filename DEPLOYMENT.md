# Deployment Guide - Skywash Innovations

## Quick Deploy Options

### Option 1: Deploy to Netlify (Recommended - 2 minutes)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings (should auto-detect):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Add environment variables:
     - `VITE_SUPABASE_URL` (from your .env file)
     - `VITE_SUPABASE_ANON_KEY` (from your .env file)
   - Click "Deploy site"

### Option 2: Deploy to Vercel

1. Push code to GitHub (same as above)
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Add the same environment variables
6. Deploy

### Option 3: Deploy to Supabase Hosting

```bash
npx supabase link --project-ref YOUR_PROJECT_REF
npx supabase deploy
```

## What Works in Production vs Preview

| Feature | Preview | Production |
|---------|---------|------------|
| Form submissions → Database | ✅ | ✅ |
| Email notifications | ✅ | ✅ |
| Zoho CRM sync | ❌ | ✅ |

The preview environment (WebContainer) has network restrictions that block external API calls to Zoho. Once deployed to production, all features will work correctly.

## Environment Variables Required

Make sure these are set in your hosting platform:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Post-Deployment

After deployment:
1. Test a form submission to verify Zoho CRM sync works
2. Check your Zoho CRM to confirm leads are appearing
3. Verify email notifications are being sent
4. Test all pages and forms

## Custom Domain (Optional)

Once deployed, you can add your custom domain (e.g., skywashinnovations.com) through your hosting platform's domain settings.
