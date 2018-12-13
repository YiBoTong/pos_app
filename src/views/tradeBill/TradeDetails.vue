<template>
  <div class="tarde-details">
    <!-- 详情头部 -->
    <div class="details-header">
      <mt-header fixed
                 title="账单详情">
        <router-link to="/"
                     slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <!-- 详情主体 -->
    <div class="details-main">
      <!-- 主体顶部 -->
      <div class="details-top">
        <div class="top-img">
          <img src="./logo.png"
               alt="">
        </div>
        <div class="top-title">
          扫二维码付款给-张学友
        </div>
        <div class="top-money">
          -10.00
        </div>
      </div>
      <!-- 主体底部 -->
      <div class="details-bottom">
        <div class="bottom-case">
          <div class="case-title">当前状态</div>
          <div class="case-content">支付成功</div>
        </div>
        <div class="bottom-case">
          <div class="case-title">收款方备注</div>
          <div class="case-content">二维码收款</div>
        </div>
        <div class="bottom-case">
          <div class="case-title">支付方式</div>
          <div class="case-content">工商银行(1024)</div>
        </div>
        <div class="bottom-case">
          <div class="case-title">转账时间</div>
          <div class="case-content">2018-12-10 08:55:13</div>
        </div>
        <div class="bottom-case">
          <div class="case-title">转账单号</div>
          <div class="case-content">
            82082088202018802165471257641264
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TradeDetails",
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
$details-header-height: 40px;
$details-main-height: calc(100vh - 40px - 55px);
.details-header {
  min-height: $details-header-height;
}
.details-main {
  min-height: $details-main-height;
  .details-top {
    padding: 20px 30px 0 30px;
    .top-img img {
      height: 50px;
      width: 50px;
    }
    .top-title {
      margin: 10px 0;
    }
    .top-money {
      padding-bottom: 40px;
      font-size: 30px;
      font-weight: 700;
      border-bottom: solid 1px #ebe1e1;
    }
  }
  .details-bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 30px 0 30px;
  }
  .bottom-case {
    width: calc(100vw - 60px);
    display: flex;
    padding: 0 0 15px;
    .case-title {
      display: flex;
      width: 30vw;
      color: #8b8383;
    }
    .case-content {
      display: flex;
      width: calc(100vw - 30vw - 60px);
      word-break: break-all;
      text-align: left;
    }
  }
}
</style>
