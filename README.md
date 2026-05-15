# Last Page — Personal Blog & Writing Platform

A minimalist blogging platform built with **Astro 4**, styled with custom CSS, and powered by **GitHub + Vercel** for content management and deployment.

---

## 📍 Project Location & Storage

**Current Directory:** `~/Downloads/last-page/`

You can move this folder anywhere you want (rename, relocate to another drive, etc.). Since it's a git repository, all history and remote links will stay intact.

**To move the folder:**
```bash
mv ~/Downloads/last-page ~/path/to/your/new/location/last-page
cd ~/path/to/your/new/location/last-page
```

The repository is linked to: `https://github.com/ozymandiasv/last-page`

---

## 🚀 Quick Start

### Run Locally (Development)
```bash
cd ~/Downloads/last-page
npm run dev
```
Then open `http://localhost:3000` in your browser. Changes hot-reload automatically.

### Build for Production
```bash
npm run build
npm run preview  # test the production build locally
```

---

## 📝 Admin Panel & Publishing

**URL:** `https://last-page-ruddy.vercel.app/admin` (or local: `http://localhost:3000/admin`)

### Login Credentials
- **Password:** `lastpage2025`
- **GitHub Token:** Create one at https://github.com/settings/tokens with `repo` scope
  - Must have write access to: `ozymandiasv/last-page`

### Publish Workflow
1. Navigate to `/admin`
2. Enter password + GitHub token, click "Sign In"
3. Choose content type: **Blog**, **Essay**, **Verse**, or **Note**
4. Fill in:
   - **Title** (required)
   - **Subtitle** (optional, for some types)
   - **Body** (markdown supported)
   - **Date** (auto-fills today)
   - **Category** (dropdown menu)
   - **Tags** (comma-separated)
   - **Cover Image URL** (optional)
   - **Preview** (only for verses)
5. Click "Publish" → creates a new markdown file in your GitHub repo
6. **Vercel auto-deploys** within 1–2 minutes

---

## 📂 Content Directory Structure

```
src/content/
├── blogs/      → Blog posts (articles, observations, stories)
├── essays/     → Long-form arguments and deep thoughts
├── verses/     → Poetry, fragments, verse
└── notes/      → Tweet-length thoughts and quick notes
```

Each post is a **markdown file** (`.md`) with **YAML frontmatter**. Example:

```markdown
---
title: My First Post
type: blog
date: 2026-05-15
category: Life
tags: memory, travel
cover: https://images.unsplash.com/...
---

Your content goes here...
```

---

## 🌐 Live Deployment

**Site URL:** `https://last-page-ruddy.vercel.app`  
**Deployment Platform:** Vercel  
**Auto-Deploy:** Every push to `origin/main` triggers a rebuild

### Deployment Steps
1. Make changes locally
2. Push to GitHub (see below)
3. Vercel rebuilds automatically (~1–2 minutes)
4. Changes appear live

---

## 💾 Upload Changes via Git (Terminal)

### Quick Commit & Push
```bash
cd ~/Downloads/last-page
git add .
git commit -m "your commit message here"
git push
```

### Common Commands
```bash
# Check current status
git status

# View recent commits
git log --oneline -5

# Pull latest changes from remote
git pull

# Undo last commit (keep changes locally)
git reset HEAD~1

# Force push (use with caution!)
git push --force
```

### Example Workflow
```bash
# After making changes to files
cd ~/Downloads/last-page
git add -A                    # stage all changes
git commit -m "update header styling"  # create a commit
git push                      # upload to GitHub
# → Vercel detects the push and rebuilds automatically
```

---

## 🎨 Header & Navigation

### Desktop View
- **Logo** (OIV / Last Page) centered at top
- **Menu** centered below: Home, Blog, Essay, Verse, Notes, Archive, About
- **Social icons** (X, Reddit) + theme toggle on the right

### Mobile View (<680px)
- **Logo** (OIV / Last Page) centered at top
- **Hamburger menu button** (three lines)
- Click hamburger to reveal full menu + social links
- **Auto-closes** when you click a link

### Files
- Header markup: `src/layouts/Base.astro`
- Header styles: Built-in `<style>` block in the same file

---

## 🔧 Social Links & Customization

### Update Your Social Links
Edit `src/layouts/Base.astro` and find the social links section:

```html
<a href="https://x.com/theozymandiasiv" target="_blank">...</a>
<a href="https://www.reddit.com/user/spellriddle/" target="_blank">...</a>
```

Replace URLs with your own, then:
```bash
git add src/layouts/Base.astro
git commit -m "update social links"
git push
```

### Update Admin Password
Edit `src/pages/admin/index.astro`, find the `login()` function, and change `lastpage2025` to your new password.

---

## 📋 File Organization Reference

```
last-page/
├── README.md              ← You are here
├── astro.config.mjs       ← Astro configuration
├── package.json           ← Node dependencies
├── src/
│   ├── pages/
│   │   ├── index.astro    ← Homepage
│   │   ├── about.astro    ← About page
│   │   ├── admin/         ← Admin panel
│   │   ├── blog/          ← Blog post detail pages
│   │   ├── types/         ← Category/type filter pages
│   │   └── ...
│   ├── layouts/
│   │   └── Base.astro     ← Main header/footer layout
│   ├── content/           ← Your published content
│   │   ├── blogs/
│   │   ├── essays/
│   │   ├── verses/
│   │   └── notes/
│   ├── lib/
│   │   ├── content.js     ← Content loading functions
│   │   └── data.js        ← Metadata & sample data
│   └── styles/
├── public/                ← Static files (images, CSS)
└── .github/
    └── workflows/         ← GitHub Actions (if any)
```

---

## 🐛 Troubleshooting

### Changes Don't Appear After Push
1. **Wait 1–2 minutes** for Vercel to rebuild
2. **Hard-refresh** your browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
3. Check Vercel dashboard: https://vercel.com/dashboard

### Admin Panel Not Loading
- Clear browser cache or open an Incognito tab
- Make sure you're at `https://last-page-ruddy.vercel.app/admin` (live) or `http://localhost:3000/admin` (local)
- Check console for errors: F12 → Console tab

### GitHub Token Issues
- Token must have `repo` scope: https://github.com/settings/tokens
- Token must not be expired
- Generate a fresh one if unsure

---

## 📚 Additional Resources

- **Astro Docs:** https://docs.astro.build
- **Markdown Guide:** https://www.markdownguide.org
- **GitHub Docs:** https://docs.github.com
- **Vercel Docs:** https://vercel.com/docs

---

## 🔑 Key Info At a Glance

| Item | Details |
|------|---------|
| **Live Site** | https://last-page-ruddy.vercel.app |
| **Admin Panel** | `/admin` (login required) |
| **Admin Password** | `lastpage2025` |
| **GitHub Repo** | https://github.com/ozymandiasv/last-page |
| **Deploy Platform** | Vercel (auto-deploy on push) |
| **Framework** | Astro 4 |
| **Content Storage** | GitHub (markdown files) |
| **Social Links** | X: @theozymandiasiv, Reddit: u/spellriddle |

---

**Last Updated:** May 15, 2026  
**Questions?** Refer back to this file or check the respective docs linked above.
