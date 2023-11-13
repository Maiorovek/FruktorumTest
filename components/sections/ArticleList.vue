<template lang="pug">
section.articles
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
    margin-bottom: 10%;
    font-size: 34px;
    line-height: 1.35em;

    &-title {
        font-size: 1em;
        font-weight: 800;
        line-height: 1.35em;
        margin-bottom: 2%;
    }

    &-content {
        display: grid;
        grid-template-columns: 32% 32% 32%;
        justify-content: space-between;
        grid-row-gap: 5%;
    }

    @media only screen and (max-width: 767px) {
        font-size: 30px;
    }

    @media only screen and (max-width: 575px) {
        font-size: 25px;

        &-content {
            grid-template-columns: 48% 48%;
        }
    }
}
</style>