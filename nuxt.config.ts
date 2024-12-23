// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig ({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_APIKEY,
      apiURL: process.env.NUXT_API,
    },
  },

  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_and_default",
    locales: [
      {
        code: "ru",
        iso: "ru-RU",
        name: "Russian",
        file: "ru.json",
        title: "Ru",
      },
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json",
        title: "En",
      },
    ],
    defaultLocale: "ru",
  },
  nitro: {
    compressPublicAssets: true,
  },
});