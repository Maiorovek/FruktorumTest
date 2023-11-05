import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('posts', {
  state: () => ({
    posts: [],
  }),
  getters: {},
  actions: {
    async fetchPosts(path = "") {
      try {
        const response = await axios.get(`https://devtwit8.ru/api/v1/page/?path=/${path}`);
        this.posts = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});