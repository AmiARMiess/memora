# MEMORA — SaaS Landing Page Theme

> Capture Every Idea, Connect Every Thread and Act with Total Confidence

**Memora** is a minimal, editorial-style landing page theme for an AI-powered
knowledge workspace product. Soft off-white surfaces, teal/emerald accents,
dotted section dividers, a CSS-built app mockup, and a giant footer watermark.
Built with plain **HTML / CSS / JS** — no framework, no build step.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build](https://img.shields.io/badge/build-not%20required-brightgreen.svg)]()
[![Dependencies](https://img.shields.io/badge/dependencies-0-lightgrey.svg)]()

<img width="1349" height="5138" alt="image" src="https://github.com/user-attachments/assets/01014b95-bb3f-4461-b9bc-f58e4a72f1c3" />

---

## ✨ Features

- 🚫 **No build step** — open `index.html` and it works
- 🧭 **Sticky blurred nav** with mobile hamburger menu
- 🖥️ **Hero app mockup** built entirely in CSS (no images)
- 🧩 **Full SaaS structure** — logos strip, frictions, features, pricing, FAQs, CTA, footer
- 💳 **Pricing cards** with monthly/yearly toggle (JS-driven prices)
- ❓ **FAQ accordion** with smooth open/close animation
- 📜 **Scroll reveals** via IntersectionObserver
- 📱 **Fully responsive** + `prefers-reduced-motion` aware
- 🎨 **Themeable** — colors and fonts live in CSS custom properties

## 🚀 Quick Start

```bash
git clone https://github.com/AmiARMiess/memora.git
cd memora
open index.html        # or: npx serve .
```

Fonts load from Google Fonts (Inter); everything else is local.

## 📁 Structure

```
memora/
├── index.html     # all sections, mockup, pricing, FAQ, footer
├── style.css      # design tokens + layout (no framework)
├── script.js      # menu, accordion, billing toggle, reveals
├── README.md      # this documentation
└── .gitattributes # line-ending + binary/linguist rules
```

## 🧩 Sections

| Section   | Content                                            |
|-----------|----------------------------------------------------|
| Hero      | Badge, two-tone headline, CTA buttons, app mockup  |
| Logos     | "Trusted by" strip with 5 placeholder brands       |
| Frictions | 4 problem cards with line icons                    |
| Features  | 5 cards with CSS/SVG illustrations                 |
| Pricing   | Free / Pro (Popular) / Enterprise + billing toggle |
| FAQs      | Left intro + right accordion (first item open)     |
| CTA       | Teal gradient banner with dark button              |
| Footer    | Link columns, socials, legal bar, giant watermark  |

## 🎨 Theming

All tokens live in `:root` of `style.css`:

```css
:root{
  --sheet:#F6F6F2;       /* page surface   */
  --ink:#15161A;         /* text           */
  --accent:#0E9384;      /* primary teal   */
  --accent-2:#67E0C4;    /* gradient end   */
  --dark:#17181A;        /* buttons        */
}
```

**Rebranding:** swap the wordmark text + watermark (`Memora`), the SVG logo
mark, and the gradient stops in `.shot` / `.cta`.

## 🧑‍ Browser Support

Latest Chrome, Firefox, Safari, and Edge. Uses `IntersectionObserver`,
`backdrop-filter`, and `clamp()`; no polyfills shipped.

## 📄 License

MIT — free for personal and commercial use.

---

*Think it. Capture it. Connect it. Act on it.*
