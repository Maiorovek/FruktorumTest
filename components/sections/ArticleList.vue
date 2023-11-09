<template lang="pug">
div.articles
    div.articles-title {{ sectionData.title }}
    div.articles-content 
        div.articles-content-post(v-for="post in sectionData.articles")
            PostBlock(:body="post")
</template> 

<script setup>
const props = defineProps({
    sectionData: {
        type: Object,
        required: true,
    },
})
</script>

<style lang="scss" scoped>
.articles {
    margin-bottom: 100px;

    &-title {
        font-size: 34px;
        font-weight: 800;
        line-height: 46px;
        margin-bottom: 50px;
    }

    &-content {
        display: grid;
        grid-template-columns: 30% 30% 30%;
        justify-content: space-between;
        grid-row-gap: 50px;

        &-post {
        }
    }
}
</style>