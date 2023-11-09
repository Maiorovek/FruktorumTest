<template lang="pug">
div.wrapper
    Header
    slot
    Footer
</template>

<script setup>
import Header from '../src/components/UI/Header.vue';
import Footer from '../src/components/UI/Footer.vue';

</script>

<style lang="scss" scoped></style>