# Cyber Ronin // Neural Edges

A responsive, full-viewport Cyber Ronin landing page with an animated cursor/touch spotlight and entrance effects. Built with **vanilla HTML, CSS, and JavaScript**. No framework, Node.js, or build step is required.

## Project structure

```text
cyber-ronin/
├── .github/
│   └── workflows/
│       └── deploy.yml   # Auto-deploy on pushes to main
├── src/
│   ├── main.js          # Cursor spotlight + entrance animations
│   └── styles.css       # Styling and responsive layouts
├── .gitignore
├── .nojekyll
├── index.html           # Entry page
└── README.md
```

## Deploy to GitHub Pages

1. Create a GitHub repository (for example, `cyber-ronin`).
2. Upload **all of the project files and folders**, including the hidden `.github` folder, to the repository root. Commit them to the `main` branch.
3. In the repository, open **Settings → Pages**. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Go to the **Actions** tab and watch the **Deploy Cyber Ronin to GitHub Pages** workflow. It runs automatically on each push to `main`; you can also run it manually using **Run workflow**.
5. Once the workflow succeeds, find the URL under **Settings → Pages**. For a normal project repository, it will typically look like `https://YOUR_USERNAME.github.io/cyber-ronin/`.

> If the repository uses a different default branch, change `branches: [main]` in `.github/workflows/deploy.yml` to that branch name.

## Preview locally

Open `index.html` directly in your browser, or serve the directory locally:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Customize

- Page text and image URLs: `index.html`
- Layout, colors, animation and responsive behavior: `src/styles.css`
- Spotlight radius and scroll effects: `src/main.js`

The page currently uses externally hosted imagery and online fonts. They require an internet connection and depend on the original hosting providers remaining available.
