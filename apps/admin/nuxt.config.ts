// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@layers-bug/base'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Distinct port so both apps can run side by side.
  devServer: { port: 3001 }
})
