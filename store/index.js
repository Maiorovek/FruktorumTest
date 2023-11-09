import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('posts', {
  state: () => ({
    posts: [],
  }),
  getters: {
    getPosts: (state) => state.posts
  },
  actions: {
    async fetchPosts(path = "") {
      await axios.get(`https://devtwit8.ru/api/v1/page/?path=/${path}`)
        .then((response) => {
          this.posts = response.data
        }, (error) => {
          console.log(error);
        });
    },
  },
});