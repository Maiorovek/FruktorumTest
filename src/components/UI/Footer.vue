<template>
    <div class="footer">
        <div class="footer-content">
            <div class="content-info">
                <MainLogo/>
                <div class="content-text">
                    Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая
                    мир эстетики и креативности
                </div>
            </div>
            <div class="footer-content-links">
                <div class="links-mail">
                    <div class="mail-name"> email </div>
                    <div class="mail-description" > testblogsupport@gmail.com </div>
                </div>
                <div class="links-icons">
                    <div class="icon"> </div>
                    <div class="icon"> </div>
                    <div class="icon"> </div>
                    <div class="icon"> </div>
                </div>
            </div>
        </div>
        <SubscribeForm style="margin-bottom: 0;"/>
    </div>
</template>

<script setup>
import SubscribeForm from '../sections/SubscribeForm.vue';
import MainLogo from './Kit/MainLogo.vue';
</script>

<style lang="scss" scoped>
.footer {
    border-top: 1px solid #8D959C;

    &-content {
        margin-top: 50px;
        margin-bottom: 70px;
        display: flex;
        justify-content: space-between;
        font-weight: 400;

        .content-info {

            .content-text {
                margin-top: 20px;
                max-width: 400px;
                font-size: 14px;
                line-height: 20px;
                color: #8D959C;

            }
        }

        &-links {
            margin-right: 78px;

            .link-mail {

                .mail-name {
                    font-size: 14px;
                    line-height: 20px;
                    color: #8D959C;
                }

                .mail-description {
                    font-size: 18px;
                    line-height: 22px;
                    color: #1B1B1B;
                }
            }

            .links-icons {
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