<template>
    <button class="btn" @click="$router.push(props.link)"> 
        <slot> </slot> 
    </button>
</template>

<script setup>
const router = useRouter()
const props = defineProps(['link'])
console.log(props.link);

</script>

<style lang="scss" scoped>
.btn {
    border: 1px;
    width: 164px;
    height: 46px;
    border-radius: 2px;
    background-color: #1B1B1B;
    color: white;
    font-size: 18px;

    &:hover {
        background-color: #3657D3;
        transition: background-color .2s linear;
    }
}

</style>