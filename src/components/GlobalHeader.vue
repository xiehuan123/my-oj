<template>
  <a-row id="globalHeader" style="margin-bottom: 16px" align="center">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/oj-logo.svg" />
            <div class="title">鱼 OJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in showRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>
        {{ store.state.user?.loginUser?.userName ?? "未登录" }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
const router = useRouter();
const route = useRoute();
const store = useStore();
// 默认主页
const selectedKeys = ref([route.fullPath]);

const childerRoutes = computed(() => {
  var routes: any = {
    children: router.options.routes,
  };
  var $route = route.matched;
  for (var i = 0; i < $route.length - 1; i++) {
    routes = routes.children.find((e: any) => e.name == $route[i].name);
  }
  return routes.children;
});
const showRoutes = computed(() => {
  console.log(childerRoutes.value);
  return childerRoutes.value?.filter((item: any) => {
    const rouleRole: string = item?.meta?.role as string;

    if (item.meta?.hideInMenu) {
      return false;
    }
    if (checkAccess(store.state.user.loginUser, rouleRole)) {
      return true;
    }
    return false;
  });
});
// 路由跳转后，更新选中的菜单项
router.afterEach((to, from, failure) => {
  console.log(to, "to");

  selectedKeys.value = [to.path];
});

// setTimeout(() => {
//   store.dispatch("user/getLoginUser", {
//     userName: "鱼皮",
//     userRole: "admin",
//   });
// }, 3000);

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
