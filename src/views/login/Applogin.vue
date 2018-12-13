<template>
  <div class="app-login">
    <div class="login-header">
      <mt-header fixed
                 title="登录"></mt-header>
    </div>
    <div class="login-main">
      <div class="main-form">
        <div class="form-username">
          <input type="text"
                 placeholder="请输入账户"
                 v-model="formData.username">
        </div>
        <div class="form-password">
          <input type="password"
                 placeholder="请输入密码"
                 v-model="formData.password">
        </div>
        <mt-button type="primary"
                   @click.prevent="headleClick">登录</mt-button>
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
  min-height: calc(100vh - 40px - 55px);
  display: flex;
  justify-content: center;
}
.main-form {
  height: calc(100vh - 95px);
  padding-top: 40px;
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
