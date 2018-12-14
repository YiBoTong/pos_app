import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
// 引入全部mint-ui组件
import MintUI from "mint-ui";
// 引入mint-ui样式
import "mint-ui/lib/style.css";
// 引入全局样式
import "./style.scss";
// 引入图表
import VeHistogram from "v-charts/lib/histogram.common";
Vue.component(VeHistogram.name, VeHistogram);
// 引入js-cookies
Vue.use(MintUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
