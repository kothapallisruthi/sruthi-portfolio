# Sruthi Kothapalli — Portfolio

A React + Vite single-page portfolio: dark navy background, cyan accent,
hexagon photo frame and glowing hero — built from your resume content.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Add your photo

1. Add your photo to `src/assets/`, e.g. `src/assets/profile.jpg`.
2. In `src/App.jsx`, change the second import line to:

   ```js
   import profilePlaceholder from "./assets/profile.jpg";
   ```

The hexagon frame crops/fits it automatically. A square-ish photo works best.

## Add your certificates

Drop the PDFs into `public/certificates/` using the filenames listed in
`public/certificates/PUT_CERTIFICATES_HERE.txt`. If a certificate lives online
(Google Drive, Credly, NPTEL portal), paste the URL into the `link` /
`certificate` field in `src/App.jsx` instead.

Your resume is already at `public/resume.pdf`, so the "View / Download CV"
button in the hero works out of the box.

## Add project links

In `src/App.jsx`, fill the `github` and `demo` fields in the `PROJECTS` array.
While they're empty the cards show a small "Add GitHub / Demo link" hint.

## Editing content

Everything is plain data at the top of `src/App.jsx`:

- `NAME`, `ROLE`, `PHONE`, `EMAIL`, `GITHUB_URL`, `LINKEDIN_URL` — hero & contact
- `SKILL_GROUPS` — skills grouped by category
- `EDUCATION` — education timeline
- `PROJECTS` — project cards
- `INTERNSHIPS` — internship cards
- `CERTIFICATIONS` — certification list

Update the values there and the whole site updates — no styling code to touch.

## Build for deployment

```bash
npm run build
```

Outputs a static `dist/` folder you can deploy to Netlify, Vercel or GitHub Pages.
