# CLAUDE.md — Youssef's Landing Page Studio
> Read this before every session. Follow every rule without exception.

---

## ⚡ Timeout Prevention Rules

1. **One section at a time.** Build Hero → confirm it works → then Marquee → confirm → then Work Grid. Never combine sections in one response.
2. **Max 150 lines per file write.** If a component is longer, write it in parts using append/edit passes.
3. **After 20 tool calls → /clear.** Start a fresh session. Long sessions cause timeouts.
4. **If you time out, retry the same step in a shorter, simpler form.** Never retry the exact same prompt.
5. **No long explanations.** Write code, not essays. Keep text responses under 5 lines.

---

## 🎨 Design Tokens — Lock These. Never Change Them.

```css
--bg:           #111110   /* warm dark, never pure black */
--text:         #f0ede8   /* warm white, never pure white */
--accent:       #c8a96e   /* gold */
--border:       #1e1d1b
--gray-mid:     #3a3835
--gray-muted:   #7a7772

--font-display: 'Playfair Display', Georgia, serif
--font-body:    'DM Sans', sans-serif

--radius:       2px to 4px max (sharp edges, never bubbly)
--transition:   cubic-bezier(0.16, 1, 0.3, 1)
```

---

## 🏗️ Stack

- **React + Vite** — project base
- **Framer Motion** — entrance animations
- **GSAP + Lenis** — scroll patterns and smooth scroll
- **21st Dev MCP** — pull components from here first before writing custom ones
- **No Nano Banana** — skip image generation unless explicitly asked

---

## 📐 Section Build Order

Always build in this exact order. One section per message.

| # | Section | Scroll Pattern |
|---|---------|---------------|
| 1 | Hero | `splittext-reveal` on headline |
| 2 | Availability Bar | none |
| 3 | Marquee ticker | none |
| 4 | Work Grid | `sticky-stack` |
| 5 | Services (dark bg) | `pinned-scrub` |
| 6 | About | `horizontal-on-vertical` for tags |
| 7 | Testimonials | `sticky-stack` |
| 8 | Contact + Form | fade in |
| 9 | Footer | none |

---

## 🎞️ Named Scroll Patterns — Use These Exact Names

- `pinned-scrub` — page locks while content animates (like Apple Vision Pro)
- `sticky-stack` — cards hold while next slides over (like Stripe pricing)
- `splittext-reveal` — letters animate in one by one (like Stripe heroes)
- `horizontal-on-vertical` — scroll down, content moves sideways (like Linear)
- `image-sequence-scrub` — frame-by-frame on scroll (only if asked)

---

## ✅ Per-Section Checklist

After finishing each section, confirm:
- [ ] Design tokens match exactly (colors, fonts, radius)
- [ ] Mobile responsive (stacks to single column under 900px)
- [ ] Animation uses named pattern from the list above
- [ ] No file is longer than 150 lines (split if needed)
- [ ] Screenshot taken at 1440px width before moving on

---

## 🚫 Never Do These

- Never use pure `#000000` or `#ffffff` — use the tokens above
- Never write more than one section per response
- Never use placeholder/stock images — use empty styled divs with labels
- Never use `border-radius` above 4px
- Never add purple gradients, glassmorphism, or neon effects
- Never write custom components when 21st Dev has one
- Never skip the per-section screenshot step

---

## 💬 How to Talk to Me

When I say... Claude should...
- **"build the hero"** → build only the Hero section, stop, wait
- **"next"** → build the next section in the order above
- **"fix [thing]"** → fix only that thing, don't rebuild the whole section
- **"screenshot"** → take a screenshot at 1440px and describe what's off vs references
- **"references"** → Linear.app, Stripe.com, Resend.com

---

## 📁 File Structure

```
src/
  components/
    Hero.jsx
    Marquee.jsx
    WorkGrid.jsx
    Services.jsx
    About.jsx
    Testimonials.jsx
    Contact.jsx
    Footer.jsx
    Nav.jsx
  styles/
    tokens.css
    global.css
  App.jsx
  main.jsx
```

One component per file. Max 150 lines each.

---

## 🧪 Reference Sites

Before building any section, think: *does this look like it belongs on Linear, Stripe, or Resend?*

- https://linear.app
- https://stripe.com
- https://resend.com

If the answer is no → adjust before moving on.