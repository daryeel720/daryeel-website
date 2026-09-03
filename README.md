# Daryeel Community & Senior Centre — Website

Built with Next.js, TypeScript, and Tailwind CSS.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
src/
  app/                 -> every page (folder name = URL path)
    page.tsx           -> homepage
    about/page.tsx      -> /about
    programs/housing/   -> /programs/housing
    ...
  components/          -> shared pieces (Header, Footer, PageHero, etc.)
  lib/site-data.ts      -> nav links, program list, contact info -- edit this
                          file first for most content updates
```

## Placeholders still to fill in

Search the project for `[` to find bracketed placeholders, or check these
specifically:

- `src/lib/site-data.ts` -- phone number, address, email, social links
- `src/app/board-of-directors/page.tsx` -- board member names/photos
- `src/app/team/page.tsx` -- staff names/photos
- `src/app/donate/page.tsx` -- connect a real payment processor (Stripe or
  CanadaHelps)
- `src/app/contact/page.tsx` -- connect the contact form to a real email/form
  service, add a map embed
- `src/app/privacy-policy/page.tsx`, `terms/page.tsx`, `cookie-policy/page.tsx`
  -- replace placeholder legal text after review

## Pushing to GitHub

Once you've created an empty repository on GitHub (no README/license added):

```bash
git init
git add .
git commit -m "Initial site build"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/daryeel-website.git
git push -u origin main
```

## Deploying

This project deploys cleanly to Vercel:

1. Go to vercel.com -> New Project
2. Import the GitHub repo you just pushed
3. Click Deploy (no config needed, Vercel detects Next.js automatically)
