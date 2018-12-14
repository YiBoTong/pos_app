<template>
  <div class="trade-bill">
    <!-- 头部 -->
    <div class="bill-header">
      <mt-header fixed
                 title="交易账单">
      </mt-header>
    </div>
    <!-- 主体 -->
    <div class="bill-main">
      <!-- 主体头部 -->
      <div class="main-header">
        <span class="header-time"
              @click="openPicker">{{formatTime.year}}年{{formatTime.month}}月</span>
        <mt-datetime-picker ref="picker"
                            type="date"
                            v-model="selectTime">
        </mt-datetime-picker>
        <span class="header-money">支出 ¥10086 收入 ¥1008611</span>
      </div>
      <!-- 主体列表 -->
      <div class="main-list"
           v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="10">
        <div class="list-case"
             v-for="item in listData"
             :key="item.id"
             @click="handleCase(item.id)">
          <div class="case-img">
            <img :src="item.img"
                 :alt="item.alt">
          </div>
          <div class="case-content">
            <span class="content-title">
              {{item.title}}
            </span>
            <span class="content-time">
              {{item.time}}
            </span>
          </div>
          <div class="case-money">
            <span>{{item.money}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { InfiniteScroll } from 'mint-ui';
import { DatetimePicker } from 'mint-ui';
import listData from './listData.js'
export default {
  name: "TradeBill",
  data() {
    return {
      listData,
      loading: false,
      selectTime: '',
      formatTime: {
        year: '2018',
        month: '12'
      }
    }
  },
  methods: {
    openPicker() {
      this.$refs.picker.open();
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.listData[this.listData.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.listData.push(last + i);
        }
        this.loading = false;
      }, 2500);
    },
    handleCase(value) {
      console.log(value)
      this.$router.push({
        //params
        name: "TradeDeatails",
        params: {
          id: value
        }
        // query
        // path: "tradeDeatails",
        // query: {
        //   id: value
        // }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.trade-bill {
  display: flex;
  flex-direction: column;
}
.bill-header {
  min-height: 40px;
}
.bill-main {
  height: calc(100vh - 40px - 55px);
  display: flex;
  flex-direction: column;
  .main-header {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 60px;
    padding-left: 5vw;
    background-color: #fafafa;
    .header-time {
      font-size: 20px;
    }
    .header-money {
      color: gray;
    }
  }
  .main-list {
    $main-list-height: calc(100vh - 40px - 55px - 60px);
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    width: 100%;
    min-height: $main-list-height;
    .list-case {
      display: flex;
      justify-content: flex-start;
      min-height: 85px;
      width: 100%;
    }
    .list-case img {
      min-height: 40px;
      width: 40px;
    }
    .case-img {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 15vw;
    }
    .case-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      min-width: 65vw;
      border-bottom: solid 1px #dfdbdb;
    }
    .case-content .content-time {
      color: #a09e9e;
    }
    .case-money {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      min-width: 20vw;
      border-bottom: solid 1px #dfdbdb;
    }
  }
}
</style>
