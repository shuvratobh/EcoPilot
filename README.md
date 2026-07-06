# EcoPilot

**AI-Powered Sustainability Intelligence Platform**

EcoPilot helps organizations monitor, analyze, and improve office sustainability through AI-powered insights, real-time EcoScore tracking, and automated report generation.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | TailwindCSS + shadcn/ui |
| Database | PostgreSQL via Supabase + Prisma ORM |
| Auth | Supabase Auth |
| AI | Google Gemini 1.5 Pro |
| Testing | Vitest + Playwright |

---

## Getting Started

### Prerequisites

- Node.js 20+
- A [Supabase](https://supabase.com) project
- A [Google AI Studio](https://aistudio.google.com) API key

### 1. Clone and Install

```bash
git clone https://github.com/your-org/ecopilot.git
cd ecopilot

# Windows
.\scripts\bootstrap.bat

# Unix/Linux/macOS
chmod +x ./scripts/bootstrap.sh && ./scripts/bootstrap.sh
```

### 2. Environment Variables

```bash
cp .env.example .env.local
# Fill in your Supabase and Gemini credentials
```

### 3. Database Setup

```bash
# Run migrations (requires DATABASE_URL in .env.local)
npx prisma migrate dev --name init

# Seed emission factors
npm run db:seed
```

### 4. Run Locally

```bash
npm run dev
# → http://localhost:3000
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run typecheck` | TypeScript type check |
| `npm run lint` | ESLint |
| `npm run test` | Vitest unit tests |
| `npm run test:e2e` | Playwright E2E tests |
| `npm run db:migrate` | Run Prisma migrations |
| `npm run db:seed` | Seed emission factors |
| `npm run db:studio` | Open Prisma Studio |

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages and API routes
│   ├── (marketing)/      # Public landing page
│   ├── (auth)/           # Login, register, password reset
│   └── (app)/            # Protected app shell (dashboard, analytics, etc.)
├── features/             # Feature modules (resources, ecoscore, goals, etc.)
│   └── resources/        # Unified ResourceLog feature (shared by all 5 types)
├── lib/                  # Core infrastructure
│   ├── ai/               # AI client + adapters + prompts
│   ├── auth/             # RBAC permissions + session helpers
│   ├── cache/            # Cache tag constants
│   ├── carbon/           # Carbon emission calculator
│   ├── db/               # Prisma singleton
│   ├── ecoscore/         # EcoScore calculator (pure)
│   ├── errors/           # Typed error hierarchy
│   ├── jobs/             # Background job infrastructure
│   ├── logger/           # Centralized logger
│   ├── supabase/         # Supabase clients (browser, server, middleware)
│   └── utils/            # Format, date, cn, response helpers
├── config/               # App, AI, rate-limit configuration
├── constants/            # App-wide constants (EcoScore weights, etc.)
└── types/                # Shared TypeScript types
```

---

## Documentation

All architecture decisions, API specifications, and design guidelines are in `/docs`.

| Document | Description |
|---|---|
| `docs/00_PROJECT_OVERVIEW.md` | Product vision and goals |
| `docs/09_SYSTEM_ARCHITECTURE.md` | System architecture |
| `docs/10_DATABASE_SCHEMA.md` | Database schema |
| `docs/11_API_SPECIFICATION.md` | REST API reference |
| `docs/12_ARCHITECTURE_DECISIONS.md` | ADRs |
| `docs/14_AI_COPILOT.md` | AI Copilot specification |

---

## License

Private. All rights reserved.
