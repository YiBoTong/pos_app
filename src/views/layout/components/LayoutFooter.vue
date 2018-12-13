<template>
  <div class="layout-footer">
    <mt-tabbar fixed>
      <mt-tab-item v-for="(item,index) in menu"
                   :id="item.id"
                   :key="index"
                   @click.native="handleClick(item.id)">
        <img slot="icon"
             src="@/assets/logo.png">
        {{item.title}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "LayoutFooter",
  data() {
    return {
      menu: [{
        title: '账单统计',
        id: 'BillCount',
        icon: '@/assets/logo.png',
      },
      {
        title: '交易账单',
        id: 'TradeBill',
        icon: '@/assets/logo.png',
      }, {
        title: '我的',
        id: 'AppMine',
        icon: '@/assets/logo.png',
      }]
    }
  },
  methods: {
    handleClick(value) {
      this.$router.push({
        name: value
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-footer {
  min-height: 55px;
}
</style>
