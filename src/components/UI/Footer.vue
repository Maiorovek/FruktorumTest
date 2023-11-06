<template>
    <div class="footer">
        <div class="footer__content">
            <div class="content__info">
                <MainLogo/>
                <div class="content__text">
                    Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая
                    мир эстетики и креативности
                </div>
            </div>
            <div class="footer__content__links">
                <div class="links__mail">
                    <div class="mail__name"> email </div>
                    <div class="mail__description"> testblogsupport@gmail.com </div>
                </div>
                <div class="links__icons">
                    <div class="icon"> </div>
                    <div class="icon"> </div>
                    <div class="icon"> </div>
                    <div class="icon"> </div>
                </div>
            </div>
        </div>
        <SubscribeForm/>
    </div>
</template>

<script setup>
import SubscribeForm from '../sections/SubscribeForm.vue';
import MainLogo from './Kit/MainLogo.vue';
</script>

<style lang="scss" scoped>
.footer {
    border-top: 1px solid #8D959C;

    &__content {
        margin-top: 50px;
        margin-bottom: 70px;
        display: flex;
        justify-content: space-between;
        font-weight: 400;

        .content__info {

            .content__text {
                margin-top: 20px;
                max-width: 400px;
                font-size: 14px;
                line-height: 20px;
                color: #8D959C;

            }
        }

        &__links {
            margin-right: 78px;

            .links__mail {

                .mail__name {
                    font-size: 14px;
                    line-height: 20px;
                    color: #8D959C;

                }

                .mail__description {
                    font-size: 18px;
                    line-height: 22px;
                    color: #1B1B1B;
                }
            }

            .links__icons {
                display: flex;

                .icon {
                    margin-top: 24px;
                    margin-right: 20px;
                    width: 30px;
                    height: 30px;
                    background-color: #1B1B1B;
                    border-radius: 15px;
                }

            }
        }
    }
}
</style>