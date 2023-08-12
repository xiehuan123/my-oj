import router from "@/router";
import store from "@/store";
import checkAccess from "./checkAccess";
import ACCCESS_ENUM from "./checkEnum";
router.beforeEach(async (to, from, next) => {
  const needAccess: string = to.meta.role as string;
  const loginUser = store.state.user.loginUser;
  //如果之前没登录就自动登录
  if (!loginUser || !loginUser.userRole) {
    await store.dispatch("user/getLoginUser");
  }
  if (needAccess != ACCCESS_ENUM.NOLOGIN) {
    if (!loginUser || !loginUser.userRole) {
      return next(`/user/login?redirect=${to.fullPath}`);
    }
    if (!checkAccess(loginUser, needAccess)) {
      return next("/notAuth");
    }
  }
  next();
});
