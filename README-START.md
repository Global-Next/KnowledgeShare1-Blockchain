# Quick Start Guide

## For Presenters - Easy Launch

### Option 1: Double-Click Start (Windows)
1. Double-click `start-presentation.bat`
2. Wait for dependencies to install (first time only)
3. Browser will open automatically to the presentation
4. Press `Enter` or `Space` to navigate slides

### Option 2: Manual Start
```bash
cd frontend/blockchain-session
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Requirements
- **Node.js** (v16 or higher) - Download from https://nodejs.org/
- **npm** (comes with Node.js)

## Keyboard Controls
- **Next Slide**: `Enter`, `Space`, `→`, `Page Down`
- **Previous Slide**: `←`, `Page Up`
- **First Slide**: `Home`
- **Last Slide**: `End`

## Troubleshooting

### "Node.js is not installed"
- Download and install Node.js from https://nodejs.org/
- Restart your computer after installation
- Run the batch file again

### "Port 5173 already in use"
- Close any other applications using port 5173
- Or edit `vite.config.js` to use a different port

### "Dependencies failed to install"
- Check your internet connection
- Try running `npm install` manually in the `frontend/blockchain-session` directory
- If issues persist, delete `node_modules` folder and `package-lock.json`, then run again

## For Offline Presentation
The batch file will install everything needed. Once dependencies are installed, you can:
1. Run `npm run build` to create a production build
2. Run `npm run preview` to serve the built version
3. Or use the dev server - it works offline after initial install


