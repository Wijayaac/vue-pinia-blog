<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import { usePostStore } from "@/stores/post";
import { useAuthorStore } from "@/stores/author";
import Author from "@/components/Author.vue";

const route = useRoute();
const { authors } = storeToRefs(useAuthorStore());
const { getPostPerAuthor } = storeToRefs(usePostStore());
const { fetchPosts } = usePostStore();

const getAuthorByUserName = computed(() => {
  return authors.value.find(
    (author) => author.username === route.params.username
  );
});

fetchPosts();
</script>
<template>
  <div>
    <Author
      :author="getAuthorByUserName"
      :posts="getPostPerAuthor(getAuthorByUserName.id)"
    />
  </div>
</template>
