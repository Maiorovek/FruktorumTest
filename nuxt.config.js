// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  head: {
    title: "Fruktorum-test",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,800;1,300&display=swap",
      },
    ],
  },
  css: [
    '@/src/assets/index.scss',
  ],
  modules: [
    '@pinia/nuxt',
    'nuxt-swiper',
  ],
  pinia: {
    storesDirs: ['./store/**']
  },
  swiper: {
    styleLang: 'scss',
  },
})
