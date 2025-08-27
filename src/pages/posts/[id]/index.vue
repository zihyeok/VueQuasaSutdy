<template>
  <q-page padding>
    <PostDetails />

    <q-separator class="q-my-xl" />

    <PostComments />
  </q-page>
</template>
<script setup>
import PostComments from './components/PostComments.vue';
import PostDetails from './components/PostDetails.vue';
</script>

<style scoped></style>

<route lang="yaml">
meta:
  width: 800px
</route>
