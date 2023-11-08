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
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./store/**']
  },
})
