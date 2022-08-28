<template>
  <section class="investmentSystem pt-5">
    <div class="container">
      <div class="text col-md-9 col-lg-7">
        <h1 class="fw-bold">
          Gym Network — A DeFi Aggregator Investment System
        </h1>

        <p class="pc mt-3 mt-lg-4">
          GYM Network is a DeFi Aggregator Investment System that combines the
          best yields with high rewards for its users. Thus providing easy
          access and saving you a lot of precious time. Imagine getting the best
          yields in the DeFi space directly into your wallet. Now the time has
          come to let your dreams become reality!
        </p>

        <nuxt-link to="/Product"
          class="BTN box-sh-l cp text-center rounded-50 bg-ba fw-500 text-light my-4 col-sm-5 col-lg-4 mt-lg-5"
        >
          Go to the products
        </nuxt-link>
      </div>
    </div>
    <div class="img text-end">
      <img src="~/assets/images/investment-lg.png" class="" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.investmentSystem {
  background: #ffffff;
  position: relative;
  overflow: hidden;
  .BTN {
    padding: 10px 20px;
  }
  .text {
    z-index: 1;
  }

  .img {
    z-index: -1;
    img {
      width: 140%;
    }
  }
  @media (min-width: 576px) {
    .img {
      img {
        width: 100%;
        margin-top: -80px;
      }
    }
  }
  @media (min-width: 992px) {
    .img {
      img {
        width: 80%;
        margin-top: -160px;
      }
    }
    .text {
      transform: translateY(40px);
    }
  }
  @media (min-width: 1200px) {
    .img {
      img {
        width: 70%;
        margin-top: -200px;
      }
    }
    .text {
      h1 {
        font-size: 50px;
      }
    }
  }
  @media (min-width: 1700px) {
    .img {
      img {
        width:60%;
        margin-top: -220px;
      }
    }

  }
    @media (min-width: 2000px) {
    .img {
      img {
        width:50%;
        margin-top: -220px;
      }
    }
     .text {
      transform: translateY(60px);


    }
  }
}
</style>
