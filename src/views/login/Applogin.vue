<template>
  <div class="app-login">
    <div class="login-header">
      <mt-header fixed title="登录"></mt-header>
    </div>
    <div class="login-main">
      <div class="main-avatar">
        <div
          :style="{backgroundImage: `url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2577022489,1269768065&fm=27&gp=0.jpg)`}"
          class="user-avatar"
        ></div>
      </div>
      <div class="main-form">
        <div class="form-username">
          <input type="text" placeholder="请输入账户" v-model="formData.username">
        </div>
        <div class="form-password">
          <input type="password" placeholder="请输入密码" v-model="formData.password">
        </div>
        <mt-button type="primary" @click.prevent="headleClick">登录</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLogin",
  data() {
    return {
      formData: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    headleClick() {
      console.log(this.formData)
      this.$router.push({
        name: 'TradeBill'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-login {
  display: flex;
  flex-direction: column;
}
.login-header {
  min-height: 40px;
}
.login-main {
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-avatar {
  display: flex;
  align-items: center;
  min-height: 30vh;
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
.main-form {
  height: calc(100vh - 40px - 30vh);
  .mint-button {
    margin-top: 20px;
    width: calc(100vw - 20vw);
  }
  .form-username,
  .form-password {
    $input-width: calc(100vw - 20vw);
    width: $input-width;
    height: 44px;
    margin-bottom: 16px;
    font-size: 14px;
    background: #fff;
    input {
      border: none;
      $padding-left: 10px;
      width: calc(100vw - 20vw - 10px - 2px);
      height: 100%;
      padding-left: $padding-left;
      border: 1px solid #ddd;
      border-radius: 6px;
      color: #333;
      outline: none;
      -webkit-appearance: none;
    }
    input:focus {
      border: #4d90fe solid 1px;
    }
  }
}
</style>
