<template>
  <div class="trade-bill">
    <div class="bill-header">
      <mt-header fixed
                 title="交易账单">
        <router-link to="/"
                     slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="bill-main">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "TradeBill"
};
</script>
