<template lang="pug">
v-carousel.carousel(hide-delimiters)
    template(v-slot:prev="{ props }" placement top)
        CustomButton.carousel-button(@click="props.onClick" label="&lt;")
    template(v-slot:next="{ props }")
        CustomButton.carousel-button(@click="props.onClick" label="&gt;")
    v-carousel-item(v-for="image in sectionData" :src="image" fit)
</template>

<script setup>
const props = defineProps({
    sectionData: {
        type: Object,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
.carousel {
    height: auto !important;
    margin-bottom: 100px;

    @media only screen and (max-width: 1024px) {
        margin-bottom: 50px;
    }

    @media only screen and (max-width: 768px) {
        margin-bottom: 25px;
    }

    .carousel-button {
        background-color: #1B1B1B;
        border: 0;
        min-width: 60px;
        min-height: 60px;

        @media only screen and (max-width: 425px) {
            min-width: 40px;
            min-height: 40px;
        }

        &:hover {
            background-color: #3657D3;
            transition: background-color .2s linear;
        }
    }
}
</style>