<template lang="pug">
div.articles
    h2.articles-title(v-if="store.getPosts.page_type !== 'home'" v-text="sectionData.title")
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

    @media only screen and (max-width: 1024px) {
        margin-bottom: 50px;
    }

    @media only screen and (max-width: 768px) {
        margin-bottom: 25px;
    }

    &-title {
        font-size: 34px;
        font-weight: 800;
        line-height: 46px;
        margin-bottom: 50px;

        @media only screen and (max-width: 768px) {
            font-size: 25px;
            line-height: 35px;
            margin-bottom: 25px;
        }
    }

    &-content {
        display: grid;
        grid-template-columns: 32% 32% 32%;
        justify-content: space-between;
        grid-row-gap: 50px;

        @media only screen and (max-width: 675px) {
            grid-template-columns: 47% 47%;
            grid-row-gap: 25px;
        }
    }
}
</style>