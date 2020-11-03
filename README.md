# 🐲

### Defaults
- **TypeScript 4.0.5**
- **Babel 7.12** (`preset-env` set to ">2%, last 1 edge version, last 2 safari version, not ie 11, not op_mini all").
- **PostCSS** (CSS Modules + CSSNano)
- **React** (^17.0.1)
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
- `yarn test` -> Will run all files under __tests__ folders.
