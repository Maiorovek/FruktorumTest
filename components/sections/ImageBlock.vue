<template lang="pug">
figure.image-block
    div.image-box
        img.image(:src="sectionData.src")
    figcaption.image-caption {{ sectionData.caption }}
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
.image-block {
    display: flex;
    flex-direction: column;
    margin-bottom: 10%;

    .image-box {
        border-radius: 2px 220px 2px 2px;
        overflow: hidden;

        .image {
            width: 100%;
            height: 100%;
            object-fit: cover
        }
    }

    .image-caption {
        margin-left: auto;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #8D959C;
    }
}
</style>