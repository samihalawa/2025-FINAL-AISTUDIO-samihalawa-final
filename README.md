# Sami Halawa – AI Expert Portfolio

Production-ready portfolio for Sami Halawa, showcasing AI training programs, automation projects, and multi-region delivery.

## Highlights

- **Reimagined experience** – refreshed hero, gradient system, glassmorphism panels, and polished typography powered by Tailwind CSS 3.
- **Mega-navigation + search** – keyboard-friendly menus, inline global search, and instant language switching for English, Spanish, French, and Chinese.
- **Interactive content workflows** – filterable blog with instant search, AI project chat demos, dynamic service explorer, and Netlify-backed contact/chat flows.
- **Accessibility & SEO** – semantic landmarks, focus states, localized metadata, schema, and responsive layouts across breakpoints.

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Run the development server
   ```bash
   npm run dev
   ```
   The site runs on http://localhost:5173 with hot reload.
3. Build for production
   ```bash
   npm run build
   ```

## Testing

Playwright end-to-end suites cover navigation flows, location pages, SEO metadata, and the blog filters. To execute locally:

```bash
npx playwright install        # first run only (downloads browsers)
npm run build                 # ensure production bundle
npx playwright test
```

Screenshots are saved to `test-artifacts/` for visual review.

## Environment & Functions

- Netlify function `netlify/functions/genai-chat.ts` expects `GENAI_API_KEY` (or `GOOGLE_GENAI_API_KEY`) to proxy Gemini responses.
- When no key is provided, the UI gracefully falls back to local demo answers.

## Deployment

- Vite builds to `dist/`; Netlify configuration lives in `netlify.toml`.
- Tailwind now runs locally via PostCSS, replacing the previous CDN setup for better purging and theming.

Last updated: 2025-09-26
