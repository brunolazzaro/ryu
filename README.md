> [!CAUTION]
> This repo has been archived and is no longer maintained. For a more up-to-date starter kit using Vite, check out https://github.com/saibayadon/kitsune

# 🐲

No frills, super basic, typescript React boilerplate.
For a more robust setup check out something like https://astro.build/ or https://vitejs.dev/

### Defaults

- **TypeScript 5.2.2**
- **SWC** (compatibility set to ">2%, last 1 edge version, last 2 safari version, not ie 11, not op_mini all").
- **PostCSS** (CSS Modules + CSSNano)
- **React** (^18.2.0)
- **React Router**

### How to run locally

- `bun install`
- `bun run start`

### Build for production

- `bun run build` -> Will output a build folder

### Linting

**ESLint & Prettier** (Using AirBnB defaults + TypeScript)

- `bun run lint` -> Will lint all code under `src` folder.

### Testing

**Jest**

- `bun run test` -> Will run all files under `__tests__` folders.
