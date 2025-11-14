# Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── CNAME                   # Custom domain config
│   ├── assets/                 # Static assets (images, PDFs, etc.)
│   └── vite.svg               # Favicon
├── src/
│   ├── components/            # React components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Navigation.jsx
│   ├── styles/                # Shared styles
│   │   └── variables.css
│   ├── assets/                # Component-specific assets
│   ├── App.jsx                # Main app component
│   ├── App.css                # Main styles
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies
└── README.md                  # Project documentation
```

## Key Files

- **src/components/**: All React components organized by page
- **src/styles/**: Shared CSS variables and utilities
- **public/assets/**: Static files (CV, images, etc.)
- **.github/workflows/**: Automated deployment to GitHub Pages

## Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
```
