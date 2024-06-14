#!/bin/bash

# Fetch the latest changes from the remote
git fetch origin

# Get the current branch name
branch=$(git rev-parse --abbrev-ref HEAD)

# Compare the local branch with the remote development branch
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/development)

if [ $LOCAL != $REMOTE ]; then
    echo "Your branch is not up to date with the development branch. Please pull the latest changes from development."
    exit 1
else
    echo "Your branch is up to date with the development branch."
fi
