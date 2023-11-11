<template lang="pug">
div.articles
    div.articles-title(v-if="store.getPosts.page_type !== 'home'" v-text="sectionData.title")
    div.articles-content 
        PostBlock(v-for="post in sectionData.articles" :body="post")
</template> 

<script setup>
const store = useStore();
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
        grid-template-columns: 32% 32% 32%;
        justify-content: space-between;
        grid-row-gap: 50px;
    }
}
</style>