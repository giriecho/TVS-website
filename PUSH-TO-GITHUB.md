# Push TVS Website to GitHub - Quick Guide

## 📋 Prerequisites

Before pushing to GitHub, you need:

1. **GitHub Account** - If you don't have one, create at https://github.com/join
2. **Personal Access Token (PAT)** - Required for authentication

### Creating a Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "TVS Website Deployment"
4. Select scopes: **✅ repo** (Full control of private repositories)
5. Click "Generate token"
6. **COPY THE TOKEN** - You won't see it again!

## 🚀 Method 1: Using the Helper Script (Easiest)

I've created a script to make this easy:

```bash
cd /Users/echoit/TVS/starlight-showcase-main
./push-to-github.sh
```

The script will:
- Ask for your GitHub username
- Configure the remote repository
- Guide you through pushing your code

## 🔧 Method 2: Manual Steps

### Step 1: Create Repository on GitHub

1. Go to: https://github.com/new
2. Fill in:
   - Repository name: `TVS-website`
   - Description: "Trishul Visionary Studios - Official Website"
   - Public or Private (your choice)
   - ⚠️ **DO NOT** check "Initialize this repository with a README"
3. Click "Create repository"

### Step 2: Add Remote and Push

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
cd /Users/echoit/TVS/starlight-showcase-main

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/TVS-website.git

# Push your code
git push -u origin main
```

### Step 3: Authenticate

When prompted:
- **Username**: Your GitHub username
- **Password**: Paste your Personal Access Token (PAT), NOT your GitHub password

## ✅ Verification

After pushing, verify your code is on GitHub:

1. Visit: `https://github.com/YOUR_USERNAME/TVS-website`
2. You should see all your files
3. Check that both commits are present

## 🔍 Troubleshooting

### Error: "Repository not found"

**Solution**: Create the repository on GitHub first (Step 1 above)

### Error: "Authentication failed"

**Solutions**:
1. Make sure you're using a Personal Access Token, not your password
2. Verify the token has `repo` scope
3. Check that your username is correct

### Error: "Remote already exists"

**Solution**: Remove the old remote and add new one:
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/TVS-website.git
git push -u origin main
```

### Error: "Updates were rejected"

**Solution**: The remote repository has content. Make sure it's empty, or use:
```bash
git push -u origin main --force
```
⚠️ Use `--force` only if you're sure!

## 📊 What Gets Pushed

Your repository will include:
- ✅ All source code (React + Vite app)
- ✅ All pages and components
- ✅ Story Submission form
- ✅ All assets (images, GIFs)
- ✅ Configuration files
- ✅ Documentation files
- ✅ Production build (dist folder)
- ✅ 2 commits with full history

Files excluded by `.gitignore`:
- ❌ node_modules/
- ❌ .DS_Store
- ❌ IDE-specific files

## 🎯 After Pushing

Once your code is on GitHub, you can:

1. **Share the repository** with team members
2. **Set up GitHub Actions** for automated deployment
3. **Configure branch protection** for the main branch
4. **Enable GitHub Pages** (if needed)
5. **Connect to S3 deployment** pipeline

## 📞 Need Help?

Common issues and solutions:
- Can't find your token? Generate a new one at https://github.com/settings/tokens
- Wrong repository name? Rename on GitHub: Settings → Repository name
- Want to make it private? Settings → Change repository visibility

## 🔗 Useful Commands

```bash
# Check current remote
git remote -v

# View commit history
git log --oneline

# Check repository status
git status

# View the last commit
git show HEAD

# Change remote URL if needed
git remote set-url origin https://github.com/NEW_USERNAME/TVS-website.git
```

## 🌐 Repository URL Format

Your repository will be accessible at:
- **Web**: `https://github.com/YOUR_USERNAME/TVS-website`
- **Clone HTTPS**: `https://github.com/YOUR_USERNAME/TVS-website.git`
- **Clone SSH**: `git@github.com:YOUR_USERNAME/TVS-website.git`

---

**Ready to push?** Run: `./push-to-github.sh` or follow Method 2 above! 🚀
