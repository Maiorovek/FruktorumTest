<template>
    <div class="post">
        <div class="post__image__box" >
            <img class="post__image" :src="props.intro.image">
        </div>
        <div class="post__info">
            <div class="info__title"> {{ props.intro.title  }}</div>
            <div class="info__time"> {{ props.intro.reading_time + ' мин время чтения'}} </div>
            <div class="info__views"> {{ props.intro.views_count + ' прочитали статью'}} </div>
            <div class="info__text"> {{ props.intro.short_description }} </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        intro: {
            type: Object,
            required: true,
        }
    })
</script>

<style lang="scss" scoped>
    .post {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__image__box {
            margin-right: 30px;
            max-width: 541px;
            max-height: 580px;
            border-radius: 2px;
            border-top-right-radius: 40%;
            overflow: hidden;

            .post__image {
                width: 100%;
                height: 100%;
                object-fit: cover
            }
        }

        &__info {
            max-width: 60%;
            
            .info__title {
                margin-bottom: 30px;
                font-size: 56px;
                font-weight: 800;
                line-height: 66px;
                color: #1B1B1B;
            }

            .info__time, .info__views {
                margin-bottom: 4px;
                font-size: 14px;
                font-weight: 400px;
                line-height: 20px;
                color: #8D959C;

            }

            .info__text {
                margin-top: 50px;
                font-size: 18px;
                font-weight: 400px;
                line-height: 26px;
                color: #1B1B1B;
            }

        }
    }
</style>