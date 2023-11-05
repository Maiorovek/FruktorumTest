<template>
    <div class="wrapper">
        <Header> </Header>
            <slot> </slot>
        <Footer> </Footer>
    </div>
</template>

<script setup>
import Header from '../src/components/UI/Header.vue';
import Footer from '../src/components/UI/Footer.vue';

</script>

<style lang="scss" scoped></style>