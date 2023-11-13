<template lang="pug">
div.form-block
    div.form-image
        img.image(:src="store.getPosts.body[0].data.image" alt="")
    div.form-content
        h2.form-title(v-text="'Стань участником проекта'")
        div.form-inputs
            CustomInput(label="Имя" type="text")
            CustomInput(label="Телефон" type="tel")
            CustomInput(label="Email" type="email")
        CustomButton.form-button(label="Присоединиться")
</template>

<script setup>
const store = useStore();
</script>

<style lang="scss" scoped>
.form-block {
    margin-bottom: 10%;
    background-color: #1B1B1B;
    display: flex;
    padding: 4%;
    font-size: 34px;
    line-height: 1.35em;

    .form-image {
        max-height: 350px;
        max-width: 50%;
        margin-right: 4%;
        border-radius: 2px;
        overflow: hidden;

        .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .form-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .form-title {
            font-size: 1em;
            font-weight: 800;
            line-height: 1.35em;
            color: white;
        }

        .form-inputs {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            max-width: 50%;

        &>* {
                margin-top: 5%;
            }
        }

        .form-button {
            margin-top: 5%;
        }
    }

    @media only screen and (max-width: 991px) {
        font-size: 25px;
    }

    @media only screen and (max-width: 575px) { 
        flex-direction: column;

        .form-image {
            max-width: 100%;
            margin: 0 0 5%;
        }

        .form-content {
            
            .form-inputs {
                max-width: 100%;
            }

            .form-button {
                align-self: center;
            }
        }
    }
}
</style>