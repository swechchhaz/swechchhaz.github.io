# Swechchha Rahangdale: portfolio website

Built with Next.js and Tailwind. All the words on the site live in one file: `lib/content.ts`.
Anything shown in a red dashed box on the site is a `[TODO]` that still needs your real information.

## Run it on your computer (first time)

1. Install Node.js (the LTS version) from https://nodejs.org
2. Open this folder in VS Code, then open a terminal (Terminal > New Terminal).
3. Run `npm install` (downloads the pieces the site needs; takes a minute).
4. Run `npm run dev`, then open http://localhost:3000 in your browser.
   Edit a file, save it, and the page updates by itself.

## Put it on the internet (GitHub Pages)

1. The repository must be named exactly `swechchhaz.github.io` and be Public.
2. Upload the folders (`app`, `components`, `lib`, `public`) and the loose files by dragging them in. Check that the list shows paths like `app/page.tsx`.
3. Add `.github/workflows/deploy.yml` (it builds and publishes the site).
4. In Settings > Pages, set Source to GitHub Actions.
5. Watch the Actions tab for a green check. The site is at https://swechchhaz.github.io
