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

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "BillCount"
};
</script>
