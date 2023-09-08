# Nuxt 3 starter

A modular template that provides essential features to quickly get started on your full stack Nuxt 3 project

## Features

- ✔️ Edge compatible 
- ✔️ Prisma integration
- ✔️ User authentication with password and social login via [@bg-dev/nuxt-auth](https://github.com/becem-gharbi/nuxt-auth) module
- ✔️ File upload to S3 compatible file storage services via [nuxt-s3](https://github.com/becem-gharbi/nuxt-s3-edge) module
- ✔️ Customizable UI layer based on Naive UI via [@bg-dev/nuxt-naiveui](https://github.com/becem-gharbi/nuxt-naiveui) module
- ✔️ Tailwindcss integration via [@nuxtjs/tailwindcss](https://github.com/nuxt-modules/tailwindcss) module
- ✔️ HTTP security via [nuxt-security](https://github.com/baroshem/nuxt-security) module

## Setup

1. Create new repository from this [template](https://github.com/becem-gharbi/nuxt-starter).
1. Rename `.example.env` to `.env` and set the environment variables.
1. Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

4. Run prisma generate

```bash
npx prisma generate
```

That's it! You can now get started on your project ✨

## Development Server

Start the development server on http://127.0.0.1:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
