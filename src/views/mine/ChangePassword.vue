<template>
  <div class="change-password">
    <div class="password-header">
      <mt-header fixed
                 title="修改密码">
        <router-link to="/mine"
                     slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="password-main">
      <div class="main-form">
        <div class="form-old">
          <input type="password"
                 placeholder="请输入旧密码"
                 v-model="formData.oldPassword">
        </div>
        <div class="form-new">
          <input type="password"
                 placeholder="请输入新密码"
                 v-model="formData.newPassword">
        </div>
        <mt-button type="primary"
                   @click.prevent="headleChange">确认修改</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: "changepassword",
  data() {
    return {
      formData: {
        oldPassword: "",
        newPassword: ""
      }
    }
  },
  methods: {
    headleChange() {
      console.log(this.formData)
      if (this.formData.oldPassword === '' || this.formData.newPassword === '') {
        Toast({
          message: '请勿漏填！',
          duration: 3000
        });
      } else {
        if (this.formData.oldPassword === this.formData.newPassword) {
          Toast({
            message: '新密码不能与旧密码相同！',
            duration: 3000
          });
        } else if (this.formData.newPassword.length < 6) {
          Toast({
            message: '新密码不能少于6位！',
            duration: 3000
          });
        } else {
          Toast({
            message: '密码修改成功，即将重新登录！！',
            duration: 3000
          });
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.change-password {
  display: flex;
  flex-direction: column;
}
.password-header {
  min-height: 40px;
}
.password-main {
  min-height: calc(100vh - 40px - 55px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main-form {
  min-height: 50vh;
  .mint-button {
    margin-top: 20px;
    width: calc(100vw - 20vw);
  }
  .form-old,
  .form-new {
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
      -webkit-changeearance: none;
    }
    input:focus {
      border: #4d90fe solid 1px;
    }
  }
}
</style>
