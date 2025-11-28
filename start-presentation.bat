@echo off
echo ========================================
echo GlobalNext Blockchain Session Launcher
echo ========================================
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

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm is not installed!
    echo Please install Node.js (which includes npm) from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [1/3] Checking Node.js and npm...
node --version
npm --version
echo.

REM Navigate to frontend directory
cd /d "%~dp0frontend\blockchain-session"
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo Please make sure you're running this from the project root directory.
    echo.
    pause
    exit /b 1
)

echo [2/3] Installing dependencies...
echo This may take a few minutes on first run...
echo.
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Failed to install dependencies!
    echo.
    pause
    exit /b 1
)

echo.
echo [3/3] Starting development server...
echo.
echo ========================================
echo Server starting...
echo Browser will open automatically...
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Wait a moment then open browser
start "" "http://localhost:5173" >nul 2>&1

REM Start the dev server
call npm run dev

pause

