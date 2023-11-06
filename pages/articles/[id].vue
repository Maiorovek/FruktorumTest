<template>
  <component 
    v-for="section in store.posts.body" 
    :is="getComponentName(section.type)" 
    :sectionData="section.data" 
    :key="section.id" 
  />
</template>

<script setup>
import article_intro_block from '~/src/components/sections/ArticleIntro.vue';
import image_block from '~/src/components/sections/ImageBlock.vue';
import subscribe_form_block from '~/src/components/sections/SubscribeBar.vue';
import slider_block from '~/src/components/sections/SliderBlock.vue';
import text_block from '~/src/components/sections/TextBlock.vue';
import article_list_block from '~/src/components/sections/ArticleList.vue';
import cta_form_block from '~/src/components/sections/CtaForm.vue';

const store = useStore();
const route = useRoute()
const { fetchPosts } = store;

await fetchPosts(route.params.id)

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
    title: `${store.posts.meta.title}`,
    meta: [
    { name: 'description', content: `${store.posts.meta.description}` }
  ],
})
</script>

<style lang="scss" scoped></style>