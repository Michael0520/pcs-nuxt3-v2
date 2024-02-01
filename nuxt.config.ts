// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n"],
  i18n: {
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'zh-tw',
        iso: 'zh-TW',
        file: 'zh-tw.json',
      },
    ],
    defaultLocale: 'zh-tw',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      redirectOn: 'root',
    },
  },

})