# Construction Template (Static Starter)

A fast, accessible, mobile‑first construction website template. No build step—just HTML, CSS, and a tiny bit of JS. Optimized for Vercel.

**Sections:** Hero, Services, Projects, Testimonials, Contact.  
**Extras:** `vercel.json` with clean URLs and cache headers, `robots.txt`, `sitemap.xml`, and a PR template.

## Quick Start

```bash
# clone and create a feature branch
git clone https://github.com/gmena82/construction-template.git
cd construction-template
git checkout -b feat/site-starter

# copy files from this starter into the repo root (or use the patch provided in the PR)
# ... then commit & push
git add -A
git commit -m "feat: add static construction site starter"
git push -u origin feat/site-starter
```
Open a PR to `main`. If your repo is connected to Vercel, the PR will get a Preview deployment automatically.

## Customize

- Update branding in `index.html` and colors in `css/styles.css`.
- Replace placeholder project images (the gradient blocks) with your images.
- Wire up the contact form by setting a real `action` URL (e.g., Formspree or a serverless function).

## Production headers (Vercel)

Static assets are served with `Cache-Control: public, max-age=31536000, immutable` via `vercel.json`. You can adjust headers or add rewrites/redirects if needed.

## License

MIT © You
