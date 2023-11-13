<template lang="pug">
component(v-for="section in store.getPosts.body" :is="getComponentName(section.type)" :sectionData="section.data" :key="section.id")
</template>

<script setup>
import article_intro_block from '@/components/sections/ArticleIntro.vue';
import image_block from '@/components/sections/ImageBlock.vue';
import subscribe_form_block from '@/components/sections/SubscribeForm.vue';
import slider_block from '@/components/sections/SliderBlock.vue';
import text_block from '@/components/sections/TextBlock.vue';
import article_list_block from '@/components/sections/ArticleList.vue';
import cta_form_block from '@/components/sections/CtaForm.vue';

const store = useStore();
const route = useRoute()
const { fetchPosts } = store;

await fetchPosts(route.params.id)

if (store.error) {
  navigateTo('/')
}

function getComponentName(type) {
  const components = {
    article_intro_block,
    image_block,
    subscribe_form_block,
    slider_block,
    text_block,
    article_list_block,
    cta_form_block,
  };
  return components[type] || null;
}

useHead({
    title: `${store.getPosts?.meta?.title}`,
    meta: [
    { name: 'description', content: `${store.getPosts?.meta?.description}` }
  ],
})
</script>

<style lang="scss" scoped></style>