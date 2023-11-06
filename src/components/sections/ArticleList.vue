<template>
    <div class="articles">
        <div class="articles__title"> {{ sectionData.title }} </div>
        <div class="articles__content">
            <div 
                class="articles__content__post" 
                v-for="post in sectionData.articles.slice(0, 3)" 
            >
                <PostBlock :body="post"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import PostBlock from '../UI/PostBlock.vue';


const props = defineProps({
    sectionData: {
        type: Object,
        required: true,
    },
})

</script>

<style lang="scss" scoped>
.articles {
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