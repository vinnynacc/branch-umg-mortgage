# Quick Start Guide 🚀

Get your Branch UMG Mortgage website from code to live in minutes!

## 📋 Prerequisites Checklist

Before you begin, make sure you have:

- [ ] Node.js 18+ installed ([Download here](https://nodejs.org/))
- [ ] A GitHub account ([Sign up here](https://github.com/signup))
- [ ] Git installed on your computer ([Download here](https://git-scm.com/downloads))
- [ ] GoDaddy hosting account with cPanel access
- [ ] Your domain connected to GoDaddy hosting

## 🎯 Three Main Steps

### 1️⃣ Set Up Locally (5 minutes)

```bash
# Navigate to your project folder
cd branch-umg-mortgage

# Install all dependencies
npm install

# Start development server
npm run dev
```

Your site will open at `http://localhost:3000` ✅

### 2️⃣ Push to GitHub (10 minutes)

**Detailed guide:** [GITHUB_SETUP.md](./GITHUB_SETUP.md)

```bash
# Initialize Git
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Branch UMG Mortgage"

# Create repository on GitHub (via website), then:
git remote add origin https://github.com/YOUR_USERNAME/branch-umg-mortgage.git
git branch -M main
git push -u origin main
```

### 3️⃣ Deploy to GoDaddy (15 minutes)

**Detailed guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)

```bash
# Build for production
npm run build
```

Then upload `dist` folder contents to GoDaddy:

1. Log in to GoDaddy → cPanel
2. Open File Manager
3. Navigate to `public_html`
4. Delete existing files
5. Upload all files from your `dist` folder
6. Upload the `.htaccess` file from project root
7. Visit your domain! 🎉

## 🔗 Full Documentation

- **GitHub Setup:** Complete instructions in [GITHUB_SETUP.md](./GITHUB_SETUP.md)
- **GoDaddy Deployment:** Step-by-step guide in [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Project Details:** See [README.md](./README.md)

## ⚡ Quick Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Git
git status           # Check what changed
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Push to GitHub

# Common fixes
rm -rf node_modules  # Remove dependencies
npm install          # Reinstall dependencies
npm run build        # Rebuild project
```

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| npm install fails | Try `npm install --legacy-peer-deps` |
| Port 3000 in use | Change port in `vite.config.ts` or kill process |
| White screen on GoDaddy | Check `.htaccess` file is uploaded |
| 404 on page refresh | Ensure `.htaccess` has SPA routing rules |
| Git push rejected | Run `git pull` first, then `git push` |

## 📞 Support

- **GitHub Issues:** Create an issue in your repository
- **GoDaddy Support:** 1-480-505-8877
- **Documentation:** Read the detailed guides in this folder

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Update all placeholder content
- [ ] Add real contact information
- [ ] Update NMLS license numbers
- [ ] Add privacy policy and terms
- [ ] Test all forms and links
- [ ] Enable SSL certificate on GoDaddy
- [ ] Test on mobile devices
- [ ] Check page load speed
- [ ] Verify all images load
- [ ] Set up Google Analytics (optional)

---

**Ready to launch?** Follow the three steps above, or dive into the detailed guides! 🚀
