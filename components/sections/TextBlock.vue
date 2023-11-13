<template lang="pug">
section.text-block(v-html="sectionData")
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
.text-block {
    margin-bottom: 10%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 60%;
    font-size: 34px;
    line-height: 1.35em;
    
    h2 {
        margin-bottom: 7%;
        font-weight: 800;
        color: #1B1B1B;
        font-size: 1em;
        line-height: 1.35em;
    }

    p {
        margin-bottom: 4%;
        font-size: .5em;
        font-weight: 400;
        line-height: 1.4em;
    }

    ul {
        max-width: 70%;
        margin-left: 15%;
        margin-bottom: 4%;

        li {
            list-style-type: none;
            font-size: .5em;
            font-weight: 400;
            line-height: 1.4em;

            &:before {
                content: '\25C6';
                margin-right: 2%;
            }
        }
    }

    blockquote {
        margin-top: 6%;

        p {
            display: flex;
            margin-right: 2%;
            font-size: .5em;
            font-weight: 300;
            line-height: 1.4em;
            font-style: italic;
            color: #1B1B1B;

            &:before {
                margin-right: 4%;
                font-size: 4.4em;
                content: "\2E32\2E32";
            }
        }

        footer {
            margin-left: 20%;
            color: #8D959C;
            font-size: .4em;
            font-weight: 400;
            line-height: 1.4em;
        }
    }

    @media only screen and (max-width: 1199px) {
        max-width: 70%;
    }

    @media only screen and (max-width: 767px) {
        font-size: 30px;
        max-width: 80%;
    }

}
</style>