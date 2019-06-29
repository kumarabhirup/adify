# 🍛 nodejs-boilerplate
[![Type](https://img.shields.io/badge/type-boilerplate-yellow.svg?style=flat-square)](https://github.com/KumarAbhirup/nodejs-boilerplate)
[![stage](https://img.shields.io/badge/stage-Testing%20%F0%9F%94%A5-000000.svg?style=flat-square)](https://github.com/KumarAbhirup/nodejs-boilerplate)
[![Prefers](https://img.shields.io/badge/prefers-Downloading%20ZIP%20file-blue.svg?style=flat-square)](https://github.com/KumarAbhirup/nodejs-boilerplate)
[![Twitter](https://img.shields.io/twitter/follow/kumar_abhirup.svg?style=social&label=@kumar_abhirup)](https://twitter.com/kumar_abhirup/)

## 📦 Setup
###  🖥️ Development environment
- Run
```bash
$ npm i
$ npm run dev
```
- Visit `http://localhost:3001/`

### 🎷 SASS usage
- Dump all your `.scss` files in `src/public/assets/styles`.
- Run `npm run gulp` to generate minified CSS files.
- While styling, use `npm run gulp:watch`, for live compilation.

### ⚒️ Linting
**In VSCode**
- Install ESLint and Prettier VSCode extensions.
- **Done! Now you have live linting and autofixing setup!**

**In Any other IDE**
- Run `npm run lint` to check for linting errors.
- Run `npm run lint:fix` to fix the linting errors.

## 🦄 Info
- The entrypoint for the app is `src/server/index.js`. App uses ExpressJs. Do your custom server, APIs and routing from there. [Learn more](https://expressjs.com)
- The `src/public` directory is served on `http://localhost:3001/public`.
- Store your html templates in `src/public` directory.
- Supports only `.scss` files for compilation.
- To customize the linter, use `.eslintrc` and `.prettierrc` file. [Learn more](https://eslint.org)

## 📝 License
**MIT - Source code by [Kumar Abhirup](https://kumar.now.sh)**

_Follow me 👋 **on Twitter**_ →   [![Twitter](https://img.shields.io/twitter/follow/kumar_abhirup.svg?style=social&label=@kumar_abhirup)](https://twitter.com/kumar_abhirup/)