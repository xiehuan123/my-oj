<template>
  <div id="app">
    <a-layout>
      <a-layout-header> <GlobalHeader /></a-layout-header>
      <a-layout-content> <router-view></router-view></a-layout-content>
      <a-layout-footer>学习使用</a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup>
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
<style scoped lang="scss">
#app {
  position: relative;
  height: 100vh;
  display: flex;
  :deep(.arco-layout-header) {
    height: 100px;
  }
  :deep(.arco-layout-content) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    font-stretch: condensed;
    text-align: center;
    flex: 1;
  }
  :deep(.arco-layout-footer) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 80px;
    font-size: 25px;
    text-align: center;
    background-color: #ccc;
  }
}
</style>
