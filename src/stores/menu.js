import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMenuStore = defineStore('menu', () => {
  const currentType = ref('default');
  const setType = type => (currentType.value = type);

  return { currentType, setType };
});
