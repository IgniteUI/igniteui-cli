#!/bin/bash
set -euo pipefail

BRANCH="${1:-master}"
BASE="$(cd "$(dirname "$0")" && pwd)"
SUBMODULES=(
  angular/igniteui-angular
  angular/igniteui-angular-examples
  blazor/igniteui-blazor-examples
  common/igniteui-xplat-docs
  react/igniteui-react-examples
  webcomponents/igniteui-wc-examples
)

for sub in "${SUBMODULES[@]}"; do
  dir="$BASE/$sub"
  echo "--- $sub ---"
  # CI checks out only the submodules the framework being built actually needs, so
  # anything uninitialized here is skipped rather than aborting the run.
  if [ ! -e "$dir/.git" ]; then
    echo "not initialized — skipping"
    continue
  fi
  git -C "$dir" fetch origin
  if git -C "$dir" rev-parse --verify "origin/$BRANCH" >/dev/null 2>&1 \
     || git -C "$dir" fetch origin "$BRANCH:refs/remotes/origin/$BRANCH" 2>/dev/null; then
    git -C "$dir" checkout "$BRANCH" && git -C "$dir" pull
  else
    echo "Branch '$BRANCH' not found, using master"
    git -C "$dir" checkout master && git -C "$dir" pull
  fi
done
