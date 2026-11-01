# MealExplorer

MealExplorer is an Ionic and Angular application for exploring meals and recipes. It can run in a web browser and be built for Android with Capacitor.

## Requirements

- Node.js 20.19+, 22.12+, or 24+
- npm
- For Android builds: Android Studio, an Android SDK, and a compatible Java development kit

## Install and run

From the project directory, install dependencies and start the development server:

```sh
npm ci
npm start
```

Open the local URL printed by the Angular CLI (typically `http://localhost:4200`).

## Build and test

```sh
npm run build
npm run test:unit
npm run test:e2e
```

The end-to-end tests use Playwright. Install its browser binaries if prompted:

```sh
npx playwright install
```

## Android

Build the web app, synchronize it into the Android project, then open the project in Android Studio:

```sh
npm run build
npx cap sync android
npx cap open android
```

The Android project is a Capacitor shell; its generated web assets are not included in this source archive and are recreated by `npx cap sync android`.
