<template>
    <div class="articles">
        <div class="articles-title"> {{ sectionData.title }} </div>
        <div class="articles-content">
            <div 
                class="articles-content-post" 
                v-for="post in sectionData.articles" 
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

    &-title {
        font-size: 34px;
        font-weight: 800;
        line-height: 46px;
        margin-bottom: 50px;
    }

    &-content {
        display: grid;
        grid-template-columns: 30% 30% 30%;
        justify-content: space-between;
        grid-row-gap: 50px;

        &-post {
        }
    }
}
</style>