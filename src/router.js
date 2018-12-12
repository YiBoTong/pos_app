import Vue from "vue";
import Router from "vue-router";
import AppLayout from "@/views/layout/AppLayout";

Vue.use(Router);

export default new Router({
  routes: [
    // 首页
    {
      path: "",
      component: AppLayout,
      children: [
        {
          path: "",
          name: "AppHome",
          component: () => import("./views/home/AppHome.vue")
        }
      ]
    },
    // 交易账号
    {
      path: "/tradeBill",
      component: AppLayout,
      children: [
        {
          path: "",
          name: "TradeBill",
          component: () => import("./views/tradeBill/TradeBill.vue")
        }
      ]
    },
    // 账单统计
    {
      path: "/billCount",
      component: AppLayout,
      children: [
        {
          path: "",
          name: "BillCount",
          component: () => import("./views/billCount/BillCount.vue")
        }
      ]
    },
    // 我的
    {
      path: "/mine",
      component: AppLayout,
      children: [
        {
          path: "",
          name: "AppMine",
          component: () => import("./views/mine/AppMine.vue")
        }
      ]
    },
    // 登录
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login/Applogin.vue")
    }
  ]
});
