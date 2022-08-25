<template>
  <section class="py-5 bg-light">
    <div class="container">
      <h1 class="my-3 fw-bolder text-center">
        GYM Networks easy way to buy crypto
      </h1>
      <div class="mt-4 d-flex flex-wrap ">
          <img v-for="(logo, i) in logos" :key="`logo-${i}`" :src="logo" alt="" class="p-2 col-6 col-sm-4 col-md-3 col-lg-2" />

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        require("~/assets/images/ListedOn/Crypto.com_black.png"),
        require("~/assets/images/ListedOn/coingecko_black.png"),
        require("~/assets/images/ListedOn/pancakeswap_black.png"),
        require("~/assets/images/ListedOn/Binance_black.png"),
        require("~/assets/images/ListedOn/Coinbase_black.png"),
        require("~/assets/images/ListedOn/Crypto.com_black.png"),
        require("~/assets/images/ListedOn/live-coin-watch_black.png"),
        require("~/assets/images/ListedOn/poocoin chart_black.png"),
        require("~/assets/images/ListedOn/dextools_black.png"),
        require("~/assets/images/ListedOn/nomics_black.png"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
