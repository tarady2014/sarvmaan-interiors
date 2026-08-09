# GitHub Setup & Deployment Guide

## Step 1: Initialize Git Repository

If you haven't already, initialize git in your project:

```bash
cd /Users/yogeshtarade/Downloads/sarvmaan-interiors
git init
```

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **"New repository"** button
3. Fill in the details:
   - **Repository name:** `sarvmaan-interiors` (or your preferred name)
   - **Description:** "Premium interior design website - SarvMaan Home Superhero"
   - **Visibility:** Choose Public or Private
   - **DO NOT** initialize with README (we already have one)
4. Click **"Create repository"**

## Step 3: Add Remote Repository

After creating the repo, GitHub will show commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/sarvmaan-interiors.git
git branch -M main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Verify .gitignore Configuration

The `.gitignore` file is already configured to exclude:
- ✅ Local documentation files (AGENTS.md, CLAUDE.md, etc.)
- ✅ node_modules
- ✅ .next build folder
- ✅ Environment files (.env*)
- ✅ IDE/OS specific files

**Files that WILL be committed to GitHub:**
- ✅ Source code (src/)
- ✅ Configuration files (package.json, tsconfig.json, etc.)
- ✅ Public assets (public/)
- ✅ README.md (for GitHub)

## Step 5: Add Files & Make First Commit

```bash
# Add all files (respecting .gitignore)
git add .

# Check what will be committed
git status

# Make initial commit
git commit -m "Initial commit: SarvMaan Home Superhero website"
```

## Step 6: Push to GitHub

```bash
git push -u origin main
```

Enter your GitHub credentials when prompted.

## Step 7: Verify on GitHub

1. Visit `https://github.com/YOUR_USERNAME/sarvmaan-interiors`
2. Verify files are there (should NOT see the .md files listed in .gitignore)
3. Check that package.json, src/, public/ are visible

## Step 8: (Optional) Setup for Vercel Deployment

If you want to deploy to Vercel:

1. Go to [Vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Import Project"**
4. Select your `sarvmaan-interiors` repository
5. Click **"Import"**
6. Vercel will auto-detect Next.js settings
7. Add environment variables if needed
8. Click **"Deploy"**

Your site will be live at a Vercel URL!

## Step 9: (Optional) Custom Domain

If you have a custom domain:
1. Go to Vercel project settings
2. Navigate to **"Domains"**
3. Add your custom domain
4. Update DNS records (Vercel will provide instructions)

## Troubleshooting

**Problem:** "fatal: not a git repository"
- **Solution:** Run `git init` first

**Problem:** "fatal: could not read Username"
- **Solution:** Set up GitHub CLI or use Personal Access Token
  ```bash
  git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/sarvmaan-interiors.git
  ```

**Problem:** Files from .gitignore are showing in repo
- **Solution:** 
  ```bash
  git rm --cached *.md  # Remove tracked md files
  git commit -m "Remove local docs from tracking"
  git push
  ```

## File Structure Being Pushed

```
sarvmaan-interiors/
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── lib/
│   └── hooks/
├── public/
│   ├── images/
│   └── *.svg
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
├── README.md
└── .gitignore
```

## Local Documentation Files (NOT pushed)

These files stay locally for development reference:
- AGENTS.md
- CLAUDE.md
- COLOR_TYPOGRAPHY_GUIDE.md
- DEPLOYMENT_GUIDE.md
- DESIGN_COMPLETE.md
- DESIGN_SYSTEM.md
- DOCUMENTATION_INDEX.md
- FILTER_BUTTONS_FIX.md
- IMAGE_GUIDE.md
- IMAGE_LOADING_FIX.md
- INSTALLATION_GUIDE.md
- MOBILE_FIX_SUMMARY.md
- MOBILE_IMPROVEMENTS.md
- PRODUCTION_CHECKLIST.md
- QUICK_START.md
- QUICKSTART.md
- SEO_RECOMMENDATIONS.md
- START_HERE.md
- VISUAL_GUIDE.md
- BLANK_BUTTON_FIX.md

## Next Steps

1. Share your GitHub repository URL with team members
2. They can clone it: `git clone https://github.com/YOUR_USERNAME/sarvmaan-interiors.git`
3. Install dependencies: `npm install`
4. Run locally: `npm run dev`

---

**Ready to push?** Share your GitHub username and we can verify the setup! 🚀
