import { defineStore } from "pinia";
import { ref } from "vue";
import { getCurrentUser } from "@/api/user";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useLoginUserStore = defineStore("loginUser", () => {
  // other options...
  const loginUser = ref<any>({
    username: "未登录",
  });

  //远程获取用户登录信息
  async function fetchLoginUser() {
    const res = await getCurrentUser();
    if (res.data.code === 0 && res.data.data) {
      loginUser.value = res.data.data;
    }
    // else {
    //   setTimeout(() => {
    //     loginUser.value = { username: "小黑子", id: 1 };
    //   }, 3000);
    // }
  }

  //单独设置信息
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser;
  }

  return { loginUser, fetchLoginUser, setLoginUser };
});
