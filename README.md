# GlobalNext Blockchain Knowledge Sharing Session

Interactive blockchain knowledge-sharing presentation for GlobalNext team members.

## 🚀 Quick Start

### For Presenters - Easy Launch

**Option 1: Double-Click Start (Windows)**
1. Double-click `start-presentation.bat`
2. Wait for dependencies to install (first time only)
3. Browser will open automatically to the presentation
4. Press `Enter` or `Space` to navigate slides

**Option 2: Manual Start**
```bash
cd frontend/blockchain-session
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## 📋 Requirements

- **Node.js** (v16 or higher) - Download from https://nodejs.org/
- **npm** (comes with Node.js)

## ⌨️ Keyboard Controls

- **Next Slide**: `Enter`, `Space`, `→`, `Page Down`
- **Previous Slide**: `←`, `Page Up`
- **First Slide**: `Home`
- **Last Slide**: `End`

## 🌐 GitHub Pages Deployment

This repository is configured for automatic deployment to GitHub Pages.

### Initial Setup

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to `main` branch

3. **Update Base Path (if needed)**
   - The deployment workflow automatically sets the base path to your repository name
   - If you need to change it, edit `.github/workflows/deploy.yml` and update the `VITE_BASE_PATH` environment variable

### Access Your Presentation

After deployment, your presentation will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

### Manual Deployment

If you need to deploy manually:
```bash
cd frontend/blockchain-session
npm run build
# The dist folder will be ready for deployment
```

## 🛠️ Development

### Project Structure
```
/
├── ai.md                          # Project documentation
├── docs/                          # Session content and storyboard
├── frontend/
│   └── blockchain-session/        # React/Vite presentation app
│       ├── src/
│       │   ├── components/        # Slide components
│       │   ├── data/
│       │   │   └── slides.js     # Slide content (edit here!)
│       │   └── App.jsx
│       └── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Pages deployment
└── README.md
```

### Editing Slides

All slide content is stored in `frontend/blockchain-session/src/data/slides.js`. Edit this file to update presentation content.

### Building for Production

```bash
cd frontend/blockchain-session
npm run build
```

The built files will be in `frontend/blockchain-session/dist/`

## ❓ Troubleshooting

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

### GitHub Pages not updating
- Check the **Actions** tab in your GitHub repository for deployment status
- Ensure GitHub Pages is enabled in repository Settings
- Verify the workflow file (`.github/workflows/deploy.yml`) is committed

## 📚 Additional Resources

- See `QUICK-START.txt` for quick reference
- See `README-START.md` for detailed setup instructions
- See `ai.md` for project architecture and guidelines

## 👥 Team Access

Once deployed to GitHub Pages, share the URL with your team:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

The presentation works on all devices and browsers, making it easy for team members to access from anywhere.

