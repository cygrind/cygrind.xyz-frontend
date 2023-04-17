// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: true,
  buildModules: [
    '@nuxt-hero-icons/solid/nuxt',
    '@nuxt-hero-icons/outline/nuxt',
  ],
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    CYGRIND_API_SECRET: process.env.CYGRIND_API_SECRET,
    CYGRIND_BASE_URL: process.env.CYGRIND_BASE_URL,
  },
  colorMode: {
    classSuffix: '',
    fallback: 'dark',
  },
});
