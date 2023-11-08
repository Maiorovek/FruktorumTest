<template>
    <div class="form-block">
        <div class="form-image">
            <img class="image" :src="store.getPosts.body[0].data.image" alt="">
        </div>
        <div class="form-content">
            <div class="form-title"> Стань участником проекта</div>
            <div class="form-inputs">
                <CustomInput label="Имя" type="text" />
                <CustomInput label="Телефон" type="tel" />
                <CustomInput label="Email" type="email" />
            </div>
            <CustomButton label="Присоединиться" />
        </div>

    </div>
</template>

<script setup>
import CustomButton from '../UI/Kit/CustomButton.vue';
import CustomInput from '../UI/Kit/CustomInput.vue';

const store = useStore();
</script>

<style lang="scss" scoped>
.form-block {
    margin-bottom: 100px;
    background-color: #1B1B1B;
    display: flex;
    width: 100%;
    padding: 50px;

    .form-image {
        margin-right: 50px;
        max-width: 595px;
        max-height: 350px;
        border-radius: 2px;
        overflow: hidden;

        .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .form-content {

        .form-title {
            font-size: 34px;
            font-weight: 800;
            line-height: 46px;
            color: white;
        }

        .form-inputs {
            display: flex;
            flex-direction: column;
            margin-top: 50px;
            margin-bottom: 50px;

            &>* {
                margin-top: 25px;
            }
        }
    }
}
</style>