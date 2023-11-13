<template lang="pug">
article.post-block
    div.post-block-image-box
        img.post-image(:src="body.image")
    h3.post-block-title(v-text="body.title")
    CustomButton(:link="body.link" label="Читать" )
</template>

<script setup>
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

    &-image-box {
        max-height: 100%;
        width: 100%;
        border-radius: 2px;
        overflow: hidden;

        .post-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &-title {
        margin-top: 2%;
        margin-bottom: 3%;
        max-width: 100%;
        font-size: .6em;
        font-weight: 800;
        line-height: 1.3em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
}
</style>