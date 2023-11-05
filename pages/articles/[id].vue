<template>
  <div v-for="section in store.posts.body" :key="store.posts.body.id">
    <ArticleIntro v-if="section.type == 'article_intro_block'" :intro="section.data" />
    <TextBlock v-else-if="section.type == 'text_block'" :text="section.data" />
    <ImageBlock v-else-if="section.type == 'image_block'" :image="section.data"/>
    <SliderBlock v-else-if="section.type == 'slider_block'" :images="section"/>
    <SubscribeBar v-else-if="section.type == 'subscribe_form_block'"/>
    <ArticleList v-else-if="section.type == 'article_list_block'" :articles="section.data"/>
    
    <!-- <div v-else-if="section.type == 'cta_form_block' "> form </div> -->
   </div>
</template>

<script setup>
import { useStore } from '@/store/index'
import ArticleIntro from '~/src/components/sections/ArticleIntro.vue';
import ImageBlock from '~/src/components/sections/ImageBlock.vue';
import SubscribeBar from '~/src/components/sections/SubscribeBar.vue';
import SliderBlock from '~/src/components/sections/SliderBlock.vue';
import TextBlock from '~/src/components/sections/TextBlock.vue';
import ArticleList from '~/src/components/sections/ArticleList.vue';
const store = useStore();
const route = useRoute()
const { fetchPosts } = store;

await fetchPosts(route.params.id)
</script>

<style lang="scss" scoped></style>