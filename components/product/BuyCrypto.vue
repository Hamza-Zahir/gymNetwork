<template>
  <section class="BuyCrypto py-5 bg-light">
    <div class="container d-lg-flex justify-content-around">
      <div
        class="text col-md-10 col-lg-6 mx-auto mx-lg-0 d-flex flex-column justify-content-around"
      >
        <h1 class="my-3 fw-bolder">GYM Networks easy way to buy crypto</h1>

        <div class="">
          <p class="pc">
            Use our Buy and Sell Crypto Service - almost 50 % of the Fees will
            be used to Buy and Burn 🔥 GYMNET token and support the price!
          </p>
          <p class="pc">
            Users can easily buy BNB and other cryptocurrencies using a wide
            range of payment options, Apple Pay, Google Pay, credit and debit
            card.
          </p>
        </div>
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
      <div style="display: flex; justify-content: center; padding: 15px">
        <iframe
          class="rounded-15 border"
          style="
            --border-radius: 10px;
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
            border-radius: var(--border-radius);
            margin: auto;
            max-width: 420px;
          "
          :src="`https://widget.onramper.com?color=266677&apiKey=pk_prod_VKe1va21M4bilD68fkZZzHiBpiE8kR84EDmsHoO05f40`"
          height="660px"
          width="482px"
          title="Onramper widget"
          frameborder="0"
          allow="accelerometer; autoplay; camera; gyroscope; payment"
        >
        </iframe>
      </div>

    </div>
    <div class="bg">
      <img src="~/assets/images/4001.png" class="w-100" alt="" />
    </div>
  </section>
</template>

<script>
// const APIKEY =  process.env.baseUrl
export default {
  data:{
  }
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
  .text {
    @media (min-width: 992px) {
      h1 {
        font-size: 55px;
      }
      p {
        font-size: 20px;
      }
    }
  }
}
</style>
