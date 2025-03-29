@echo off
echo Pushing changes to a new GitHub repository...

:: Add all files
git add .

:: Commit changes
git commit -m "Add forgot password page and login attempts feature with Breaking Bad theme"

:: Create a new GitHub repository first at https://github.com/new
:: Then add the new remote with a different name
:: Replace YOUR_GITHUB_USERNAME and YOUR_REPO_NAME with your actual GitHub username and repository name
git remote add github_heisenberg https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git

:: Push changes to the new GitHub repository
git push -u github_heisenberg main

:: If you're using a different branch than main, replace "main" with your branch name
:: For example: git push -u github_heisenberg master

echo Done!
pause 