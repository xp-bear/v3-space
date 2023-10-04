<template>
  <van-nav-bar title="社交空间" class="bg" />
  <van-tabs v-model:active="active" swipeable>
    <van-tab title="当下时事" class="content">内容 1</van-tab>
    <van-tab title="青葱岁月">内容 2</van-tab>
    <van-tab title="社会焦点">内容 3</van-tab>
    <van-tab title="人生百态">内容 4</van-tab>
  </van-tabs>
</template>

<script setup>
import { ref } from "vue";
const active = ref(0);
</script>

<style lang="scss" scoped>
:deep(.van-nav-bar__content) {
  background: #0041c4;
}
:deep(.van-nav-bar__title) {
  color: #fff;
}
.content {
  background-color: pink;
}
</style>
