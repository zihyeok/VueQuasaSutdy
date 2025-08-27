<template>
  <q-list bordered separator>
    <PostItem
      v-for="item in items"
      :key="item.id"
      v-bind="item"
      event.stopPropagation
      @click.stop="handleClick"
    />
  </q-list>
</template>

<script setup>
import PostItem from './PostItem.vue';
const handleClick = () => {
  console.log('PostItem이 클릭되었습니다. 이벤트 전파가 중단됩니다.');
};
defineProps({
  items: Array,
  default: () => [],
});
</script>

<style lang="scss" scoped></style>
