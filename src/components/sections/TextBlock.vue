<template>
    <div class="text_block" v-html="sectionData">
    </div>
</template>

<script setup>

const props = defineProps({
    sectionData: {
        type: String,
        required: true,
    }
})
</script>

<style lang="scss">
.text_block {
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 50%;

    h2 {
        margin-bottom: 50px;
        font-size: 34px;
        font-weight: 800;
        line-height: 46px;
        color: #1B1B1B;
    }

    p {
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
    }

    ul {
        max-width: 70%;
        margin-left: 15%;
        margin-bottom: 20px;

        li {
            list-style-type: none;
            font-size: 18px;
            font-weight: 400;
            line-height: 26px;

            &:before {
                content: '\25C6';
                margin-right: 7px;
            }

        }
    }

    blockquote {
        margin-top: 40px;

        p {
            display: flex;
            color: #1B1B1B;
            font-size: 18px;
            font-weight: 300;
            line-height: 26px;
            font-style: italic;
            margin-right: 10px;

            &:before {
                margin-right: 36px;
                font-size: 150px;
                content: "\2E32\2E32";
            }
        }

        footer {
            margin-left: 110px;
            color: #8D959C;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
        }
    }
}
</style>