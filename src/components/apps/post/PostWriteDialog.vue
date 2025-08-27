<template>
  <q-dialog v-bind="$attrs" persistent @hide="onHide">
    <q-card :style="{ width: '660px' }">
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <q-btn v-close-popup flat round dense icon="close" />
      </q-toolbar>
      <q-separator />
      <q-form class="q-pa-md q-gutter-y-sm">
        <q-input v-model="form.title" outlined placeholder="제목" />
        <q-select v-model="form.category" outlined :options="categories">
          <template v-if="!form.category" #selected>
            <span class="text-grey-7">카테고리를 선택하세요.</span>
          </template>
        </q-select>
        <q-input
          v-model="form.content"
          type="textarea"
          outlined
          placeholder="내용을 작성해주세요."
        />
        <q-input
          v-model="tagField"
          outlined
          placeholder="태그를 입력해주세요."
          prefix="#"
        />
        <q-chip outline dense removable @remove="removeTag" color="teal"
          >vue.js</q-chip
        >
      </q-form>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="취소하기" v-close-popup />
        <q-btn type="submit" flat label="저장하기" color="primary" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { getCategorise } from 'src/services/category';

const categories = getCategorise();

const getInitialForm = () => ({
  title: '',
  category: '',
  content: '',
  tags: [],
});

const form = ref(getInitialForm());
const tagField = ref('');

const removeTag = () => {
  console.log('removeTag');
};

const onHide = () => {
  form.value = getInitialForm();
  tagField.value = '';
};
</script>

<style lang="scss" scoped></style>
