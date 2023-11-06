<template>
        <ArticleList :sectionData="store.posts.body[0].data"></ArticleList>
</template>

<script setup>
import ArticleList from '@/src/components/sections/ArticleList.vue';

const store = useStore();
const { fetchPosts } = store;

await fetchPosts();

useHead({
    title: `${store.posts.meta.title}`,
    meta: [
        { name: 'description', content: `${store.posts.meta.description}` }
    ],
})
</script>


<style lang="scss" scoped></style>