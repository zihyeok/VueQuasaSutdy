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
        <component
          :is="authViewComponents[viewMode]"
          @change-view="changeViewMode"
          @close-popup="$emit('update:modelValue', false)"
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
defineEmits(['update:modelValue']);

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
