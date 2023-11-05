<template>
    <div class="footer">
        <div class="footer__Content">
            <div class="footer__Content__Info">
                <MyLogo> </MyLogo>
                <div class="footer__Content__Info__Text">
                    Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая
                    мир эстетики и креативности
                </div>
            </div>
            <div class="footer__Content__Links">
                <div class="footer__Content__Links__Mail">
                    <div class="footer__Content__Links__Mail__Name"> email </div>
                    <div class="footer__Content__Links__Mail__Description"> testblogsupport@gmail.com </div>
                </div>
                <div class="footer__Content__Links__Icons">
                    <div class="footer__Content__Links__Icons__Icon"> </div>
                    <div class="footer__Content__Links__Icons__Icon"> </div>
                    <div class="footer__Content__Links__Icons__Icon"> </div>
                    <div class="footer__Content__Links__Icons__Icon"> </div>
                </div>
            </div>
        </div>
        <MySubscribeBar> </MySubscribeBar>
    </div>
</template>

<script setup>
import MySubscribeBar from '../sections/MySubscribeBar.vue';
import MyLogo from './Kit/MyLogo.vue';


</script>

<style lang="scss" scoped>
.footer {
    border-top: 1px solid #8D959C;

    &__Content {
        margin-top: 50px;
        margin-bottom: 70px;
        display: flex;
        justify-content: space-between;
        font-weight: 400;

        &__Info {

            &__Text {
                margin-top: 20px;
                max-width: 400px;
                font-size: 14px;
                line-height: 20px;
                color: #8D959C;

            }
        }

        &__Links {
            margin-right: 78px;

            &__Mail {

                &__Name {
                    font-size: 14px;
                    line-height: 20px;
                    color: #8D959C;

                }

                &__Description {
                    font-size: 18px;
                    line-height: 22px;
                    color: #1B1B1B;
                }
            }

            &__Icons {
                display: flex;

                &__Icon {
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