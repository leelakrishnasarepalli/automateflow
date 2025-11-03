# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (runs on http://localhost:8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Run linter
npm run lint

# Preview production build
npm run preview
```

## Technology Stack

This is a **Vite + React + TypeScript** project built using [Lovable](https://lovable.dev), featuring:
- **React 18** with React Router for routing
- **shadcn/ui** components (Radix UI primitives)
- **Tailwind CSS** for styling
- **TanStack Query** for server state management
- **React Hook Form** with Zod for form validation
- **Vite** with SWC for fast builds

## Project Architecture

### Application Structure

The app follows a component-based architecture:

```
src/
├── App.tsx              # Root component with routing setup
├── main.tsx             # Application entry point
├── components/          # Feature components (Hero, Services, Portfolio, etc.)
│   └── ui/             # shadcn/ui components
├── pages/              # Route pages (Index, NotFound)
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

### Routing

React Router is configured in [App.tsx](src/App.tsx):
- Single-page application with client-side routing
- Main route: `/` renders [Index.tsx](src/pages/Index.tsx)
- 404 handling via [NotFound.tsx](src/pages/NotFound.tsx)
- **Important**: Add custom routes ABOVE the catch-all `*` route

### State Management

- **TanStack Query** (`QueryClient`) is set up globally in [App.tsx](src/App.tsx) for server state
- Toast notifications via `sonner` and shadcn/ui `Toaster`
- Tooltip functionality via `TooltipProvider`

### Path Aliases

The `@/` alias points to the `src/` directory (configured in [vite.config.ts](vite.config.ts)):
```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## Styling Guidelines

### Tailwind CSS

- Uses **CSS variables** for theming (defined in `src/index.css`)
- Dark mode support via class strategy: `darkMode: ["class"]`
- Custom color system based on HSL values (primary, secondary, accent, etc.)
- Responsive design with mobile-first approach

### className Utility

Use the `cn()` helper from [lib/utils.ts](src/lib/utils.ts) to merge Tailwind classes:
```typescript
import { cn } from "@/lib/utils";

<div className={cn("base-classes", conditionalClass && "conditional-classes")} />
```

This combines `clsx` and `tailwind-merge` to handle conditional classes and resolve conflicts.

## shadcn/ui Components

### Adding Components

Use the shadcn CLI to add new UI components:
```bash
npx shadcn@latest add <component-name>
```

Configuration is in [components.json](components.json):
- Components install to `src/components/ui/`
- Uses TypeScript (`.tsx`)
- CSS variables enabled for theming

### Component Patterns

shadcn/ui components:
- Are kept in `src/components/ui/` and should not be modified directly for app-specific needs
- Use Radix UI primitives under the hood
- Accept className props that can be extended with `cn()`

For custom variants, wrap shadcn components in your own components in `src/components/`.

## TypeScript Configuration

- **Relaxed type checking** enabled (see [tsconfig.json](tsconfig.json)):
  - `noImplicitAny: false`
  - `strictNullChecks: false`
  - `noUnusedParameters: false`
  - `noUnusedLocals: false`
- Path mapping configured for `@/*` alias
- Three config files: base, app, and node

## Build & Development Notes

- **Dev server**: Runs on port 8080 with IPv6 support
- **Build tool**: Vite with React SWC plugin for fast compilation
- **Development mode**: Uses `lovable-tagger` plugin for component identification
- **Linting**: ESLint 9+ with flat config ([eslint.config.js](eslint.config.js))

## Component Organization

### Page Components

Pages in `src/pages/` are route-level components. The main [Index](src/pages/Index.tsx) page composes sections:
- Hero (landing section)
- Services (services offered)
- ToolLogos (technology showcase)
- Portfolio (work examples)
- CTA (call-to-action)
- Footer

### Feature Components

Feature components in `src/components/` (not in `ui/`) contain business logic and compose UI components. They typically:
- Use Tailwind for styling
- Import from `@/components/ui/` for primitives
- Export as default

## Custom Hooks

Located in `src/hooks/`:
- `use-mobile.tsx` - Responsive breakpoint detection
- `use-toast.ts` - Toast notification management

## Lovable Integration

This project was created with Lovable and supports:
- Automatic commits when changes are made via Lovable platform
- Hot reload in development
- Direct deployment through Lovable interface

Project URL: https://lovable.dev/projects/cd34079e-36fa-4c79-814f-d2f6ac3144f0
