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

    </div>
    <div class="mine-footer">
      <mt-button type="danger"
                 @click.native="handleOut">退出登录</mt-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// 此组件必须在所用页面单独引用
import { MessageBox } from "mint-ui";
export default {
  name: "AppMine",
  data() {
    return {

    }
  },
  methods: {
    handleOut() {
      MessageBox.confirm('确定退出登录?').then(res => {
        this.$router.push({
          name: "login"
        })
      }).catch(res => {
        console.log(res)
      });
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
.mine-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  .mint-button {
    min-width: calc(100vw - 20vw);
  }
}
.mine-main {
  min-height: calc(100vh - 145px);
  display: flex;
  justify-content: center;
}
</style>

