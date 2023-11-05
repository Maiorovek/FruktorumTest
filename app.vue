<template>
  <div class="wrapper">
    <Header> </Header>
    <NuxtPage/>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './src/components/UI/Header.vue';
import Footer from './src/components/UI/Footer.vue';
import { useStore } from './store/index'
import { storeToRefs } from 'pinia';

const store = useStore();
const { fetchPosts } = store;
const { posts } = storeToRefs(store);


await fetchPosts();

console.log(store.posts)



</script>

<style lang="scss" scoped>
  @import "./src/assets/index.css";
</style>