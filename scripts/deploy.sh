#!/usr/bin/env bash
#
# Deploy to production.
#
# cPanel's git deploy only runs `cp -R out/* public_html` — it does NOT build.
# So the built static export (out/) must be committed and pushed for the server
# to reflect changes. This script does the whole publish in one step:
#   1. commit any uncommitted SOURCE changes (out/ excluded)
#   2. next build  -> regenerate out/
#   3. commit out/ and push -> cPanel serves the fresh files
#
# Usage:
#   npm run deploy                 # auto commit message for pending source
#   npm run deploy -- "your msg"   # custom commit message for pending source
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

branch="$(git rev-parse --abbrev-ref HEAD)"
if [ "$branch" != "main" ]; then
  echo "✗ Deploys go from 'main' (that's what cPanel pulls). You're on '$branch'."
  exit 1
fi

msg="${1:-}"

# 1. Commit pending source changes (everything except the out/ build artifact),
#    so the deployed build always corresponds to a real source commit.
if [ -n "$(git status --porcelain -- . ':(exclude)out')" ]; then
  echo "▸ Committing pending source changes..."
  git add -- . ':(exclude)out'
  git commit -m "${msg:-Update site content}"
else
  echo "▸ No pending source changes."
fi

# 2. Build the static export.
echo "▸ Building static export..."
npm run build

# 3. Commit the rebuilt out/ (kept as its own commit) and push.
git add out
if git diff --cached --quiet; then
  echo "▸ out/ unchanged since last deploy."
else
  git commit -m "chore: deploy build (source @ $(git rev-parse --short HEAD))"
fi

echo "▸ Pushing to main (triggers cPanel deploy)..."
git push origin main

echo "✓ Deployed. cPanel will copy out/ -> public_html."
