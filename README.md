# Reproduction for missing Extension service workers in Cypress

## Issue

Chrome Extensions are registered as service workers since Manifest v3 was introduced. For the first file that Cypress runs, the service worker is present. For the subsequent files that Cypress runs, the service worker is not running. This can be verified using Chrome's Task Manager.

## About this reproduction

This reproduction uses a Chrome Extension v3 starter template from [chrome-extension-v3-starter](https://github.com/SimGus/chrome-extension-v3-starter).

## How to reproduce the issue

Before getting started, install the packages (`npm ci`).

1. Start a static file-server in the root directory of this repo on port 8000. (`python3 -m http.server 8000`)
1. Run Cypress using `npm run cypress:run`
1. When the first spec is paused, check Chrome's Task Manager and notice the service worker running.
1. Resume the first spec.
1. When the second spec is paused, check Chrome's Task Manager and notice the service worker is absent.
