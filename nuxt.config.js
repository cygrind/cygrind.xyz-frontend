import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: true,

  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~/tailwind.config.js',
    exposeConfig: false,
    config: { },
    injectPosition: 0,
    viewer: true
  },

  colorMode: {
    classSuffix: '',
  },
});
