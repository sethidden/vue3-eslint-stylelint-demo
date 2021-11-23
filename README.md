# vue3-eslint-stylelint-demo

Vue 3 with:
* ESLint
* eslint-plugin-vue (find common mistakes in .vue files)
* eslint-plugin-prettier (formatting rules)
* stylelint (lint `<style>` block from .vue files)

To see all of the above in action install ESLint and Stylelint extensions (type `@recommended` in extension search menu in VS Code), then open src/HelloWorld.vue. That file intentionally contains linting errors that check if all of these linting plugins work. Stylelint needs a separate extension - it's not integrated with ESLint.

---

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates.

However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can run `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
