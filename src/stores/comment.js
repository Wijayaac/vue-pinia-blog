import axios from "axios";
import { defineStore } from "pinia";
import { usePostStore } from "./post";

export const useCommentStore = defineStore({
  id: "comment",
  state: () => ({
    comments: [],
  }),
  getters: {
    getPostComments: (state) => {
      const postStore = usePostStore();
      return state.comments.filter((post) => post.posId === postStore.post.id);
    },
  },
  actions: {
    async fetchCommennts() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      this.comments = data;
    },
  },
});
