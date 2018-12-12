<template>
  <div class="app-layout">
    <layout-main> </layout-main>
    <layout-footer> </layout-footer>
  </div>
</template>

<script>
import LayoutMain from "./components/LayoutMain"
import LayoutFooter from "./components/LayoutFooter"

export default {
  name: "AppLayout",
  components: { LayoutMain, LayoutFooter }
}
</script>

<style lang="scss" scoped>
.app-layout {
  display: flex;
  flex-direction: column;
}
</style>
