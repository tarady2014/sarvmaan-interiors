# GitHub Push - Quick Commands

## One-Time Setup (First Time Only)

```bash
cd /Users/yogeshtarade/Downloads/sarvmaan-interiors

# Initialize git
git init

# Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: SarvMaan Home Superhero website"

# Push to GitHub
git push -u origin main
```

## Regular Workflow (After Setup)

```bash
# Make changes to files...

# Stage changes
git add .

# Commit
git commit -m "Your descriptive message"

# Push
git push origin main
```

## Useful Commands

```bash
# Check status
git status

# See what will be committed
git diff --cached

# View commit history
git log --oneline

# Undo last commit (before push)
git reset --soft HEAD~1
```

---

## What Gets Pushed vs What Stays Local

### ✅ PUSHED TO GITHUB
- All source code (src/)
- All components
- Configuration files
- Public assets
- README.md
- package.json

### 📌 STAYS LOCAL (.gitignore)
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

---

## Need Help?

1. **Check if git is installed:** `git --version`
2. **Configure git locally:**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
3. **Generate Personal Access Token** (if using HTTPS with 2FA):
   - Go to GitHub → Settings → Developer settings → Personal access tokens
   - Create token with 'repo' scope
   - Use token as password

---

**Ready? Share your GitHub repo details and we'll verify!** 🚀
