<template>
    <div class="slider-block">
        <Swiper
        class="swiper" 
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" 
        :slides-per-view="1" 
        :loop="true" 
        :effect="'creative'"
        :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
        }" 
            :creative-effect="{
                prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }"
        >
            <SwiperSlide v-for="slide in sectionData" :key="slide">
                <img class="image" :src="slide" alt="">
            </SwiperSlide>
            <SwiperNav/>
        </Swiper>
    </div>
</template>

<script setup>
import SwiperNav from '../UI/SwiperNav.vue';

const props = defineProps({
    sectionData: {
        type: Object,
        required: true,
    }
})
</script>


<style lang="scss" scoped>
.slider-block {
    margin-top: 100px;
    .swiper {
        .image {
            width: 100%;
        }
    }
    
}

</style>