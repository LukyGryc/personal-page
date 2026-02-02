# Production readiness audit

Audit covering **semantic HTML**, **SEO**, **accessibility**, **speed**, and related production concerns.

---

## 1. Semantic HTML

### ✅ Good
- **`<main>`** used in `MainPage` for page content.
- **`<header>`** in `Header` with nav and logo.
- **`<nav>`** in `HeaderLinks` for primary navigation.
- **`<section>`** in `Section` and used for page sections.
- **`<ul>`/`<li>`** in `PersonalInfo` for the list.
- **`<button>`** for actions (theme, contact, drawer trigger).

### ⚠️ Issues
- **Multiple `<h1>` on home**: MainSection, AboutMeSection, SkillsSection, PersonalInfo each use `SectionHeader` → `<h1>`. There should be **one `<h1>` per page** (main page title); section titles should be `<h2>`.
- **Projects list**: `ProjectCard` uses `<h3>` for project name; ProjectsIntro uses `<h1>`. OK if projects page has one h1 (intro) then h3 for cards; ensure no other h1 on that page.
- **Project detail**: Uses `SectionHeader` (h1) for project name — correct for the page.
- **Landmark order**: Main content should follow header; ensure no landmark is repeated in a confusing way (e.g. multiple mains).

**Recommendation:** Add a `level` prop to `SectionHeader` (and optionally `SectionDescription`) so the home page uses one `h1` (hero) and the rest `h2`; other pages keep one `h1` per page.

---

## 2. SEO

### ✅ Good
- Root **metadata** in `app/layout.tsx`: `title`, `description`.
- **Next.js** handles viewport and charset.
- **Stable URLs** for projects (`/projekty`, `/projekty/[id]`).

### ⚠️ Issues
- **`lang="en"`** in `<html>` while content is **Czech** — should be `lang="cs"` (or `lang="cs"` with optional `lang="en"` on EN content).
- **No per-route metadata**: `/projekty` and `/projekty/[id]` use default title/description. Each route should have its own `title`, `description`, and ideally **Open Graph** and **Twitter** tags.
- **No Open Graph / Twitter** in root layout (e.g. `og:title`, `og:description`, `og:image`, `twitter:card`).
- **No canonical URL** (helps with duplicate content if you add query params or alternate URLs later).
- **No `robots.txt`** or **sitemap** (e.g. `app/sitemap.ts`, `app/robots.ts`) for crawlers.

**Recommendation:** Set `lang="cs"`; add `generateMetadata` (or static `metadata`) for `/projekty` and `/projekty/[id]` with titles and descriptions; add basic OG/Twitter in root layout; optionally add `robots.ts` and `sitemap.ts`.

---

## 3. Accessibility

### ✅ Good
- **Theme toggler**: `<span className="sr-only">Toggle theme</span>` so purpose is announced.
- **ProfileCard contact button**: `aria-label={`Contact ${name || 'user'}`}`.
- **External links**: `target="_blank"` with `rel="noopener noreferrer"` (and project detail links have `aria-label` for icon-only links).
- **Decorative elements**: `LightRays` and similar use `aria-hidden` where appropriate.
- **Focus styles**: Buttons use `focus-visible:ring` (e.g. in `button.tsx`).
- **Icons**: Some SVGs use `role="img"` (e.g. in `devIcons`).

### ⚠️ Issues
- **Skip link**: No “Skip to main content” link. Keyboard users must tab through header every time.
- **Drawer menu button**: `DrawerTrigger` with only `<MenuIcon />` has no `aria-label` (e.g. “Open menu”) or `aria-expanded`. Screen readers won’t know it’s a menu trigger.
- **Drawer**: When open, focus should move into the drawer and be trapped; when closed, focus should return to the trigger. Vaul may handle this — verify.
- **ScrollDown**: Purely decorative “scroll down” hint; consider `aria-hidden="true"` so it’s not announced, or give it a short `aria-label` if you want it announced.
- **LinksDrawer GitHub link**: Icon-only link has no `aria-label` in the drawer (e.g. “GitHub profile”).
- **Color contrast**: Not verified; ensure text and interactive elements meet WCAG AA (e.g. muted text, gradient text on ProfileCard).
- **Motion**: No `prefers-reduced-motion` handling; consider disabling or toning down animations when user prefers reduced motion.

**Recommendation:** Add a skip link at the top of the body; add `aria-label="Open menu"` and `aria-expanded` to the drawer trigger; add `aria-label` to the GitHub icon link in the drawer; ensure focus management in drawer; optionally add reduced-motion media query.

---

## 4. Speed & performance

### ✅ Good
- **Next.js Image** used in `ProjectCard` and `app/projekty/[id]/page.tsx` for project images (optimization, lazy load).
- **Fonts**: `next/font` (Geist) for subset and optimization.
- **Client components** scoped with `"use client"` where needed; rest can be server components.

### ⚠️ Issues
- **ProfileCard avatars**: Use raw `<img>` with `loading="eager"` and `fetchPriority="high"`. For consistency and optimization (format, sizing), consider `next/image` with `priority` for the main avatar (e.g. with `fill` and a sized container).
- **Largest Contentful Paint (LCP)**: Hero and avatar are LCP candidates; ensure hero image (if any) and font loading don’t block LCP; avatar already eager + high priority helps.
- **Layout shift**: Fixed heights/sizes on images and key sections reduce CLS; ProjectCard and ProfileCard use defined sizes — keep an eye when changing.
- **Third-party / heavy JS**: Motion, Radix, Vaul — ensure tree-shaken and not loaded above the fold more than needed.
- **No explicit resource hints**: Optional `preconnect` for external origins if you add analytics or external assets later.

**Recommendation:** Consider migrating ProfileCard avatars to `next/image` with a fixed size container and `priority` for the main card; monitor LCP and CLS in production.

---

## 5. Other production concerns

### Security
- **External links**: Already use `rel="noopener noreferrer"` — good.
- **Theme script**: Inline script reads `localStorage` and sets class; no user content injected — OK. Ensure no other `dangerouslySetInnerHTML` with user input.

### Errors & resilience
- **ProfileCard**: `onError` on images hides or swaps image — good.
- **Project detail**: Uses `notFound()` for invalid `id` — good.
- **404**: Next.js default 404; consider custom `app/not-found.tsx` for branding.

### UX / i18n
- **Content language**: Consistently Czech; `lang="cs"` supports correct pronunciation and translation tools.
- **Drawer**: When navigating via a drawer link, drawer should close (Vaul + Next.js Link usually handle this; verify).

### Code / DX
- **Layout typo**: `LightRays` has `className="... xdd"` — remove typo.
- **Consistent patterns**: Prefer `next/image` for content images where possible; keep `alt` and `aria-label` consistent.

---

## Summary checklist

| Area            | Priority | Action |
|-----------------|----------|--------|
| `lang="cs"`     | High     | Set in `layout.tsx`. |
| One h1 per page | High     | SectionHeader accepts level; home: one h1, rest h2. |
| Per-route metadata | High  | generateMetadata for projekty + [id]. |
| Skip link       | High     | Add “Skip to main content” before header. |
| Menu button a11y | Medium  | aria-label + aria-expanded on drawer trigger. |
| OG / Twitter    | Medium   | Add in root layout (and/or per page). |
| Drawer GitHub   | Medium   | aria-label on icon link. |
| Remove "xdd"    | Low      | Clean up LightRays className. |
| Sitemap/robots  | Low      | Add app/sitemap.ts, app/robots.ts. |
| Reduced motion  | Low      | Optional prefers-reduced-motion. |

**Implemented:** lang=cs, skip link, main id, per-route metadata, SectionHeader level (one h1 per page), OG/Twitter, menu/GitHub a11y, xdd removed, sitemap + robots. Set `NEXT_PUBLIC_SITE_URL` in production for canonical/OG/sitemap URLs.
