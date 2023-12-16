# Project Title

### Svelte-electron-boilerplate

# Description

This is a [electron](https://www.electronjs.org) app template based on [electron-vite](https://electron-vite.org) with integrated [Playwright](https://playwright.dev) e2e tests and [vitest](https://vitest.dev).

# Getting started

## Dependencies

- node
- npm/yarn/pnpm (recomended)

## Run Locally

Clone the project

```bash
  git clone https://github.com/PawelGawlikDev/svelte-electron.git
```

Go to the project directory

```bash
  cd svelte-electron
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
```

## Storybook

This template have integrated storybook. To run it type:

```bash
pnpm storybook
```

## Running Tests

This template contain two type of tests:

- e2e
- unit

> [!WARNING]
> Before run tests build app using
>
> ```bash
> pnpm build
> ```

To run e2e test, run the following command

```bash
  pnpm test:integration
```

To run unit tests, run the following command

```bash
  pnpm test:unit
```

## Deployment

This project contain ready to use github workflow to test and release ready app. To deploy ready app type:

```bash
  pnpm release
```

And push commit with bump version to github repository

```bash
git push --follow-tags origin master
```

After finish tests and release you can create tag and publish release on github release panel.
