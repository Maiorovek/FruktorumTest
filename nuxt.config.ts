// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true };

  pages: [
    {
      path: '/',
      component: './pages/Home.vue',
    },
  ]
})
