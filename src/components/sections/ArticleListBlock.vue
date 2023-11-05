<template>
    <div class="articles">
        <div class="articles__Title"> Похожие статьи </div>
        <div class="articles__Content">
            <div 
                class="articles__Content__Post" 
                v-for="post in store.posts.body[0].data.articles.slice(0, 3)"
                :key="store.posts.body.id"
            >
                <PostBlock v-bind:body="post" />
            </div>
        </div>
    </div>
</template>

<script setup>
import PostBlock from '../UI/PostBlock.vue';
import { useStore } from '@/store/index'
const store = useStore();

// console.log(store.posts.body[6].data.articles);


</script>

<style lang="scss" scoped>
.articles {
    margin-bottom: 100px;

    &__Title {
        font-size: 34px;
        font-weight: 800;
        line-height: 46px;
        margin-bottom: 50px;
    }
    
    &__Content {
        display: flex;
        justify-content: space-between;

        &__Post {
            width: 30%;
        }
    }
}
</style>