<template>
  <div class="layout-main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "LayoutMain"
}
</script>

<style lang="scss" scoped>
.layout-main {
  min-height: calc(100vh - 55px);
}
</style>
