// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
