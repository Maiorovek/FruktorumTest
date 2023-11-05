<template>
    <div class="articles">
        <div class="articles__title"> {{ articles.title }} </div>
        <div class="articles__Content">
            <div 
                class="articles__content__post" 
                v-for="post in articles.articles" 
            >
                <PostBlock :body="post"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import PostBlock from '../UI/PostBlock.vue';


const props = defineProps({
    articles: {
        type: Object,
        required: true,
    },
})

</script>

<style lang="scss" scoped>
.articles {
    margin-top: 100px;
    margin-bottom: 100px;

    &__title {
        font-size: 34px;
        font-weight: 800;
        line-height: 46px;
        margin-bottom: 50px;
    }

    &__content {
        display: grid;
        grid-template-columns: 30% 30% 30%;
        justify-content: space-between;
        grid-row-gap: 50px;

        &__post {
        }
    }
}
</style>