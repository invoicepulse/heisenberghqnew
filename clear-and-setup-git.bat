@echo off
echo Starting complete Git cleanup and fresh setup...

:: Remove any existing Git repository completely
echo Removing any existing Git repository...
rmdir /s /q .git
echo Done.

:: Initialize a fresh Git repository
echo Initializing a new Git repository...
git init
echo Done.

:: Stage the auth files we've modified
echo Staging auth files...
git add src/app/auth/page.tsx src/app/auth/forgot-password/page.tsx src/app/layout.tsx
echo Done.

:: Commit with a simple message
echo Committing changes...
git commit -m "Add authentication pages with Breaking Bad theme"
echo Done.

echo.
echo REMOTES COMPLETELY CLEARED!
echo.
echo NEXT STEPS:
echo 1. Create a NEW GitHub repository at https://github.com/new
echo 2. Copy your new repository URL
echo 3. Run these commands (replace the URL with your NEW repository URL):
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/YOUR_NEW_REPO.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo All old remotes have been removed. You're starting completely fresh!
pause 