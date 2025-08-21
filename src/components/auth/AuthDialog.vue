<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="val => $emit('update:modelValue', val)"
    transition-show="none"
    transition-hide="none"
    @hide="changeViewMode('SinginFrom')"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section class="flex">
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section class="q-px-xl q-pb-xl">
        <!-- v-if 조건부 렌더링-->
        <!-- <SinginFrom
          v-if="viewMode === 'SinginFrom'"
          @change-view="changeViewMode"
        />
        <SignUpForm
          v-else-if="viewMode === 'SignUpForm'"
          @change-view="changeViewMode"
        />
        <FindPasswordForm v-else @change-view="changeViewMode" />
         -->
        <!-- 동적 컴포넌트-->
        <component
          :is="authViewComponents[viewMode]"
          @change-view="changeViewMode"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
// import SinginFrom from './SiginForm.vue';
// import SignUpForm from './SiginUpform.vue';
// import FindPasswordForm from './FindPasswordForm.vue';
import { defineAsyncComponent, ref } from 'vue';

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
// defineEmits({'update:modelValue'});

const viewMode = ref('SinginFrom'); // SiginForm, SignUpForm, FindPasswordForm
const changeViewMode = mode => (viewMode.value = mode);

// const authViewComponents = {
//   SinginFrom,
//   SignUpForm,
//   FindPasswordForm,
// };
const authViewComponents = {
  SinginFrom: defineAsyncComponent(() => import('./SiginForm.vue')),
  SignUpForm: defineAsyncComponent(() => import('./SiginUpform.vue')),
  FindPasswordForm: defineAsyncComponent(
    () => import('./FindPasswordForm.vue'),
  ),
};
</script>

<style lang="scss" scoped></style>
