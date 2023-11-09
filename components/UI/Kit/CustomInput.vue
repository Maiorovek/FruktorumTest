<template lang="pug">
input.custom-input(required="true" :type="type" :placeholder="label")
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
.custom-input {
    outline: 0;
    background-color: transparent;
    border: 0px;
    border-bottom: 1px solid #8D959C;
    color: #8D959C;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;

    &:focus {
        color: #8D959C;
        border-bottom: 1px solid #3657D3;
        transition: border-bottom .2s ease;
    }
}
</style>