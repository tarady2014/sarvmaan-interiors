# GitHub Push Guide for tarady2014

## Your GitHub Profile
- **Username:** tarady2014
- **Profile URL:** https://github.com/tarady2014

## Step-by-Step Instructions

### Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Fill in:
   - **Repository name:** `sarvmaan-interiors`
   - **Description:** Premium interior design website - SarvMaan Home Superhero
   - **Visibility:** Public (so it's visible to everyone)
   - **DO NOT** initialize with README
3. Click **"Create repository"**

### Step 2: Setup Git Locally

Open Terminal and run these commands:

```bash
cd /Users/yogeshtarade/Downloads/sarvmaan-interiors

# Initialize git
git init

# Add your GitHub repository
git remote add origin https://github.com/tarady2014/sarvmaan-interiors.git

# Set main branch
git branch -M main
```

### Step 3: Configure Git (First Time Only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 4: Add Files & Commit

```bash
# Add all files (respects .gitignore)
git add .

# Verify what will be committed
git status

# Make initial commit
git commit -m "Initial commit: SarvMaan Home Superhero website"
```

### Step 5: Push to GitHub

```bash
git push -u origin main
```

**Important:** You'll be prompted for authentication. Options:

**Option A: Personal Access Token (Recommended)**
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `repo`
4. Copy the token
5. Paste as password when prompted

**Option B: GitHub CLI**
```bash
brew install gh
gh auth login
```

**Option C: SSH Key**
```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
# Follow prompts, then add public key to GitHub Settings
```

### Step 6: Verify on GitHub

Visit: https://github.com/tarady2014/sarvmaan-interiors

You should see:
- ✅ src/ folder
- ✅ public/ folder  
- ✅ package.json
- ✅ README.md
- ❌ NO .md documentation files (they stay local)

## After First Push

For future updates:

```bash
# Make changes to files...

# Stage and commit
git add .
git commit -m "Describe your changes"

# Push
git push origin main
```

## Optional: Deploy to Vercel

Once your code is on GitHub:

1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Import your repository: `tarady2014/sarvmaan-interiors`
4. Click "Import"
5. Vercel will auto-detect Next.js
6. Click "Deploy"

Your site will be live! 🎉

## Troubleshooting

**"fatal: not a git repository"**
```bash
git init
```

**"fatal: could not read Username"**
- Use Personal Access Token instead of password
- Or setup GitHub CLI with `gh auth login`

**Want to remove accidentally committed files?**
```bash
git rm --cached *.md
git commit -m "Remove local docs"
git push
```

**Check what's been pushed:**
```bash
git log --oneline
```

## Files Structure

Your GitHub repo will contain:

```
sarvmaan-interiors/
├── src/
│   ├── app/              ✅ All pages
│   ├── components/       ✅ All components
│   ├── data/             ✅ Project data
│   ├── lib/              ✅ Utilities
│   └── hooks/            ✅ Custom hooks
├── public/
│   ├── images/           ✅ All images
│   └── *.svg             ✅ SVG files
├── package.json          ✅ Dependencies
├── tsconfig.json         ✅ TypeScript config
├── next.config.ts        ✅ Next.js config
├── tailwind.config.ts    ✅ Tailwind config
├── eslint.config.mjs     ✅ ESLint config
├── postcss.config.mjs    ✅ PostCSS config
├── README.md             ✅ GitHub README
└── .gitignore            ✅ Ignore rules
```

**NOT included (stays local):**
- AGENTS.md, CLAUDE.md, DESIGN_COMPLETE.md, etc.
- node_modules/
- .next/
- .env files

---

## Quick Command Summary

```bash
# First time setup
cd /Users/yogeshtarade/Downloads/sarvmaan-interiors
git init
git remote add origin https://github.com/tarady2014/sarvmaan-interiors.git
git branch -M main
git add .
git commit -m "Initial commit: SarvMaan Home Superhero website"
git push -u origin main

# Future updates
git add .
git commit -m "Your message"
git push
```

---

## Ready to Push?

Follow Steps 1-5 above. Once done, your code will be at:
**https://github.com/tarady2014/sarvmaan-interiors**

Share that URL with your team and they can clone it:
```bash
git clone https://github.com/tarady2014/sarvmaan-interiors.git
cd sarvmaan-interiors
npm install
npm run dev
```

Good luck! 🚀
