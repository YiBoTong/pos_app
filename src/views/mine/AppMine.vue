<template>
  <div class="app-mine">
    <div class="mine-header">
      <mt-header fixed
                 title="我的">
        <router-link to="/"
                     slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="mine-main">
      <div class="main-top">
        <div class="top-avatar">
          <div :style="{backgroundImage: `url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2577022489,1269768065&fm=27&gp=0.jpg)`}"
               class="user-avatar"></div>
        </div>
        <div class="top-name">张国荣</div>
      </div>
      <div class="main-between">
        <div class="between-case"
             @click="handleRouter('MerchantInfo')">
          <span class="case-left">商户信息</span>
          <span class="case-right">></span>
        </div>
        <div class="between-case"
             @click="handleRouter('ChangePassword')">
          <span class="case-left">修改密码</span>
          <span class="case-right">></span>
        </div>
      </div>
      <div class="main-bottom">
        <mt-button type="danger"
                   @click.native="handleOut">退出登录</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// 此组件必须在所用页面单独引用
import { MessageBox } from "mint-ui";
import Cookies from "js-cookie";
export default {
  name: "AppMine",
  components: {},
  data() {
    return {

    }
  },
  methods: {
    handleOut() {
      MessageBox.confirm('确定退出登录?').then(res => {
        Cookies.remove("token")
        console.log(Cookies.get("token"))
        this.$router.push({
          name: "login"
        })
      }).catch(res => {
        console.log(res)
      });
    },
    handleRouter(value) {
      this.$router.push({
        name: value
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.app-mine {
  display: flex;
  flex-direction: column;
}
.mine-header {
  min-height: 40px;
}
.mine-main {
  min-height: calc(100vh - 40px - 55px);
  display: flex;
  flex-direction: column;
  width: 100%;
  .main-top {
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top-avatar {
      margin-top: 3vh;
    }
    .top-name {
      margin-top: 3vh;
      font-weight: 600;
    }
  }
  .main-between {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 95px - 50px - 30vh);
    width: 100%;
    .between-case {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      min-width: calc(100vw - 20vw);
      border-bottom: 1px solid gainsboro;
      .case-right {
        color: rgb(204, 199, 199);
      }
    }
    .between-case span {
      font-size: 18px;
    }
  }
  .main-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    .mint-button {
      min-width: calc(100vw - 20vw);
    }
  }

  // 头像 显示
  .user-avatar {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    &::after {
      content: "";
      position: absolute;
      top: 10%;
      left: 0%;
      width: 100%;
      height: 100%;
      background: inherit;
      background-size: 100% 100%;
      border-radius: 50%;
      transform: scale(0.95);
      filter: blur(10px) brightness(80%) opacity(0.8);
      z-index: -1;
    }
  }
}
</style>

