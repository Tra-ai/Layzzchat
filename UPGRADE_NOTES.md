# Upgrade notes

- Updated Next.js to 16.4.6 and React / React DOM to 19.3.1.
- Updated Supabase JS to 2.119.0; other dependencies resolve their current npm `latest` tags when `npm install` runs.
- Updated TypeScript to 7.0.2 and moved ESLint to the flat-config format.
- Updated the server-side Supabase helper and OAuth callback for asynchronous `cookies()` in modern Next.js.
- Renamed `middleware.ts` to `proxy.ts` for the Next.js 16 convention.
- Kept Tailwind CSS on the latest v3 release (3.4.17) to preserve the existing Tailwind config and shadcn-style CSS tokens without an unverified v4 migration.
- Kept `@ducanh2912/next-pwa` 10.2.9 and explicitly use the Webpack bundler because this PWA integration is Webpack-based.

## Install and verify

Run `npm install`, then `npm run typecheck`, `npm run lint`, and `npm run build`.
The dependency registry was unreachable in the editing environment, so a fresh lockfile could not be generated and install/build checks could not be run here. `npm install` will generate a new `package-lock.json` using the current npm registry versions.
