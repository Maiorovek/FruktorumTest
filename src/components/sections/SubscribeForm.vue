<template>
    <div class="subscribe__bar">
        <div class="subscribe__bar__title"> Подпишись на рассылку </div>
        <CustomInput class="subscribe__bar__input" label="Email" type="email" />
        <CustomButton class="subscribe__bar__btn" label="Подписаться" />
    </div>
</template>

<script setup>
import CustomButton from '@/src/components/UI/Kit/CustomButton.vue';
import CustomInput from '@/src/components/UI/Kit/CustomInput.vue';
</script>

<style lang="scss" scoped>
.subscribe__bar {
    margin-top: 100px;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 2px;
    background-color: #1B1B1B;

    &__title {
        margin-left: 30px;
        margin-right: auto;
        font-size: 22px;
        font-weight: 800;
        line-height: 30px;
        color: white;
    }

    &__input {
        margin-right: 37px;
    }

    &__btn {
        margin-right: 30px;
    }
}
</style>