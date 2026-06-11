#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./push_github.sh "your commit message"
# If no message is provided, it falls back to a default message.

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_ROOT"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: not inside a git repository."
  exit 1
fi

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
MESSAGE="${1:-chore: update homepage content and frontend}"

echo "Current branch: $BRANCH"
echo "Building frontend and syncing dist to repo root..."
npm run sync-root --prefix frontend
echo "Staging changes..."
git add frontend/ index.html assets/ blog/ .nojekyll images/
git add -u assets/ blog/ index.html 2>/dev/null || true

if git diff --cached --quiet; then
  echo "No staged changes to commit."
  exit 0
fi

echo "Committing..."
git commit -m "$MESSAGE"

echo "Pushing to origin/$BRANCH ..."
git push -u origin "$BRANCH"

echo "Done."
