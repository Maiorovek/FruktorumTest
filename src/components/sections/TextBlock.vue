<template>
    <div class="text-block" v-html="props.text">
    </div>
</template>

<script setup>

const props = defineProps({
    text: {
        type: String,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
.text-block {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    max-width: 50%;
 
}
.text-block h2  {
    margin-bottom: 50px;
    font-size: 34px;
    font-weight: 800;
    line-height: 46px;
    color: #af1919;
}
</style>