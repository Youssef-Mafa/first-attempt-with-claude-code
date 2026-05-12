# YM — Landing Page Studio

A high-converting freelance portfolio site built with React + Vite, targeting local businesses in Morocco.

## Stack

- **React + Vite** — project base
- **Framer Motion** — entrance animations (split-text reveal, fade-in)
- **GSAP + ScrollTrigger** — scroll-driven animations
- **Lenis** — smooth scroll
- **CSS Modules** — scoped styles per component

## Sections

| # | Component | Animation Pattern |
|---|-----------|------------------|
| 1 | Hero | `splittext-reveal` |
| 2 | Availability Bar | static |
| 3 | Marquee | infinite ticker |
| 4 | Work Grid | `sticky-stack` |
| 5 | Services | `pinned-scrub` |
| 6 | About | `horizontal-on-vertical` |
| 7 | Testimonials | `sticky-stack` |
| 8 | Contact + Form | fade-in |
| 9 | Footer | static |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Design Tokens

```css
--bg:           #111110
--text:         #f0ede8
--accent:       #c8a96e
--font-display: 'Playfair Display', Georgia, serif
--font-body:    'DM Sans', sans-serif
```

## Project Structure

```
src/
  components/     # One file per section
  styles/         # tokens.css + global.css
  App.jsx
  main.jsx
```

## Notes

- Built as my first Claude Code project — May 2026
- Designed to look like Linear, Stripe, and Resend
- Mobile responsive under 900px
- All animations respect `prefers-reduced-motion`
