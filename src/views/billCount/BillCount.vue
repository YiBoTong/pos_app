<template>
  <div class="bill-count">
    <div class="count-header">
      <mt-header fixed
                 title="账单统计">
        <router-link to="/"
                     slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="count-main">
      <div class="main-header">
        <span class="header-time"
              @click="openPicker">{{formatTime.year}}年{{formatTime.month}}月</span>
        <mt-datetime-picker ref="picker"
                            type="date"
                            v-model="selectTime"></mt-datetime-picker>
        <span class="header-type">收入</span>
      </div>
      <div class="main-count">
        <div class="count-title">共收入11笔，合计</div>
        <div class="count-money">¥15893.00</div>
      </div>
      <div class="main-chart">
        <div class="chart-title">收入对比</div>
        <div class="chart-content">
          <ve-histogram :data="chartData"
                        :extend="extend"></ve-histogram>
        </div>
      </div>
      <div class="main-rank">
        <div class="rank-title">收入排行榜</div>
        <div class="rank-case"
             v-for="item in rankData"
             :key="item.id"
             @click="handleCase(item.id)">
          <div class="case-left">
            <div class="left-index">{{item.id}}</div>
            <div class="left-icon">
              <img :src="item.icon"
                   alt="">
            </div>
            <div class="left-title">{{item.title}}</div>
          </div>
          <div class="case-right">
            <div class="right-money">¥{{item.money}}</div>
            <div class="right-icon">></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import rankData from "./rankData.js"
import { DatetimePicker } from 'mint-ui';
export default {
  name: "BillCount",
  data() {
    this.extend = {
      series: {
        label: { show: true, position: "top" }
      }
    }
    return {
      rankData,
      loading: false,
      selectTime: '',
      formatTime: {
        year: '2018',
        month: '12'
      },
      chartData: {
        columns: ['日期', '收入'],
        rows: [
          { '日期': '1月', '收入': 1393 },
          { '日期': '2月', '收入': 3530 },
          { '日期': '3月', '收入': 2923 },
          { '日期': '4月', '收入': 1723 },
          { '日期': '5月', '收入': 3792 },
          { '日期': '6月', '收入': 4593 },
          { '日期': '7月', '收入': 1393 },
          { '日期': '8月', '收入': 3530 },
          { '日期': '9月', '收入': 2923 },
          { '日期': '10月', '收入': 1723 },
          { '日期': '11月', '收入': 3792 },
          { '日期': '12月', '收入': 4593 }
        ]
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
      this.$router.push({
        name: "TradeBill",
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$count-header-height: 40px;
$count-main-height: calc(100vh - 40px - 55px);
$bill-count-height: calc(100vh - 55px);
.bill-count {
  min-height: $bill-count-height;
}
.count-header {
  min-height: $count-header-height;
}
.count-main {
  min-height: $count-main-height;
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: #fafafa;
    padding: 0 30px;
    .header-time {
      font-size: 20px;
    }
  }
  .main-count {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 15vh;
    .count-title {
      padding-bottom: 10px;
      color: rgb(147, 147, 153);
    }
    .count-money {
      font-weight: 600;
      font-size: 30px;
    }
  }
  .main-chart {
    padding: 10px 30px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .chart-title {
      color: rgb(147, 147, 153);
    }
    .chart-content {
      width: 100%;
    }
  }
  .main-rank {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .rank-title {
      color: rgb(147, 147, 153);
    }
  }
}
.rank-case {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  .case-left {
    display: flex;
    justify-content: flex-start;
    width: 50%;
    .left-index {
      display: flex;
      align-items: center;
    }
    .left-icon {
      display: flex;
      align-items: center;
      padding: 0 10px;
    }
    .left-title {
      display: flex;
      align-items: center;
    }
  }
  .case-left img {
    height: 30px;
    width: 30px;
  }
  .case-right {
    display: flex;
    justify-content: flex-start;
    .right-money {
      font-weight: 600;
      padding-right: 10px;
    }
    .right-icon {
      color: grey;
    }
  }
}
</style>
