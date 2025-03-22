import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./access";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

createApp(App).use(createPinia()).use(Antd).use(router).mount("#app");
