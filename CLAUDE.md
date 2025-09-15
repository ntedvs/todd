# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production application with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint to check code quality

## Project Overview

This is a single-page recruiting website for Todd Fisher, Lieutenant and Recruitment and Retention Specialist for the Pennsylvania Department of Corrections. The site serves as a personal recruiting page to help potential candidates connect with Todd and navigate the PA DOC application process.

## Architecture

**Technology Stack:**
- Next.js 15.5.3 with App Router
- React 19.1.0
- TypeScript 5
- Tailwind CSS 4
- ESLint + Prettier for code quality

**Structure:**
- Single-page application with anchor-linked sections
- Header and Footer components used globally
- Main content in `src/app/page.tsx` with sections: Hero, About, Services, Benefits, Contact

**Key Contact Information:**
- Todd Fisher: Lieutenant, Recruitment and Retention Specialist
- Phone: (717) 916-0291
- Email: todfisher@pa.gov

## Design System

**Colors:**
- Primary Navy: `#2b4c8d`
- Light Blue: `#55a1d5`
- Dark Navy (hover states): `#1e3660`

**Typography:**
- Font: Inter (Google Fonts)
- Professional government-style design

**Components:**
- Consistent circular icon pattern used throughout
- Mobile-responsive design with Tailwind CSS
- Single-word navigation items in both header and footer

## Navigation

The site uses anchor links to navigate between sections:
- `#hero` - Hero/landing section
- `#about` - About Todd section
- `#services` - How Todd can help section
- `#benefits` - Why choose PA DOC section
- `#contact` - Contact information section

Both header and footer navigation maintain identical menu items for consistency.

## Important Notes

- Apostrophes in JSX must be escaped as `&apos;` for ESLint compliance
- The site represents an individual recruiter (Todd Fisher) rather than a general department page
- All external links open in new tabs with appropriate `rel` attributes
- Contact information is prominently featured throughout the site