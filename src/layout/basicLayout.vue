<template>
  <div id="app">
    <a-layout>
      <a-layout-header>
        <a-menu
          mode="horizontal"
          :default-selected-keys="selectedKeys"
          @menu-item-click="onMenuClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div></div>
          </a-menu-item>
          <a-menu-item v-for="item in routes" :key="item.path">{{
            item.name
          }}</a-menu-item>
        </a-menu></a-layout-header
      >
      <a-layout-content> <router-view></router-view></a-layout-content>
      <a-layout-footer>学习使用</a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import routes from "../router/routes";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const selectedKeys = ref(["/"]);
//添加导航钩子 在每次导航之后执行
router.afterEach((to, from, failure) => {
  console.log(to);
  selectedKeys.value = [to.path];
  console.log(selectedKeys);
});
const onMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
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
