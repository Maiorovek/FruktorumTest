import { createVuetify } from 'vuetify'
import { VCarousel, VCarouselItem } from 'vuetify/components/VCarousel'


export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      VCarousel,
      VCarouselItem,
    },
  })

  nuxtApp.vueApp.use(vuetify)
})