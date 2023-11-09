<template lang="pug">
div.subscribe-bar
    div.subscribe-bar-title(v-text="'Подпишись на рассылку'") 
    CustomInput.subscribe-bar-input(label="Email" type="email")
    CustomButton.subscribe-bar-btn(label="Подписаться")
</template>

<script setup>
</script>

<style lang="scss" scoped>
.subscribe-bar {
    margin-bottom: 100px;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 2px;
    background-color: #1B1B1B;

    &-title {
        margin-left: 30px;
        margin-right: auto;
        font-size: 22px;
        font-weight: 800;
        line-height: 30px;
        color: white;
    }

    &-input {
        margin-right: 37px;
    }

    &-btn {
        margin-right: 30px;
    }
}
</style>