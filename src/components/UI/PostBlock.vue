<template>
    <div class="post-block">
        <div class="post-block-image-box">
            <img class="post-image" :src="body.image">
        </div>
        <div class="post-block-text">
            {{ body.title }}
        </div>
        <CustomRouteButton :link="body.link" label="Читать" />

    </div>
</template>

<script setup>
import { useStore } from '@/store/index'
import CustomRouteButton from "./Kit/CustomRouteButton.vue";
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