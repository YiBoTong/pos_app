<template>
  <div class="merchant-info">
    <div class="info-header">
      <mt-header fixed
                 title="商户信息">
        <router-link to="/mine"
                     slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
  </div>
</template>

<script>
export default {
  name: "merchantinfo",
  data() {
    return {
      formData: {
        oldinfo: "",
        newinfo: ""
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.merchant-info {
  display: flex;
  flex-direction: column;
}
.info-header {
  min-height: 40px;
}
.info-main {
  min-height: calc(100vh - 40px - 55px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
