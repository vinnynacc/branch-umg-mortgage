# GitHub Repository Setup Guide

This guide will help you create a GitHub repository for your Branch UMG Mortgage website and push your code.

## Step 1: Create a GitHub Account (If You Don't Have One)

1. Go to https://github.com
2. Click **Sign up**
3. Follow the registration process
4. Verify your email address

## Step 2: Create a New Repository on GitHub

### Using GitHub Website:

1. **Log in to GitHub**
2. **Click the '+' icon** in the top-right corner
3. **Select 'New repository'**
4. **Fill in repository details:**
   - **Repository name:** `branch-umg-mortgage` (or your preferred name)
   - **Description:** "Branch UMG Mortgage - Modern mortgage lending landing page"
   - **Visibility:** Choose Private or Public
     - **Private:** Only you can see it (recommended for client work)
     - **Public:** Anyone can see it
   - **Initialize repository:** Leave all checkboxes UNCHECKED
     - Don't add README (we already have one)
     - Don't add .gitignore (we already have one)
     - Don't choose a license yet
5. **Click 'Create repository'**

## Step 3: Install Git (If Not Already Installed)

### Windows:
1. Download from https://git-scm.com/download/win
2. Run the installer with default settings
3. Verify installation: Open Command Prompt and type `git --version`

### Mac:
1. Open Terminal
2. Type `git --version`
3. If not installed, it will prompt you to install Xcode Command Line Tools

### Linux:
```bash
sudo apt-get install git  # Ubuntu/Debian
sudo yum install git      # CentOS/RHEL
```

## Step 4: Configure Git (First-Time Setup)

Open your terminal/command prompt and run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Note:** Use the same email address you used for your GitHub account.

## Step 5: Initialize Git in Your Project

Open terminal/command prompt and navigate to your project folder:

```bash
# Navigate to your project directory
cd /path/to/branch-umg-mortgage

# Initialize Git repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: Branch UMG Mortgage landing page"
```

## Step 6: Connect Your Local Repository to GitHub

After creating the repository on GitHub, you'll see a page with instructions. Copy the repository URL (it looks like `https://github.com/YOUR_USERNAME/branch-umg-mortgage.git`).

Run these commands in your terminal:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/branch-umg-mortgage.git

# Verify the remote was added
git remote -v

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### If You're Asked for Authentication:

#### Option A: HTTPS (Username + Token)
1. GitHub no longer accepts passwords
2. You need to create a Personal Access Token:
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click **Generate new token (classic)**
   - Give it a name like "Branch UMG Mortgage"
   - Select scopes: Check **repo** (full control)
   - Click **Generate token**
   - **COPY THE TOKEN** (you won't see it again!)
3. When pushing, use your username and the token as password

#### Option B: SSH (More Secure, No Password Needed)
1. Generate SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "your.email@example.com"
   ```
2. Press Enter to accept default location
3. Press Enter twice for no passphrase (or set one)
4. Copy your public key:
   ```bash
   # Windows
   type %USERPROFILE%\.ssh\id_ed25519.pub
   
   # Mac/Linux
   cat ~/.ssh/id_ed25519.pub
   ```
5. Add to GitHub:
   - Go to GitHub → Settings → SSH and GPG keys
   - Click **New SSH key**
   - Paste your public key
   - Click **Add SSH key**
6. Change remote URL to SSH:
   ```bash
   git remote set-url origin git@github.com:YOUR_USERNAME/branch-umg-mortgage.git
   ```

## Step 7: Verify Your Repository

1. Go to your GitHub repository page
2. Refresh the page
3. You should see all your files uploaded! ✅

## Common Git Commands for Future Use

### Making Changes and Pushing Updates:

```bash
# Check status of your files
git status

# Add specific files
git add filename.tsx

# Add all changed files
git add .

# Commit your changes
git commit -m "Description of changes"

# Push to GitHub
git push

# Pull latest changes from GitHub
git pull
```

### Viewing History:

```bash
# View commit history
git log

# View simplified history
git log --oneline

# View changes
git diff
```

### Branching (For Advanced Workflows):

```bash
# Create a new branch
git branch feature-name

# Switch to a branch
git checkout feature-name

# Create and switch in one command
git checkout -b feature-name

# List all branches
git branch

# Merge a branch into main
git checkout main
git merge feature-name

# Delete a branch
git branch -d feature-name
```

## Workflow for Making Updates

Whenever you make changes to your website:

1. **Make changes to your code**
2. **Test locally:**
   ```bash
   npm run dev
   ```
3. **Stage your changes:**
   ```bash
   git add .
   ```
4. **Commit your changes:**
   ```bash
   git commit -m "Updated hero section styling"
   ```
5. **Push to GitHub:**
   ```bash
   git push
   ```
6. **Build for production:**
   ```bash
   npm run build
   ```
7. **Deploy to GoDaddy** (see DEPLOYMENT.md)

## .gitignore File

The `.gitignore` file tells Git which files to ignore. We've already created one that excludes:
- `node_modules/` (dependencies)
- `dist/` (build output)
- `.env` files (sensitive data)
- Editor files
- System files

**Never commit:**
- API keys or passwords
- `node_modules` folder
- Build outputs
- Personal environment files

## Best Practices

1. **Commit Often:** Make small, logical commits
2. **Write Clear Messages:** Describe what changed and why
3. **Pull Before Push:** Always pull latest changes before pushing
4. **Use Branches:** For new features, create a branch
5. **Review Changes:** Use `git status` and `git diff` before committing
6. **Backup:** GitHub IS your backup, push regularly

## Troubleshooting

### "Permission denied (publickey)"
- Your SSH key isn't set up correctly
- Use HTTPS method instead or reconfigure SSH

### "Updates were rejected"
- Someone else pushed changes
- Solution: `git pull` first, then `git push`

### "Fatal: not a git repository"
- You're not in the project directory
- Or you forgot to run `git init`

### Accidentally Committed Sensitive Data
1. Remove the file: `git rm --cached filename`
2. Add to `.gitignore`
3. Commit: `git commit -m "Remove sensitive file"`
4. Force push: `git push -f`
5. Change any exposed passwords/keys immediately

### Need to Undo Last Commit
```bash
# Undo commit but keep changes
git reset --soft HEAD~1

# Undo commit and discard changes
git reset --hard HEAD~1
```

## GitHub Repository Settings

### Setting Up GitHub Pages (Optional)

If you want to host a demo on GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

Your site will be available at: `https://YOUR_USERNAME.github.io/branch-umg-mortgage/`

## Collaborating with Others

If working with a team:

1. **Invite Collaborators:**
   - Repository → Settings → Collaborators → Add people

2. **They clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/branch-umg-mortgage.git
   cd branch-umg-mortgage
   npm install
   ```

3. **Workflow:**
   - Create feature branches
   - Make pull requests
   - Review and merge

## Resources

- **Git Documentation:** https://git-scm.com/doc
- **GitHub Guides:** https://guides.github.com
- **Git Cheat Sheet:** https://education.github.com/git-cheat-sheet-education.pdf
- **Interactive Git Tutorial:** https://learngitbranching.js.org

---

**Congratulations!** Your code is now safely stored on GitHub! 🎉

Next step: See [DEPLOYMENT.md](./DEPLOYMENT.md) to deploy to GoDaddy.
