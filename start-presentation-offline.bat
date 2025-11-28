@echo off
echo ========================================
echo GlobalNext Blockchain Session (Offline)
echo ========================================
echo.
echo This will build and serve the presentation
echo for offline use (no dev server needed)
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

REM Navigate to frontend directory
cd /d "%~dp0frontend\blockchain-session"
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo.
    pause
    exit /b 1
)

echo [1/2] Building presentation for production...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Build failed!
    echo.
    pause
    exit /b 1
)

echo.
echo [2/2] Starting preview server...
echo.
echo ========================================
echo Presentation ready!
echo Browser will open automatically...
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Wait a moment then open browser
timeout /t 3 /nobreak >nul
start "" "http://localhost:4173" >nul 2>&1

REM Start the preview server
call npm run preview

pause


