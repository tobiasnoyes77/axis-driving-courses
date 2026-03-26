# Axis Driving Courses — Project Overview

## What Is This?

Website for **Axis Driving Courses**, a Virginia-based driving school offering online courses and in-person driving lessons. Located at 555 Belaire Ave #210, Chesapeake, VA 23320.

**Live site:** https://axisdrivingcourses.com

---

## Hosting & Deployment

- **Hosted on:** GitHub Pages
- **Repo:** https://github.com/tobiasnoyes77/axis-driving-courses
- **Branch:** `main` (deployed via GitHub Pages, legacy build)
- **Custom domain:** `axisdrivingcourses.com` (configured via `CNAME` file)
- **DNS:** Managed through Cloudflare (nameservers: `cesar.ns.cloudflare.com`, `crystal.ns.cloudflare.com`)
- **SSL:** Let's Encrypt certificate via GitHub Pages, HTTPS enforced
- **Cloudflare rule:** Transform rule rewrites paths without `.` to append `.html` (e.g., `/about` → `/about.html`). Root `/` is excluded from the rule.

### To Deploy Changes

```bash
git add <files>
git commit -m "description of changes"
git push
```

GitHub Pages automatically rebuilds after push. Allow 1–2 minutes for changes to go live.

---

## Tech Stack

- **Pure HTML/CSS/JS** — no frameworks, no build step
- **Font:** Inter (Google Fonts)
- **CSS:** Global styles in `styles.css`, page-specific styles in `<style>` tags within each HTML file
- **Components:** Shared nav, footer, and bottom CTA are injected via JavaScript (`components/` folder)

---

## File Structure

```
├── index.html                        — Homepage (hero, trust bar, courses overview, why us, contact)
├── styles.css                        — Global stylesheet (all shared styles)
├── scripts.js                        — Global JS (mobile menu, scroll reveal, nav shadow)
├── CNAME                             — Custom domain config for GitHub Pages
│
├── components/
│   ├── nav.js                        — Shared navigation (desktop + mobile menu)
│   ├── footer.js                     — Shared footer
│   └── bottom-cta.js                 — Shared "Ready to become a confident driver?" CTA banner
│
├── images/                           — All site images (.webp, .jpg, .png)
├── Trust Bar/                        — Trust bar logos (DMV, BBB, Google Reviews, NSC)
│
├── ONLINE COURSE PAGES:
│   ├── driver-improvement-course.html   — 8 Hour Driver Improvement Clinic ($74.95)
│   ├── radep-course.html                — 12 Hour RADEP Course ($199.95)
│   ├── drivers-manual-course.html       — 8 Hour Driver Manual Course ($149.96)
│   └── driver-education-course.html     — Driver Education Course
│
├── IN-VEHICLE COURSE PAGES:
│   ├── teen-behind-the-wheel.html       — Teen BTW Program, DMV-approved ($425)
│   ├── private-driving-lessons.html     — Private lessons for teens & adults ($199.95–$699.95)
│   └── behind-the-wheel.html           — Original combined BTW + private lessons page (superseded by the two above)
│
├── OTHER PAGES:
│   ├── about.html                       — About Axis Driving Courses
│   ├── contact.html                     — Contact page
│   ├── faq.html                         — FAQ (removed from main nav, still accessible via URL)
│   ├── blog.html                        — Blog listing page
│   ├── blog-defensive-driving.html      — Blog post: defensive driving
│   └── blog-aggressive-driving-ticket.html — Blog post: aggressive driving ticket
```

---

## Navigation Structure

The main nav (`components/nav.js`) has:

| Menu Item | Links To |
|-----------|----------|
| **Courses** (dropdown) | |
| — Online 8 Hour Driver Improvement Clinic | `driver-improvement-course.html` |
| — Online 12 Hour RADEP | `radep-course.html` |
| — Online 8 Hour Driver Manual Course | `drivers-manual-course.html` |
| — Teen Behind-the-Wheel Program | `teen-behind-the-wheel.html` |
| — Private Driving Lessons | `private-driving-lessons.html` |
| **About** | `about.html` |
| **Blog** | `blog.html` |
| **Contact** | `contact.html` |
| **(804) 601-0480** | Phone call CTA |

FAQ was removed from the nav but the page still exists.

---

## Page Layout Patterns

All course/inner pages follow the same structure:

1. `<script src="components/nav.js">` — injects nav at top
2. `.breadcrumb` — breadcrumb navigation
3. `.page-hero` — hero with tag, title, description, optional CTA, and image
4. `.page-body` — two-column layout:
   - `.page-content` — main content blocks (`.content-block.reveal`)
   - `.page-sidebar` — sticky sidebar with price, features, contact info
5. `<script src="components/bottom-cta.js">` — CTA banner
6. `<script src="components/footer.js">` — footer
7. `<script src="scripts.js">` — global JS

### CSS Variables (from `styles.css`)

```css
--yellow: #F4C542;
--red: #E53935;
--charcoal: #1F3A5F;
--mid: #3d5a80;
--border: #e5e7eb;
--radius: 0px;        /* Sharp corners throughout */
--radius-lg: 0px;
```

---

## Key Business Info

- **Company:** Axis Driving Courses
- **Phone:** (804) 601-0480
- **Email:** support@axisdrivingcourses.com
- **Address:** 555 Belaire Ave #210, Chesapeake, VA 23320
- **Hours:** Mon–Fri 9am–7pm, Sat–Sun by appointment

---

## Recent Changes

- Created `private-driving-lessons.html` — dedicated page for private lessons with 5-level curriculum and tiered pricing
- Created `teen-behind-the-wheel.html` — dedicated page for teen BTW program with DMV requirements and structured curriculum
- Updated nav to point to new dedicated pages instead of `behind-the-wheel.html`
- Updated homepage course cards to link to new pages
- Removed FAQ from main navigation
- Renamed all "Preferred Choice Driving Academy" references to "Axis Driving Courses" on the about page
- Updated hero images on in-vehicle pages to use `8-1-1.webp`
- Initialized git repo and deployed to GitHub Pages with custom domain
