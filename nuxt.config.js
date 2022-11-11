import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: true,
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt-hero-icons/solid/nuxt',
    '@nuxt-hero-icons/outline/nuxt',
  ],
  runtimeConfig: {
    CYGRIND_API_SECRET: process.env.CYGRIND_API_SECRET,
    CYGRIND_BASE_URL: process.env.CYGRIND_BASE_URL,
  },
  colorMode: {
    classSuffix: '',
  },
});
