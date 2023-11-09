<template lang="pug">
div.post-block
    div.post-block-image-box
        img.post-image(:src="body.image")
    div.post-block-text(v-text="body.title")
    CustomRouteButton(:link="body.link" label="Читать")
</template>

<script setup>
import CustomRouteButton from "./Kit/CustomRouteButton.vue";
import { useStore } from '@/store/index'
const store = useStore();

const props = defineProps({
    body: {
        type: Object,
        required: true,
    },
})

</script>

<style lang="scss" scoped>
.post-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-image-box {
        max-height: 320px;
        max-width: 100%;
        border-radius: 2px;
        overflow: hidden;

        .post-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &-text {
        margin-top: 20px;
        margin-bottom: 30px;
        max-width: 100%;
        font-size: 22px;
        font-weight: 800;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
}
</style>