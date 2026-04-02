# Neuronix Technology — Website

A minimal, dark-themed agency website built with **Vite + React**.

## Stack

- **Framework**: React 18 + React Router v6
- **Bundler**: Vite 5
- **Styling**: CSS Modules + CSS custom properties
- **Fonts**: Syne (headings) · Rajdhani (tech/mono) · DM Sans (body)
- **Linting**: ESLint + Prettier

## Folder Structure

Follows the feature-first structure from the project PDF spec:

```
src/
├── assets/styles/       # global.css + variables.css (design tokens)
├── components/
│   ├── ui/              # Button, Robot3D, EtherealBackground, SectionHeader, LoadingSpinner
│   └── layout/          # Header, Footer
├── constants/           # Site-wide data: services, team, stats, values
├── features/            # (reserved for future feature modules)
├── hooks/               # useFadeIn, useForm
├── lib/                 # validators.js
├── pages/               # HomePage, AboutPage, ContactPage, NotFoundPage
├── routes/              # AppRoutes (lazy-loaded)
├── App.jsx
└── main.jsx
```

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Key Components

| Component | Description |
|---|---|
| `EtherealBackground` | Animated ambient orb background (21st.dev ethereal-shadow inspired) |
| `Robot3D` | CSS 3D robot with mouse-tracking tilt + idle animation (21st.dev robot inspired) |
| `Button` | Primary / outline / ghost variants with shimmer effect (21st.dev button inspired) |
| `useFadeIn` | IntersectionObserver hook for staggered scroll animations |
| `useForm` | Controlled form state with validation |

## Pages

- `/` — Home: Hero + Robot + Stats + Services grid + CTA
- `/about` — About: Company story + Values + Tech stack + Team
- `/contact` — Contact: Info panel + validated form with success state
- `*` — 404: Not Found page

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```
VITE_API_BASE_URL=http://localhost:8080/api
VITE_APP_TITLE=Neuronix Technology
VITE_ENABLE_ANALYTICS=false
```
