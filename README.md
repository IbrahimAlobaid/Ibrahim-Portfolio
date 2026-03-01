# Ibrahim Alobaid — AI Engineer Portfolio

A production-grade personal portfolio for Ibrahim Alobaid, AI Engineer specializing in Voice Agents & Multi-Modal Systems.

**Live site:** https://ibrahimalobaid.dev

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Icons | React Icons 5 |
| Deployment | Vercel |

---

## Features

- **7 sections:** Hero, About, Skills, Experience, Projects, Education, Contact
- Dark premium theme with glassmorphism and animated gradient orbs
- Interactive expandable experience timeline
- Framer Motion scroll-based reveal animations
- Scroll progress indicator bar
- Sticky navbar with active section tracking
- Fully responsive — 375px / 768px / 1440px
- SEO: meta tags, OpenGraph, Twitter Cards, JSON-LD Person schema
- Accessibility: semantic HTML, aria labels, skip-to-content, focus-visible, prefers-reduced-motion

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── AnimatedBackground.tsx
│       ├── GlassCard.tsx
│       ├── ProjectCard.tsx
│       ├── SectionHeading.tsx
│       ├── SkillBadge.tsx
│       └── TimelineItem.tsx
├── constants/
│   └── data.ts          # All portfolio content
├── hooks/
│   ├── useInView.ts
│   ├── useScrollProgress.ts
│   └── useScrollSpy.ts
├── utils/
│   └── cn.ts
├── App.tsx
├── main.tsx
└── index.css
public/
├── profile.jpg
├── Ibrahim_Alobaid_Resume.pdf
└── favicon.svg
```

---

## Deployment

The project is pre-configured for Vercel. Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new) — no additional configuration required.

---

## Contact

- **Email:** ibrahim.alobid44@gmail.com
- **LinkedIn:** [ibrahimalobaid44](https://www.linkedin.com/in/ibrahimalobaid44/)
- **GitHub:** [IbrahimAlobid2](https://github.com/IbrahimAlobid2)
