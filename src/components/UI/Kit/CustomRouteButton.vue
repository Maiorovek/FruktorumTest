<template>
    <NuxtLink class="custom__button" :to="`/articles${props.link}`">
        {{ props.label }}
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    link: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        required: true,
    },
})
</script>

<style lang="scss" scoped>
.custom__button {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 164px;
    max-height: 46px;
    padding: 10px;
    border: 1px;
    border-radius: 2px;
    background-color: #1B1B1B;
    color: white;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        background-color: #3657D3;
        transition: background-color .2s linear;
    }
}
</style>