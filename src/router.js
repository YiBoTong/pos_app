import Vue from "vue";
import Router from "vue-router";
import AppLayout from "@/views/layout/AppLayout";
import Cookies from "js-cookie";

Vue.use(Router);

const router = new Router({
  routes: [
    // 登录
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login/Applogin.vue")
    },
    // 交易账单
    {
      path: "/",
      component: AppLayout,
      redirect: "/tradeBill",
      meta: { requireAuth: true },
      children: [
        {
          path: "/tradeBill",
          name: "TradeBill",
          component: () => import("./views/tradeBill/TradeBill.vue"),
          meta: { requireAuth: true }
        },
        {
          path: "tradeDeatails/:id",
          name: "TradeDeatails",
          component: () => import("./views/tradeBill/TradeDetails.vue"),
          meta: { requireAuth: true }
        }
      ]
    },
    // 账单统计
    {
      path: "/billCount",
      component: AppLayout,
      meta: { requireAuth: true },
      children: [
        {
          path: "",
          name: "BillCount",
          component: () => import("./views/billCount/BillCount.vue"),
          meta: { requireAuth: true }
        }
      ]
    },
    // 我的
    {
      path: "/mine",
      component: AppLayout,
      meta: { requireAuth: true },
      children: [
        {
          path: "",
          name: "AppMine",
          component: () => import("./views/mine/AppMine.vue"),
          meta: { requireAuth: true }
        },
        {
          path: "info",
          name: "MerchantInfo",
          component: () => import("./views/mine/MerchantInfo.vue"),
          meta: { requireAuth: true }
        },
        {
          path: "password",
          name: "ChangePassword",
          component: () => import("./views/mine/ChangePassword.vue"),
          meta: { requireAuth: true }
        }
      ]
    }
  ]
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数
  // 判断进入页面是否需要权限
  if (to.meta.requireAuth) {
    // 判断token是否存在
    if (Cookies.get("token")) {
      // 判断已登录，却尝试去访问登录页面或者错误页面，将继续保持原本的页面
      if (to.path === "/login") {
        console.log(to.path);
        next(from.path);
      } else {
        next();
      }
    } else {
      next("/login");
    }
  } else {
    // 判断去登录页的时候是否已经在登录状态，如果已登录，将继续保持原本的页面
    if (Cookies.get("token")) {
      next(from.path);
    } else {
      next();
    }
  }
});

export default router;
