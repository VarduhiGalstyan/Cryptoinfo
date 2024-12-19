// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig ({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_APIKEY,
      apiURL: process.env.NUXT_API,
      apiKey2: process.env.NUXT_APIKEY2,
      apiURL2: process.env.NUXT_API,
      apiUrlLimit: process.env.NUXT_APILimit,
      apiURL3: process.env.NUXT_APIPOSTS,
      apiKey3: process.env.NUXT_APIKEY,
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
});