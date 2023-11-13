<template lang="pug">
section.post
    div.image-box
        img.post-image(:src='sectionData.image')
    div.post-info
        h1.info-title {{ sectionData.title }}
        p.info-time {{ `${sectionData.reading_time} мин время чтения` }}
        p.info-views {{ `${sectionData.views_count} прочтили статью` }}
        p.info-text {{ sectionData.short_description }}
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
        margin-bottom: 10%;
        font-size: 56px;
        line-height: 1.2em;

        .image-box {
            max-width: 44%;
            border-radius: 2px 40% 2px 2px;
            overflow: hidden;

            .post-image {
                width: 100%;
                height: 100%;
                object-fit: cover
            }
        }

        &-info {
            max-width: 54%;
            display: flex;
            flex-direction: column;

            .info-title {
                margin-bottom: 4%;
                font-size: 1em;
                font-weight: 800;
                color: #1B1B1B;
            }

            .info-time, .info-views {
                margin-bottom: 1%;
                font-size: .25em;
                font-weight: 400;
                line-height: 1.4em;
                color: #8D959C;
            }

            .info-text {
                margin-top: 4%;
                font-size: .32em;
                font-weight: 400;
                line-height: 1.4em;
                color: #1B1B1B;
            }
        }

        @media only screen and (max-width: 1199px) {
            font-size: 40px;
        }

        @media only screen and (max-width: 767px) {
            font-size: 30px;
        }

        @media only screen and (max-width: 575px) {
            flex-direction: column;

            .image-box, .post-info {
                max-width: 100%;
            }
        }
    }
</style>