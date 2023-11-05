<template>
    <div class="logo">
        <div class="logo__Content"> Test </div>
        <div class="logo__Content"> Blog </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.logo {
    height: 32px;
    font-weight: 800;
    display: flex;
    
    &__Content {
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