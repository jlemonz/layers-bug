// Base layer — shared config/components/composables for all apps.
// https://nuxt.com/docs/getting-started/layers
export default defineNuxtConfig({
  // tslib's CJS entry sets `__esModule: true` but exports no `default`, so rolldown's
  // __toESM() interop leaves `.default` undefined and tslib/modules/index.js throws
  // "Cannot destructure property '__extends'" at server startup. Redirect the bare
  // `tslib` specifier to its pure-ESM build. Exact-match regex so `tslib/...`
  // subpaths aren't rewritten too. Needed by @supabase/* under Nuxt 4.5 / Vite 8.
  vite: {
    resolve: {
      alias: [{ find: /^tslib$/, replacement: 'tslib/tslib.es6.mjs' }]
    }
  },
  compatibilityDate: '2025-07-15'
})
