<template>
    <div class="postBlock">
        <div class="postBlock__Image">
            <img class="postBlock__Image__Img" :src="body.image">
        </div>
        <div class="postBlock__Text">
            {{ body.title }}
        </div>
        <MyButton v-bind:link="body.link"> Читать </MyButton>

    </div>
</template>

<script setup>
import MyButton from "../UI/Kit/MyButton.vue"
import { useStore } from '@/store/index'
const store = useStore();



const props = defineProps(['body'])

// console.log(props.body);


</script>

<style lang="scss" scoped>
.postBlock {
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__Image {
        max-height: 320px;
        max-width: 100%;
        border-radius: 2px;
        overflow: hidden;

        &__Img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__Text {
        margin-top: 20px;
        margin-bottom: 30px;
        max-width: 100%;
        font-size: 22px;
        font-weight: 800;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
}
</style>