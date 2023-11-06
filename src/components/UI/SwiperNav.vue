<template>
    <div class="swiper-nav">
        <CustomButton 
            class="custom-button" 
            @click="swiper.slidePrev()" 
            label="&lt;" 
        />
        <CustomButton 
            class="custom-button" 
            @click="swiper.slideNext()" 
            label="&gt;" 
        />
    </div>
</template>

<script setup>
import CustomButton from './Kit/CustomButton.vue';
const swiper = useSwiper()



</script>

<style lang="scss" scoped>

.swiper-nav {
    display: flex;
    justify-content: space-between;

    .custom-button {
        width: 60px;
        height: 60px;
        background-color: #1B1B1B;
        border: 0;

        &:hover {
            background-color: #3657D3;
            transition: background-color .2s linear;
        }
    }
}
</style>