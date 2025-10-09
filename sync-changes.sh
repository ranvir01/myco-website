#!/bin/bash

# Sync Changes Script
# This script commits all changes and pushes them to the remote repository

echo "🔍 Checking for changes..."

# Check if there are any changes to commit
if git diff --quiet && git diff --staged --quiet; then
    echo "✅ No changes to commit. Repository is up to date."
    exit 0
fi

echo "📝 Adding all changes..."
git add .

echo "💾 Committing changes..."
# Generate a commit message with timestamp
commit_message="Update website - $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$commit_message"

echo "🚀 Pushing to remote repository..."
git push origin main

echo "✅ All changes synced successfully!"
echo "Your website updates are now available on all devices."
