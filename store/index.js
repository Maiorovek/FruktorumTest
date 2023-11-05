import { defineStore } from 'pinia';
export const useStore = defineStore('posts', () => {
    const posts = ref([]);

    const fetchPosts = async () => {
        const { data } = await useFetch('https://devtwit8.ru/api/v1/page/?path=/', () => store.posts());
        if (data.value) {
            posts.value = data.value;
        }
    };
    return {
        posts,
        fetchPosts,
    };
});