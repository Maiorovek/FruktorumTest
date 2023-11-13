<template lang="pug">
section.subscribe-bar
    h3.subscribe-bar-title(v-text="'Подпишись на рассылку'") 
    CustomInput.subscribe-bar-input(label="Email" type="email")
    CustomButton.subscribe-bar-btn(label="Подписаться")
</template>

<script setup>
</script>

<style lang="scss" scoped>
.subscribe-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 10%;
    padding: 2%;
    border-radius: 2px;
    background-color: #1B1B1B;

    &-title {
        font-size: 22px;
        font-weight: 800;
        line-height: 30px;
        color: white;

    }

    @media only screen and (max-width: 991px) {
        justify-content: space-evenly;

        &-title {
            font-size: 18px;
            width: 100%;
            text-align: center;
            margin-bottom: 2%;
        }

        &-input, &-btn {
            margin-bottom: 2%;
        }
    }

    @media only screen and (max-width: 400px) { 
        &-input {
            width: 100%;
        }
    }
}
</style>