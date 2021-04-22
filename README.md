# 🐲

### Defaults
- **TypeScript 4.2.4**
- **Babel 7** (`preset-env` set to ">2%, last 1 edge version, last 2 safari version, not ie 11, not op_mini all").
- **PostCSS** (CSS Modules + CSSNano)
- **React** (^17.0.2)
- **React Router**

### How to run locally
- `yarn install`
- `yarn start`

### Build for production
- `yarn build` -> Will output a build folder

### Linting
**ESLint & Prettier** (Using AirBnB defaults + TypeScript)
- `yarn lint` -> Will lint all code under `src` folder.

### Testing
**Jest**
- `yarn test` -> Will run all files under `__tests__` folders.
