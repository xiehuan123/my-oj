import ACCCESS_ENUM from "./checkEnum";
const checkAccess = (
  loginUser: { userRole: string },
  needAccess = "nologin"
) => {
  const userAccess = loginUser?.userRole || "nologin";
  //如果当前用户权限是未登录 代表只能放行未登录的页面
  if (userAccess == ACCCESS_ENUM.NOLOGIN) {
    if (needAccess == ACCCESS_ENUM.ADMIN || needAccess == ACCCESS_ENUM.USER) {
      return false;
    }
  }
  //当前用户是user只能放行 user以及未登录的页面
  if (userAccess == ACCCESS_ENUM.USER) {
    if (needAccess == ACCCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};
export default checkAccess;
