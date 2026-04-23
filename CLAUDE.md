# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## MCP Tools: code-review-graph

**IMPORTANT: This project has a knowledge graph. ALWAYS use the
code-review-graph MCP tools BEFORE using Grep/Glob/Read to explore
the codebase.** The graph is faster, cheaper (fewer tokens), and gives
you structural context (callers, dependents, test coverage) that file
scanning cannot.

### When to use graph tools FIRST

- **Exploring code**: `semantic_search_nodes` or `query_graph` instead of Grep
- **Understanding impact**: `get_impact_radius` instead of manually tracing imports
- **Code review**: `detect_changes` + `get_review_context` instead of reading entire files
- **Finding relationships**: `query_graph` with callers_of/callees_of/imports_of/tests_for
- **Architecture questions**: `get_architecture_overview` + `list_communities`

Fall back to Grep/Glob/Read **only** when the graph doesn't cover what you need.

### Key Tools

| Tool | Use when |
|------|----------|
| `detect_changes` | Reviewing code changes — gives risk-scored analysis |
| `get_review_context` | Need source snippets for review — token-efficient |
| `get_impact_radius` | Understanding blast radius of a change |
| `get_affected_flows` | Finding which execution paths are impacted |
| `query_graph` | Tracing callers, callees, imports, tests, dependencies |
| `semantic_search_nodes` | Finding functions/classes by name or keyword |
| `get_architecture_overview` | Understanding high-level codebase structure |
| `refactor_tool` | Planning renames, finding dead code |

### Workflow

1. The graph auto-updates on file changes (via hooks).
2. Use `detect_changes` for code review.
3. Use `get_affected_flows` to understand impact.
4. Use `query_graph` pattern="tests_for" to check coverage.

## Commands

```bash
pnpm dev        # start dev server (localhost:3000)
pnpm build      # production build
pnpm start      # serve production build
pnpm lint       # run ESLint
```

No test suite is configured.

## Stack

- **Next.js 16** (App Router) — read `node_modules/next/dist/docs/` before writing Next.js code; this version may differ from training data
- **React 19** with RSC enabled (`"rsc": true` in components.json)
- **Tailwind CSS v4** — config is CSS-first (no `tailwind.config.js`); all theme customisation lives in `src/app/globals.css`
- **shadcn/ui** (`style: "base-nova"`) — add components with `pnpm dlx shadcn add <component>`
- **Framer Motion** for animations
- **lucide-react** for icons
- **`@base-ui/react`** for headless primitives

Path alias `@/` maps to `src/`.

## Architecture

### Page routes

Each route under `src/app/` is a thin shell that imports and composes section components. Nav and Footer are rendered per-page (not in the root layout — the root layout only adds `FloatingWhatsApp`).

| Route | Page file |
|-------|-----------|
| `/` | `src/app/page.tsx` |
| `/services` | `src/app/services/page.tsx` |
| `/about_us` | `src/app/about_us/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |
| `/fleet` | `src/app/fleet/page.tsx` |
| `/airport` | `src/app/airport/page.tsx` |
| `/outstation` | `src/app/outstation/page.tsx` |
| `/radhe-taxi` | `src/app/radhe-taxi/page.tsx` |
| `/delhi-to-jaipur-taxi` | `src/app/delhi-to-jaipur-taxi/page.tsx` |

### Component structure

Components are feature-co-located under `src/components/<feature>/`. Each page has its own folder of section components.

```
src/components/
  layout/       # Nav, Footer, FloatingWhatsApp (shared across all pages)
  home/         # Hero, Services, Fleet, Features, PopularRoutes, Trust, Steps, Reviews
  services/     # ServiceHero, ServiceGrid, ServiceAirport, ServiceOutstation, ServiceCorporate, ServiceStats, ServicesShowcase
  about/        # AboutHero, AboutStory, AboutFaces, AboutVisionMission, AboutReach, AboutShowcase, AboutCTA
  contact/      # ContactHero, ContactHeroImage, ContactShowcase, ContactForm, ContactDetails
  fleet/        # FleetHero, FleetSelection, FleetFeatures, FleetPricing, FleetCTA, FleetShowcase
  airport/      # AirportHero, AirportAdvantages, AirportRates, AirportStats, AirportFleet, AirportShowcase
  outstation/   # OutstationHero, OutstationShowcase, OutstationDestinations, OutstationFleet, OutstationTestimonials
  intercity/    # IntercityHero, IntercityShowcase, IntercityFleet, IntercityFeatures, IntercityPricing, IntercityCTA
  route/        # RouteHero, RouteShowcase, RouteFeatures, RoutePricing, RouteTrustBanner, RouteFAQ, RouteCTA
  ui/           # shadcn primitives (Button, etc.)
src/lib/
  utils.ts      # cn() — clsx + tailwind-merge helper
```

### Styling conventions

- Use `cn()` from `@/lib/utils` whenever combining conditional Tailwind classes.
- CSS variables for design tokens are defined in `globals.css` (Tailwind v4 CSS-first config).
- `tw-animate-css` provides utility animation classes; Framer Motion handles complex sequence animations.
