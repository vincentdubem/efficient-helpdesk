# Efficient Helpdesk

**Design and Implementation of a Web-Based Complaint and Helpdesk Management System for Independent LPG Gas Station in Enugu, Nigeria**

Efficient Helpdesk is an academic software-engineering project focused on helping independent LPG retail stations and skid plants record, organize, track, and resolve customer complaints and service requests.

**Current milestone: Phase 1 — Homepage only.** This repository contains a responsive, accessible homepage based on the approved reference design. Complaint submission, tracking, login, dashboards, and the API are *planned*; they have not yet been implemented. Buttons for those features open a clear preview dialog rather than pretending to submit real data.

## Project purpose

LPG retailers may receive complaints through calls, physical notebooks, walk-ins, or messaging apps. Without a centralized process, it can be difficult to follow up on complaints, monitor response status, or recognize urgent safety issues. This project is intended to address that gap through a web-based ticketing and management system.

### Academic objectives

1. Examine current complaint-handling methods at independent LPG stations.
2. Design a database for customer details, complaint tickets, assigned personnel, and resolution records.
3. Provide a customer interface for logging complaints and checking ticket status.
4. Provide an administrator interface for reviewing, responding to, and closing tickets.
5. Escalate safety-related reports appropriately, including potential cylinder leaks and equipment faults.
6. Evaluate the finished system for usability, reliability, data integrity, and security.

> **Safety note:** A future complaint form must not be presented as an emergency-response service. Reports of suspected gas leaks should prominently direct people to move away from the danger and contact the station's emergency channel or relevant local emergency services immediately. Automated ticketing is not a substitute for emergency action.

## Folder structure

```text
efficient-helpdesk/
├── README.md                    # Overall project overview
├── .gitignore
├── .editorconfig
├── .vscode/
│   └── extensions.json
├── docs/
│   ├── reference-homepage.png   # User-approved reference mockup
│   └── project-roadmap.md       # Future milestones and scope
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig*.json
│   ├── eslint.config.js
│   ├── public/
│   │   ├── favicon.svg
│   │   └── images/
│   │       ├── lpg-hero.webp
│   │       └── lpg-station-wide.webp
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── components/
│       │   ├── Brand.tsx
│       │   ├── Header.tsx
│       │   ├── ComingSoonDialog.tsx
│       │   └── FeatureCard.tsx
│       ├── sections/
│       │   ├── HeroSection.tsx
│       │   ├── FeaturesSection.tsx
│       │   ├── HowItWorksSection.tsx
│       │   └── Footer.tsx
│       ├── data/
│       │   └── homepage.ts
│       └── styles/
│           ├── tokens.css
│           ├── global.css
│           └── homepage.css
└── backend/
    └── README.md               # Reserved for a future Node/Express API
```

## Technology stack (Phase 1)

| Area | Technology |
| --- | --- |
| Frontend | React + TypeScript |
| Build tooling | Vite |
| UI and styling | Semantic HTML, CSS, CSS variables |
| Icons | lucide-react |
| Font stack | Poppins (headings), Inter (body), system fallbacks |
| Back end | Not yet implemented |
| Data persistence | Not yet implemented |

## Getting started

Prerequisites: **Node.js 20.19+ or 22.12+** and npm (Vite 7 requirements). Node.js 22 LTS is recommended for the project.

```bash
# From repository root
cd frontend
npm install
npm run dev
```

Then visit the local URL printed by Vite (normally `http://localhost:5173`).

### Other commands

```bash
cd frontend
npm run build      # Type-check and generate production assets
npm run preview    # Preview a production build locally
npm run lint       # ESLint checks
npm run typecheck  # TypeScript static checking
```

`npm install` generates `package-lock.json`. **Commit that lockfile** to GitHub, and use `npm ci` in future CI/deployments for reproducible installs. Never commit real API keys or `.env` secrets.

## Current homepage features

- Desktop navigation and collapsible mobile menu
- Responsive marketing hero section with local, optimized LPG-station imagery
- Submit Complaint, Track Complaint, and Login actions with accessible *not-yet-available* dialog
- Service highlight cards and concise How It Works explanation
- About / Contact anchor links with no invented station identity or contact number
- Responsive layout, semantic landmarks, alt text, focus indicators, reduced-motion support, and basic SEO metadata

**The homepage does not create user accounts, submit complaints, or communicate with an API.** Those will be implemented in later milestones.

## Future feature flow

```text
Homepage -> Submit complaint -> Save ticket + ticket ID
         -> Secure account setup / login -> Customer dashboard
         -> Admin dashboard -> Response/status updates -> Resolution
```

Future roles: `customer` and `admin`. Planned ticket statuses: `pending`, `in_progress`, `resolved`. Safety reports also require a separate urgent-priority workflow and explicit human escalation.

## GitHub workflow

```bash
# After cloning your empty/new repo and placing this project inside it:
cd efficient-helpdesk
# If this folder was not cloned from GitHub:
git init
# Otherwise skip git init and use your existing repository remote.
git add .
git commit -m "feat(frontend): scaffold homepage"
# Set your school repository remote if not already set, then:
git push -u origin main
```

Set commit identity **inside this repository** using `git config --local user.name ...` and `git config --local user.email ...` so your other projects are unaffected. Push authentication is separate from Git commit identity.

## Design reference and assets

- Source reference: `docs/reference-homepage.png` (the supplied mockup)
- Hero images: `frontend/public/images/` (project assets / cropped design reference)
- UI colours and spacing: `frontend/src/styles/tokens.css`

The images are illustrative, not verified photography of a real LPG business. Replace brand/operating details only after they are confirmed with the actual case-study organization.

## Scope disclaimer

This is an academic prototype under active development. It is **not** a live safety-monitoring, emergency-response, billing, or LPG-plant control system.
