<template>
    <div class="slider-block">
        <CustomButton class="custom-button" @click="prevSlide" label="&lt;" />
        <div class="slider-wrapper">
            <div class="slider-slide" v-for="(image, index) in images.data" :key="`${image.id}`">
                <transition name="slide-in">
                    <div class="slide" v-show="currentIndex === index">
                        <img class="image" :src="image" />
                    </div>
                </transition>
            </div>
        </div>
        <CustomButton class="custom-button" @click="nextSlide" label="&gt;" />
    </div>
</template>
  
<script setup>
import CustomButton from '../UI/Kit/CustomButton.vue';
import { defineProps, ref } from 'vue';

const props = defineProps({
    images: {
        type: Object,
        required: true,
    },
});

let currentIndex = ref(0);

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.data.length;
};

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + props.images.data.length) % props.images.data.length;
};
</script>
  
<style lang="scss" scoped>
.slider-block {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .custom-button {
        width: 60px;
        height: 60px;
    }

    .slider-wrapper {
        max-width: 1112px;
        max-height: 550px;
        position: relative;
        overflow: hidden;

        .slider-slide {
            max-width: 1100px;
            max-height: 550px;


            .slide-in-enter-active,
            .slide-in-leave-active {
                transition: all .6s ease;
            }

            .slide-in-enter-from {
                transform: translateX(-100%);
            }

            .slide-in-leave-to {
                transform: translateX(-100%);
            }

            .image {
                border-radius: 2px;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }


    }
}
</style>