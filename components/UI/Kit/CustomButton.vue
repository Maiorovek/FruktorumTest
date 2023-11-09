<template lang="pug">
button.custom-button(v-text="props.label")
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
})
</script>

<style lang="scss" scoped>
.custom-button {
    max-width: 164px;
    max-height: 46px;
    padding: 10px;
    background-color: #3657D3;
    border: 1px solid #3657D3;
    border-radius: 2px;
    color: white;
    font-size: 18px;

    &:hover {
        background-color: transparent;
        transition: background-color .4s ease;
    }
}
</style>