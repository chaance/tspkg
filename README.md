<h1 align="center">tspkg</h1>

A starter template for creating TypeScript packages. Pre-configured with:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [tsup](https://tsup.egoist.dev/)
- [Vitest](https://vitest.dev/)

## Getting Started

Author your package in `src/`. By default, the entrypoint is `src/index.ts`. Multiple entrypoints can be configured in `tsup.config.ts`.

Build your package with `npm run build`. This will output the compiled package to `dist/` and ... you're done! Your package is ready to publish. Kick back and enjoy your new OSS package.

## Bundling

Vite is installed because it is a peer dependency of Vitest. I still use `tsup` for bundling by default, as it has a simpler interface. While Vite is a great bundler, it is only really useful for browser packages where you might want a testing page for development.

Vite and tsup are both powered by esbuild and Rollup under the hood, so a) the added dependency overhead is minimal, and b) switching should be relatively simple and result in similar output if you want Vite's features.

In the future I may turn this project into a CLI script that allows you to choose Vite for browser packages.

## Contributing

PRs welcome!
