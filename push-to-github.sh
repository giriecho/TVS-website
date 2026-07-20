#!/bin/bash

# TVS Website - Push to GitHub Script
# This script will help you push your code to GitHub

echo "========================================="
echo "TVS Website - GitHub Push Helper"
echo "========================================="
echo ""

# Check if remote already exists
if git remote | grep -q origin; then
    echo "✅ Remote 'origin' already configured:"
    git remote -v
    echo ""
    read -p "Do you want to remove it and add a new one? (y/n): " remove_remote
    if [ "$remove_remote" = "y" ]; then
        git remote remove origin
        echo "✅ Removed old remote"
    else
        echo "Keeping existing remote. You can push with: git push -u origin main"
        exit 0
    fi
fi

echo "Please provide your GitHub details:"
echo ""
read -p "Enter your GitHub username: " github_username
echo ""

# Default repository name
repo_name="TVS-website"
echo "Repository name will be: $repo_name"
echo ""

# Construct the repository URL
repo_url="https://github.com/${github_username}/${repo_name}.git"

echo "========================================="
echo "Configuration Summary:"
echo "========================================="
echo "GitHub Username: $github_username"
echo "Repository Name: $repo_name"
echo "Repository URL: $repo_url"
echo ""

read -p "Is this correct? (y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo "❌ Cancelled. Please run the script again."
    exit 1
fi

echo ""
echo "Adding remote repository..."
git remote add origin "$repo_url"

if [ $? -eq 0 ]; then
    echo "✅ Remote added successfully!"
    echo ""
    echo "Remote configuration:"
    git remote -v
    echo ""
    
    read -p "Do you want to push now? (y/n): " push_now
    
    if [ "$push_now" = "y" ]; then
        echo ""
        echo "========================================="
        echo "Pushing to GitHub..."
        echo "========================================="
        echo ""
        echo "📝 Note: You may be asked for your GitHub credentials"
        echo "   Username: Your GitHub username"
        echo "   Password: Use a Personal Access Token (PAT), not your password"
        echo ""
        echo "   Create a PAT at: https://github.com/settings/tokens"
        echo ""
        
        git push -u origin main
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "========================================="
            echo "✅ SUCCESS!"
            echo "========================================="
            echo ""
            echo "Your code has been pushed to:"
            echo "https://github.com/${github_username}/${repo_name}"
            echo ""
            echo "Next steps:"
            echo "1. Visit your repository on GitHub"
            echo "2. Set up GitHub Pages (if needed)"
            echo "3. Configure deployment to S3"
            echo ""
        else
            echo ""
            echo "========================================="
            echo "❌ Push failed"
            echo "========================================="
            echo ""
            echo "Common issues:"
            echo "1. Repository doesn't exist on GitHub"
            echo "   → Create it at: https://github.com/new"
            echo "   → Name: $repo_name"
            echo "   → Don't initialize with README"
            echo ""
            echo "2. Authentication failed"
            echo "   → Use a Personal Access Token instead of password"
            echo "   → Create at: https://github.com/settings/tokens"
            echo ""
            echo "3. Repository already has content"
            echo "   → Make sure the repository is empty"
            echo ""
            echo "Try again with: git push -u origin main"
        fi
    else
        echo ""
        echo "Remote configured but not pushed."
        echo "When you're ready to push, run:"
        echo "  git push -u origin main"
    fi
else
    echo "❌ Failed to add remote. Please check the URL and try again."
    exit 1
fi
