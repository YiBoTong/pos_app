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
                            v-model="selectTime">
        </mt-datetime-picker>
        <span class="header-type">支出</span>
      </div>
      <div class="main-count">

      </div>
      <div class="main-chart">
      </div>
      <div class="main-rank">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { DatetimePicker } from 'mint-ui';
export default {
  name: "BillCount",
  data() {
    return {
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
}
</style>
