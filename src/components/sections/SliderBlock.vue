<template>
    <v-carousel class="carousel" hide-delimiters>
        <template v-slot:prev="{ props }" placement top>
            <CustomButton class="carousel-button" @click="props.onClick" label="<" />
        </template>
        <template v-slot:next="{ props }">
            <CustomButton class="carousel-button" @click="props.onClick" label=">" />
        </template>
        <v-carousel-item v-for="image in sectionData" :src="image" fit />
    </v-carousel>
</template>

<script setup>
import CustomButton from '../UI/Kit/CustomButton.vue';

const props = defineProps({
    sectionData: {
        type: Object,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
.carousel {
    margin-bottom: 100px;
    .carousel-button {
        background-color: #1B1B1B;
        border: 0;
        width: 60px;
        height: 60px;

        &:hover {
            background-color: #3657D3;
            transition: background-color .2s linear;
        }
    }
}
</style>