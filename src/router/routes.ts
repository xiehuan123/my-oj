import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ManagementView from "../views/ManagementView.vue";
import NotAuthView from "../views/NotAuthView.vue";
import userLayout from "@/layout/userLayout.vue";
import basicLayout from "@/layout/basicLayout.vue";
import ACCCESS_ENUM from "@/access/checkEnum";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "user",
    redirect: "/index/home",
  },
  {
    path: "/index",
    name: "基础布局",
    component: basicLayout,
    children: [
      {
        path: "/index/home",
        name: "首页",
        component: HomeView,
        meta: {
          role: ACCCESS_ENUM.NOLOGIN,
        },
      },
      {
        path: "/index/about",
        name: "about",
        component: AboutView,
        meta: {
          role: ACCCESS_ENUM.USER,
        },
      },
      {
        path: "/index/management",
        name: "management",
        component: ManagementView,
        meta: {
          role: ACCCESS_ENUM.ADMIN,
        },
      },
      {
        path: "/index/notAuth",
        name: "notAuth",
        component: NotAuthView,
        meta: {
          hideInMenu: true,
        },
      },
    ],
  },
  {
    path: "/user",
    name: "用户布局",
    component: userLayout,
    children: [
      {
        path: "/user/Login",
        name: "登录",
        component: LoginView,
        meta: {
          role: ACCCESS_ENUM.NOLOGIN,
        },
      },
      {
        path: "/user/Register",
        name: "注册",
        component: RegisterView,
        meta: {
          role: ACCCESS_ENUM.NOLOGIN,
        },
      },
    ],
  },
];

export default routes;
