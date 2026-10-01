# ALPS Website

React project built with:

- **Vite** – build tool & dev server
- **React 19** – UI library
- **TypeScript** – type safety
- **SCSS** – styling (with `sass-embedded`)
- **Mantine** – component library
- **React Router** – client-side routing
- **Vitest** + **Testing Library** – unit testing
- **ESLint** + **Prettier** – linting & formatting
- **Bun** – package manager

## Scripts

| Script                 | Description                         |
| ---------------------- | ----------------------------------- |
| `bun run dev`          | Start the Vite dev server           |
| `bun run build`        | Type-check and build for production |
| `bun run preview`      | Preview the production build        |
| `bun run test`         | Run Vitest in watch mode            |
| `bun run test --run`   | Run Vitest once (CI)                |
| `bun run lint`         | Run ESLint                          |
| `bun run format`       | Format with Prettier                |
| `bun run format:check` | Check formatting with Prettier      |

## Project structure

```
src/
  pages/        # Route pages (Home, About)
  test/         # Test setup & utilities
  App.tsx       # Root component with AppShell + routing
  main.tsx      # Entry point (MantineProvider + BrowserRouter)
```
