<template lang="pug">
div(class='post')
    div(class='image-box')
        img(class='post-image' :src='sectionData.image')
    div(class='post-info')
        div(class='info-title') {{ sectionData.title }}
        div(class='info-time') {{ `${sectionData.reading_time} мин время чтения` }}
        div(class='info-views') {{ `${sectionData.views_count} прочтили статью` }}
        div(class='info-text') {{ sectionData.short_description }}
</template>

<script setup>
    const props = defineProps({
        sectionData: {
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
        margin-bottom: 100px;

        .image-box {
            margin-right: 30px;
            max-width: 541px;
            max-height: 580px;
            border-radius: 2px;
            border-top-right-radius: 40%;
            overflow: hidden;

            .post-image {
                width: 100%;
                height: 100%;
                object-fit: cover
            }
        }

        &-info {
            max-width: 60%;
            
            .info-title {
                margin-bottom: 30px;
                font-size: 56px;
                font-weight: 800;
                line-height: 66px;
                color: #1B1B1B;
            }

            .info-time, .info-views {
                margin-bottom: 4px;
                font-size: 14px;
                font-weight: 400px;
                line-height: 20px;
                color: #8D959C;
            }

            .info-text {
                margin-top: 50px;
                font-size: 18px;
                font-weight: 400px;
                line-height: 26px;
                color: #1B1B1B;
            }
        }
    }
</style>