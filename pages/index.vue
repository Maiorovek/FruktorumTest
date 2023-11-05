<template>
    <div class="wrapper">
        <ArticleList :articles="store.posts.body[0].data"></ArticleList>
    </div>
</template>

<script setup>
import ArticleList from '@/src/components/sections/ArticleList.vue';
import { useStore } from '@/store/index'

const store = useStore();
const { fetchPosts } = store;

await fetchPosts();

console.log();




</script>


<style lang="scss" scoped>

</style>