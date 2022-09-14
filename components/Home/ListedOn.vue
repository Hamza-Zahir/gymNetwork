<template>
  <section class="py-5 bg-light">
    <div class="container py-lg-5">
      <h1 class="fw-bold text-center">
{{content.listed_on}}
        </h1>
      <div class="mt-4 d-flex flex-wrap mt-5 links">
        <div
          v-for="(link, i) in links"
          :key="`logo-${i}`"
          class="d-block p-2 link"
        >
        <a :href="link.link" target="_blank">
          <img :src="link.logo" alt="" class="w-100" />
        </a>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

const links = [
  {
    link: "https://crypto.com/price/gym-network",
    logo: require("~/assets/images/ListedOn/Crypto.com_black.png"),
  },
  {
    link: "https://www.coingecko.com/en/coins/gym-network",
    logo: require("~/assets/images/ListedOn/coingecko_black.png"),
  },
  {
    link: "https://pancakeswap.finance/info/tokens/0x0012365f0a1e5f30a5046c680dcb21d07b15fcf7?chainId=56",
    logo: require("~/assets/images/ListedOn/pancakeswap_black.png"),
  },
  {
    link: "https://www.binance.com/en/price/gym-network",
    logo: require("~/assets/images/ListedOn/Binance_black.png"),
  },
  {
    link: "https://www.coinbase.com/price/gym-network/",
    logo: require("~/assets/images/ListedOn/Coinbase_black.png"),
  },
  {
    link: "https://www.livecoinwatch.com/price/GymNetwork-GYMNET",
    logo: require("~/assets/images/ListedOn/live-coin-watch_black.png"),
  },
  {
    link: "https://poocoin.app/tokens/0x0012365f0a1e5f30a5046c680dcb21d07b15fcf7",
    logo: require("~/assets/images/ListedOn/poocoin_chart_black.png"),
  },
  {
    link: "https://www.dextools.io/app/bnb/pair-explorer/0xf5d3cba24783586db9e7f35188ec0747ffb55f9b",
    logo: require("~/assets/images/ListedOn/dextools_black.png"),
  },
  {
    link: "https://nomics.com/assets/gymnet-gym-network",
    logo: require("~/assets/images/ListedOn/nomics_black.png"),
  },
];
export default {
  data() {
    return {
      links
    };
  },
  computed: {
    ...mapGetters(["content"]),
  },
};
</script>

<style lang="scss" scoped>
h1 {
  @media (min-width: 1200px) {
    font-size: 50px;
  }
}
  .link{
    width: 50%;
    @media (min-width:367px) {
      width: auto;
margin: 0 auto;
    }
    @media (min-width:992px) {
margin: 0 ;
    }
  }
</style>
