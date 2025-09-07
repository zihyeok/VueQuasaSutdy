<template>
  <q-dialog v-bind="$attrs" persistent @hide="onHide">
    <q-card :style="{ width: '660px' }">
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <q-btn v-close-popup flat round dense icon="close" />
      </q-toolbar>
      <q-separator />
      <PostForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
        @close="closeDialog"
      />
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue';
import PostForm from './PostForm.vue';
// emit 함수를 명시적으로 선언합니다.
const emit = defineEmits(['update:modelValue']);

const getInitialForm = () => ({
  title: '',
  category: '',
  content: '',
  tags: [],
});

const form = ref(getInitialForm());

const onHide = () => {
  form.value = getInitialForm();
};

// close 이벤트를 받으면 다이얼로그를 닫습니다.
const closeDialog = () => {
  emit('update:modelValue', false);
};
</script>

<style lang="scss" scoped></style>
