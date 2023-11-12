import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('posts', {
  state: () => ({
    posts: [],
    error: {},
  }),
  getters: {
    getPosts: (state) => state.posts
  },
  actions: {
    async fetchPosts(path = "") {
      await axios.get(`https://devtwit8.ru/api/v1/page/?path=/${path}`)
        .then((response) => {
          this.posts = response.data
          this.error = false;
        }, (error) => {
          console.log(error);
          this.error = true;
        });
    },
  },
});