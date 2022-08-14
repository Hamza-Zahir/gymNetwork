<template>
  <section class="BuyCrypto py-5 bg-light">
    <div class="container d-lg-flex align-items-center justify-content-around">
      <div class="text col-md-10 col-lg-6 mx-auto mx-lg-0">
        <h1 class="my-3">GYM Networks easy way to buy crypto</h1>
        <p class="pc">
          Use our Buy and Sell Crypto Service - almost 50 % of the Fees will be
          used to Buy and Burn 🔥 GYMNET token and support the price!
        </p>
        <p class="pc">
          Users can easily buy BNB and other cryptocurrencies using a wide range
          of payment options, Apple Pay, Google Pay, credit and debit card.
        </p>
        <div class="col-sm-10 col-lg-12 mx-auto mt-5">
          <div class="d-flex">
            <span v-for="i in 4" :key="`img-${i}`" class="cp col">
              <img
                :src="require(`~/assets/images/Frame${i}.png`)"
                class="w-100"
                alt=""
              />
            </span>
          </div>
          <div class="d-flex">
            <span v-for="i in 4" :key="`img-${i + 4}`" class="cp col">
              <img
                :src="require(`~/assets/images/Frame${i + 4}.png`)"
                class="w-100"
                alt=""
              />
            </span>
          </div>
        </div>

      </div>
      <div
        class="BuyAndSell col-sm-10 mx-auto mx-lg-0 col-lg-5 rounded-20 p-3 mt-4 border"
      >
        <div class="d-flex justify-content-between align-items-center">
          <div class="">
            <span
              class="px-1 cp"
              @click="
                () => {
                  Buy = true;
                  Sell = false;
                }
              "
              :class="Buy ? 'text-bd active' : 'pc border-bottom'"
              >Buy</span
            >
            <span
              class="px-1 cp"
              :class="Sell ? 'text-bd active' : 'pc border-bottom'"
              @click="
                () => {
                  Buy = false;
                  Sell = true;
                }
              "
              >Sell</span
            >
          </div>
          <span>
            <img src="~/assets/images/Button.png" alt="" />
          </span>
        </div>
        <BuycryptoCard />
      </div>
    </div>
 <div class="bg">
      <img src="~/assets/images/4001.png" class="w-100" alt="" />
    </div>
  </section>
</template>

<script>
import BuycryptoCard from "./cards/BuycryptoCard.vue";
export default {
  data() {
    return {
      Buy: true,
      Sell: false,
    };
  },
  components: { BuycryptoCard },
};
</script>

<style lang="scss" scoped>
section {
    position: relative;
z-index: 0;
overflow: hidden;
.bg {
    z-index: -1;
    position: absolute;
    bottom: 45%;
    left: -70px;
    width: 250px;
    opacity: 0.4;
    @media (min-width: 992px) {
      width: 300px;
      bottom: -70px;
    }
  }



  .BuyAndSell {
    background: white;
    z-index: 2;
    .active {
      font-weight: 600;
      border-bottom: 2px solid #153151;
    }
  }
}
</style>
