<template lang="pug">
div.subscribe-bar
    h3.subscribe-bar-title(v-text="'Подпишись на рассылку'") 
    CustomInput.subscribe-bar-input(label="Email" type="email")
    CustomButton.subscribe-bar-btn(label="Подписаться")
</template>

<script setup>
</script>

<style lang="scss" scoped>
.subscribe-bar {
    margin-bottom: 100px;
    padding: 20px;
    min-width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 2px;
    background-color: #1B1B1B;

    @media only screen and (max-width: 1024px) {
        margin-bottom: 50px;
    }

    @media only screen and (max-width: 768px) {
        margin-bottom: 25px;
    }

    @media only screen and (max-width: 675px) {
        flex-wrap: wrap;
        padding: 10px;
    }

    &-title {
        margin-right: auto;
        font-size: 22px;
        font-weight: 800;
        line-height: 30px;
        color: white;

        @media only screen and (max-width: 768px) {
            font-size: 15px;
            line-height: 20px;
        }

        @media only screen and (max-width: 675px) {
            margin-bottom: 10px;
        }
    }

    &-input {
        margin-right: 37px;

        @media only screen and (max-width: 675px) {
            margin-bottom: 10px;
        }
    }
}
</style>