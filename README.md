# Overview

[crudy-people](https://crudy-people.vercel.app/) is a CRUD application where users can add a person (username, first name, last name, avatar url) to a collection of people. People are displayed in a grid. Data is stored using Firebase's Realtime Database. This gives users the experience of seeing live updates being made to the collection as other users add, update, and delete people. [crudy-people](https://crudy-people.vercel.app/) is hosted on Vercel: [https://crudy-people.vercel.app/](https://crudy-people.vercel.app/)

## Table of Contents

- [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Technologies](#technologies)
  - [Folder Structure](#folder-structure)
  - [Improvements](#improvements)

---

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create environment variables

```env
// .env.local
// add your firebase config values
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

3. Start development server

```bash
npm run dev
```

4. Run unit tests

```bash
npm run test
```

---

## Technologies

The following technologies were chosen with developer experience and code maintainability as primary concerns.

- **Firebase**

  - Realtime Database allows for real time data synchronization across clients
  - Ease of use, SDK allows for quick setup and integration with application

- **Next.js**

  - Faster compile times allow developers to iterate more efficiently
  - File-based routing using App Router is easy and intuitive
  - Server side optimizations such as server-side rendering, static site generation
  - Built-in support for caching data

- **TypeScript**

  - Static typing enables developers to catch errors and bugs
  - Improves code readability and documentation
  - Gives developers confidence when refactoring

- **Tailwind CSS**

  - Prebuilt utility classes are intuitive and easy to use
  - Smaller bundle size compared to other CSS frameworks

- **ESLint**

  - Enforces basic code quality and standards

- **Prettier**

  - Consistent code formatting across the project
  - Improves productivity by automatically formatting code for developers

- **React Testing Library**

  - Promotes a user-centric testing approach by focusing on testing the behavior of components
  - Encourages best practices by focusing on tests that are more resilient to implementation changes

- **Vercel**
  - Simple straight forward deployment process
  - Integration with GitHub automatically builds and deploys when changes are made

---

## Folder Structure

- 📁 crudy-people
  - 📁 public
  - 📁 src
    - 📁 app
    - 📁 components
    - 📁 firebase
  - 📄 .eslintrc.json
  - 📄 .env.local
  - 📄 .prettierrc.json
  - 📄 jest.config.mjs
  - 📄 jest.setup.js
  - 📄 next.config.js
  - 📄 package.json
  - 📄 tailwind.config.js
  - 📄 tsconfig.json

---

## Improvements

Things I would improve given more time.

- **Visual Indicator:** Add an additional visual indicator for when users are added/updated/deleted
- **Bulk delete:** Add a way for a user to bulk delete people.
- **Image Hosting:** Provide a way for users to upload their own photos
