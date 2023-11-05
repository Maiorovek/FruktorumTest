<template>
    <div class="subscribe__Bar">
        <div class="subscribe__Bar__Title"> Подпишись на рассылку </div>
        <MyInput class="subscribe__Bar__Input"> </MyInput>
        <MyButton class="subscribe__Bar__Btn"> Подписаться </MyButton>
    </div>
</template>

<script setup>
import MyButton from '../UI/Kit/MyButton.vue';
import MyInput from '../UI/Kit/MyInput.vue';


</script>

<style lang="scss" scoped>
.subscribe__Bar {
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 2px;
    background-color: #1B1B1B;

    &__Title {
        margin-left: 30px;
        margin-right: auto;
        font-size: 22px;
        font-weight: 800;
        line-height: 30px;
        color: white;
    }

    &__Input {
        margin-right: 37px;
    }

    &__Btn {
        background-color: #3657D3;
        margin-right: 30px;

        :hover{
            background-color: black;
            transition: background-color .2s linear;
        }
    }
}
</style>