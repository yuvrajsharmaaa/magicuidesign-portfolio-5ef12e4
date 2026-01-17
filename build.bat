@echo off
color 0A
echo ========================================
echo Yuvraj Portfolio - Build Script
echo ========================================
echo.

REM Check Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo.
    echo Please install Node.js from:
    echo https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [SUCCESS] Node.js found
node --version
echo.

REM Check npm
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed!
    echo.
    pause
    exit /b 1
)

echo [SUCCESS] npm found
npm --version
echo.

echo ========================================
echo Step 1: Cleaning Previous Build
echo ========================================
echo.

if exist ".next" (
    echo Removing .next folder...
    rmdir /s /q ".next"
)

if exist "node_modules" (
    echo Removing node_modules folder...
    rmdir /s /q "node_modules"
)

if exist "package-lock.json" (
    echo Removing package-lock.json...
    del /f /q "package-lock.json"
)

echo Clean complete!
echo.

echo ========================================
echo Step 2: Installing Dependencies
echo ========================================
echo.

npm install --legacy-peer-deps

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to install dependencies!
    echo.
    pause
    exit /b 1
)

echo.
echo [SUCCESS] Dependencies installed!
echo.

echo ========================================
echo Step 3: Building Project
echo ========================================
echo.

npm run build

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Build failed!
    echo Check the errors above.
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo [SUCCESS] Build Complete!
echo ========================================
echo.
echo Your portfolio is ready to deploy!
echo.
echo Next steps:
echo 1. Push code to GitHub:
echo    git add .
echo    git commit -m "Fixed build configuration"
echo    git push origin master --force
echo.
echo 2. Redeploy on Vercel (automatic)
echo    or manually trigger in Vercel dashboard
echo.
echo To test locally:
echo   npm run dev
echo   Open: http://localhost:3000
echo.

pause
