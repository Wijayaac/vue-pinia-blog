<script setup>
defineProps(["comments"]);
</script>
<template>
  <div>
    <div v-for="comment in comments" :key="comment.id">
      <h4>{{ comment.name }}</h4>
      <p>{{ comment.body }}</p>
    </div>
  </div>
</template>
