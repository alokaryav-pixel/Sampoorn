# Sampoorn website

Local copy of the [www.sampoorn.in](https://www.sampoorn.in) site, sourced from GitHub: [alokaryav-pixel/Sampoorn](https://github.com/alokaryav-pixel/Sampoorn).

Use this workspace to edit and preview on localhost, then push to GitHub so Vercel can update the live site.

## Run locally

You need Node.js 22+ (npm is enough; bun is optional).

```sh
npm install
npm run dev
```

The app listens on [http://127.0.0.1:43127](http://127.0.0.1:43127).

Other useful scripts:

```sh
npm run build    # production build
npm run preview  # serve the production build
npm run lint
```

## Push to live (www.sampoorn.in)

The production site is hosted on **Vercel** and is connected to the GitHub repo `alokaryav-pixel/Sampoorn`.

1. Commit your changes.
2. Push to GitHub `main` (the branch Vercel deploys from):

```sh
git push github main
```

Vercel will build and publish to [https://www.sampoorn.in](https://www.sampoorn.in). Do not push until you have reviewed the local preview.

This Cursor workspace remote (`origin`) is separate from GitHub (`github`). Live deploys only happen when you push to GitHub.

## Stack

- TanStack Start (Vite)
- TypeScript / React
- Tailwind CSS
- shadcn/ui

Originally generated with [Lovable](https://lovable.dev). Commits pushed to the connected GitHub branch also sync back to Lovable.
