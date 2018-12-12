import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入全部mint-ui组件
import MintUI from "mint-ui";
// 引入mint-ui样式
import "mint-ui/lib/style.css";
// 引入全局样式
import "./style.scss";

Vue.use(MintUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
