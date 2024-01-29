// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-icon', '@nuxt/ui', 'nuxt-swiper','nuxt-gtag'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  experimental: {
    viewTransition: true,
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL
    },
  },
  gtag: {
    id: 'G-37YYMBREGP'
  },
});
