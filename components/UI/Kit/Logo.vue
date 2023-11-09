<template lang="pug">
div.logo
    div.logo-content(v-text="'Test'")
    div.logo-content(v-text="'Blog'") 
</template>
    
<script setup>
</script>
    
<style lang="scss" scoped>
.logo {
    height: 32px;
    font-weight: 800;
    display: flex;

    &-content {
        height: 32px;

        &:first-child {
            font-size: 19px;
            margin-right: 4px;
        }

        &:last-child {
            font-size: 19px;
            color: white;
            background-color: black;
            border-radius: 1px;
            border-top-right-radius: 19px;
        }
    }
}
</style>