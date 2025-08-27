<template>
  <div>
    <div class="text-subtitle1 text-weight-bold q-md-lg">댓글6</div>

    <div v-if="isActive">
      <q-input type="textarea" class="bg-white" outlined></q-input>
      <div class="flex justify-end q-gutter-x-sm q-mt-sm">
        <q-btn label="취소" color="dark" unelevated @click="toggleActive" />
        <q-btn label="등록" color="blue" unelevated />
      </div>
    </div>

    <BaseCard v-if="!isActive" @click="toggleActive" class="cursor-pointer">
      <q-card-section class="flex items-center">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="text-grey-6 q-ml-md">댓글을 작성해보세요.</div>
      </q-card-section>
    </BaseCard>

    <CommentList :items="Comments" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CommentList from 'src/components/apps/comment/CommentList.vue';
import BaseCard from 'src/components/base/BaseCard.vue';

const isActive = ref(false); // ture
const toggleActive = () => (isActive.value = !isActive.value);

const Comments = ref([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
</script>

<style lang="scss" scoped></style>
