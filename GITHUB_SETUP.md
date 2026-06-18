# 🚀 GitHub Setup Guide

This guide walks you through replacing the old repository history with this improved project as the **only contributor**.

---

## Step 1 — Initialize a fresh Git history

Run these commands inside the project folder (`resume-builder-v2/`):

```bash
# Remove the old git history entirely
rm -rf .git

# Initialize a brand-new git repo
git init

# Set your identity (change to your details)
git config user.name "Your Name"
git config user.email "you@example.com"

# Stage all files
git add .

# Make the first commit (only you as author)
git commit -m "🚀 Initial release: ResumeForge v2.0

- Complete UI redesign with dark animated interface
- Added LinkedIn, GitHub, and portfolio fields
- Rewritten form with live add/remove sections
- Improved About page with skills, timeline, and CTA
- Responsive layout with sidebar + preview panel
- Updated all 4 resume themes
- No external author references"
```

---

## Step 2 — Create / connect your GitHub repository

### Option A — Brand new repository
1. Go to [github.com/new](https://github.com/new)
2. Name it `resume-builder` (or whatever you prefer)
3. Leave it **empty** (no README, no .gitignore)
4. Click **Create repository**

### Option B — Replace an existing repository
If you already have the old repo at `github.com/yourusername/Resume-Builder-`, continue below.

---

## Step 3 — Push to GitHub

```bash
# Add your remote (replace with YOUR username and repo name)
git remote add origin https://github.com/yourusername/resume-builder.git

# Rename branch to main
git branch -M main

# Force-push (overwrites old history — only you will appear as contributor)
git push -u origin main --force
```

---

## Step 4 — Add repository description on GitHub

After pushing:
1. Go to your repository on GitHub
2. Click the ⚙️ gear icon next to **About**
3. Set **Description**: `A modern resume builder with live preview, multiple themes, and one-click PDF export. Built with React.`
4. Set **Website**: your deployment URL (e.g. Netlify or Vercel link)
5. Add **Topics**: `resume-builder`, `react`, `javascript`, `open-source`, `frontend`, `chakra-ui`

---

## Step 5 — Deploy (optional but recommended for portfolio)

### Netlify (recommended)
```bash
npm run build
# Then drag the /build folder to netlify.com/drop
```

Or connect GitHub repo directly at [app.netlify.com](https://app.netlify.com).

### Vercel
```bash
npm install -g vercel
vercel
```

---

## ✅ Verification

After pushing, verify:
- Go to **Contributors** tab — only your name should appear
- Check **Commits** — single clean commit from you
- README renders correctly on the repo homepage

---

## 📌 Quick Reference

| Command | Purpose |
|---|---|
| `rm -rf .git` | Wipe all old git history |
| `git init` | Start fresh repo |
| `git push --force` | Overwrite remote with your history |
