import axios from "axios";
import { defineStore } from "pinia";

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null,
  }),
  getters: {
    getPostPerAuthor: (state) => {
      return (authorId) =>
        state.posts.filter((post) => post.userId === authorId);
    },
  },
  actions: {
    async fetchPosts() {
      this.posts = [];
      this.loading = true;

      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async fetchPost(id) {
      this.post = null;
      this.loading = true;

      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        this.post = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
