@echo off
echo Pushing changes to GitHub...

:: Add all files
git add .

:: Commit changes
git commit -m "Add forgot password page and login attempts feature with Breaking Bad theme"

:: Add GitHub remote if not already added
:: Replace YOUR_GITHUB_USERNAME and YOUR_REPO_NAME with your actual GitHub username and repository name
:: Uncomment and edit the following line if you need to add the remote
:: git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git

:: Push changes to GitHub
git push -u origin main

:: If you're using a different branch than main, replace "main" with your branch name
:: For example: git push -u origin master

echo Done!
pause 