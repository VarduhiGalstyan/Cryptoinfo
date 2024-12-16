// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
  
// })
export default {
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
    }
  }