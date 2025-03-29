@echo off
echo Starting simple GitHub push process...

:: Stage only the essential files we've modified
git add src/app/auth/page.tsx src/app/auth/forgot-password/page.tsx src/app/layout.tsx

:: Commit with a simple message
git commit -m "Update auth pages"

:: Create a new GitHub repository manually at https://github.com/new
:: Then run the following command with your info
:: git remote add github_new https://github.com/YOUR_USERNAME/YOUR_REPO.git
:: git push -u github_new main

echo.
echo NEXT STEPS:
echo 1. Create a new GitHub repository at https://github.com/new
echo 2. Copy your new repository URL
echo 3. Run these commands (replace the URL with yours):
echo.
echo    git remote add github_new https://github.com/YOUR_USERNAME/YOUR_REPO.git
echo    git push -u github_new main
echo.
echo Done with preparation!
pause 