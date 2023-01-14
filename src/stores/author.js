import axios from "axios";
import { defineStore } from "pinia";

import { usePostStore } from "./post";

export const useAuthorStore = defineStore({
  id: "author",
  state: () => ({
    authors: [],
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = usePostStore();
      return state.authors.find(
        (author) => author.id === postStore.post.userId
      );
    },
  },
  actions: {
    async fetchAuthors() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.authors = data;
    },
  },
});
