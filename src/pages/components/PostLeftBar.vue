<template>
  <StickySideBar>
    <q-card flat bordered>
      <q-list bordered separator>
        <q-item clickable v-ripple :active="true">
          <q-item-section>전체</q-item-section>
        </q-item>
        <q-item v-for="cate in categories" :key="cate" v-ripple>
          <q-item-section>{{ cate.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </StickySideBar>
</template>

<script setup>
import { computed } from 'vue';
import StickySideBar from 'src/components/StickySideBar.vue';
import { getCategorise } from 'src/services/category';
import { useMenuStore } from 'src/stores/menu';
const menuStore = useMenuStore();

const categories = computed(() => getCategorise(menuStore.currentType));
const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
});
</script>

<style lang="scss" scoped></style>
