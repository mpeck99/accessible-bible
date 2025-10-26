# 📖 Accessible Bible Website Build Checklist (Astro)

A full project roadmap and checklist for creating a **fully accessible, static Bible website** using **Astro**, with Bible API integration, multiple translations, and WCAG AA–AAA goals.

---

## 🌱 1. Project Setup

- [ ] Install **Node.js** (latest LTS version)
- [ ] Install **Astro**
  ```bash
  npm create astro@latest
  ```
- [ ] Choose a minimal starter template
- [ ] Run local dev server (`npm run dev`) to confirm setup
- [ ] Initialize Git repository (optional but recommended)
- [ ] Add `.gitignore` for `node_modules`, build folders, etc.

---

## 📁 2. Project Structure & Organization

- [ ] Clean up starter template (remove sample components/pages)
- [ ] Create folder structure:
  - [ ] `/src/pages` → main pages (Home, Books, Search, etc.)
  - [ ] `/src/components` → reusable parts (Header, Footer, VerseCard, etc.)
  - [ ] `/src/layouts` → shared page templates
  - [ ] `/src/utils` → helper scripts (API logic, storage helpers)
  - [ ] `/public` → static assets (icons, fonts, images)
- [ ] Add favicon, metadata, and site info

---

## 🧩 3. Bible API Setup

- [ ] Choose a **free Bible API** (e.g. [Bible API](https://bible-api.com), [API.Bible](https://scripture.api.bible/))
- [ ] Review API documentation and endpoints
- [ ] Test basic fetch request in Astro (`fetch()` in `onMount` or server-side)
- [ ] Create a `/src/utils/bibleAPI.js` or `.ts` for reusable fetch functions:
  - [ ] `getRandomVerse()`
  - [ ] `getVerse(reference, version)`
  - [ ] `searchVerses(query, version)`
  - [ ] `getBooksList()`
  - [ ] `getChapters(book)`
  - [ ] `getChapterText(book, chapter, version)`
- [ ] Add error handling for failed API requests
- [ ] Cache or throttle API responses if allowed
- [ ] Add API key to `.env` file (if required)
- [ ] Load environment variables with Astro’s built-in support

---

## 🎨 4. Design & Layout

- [ ] Choose color palette with high contrast ratios
- [ ] Set up global CSS or install Tailwind CSS (`npx astro add tailwind`)
- [ ] Define typography styles for readability
- [ ] Create layout components:
  - [ ] `BaseLayout.astro` → wraps pages
  - [ ] `Header.astro`
  - [ ] `Footer.astro`
  - [ ] `Nav.astro`
- [ ] Design for mobile-first responsiveness
- [ ] Add consistent spacing, margins, and padding

---

## 🏠 5. Homepage (Random Verse)

- [ ] Create `/src/pages/index.astro`
- [ ] Fetch and display random verse from API
- [ ] Show reference (Book, Chapter, Verse)
- [ ] Add “New Verse” or “Refresh” button
- [ ] Display translation name
- [ ] Add translation selector (dropdown)
- [ ] Store selected translation in `localStorage` or cookies
- [ ] Automatically load preferred translation on next visit
- [ ] Add link to Search and Books pages

---

## 🔍 6. Search Page

- [ ] Create `/src/pages/search.astro`
- [ ] Add input field and search button
- [ ] Fetch results via API using query text
- [ ] Display list of matching verses
- [ ] Link each result to its full chapter page
- [ ] Handle “no results” and error states
- [ ] Add ARIA live region for dynamic search results
- [ ] Ensure keyboard navigation works properly

---

## 📚 7. Books & Chapters Pages

- [ ] Create `/src/pages/books/index.astro`
  - [ ] List all books of the Bible
  - [ ] Each book links to `/books/[book]/index.astro`
- [ ] Create `/src/pages/books/[book]/index.astro`
  - [ ] Fetch all chapters for that book
  - [ ] Display chapter links
- [ ] Create `/src/pages/books/[book]/[chapter].astro`
  - [ ] Fetch verses for that chapter
  - [ ] Display text with proper verse numbering
  - [ ] Add navigation (previous/next chapter)
  - [ ] Add breadcrumb (Book > Chapter)
  - [ ] Ensure content structure follows semantic hierarchy

---

## 🧱 8. Core Functionality

- [ ] Add **version switcher** (dropdown or modal)
- [ ] Save and retrieve translation from `localStorage`
- [ ] Update all API calls based on saved translation
- [ ] Implement random verse generator (optional daily seed)
- [ ] Add client-side error handling messages
- [ ] Optimize API usage with caching or static generation where possible
- [ ] Add loading states for slow API responses
- [ ] Validate all dynamic text with screen readers

---

## ♿ 9. Accessibility (WCAG 2.1 AA–AAA Goals)

- [ ] Use semantic HTML for all pages
- [ ] Add skip-to-content link at top
- [ ] Maintain clear heading hierarchy (`h1` → `h2` → `h3`)
- [ ] Test color contrast (aim for AAA when possible)
- [ ] Ensure keyboard-only navigation works everywhere
- [ ] Add ARIA labels where necessary (buttons, forms)
- [ ] Use landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [ ] Provide visible focus outlines for interactive elements
- [ ] Support text resizing up to 200%
- [ ] Ensure site is fully navigable by screen readers
- [ ] Test with NVDA, VoiceOver, and Lighthouse
- [ ] Validate HTML structure using W3C Validator

---

## ⚙️ 10. Performance & SEO

- [ ] Add meta tags for each page (title, description)
- [ ] Add Open Graph and Twitter Card metadata
- [ ] Add `lang="en"` attribute to `<html>` tag
- [ ] Optimize all images (SVG preferred)
- [ ] Lazy load any large images or media
- [ ] Run Lighthouse performance tests
- [ ] Check total page load size (<1MB ideal)
- [ ] Verify all routes and links work without JS

---

## 🧪 11. Testing & Validation

- [ ] Test all routes in development mode
- [ ] Validate random verse logic
- [ ] Check version selector persistence
- [ ] Test search accuracy and performance
- [ ] Run accessibility audit tools:
  - [ ] WAVE
  - [ ] axe DevTools
  - [ ] Lighthouse
- [ ] Test on mobile, tablet, and desktop
- [ ] Test offline mode (optional)
- [ ] Check all headings, alt text, and link text clarity

---

## 🚀 12. Deployment

- [ ] Build static site:
  ```bash
  npm run build
  ```
- [ ] Preview locally (`npm run preview`)
- [ ] Choose host:
  - [ ] Netlify
  - [ ] Vercel
  - [ ] GitHub Pages
- [ ] Push code to Git repository
- [ ] Connect hosting provider and deploy
- [ ] Verify all links and pages post-deployment
- [ ] Test accessibility again in production
- [ ] Add `sitemap.xml` and `robots.txt`
- [ ] Add canonical URLs for SEO

---

## 💡 13. Optional Future Enhancements

- [ ] Add dark mode toggle
- [ ] Add text-to-speech feature
- [ ] Add reading plans or daily devotionals
- [ ] Add bookmarks/favorites system
- [ ] Add share verse button (copy to clipboard or social)
- [ ] Add offline Bible mode (local caching)
- [ ] Support additional Bible translations
- [ ] Add progressive web app (PWA) support
- [ ] Include font size and contrast preferences

---

✅ **Tip:**  
Mark off each step as you go to stay organized and ensure your site remains clean, performant, and accessible.

**Goal:**  
Create a fast, WCAG-compliant, easy-to-navigate Bible website — accessible to everyone, everywhere.

# 📖 Accessible Bible Website Build Checklist (Astro)

A full project roadmap and checklist for creating a **fully accessible, static Bible website** using **Astro**, with Bible API integration, multiple translations, and WCAG AA–AAA goals.

---

## 🌱 1. Project Setup

- [ ] Install **Node.js** (latest LTS version)
- [ ] Install **Astro**
  ```bash
  npm create astro@latest
  ```
- [ ] Choose a minimal starter template
- [ ] Run local dev server (`npm run dev`) to confirm setup
- [ ] Initialize Git repository (optional but recommended)
- [ ] Add `.gitignore` for `node_modules`, build folders, etc.

---

## 📁 2. Project Structure & Organization

- [ ] Clean up starter template (remove sample components/pages)
- [ ] Create folder structure:
  - [ ] `/src/pages` → main pages (Home, Books, Search, etc.)
  - [ ] `/src/components` → reusable parts (Header, Footer, VerseCard, etc.)
  - [ ] `/src/layouts` → shared page templates
  - [ ] `/src/utils` → helper scripts (API logic, storage helpers)
  - [ ] `/public` → static assets (icons, fonts, images)
- [ ] Add favicon, metadata, and site info

---

## 🧩 3. Bible API Setup

- [ ] Choose a **free Bible API** (e.g. [Bible API](https://bible-api.com), [API.Bible](https://scripture.api.bible/))
- [ ] Review API documentation and endpoints
- [ ] Test basic fetch request in Astro (`fetch()` in `onMount` or server-side)
- [ ] Create a `/src/utils/bibleAPI.js` or `.ts` for reusable fetch functions:
  - [ ] `getRandomVerse()`
  - [ ] `getVerse(reference, version)`
  - [ ] `searchVerses(query, version)`
  - [ ] `getBooksList()`
  - [ ] `getChapters(book)`
  - [ ] `getChapterText(book, chapter, version)`
- [ ] Add error handling for failed API requests
- [ ] Cache or throttle API responses if allowed
- [ ] Add API key to `.env` file (if required)
- [ ] Load environment variables with Astro’s built-in support

---

## 🎨 4. Design & Layout

- [ ] Choose color palette with high contrast ratios
- [ ] Set up global CSS or install Tailwind CSS (`npx astro add tailwind`)
- [ ] Define typography styles for readability
- [ ] Create layout components:
  - [ ] `BaseLayout.astro` → wraps pages
  - [ ] `Header.astro`
  - [ ] `Footer.astro`
  - [ ] `Nav.astro`
- [ ] Design for mobile-first responsiveness
- [ ] Add consistent spacing, margins, and padding

---

## 🏠 5. Homepage (Random Verse)

- [ ] Create `/src/pages/index.astro`
- [ ] Fetch and display random verse from API
- [ ] Show reference (Book, Chapter, Verse)
- [ ] Add “New Verse” or “Refresh” button
- [ ] Display translation name
- [ ] Add translation selector (dropdown)
- [ ] Store selected translation in `localStorage` or cookies
- [ ] Automatically load preferred translation on next visit
- [ ] Add link to Search and Books pages

---

## 🔍 6. Search Page

- [ ] Create `/src/pages/search.astro`
- [ ] Add input field and search button
- [ ] Fetch results via API using query text
- [ ] Display list of matching verses
- [ ] Link each result to its full chapter page
- [ ] Handle “no results” and error states
- [ ] Add ARIA live region for dynamic search results
- [ ] Ensure keyboard navigation works properly

---

## 📚 7. Books & Chapters Pages

- [ ] Create `/src/pages/books/index.astro`
  - [ ] List all books of the Bible
  - [ ] Each book links to `/books/[book]/index.astro`
- [ ] Create `/src/pages/books/[book]/index.astro`
  - [ ] Fetch all chapters for that book
  - [ ] Display chapter links
- [ ] Create `/src/pages/books/[book]/[chapter].astro`
  - [ ] Fetch verses for that chapter
  - [ ] Display text with proper verse numbering
  - [ ] Add navigation (previous/next chapter)
  - [ ] Add breadcrumb (Book > Chapter)
  - [ ] Ensure content structure follows semantic hierarchy

---

## 🧱 8. Core Functionality

- [ ] Add **version switcher** (dropdown or modal)
- [ ] Save and retrieve translation from `localStorage`
- [ ] Update all API calls based on saved translation
- [ ] Implement random verse generator (optional daily seed)
- [ ] Add client-side error handling messages
- [ ] Optimize API usage with caching or static generation where possible
- [ ] Add loading states for slow API responses
- [ ] Validate all dynamic text with screen readers

---

## ♿ 9. Accessibility (WCAG 2.1 AA–AAA Goals)

- [ ] Use semantic HTML for all pages
- [ ] Add skip-to-content link at top
- [ ] Maintain clear heading hierarchy (`h1` → `h2` → `h3`)
- [ ] Test color contrast (aim for AAA when possible)
- [ ] Ensure keyboard-only navigation works everywhere
- [ ] Add ARIA labels where necessary (buttons, forms)
- [ ] Use landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [ ] Provide visible focus outlines for interactive elements
- [ ] Support text resizing up to 200%
- [ ] Ensure site is fully navigable by screen readers
- [ ] Test with NVDA, VoiceOver, and Lighthouse
- [ ] Validate HTML structure using W3C Validator

---

## ⚙️ 10. Performance & SEO

- [ ] Add meta tags for each page (title, description)
- [ ] Add Open Graph and Twitter Card metadata
- [ ] Add `lang="en"` attribute to `<html>` tag
- [ ] Optimize all images (SVG preferred)
- [ ] Lazy load any large images or media
- [ ] Run Lighthouse performance tests
- [ ] Check total page load size (<1MB ideal)
- [ ] Verify all routes and links work without JS

---

## 🧪 11. Testing & Validation

- [ ] Test all routes in development mode
- [ ] Validate random verse logic
- [ ] Check version selector persistence
- [ ] Test search accuracy and performance
- [ ] Run accessibility audit tools:
  - [ ] WAVE
  - [ ] axe DevTools
  - [ ] Lighthouse
- [ ] Test on mobile, tablet, and desktop
- [ ] Test offline mode (optional)
- [ ] Check all headings, alt text, and link text clarity

---

## 🚀 12. Deployment

- [ ] Build static site:
  ```bash
  npm run build
  ```
- [ ] Preview locally (`npm run preview`)
- [ ] Choose host:
  - [ ] Netlify
  - [ ] Vercel
  - [ ] GitHub Pages
- [ ] Push code to Git repository
- [ ] Connect hosting provider and deploy
- [ ] Verify all links and pages post-deployment
- [ ] Test accessibility again in production
- [ ] Add `sitemap.xml` and `robots.txt`
- [ ] Add canonical URLs for SEO

---

## 💡 13. Optional Future Enhancements

- [ ] Add dark mode toggle
- [ ] Add text-to-speech feature
- [ ] Add reading plans or daily devotionals
- [ ] Add bookmarks/favorites system
- [ ] Add share verse button (copy to clipboard or social)
- [ ] Add offline Bible mode (local caching)
- [ ] Support additional Bible translations
- [ ] Add progressive web app (PWA) support
- [ ] Include font size and contrast preferences

---

✅ **Tip:**  
Mark off each step as you go to stay organized and ensure your site remains clean, performant, and accessible.

**Goal:**  
Create a fast, WCAG-compliant, easy-to-navigate Bible website — accessible to everyone, everywhere.
