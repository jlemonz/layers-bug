// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@layers-bug/base'],
  modules: ['@nuxtjs/supabase'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
