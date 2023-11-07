<template>
        <ArticleList 
            v-for="post in store.posts.body" 
            :key="post.id" 
            :sectionData="post.data">
        </ArticleList>
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