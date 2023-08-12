import { StoreOptions } from "vuex";
export default {
  //命名空间 ，使这个模块完全独立 不受其他m模块影响
  namespaced: true,
  state: {
    loginUser: {
      userRole: "",
      userName: "",
    },
  },
  getters: {},
  //同步操作
  mutations: {
    updataLoginUser(state, payload) {
      console.log(payload);
      state.loginUser = payload;
    },
  },
  //异步操作
  actions: {
    //发送请求获取登录信息
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getLoginUser({ commit, state }, payload) {
      commit("updataLoginUser", payload);
    },
  },
} as StoreOptions<any>;
