// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
  
// })
export default defineNuxtConfig ({
  http: {
    baseURL: 'https://api.cryptoinfo.me',
    headers: {
      'Accept': 'application/json',
      'api_key': 'eCGo9bZjoxqGZW8h325LA3wlKV0vq01lIQ4w'
    }
  },

  // Alternatively, if using axios:
  axios: {
    baseURL: 'https://api.cryptoinfo.me',
    headers: {
      'Accept': 'application/json',
      'api_key': 'eCGo9bZjoxqGZW8h325LA3wlKV0vq01lIQ4w'
    }
  },

  modules: ['@nuxtjs/i18n'],
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