<template lang="pug">
ArticleList(:sectionData="store.getPosts.body[0].data")
</template>

<script setup>
const store = useStore();
const { fetchPosts } = store;

await fetchPosts();

useHead({
    title: `${store.getPosts.meta.title}`,
    meta: [
        { name: 'description', content: `${store.getPosts.meta.description}` }
    ],
})
</script>


<style lang="scss" scoped></style>