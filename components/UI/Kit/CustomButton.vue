<template lang="pug">
NuxtLink.custom-route-button(v-if="link != ''" :to="link") {{ props.label }}
button.custom-button(v-else) {{ checkAmp(props.label) }}
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
const checkAmp = (label) => {
    switch (label) {
        case "&lt;":
            return '<';
        case "&gt;":
            return '>';
        default:
            return label
    }
} 
</script>
    
<style lang="scss" scoped>
.custom-route-button {
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