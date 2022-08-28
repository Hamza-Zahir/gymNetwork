<template>
  <section class="Landing bg-bd text-light py-5">
    <div class="container pb-5 mb-5">
      <div class="d-md-flex align-items-lg-center pb-lg-5">
        <div class="text col-sm-10 col-md-7 mx-auto mx-md-0 px-md-2">
          <h1 class="py-2 pt-lg-3 mt-md-3">GYM Street ecosystem</h1>
          <p class="col col-lg-11 mt-md-4">
            We offer much more than a DeFi aggregator! The GYM Street ecosystem
            ranges from NFT Market, NFT Miner, crypto debit card and DEX, to its
            own metaverse.
          </p>
          <div class="col-md-8 col-lg-6 col-xl- my-4 mx-auto mx-sm-0 mt-md-5">
            <nuxt-link
              to=""
              class="btn rounded-50 bg-ba fw-500 text-light w-100 box-sh-l"
            >
              Launch to APP
            </nuxt-link>
          </div>
        </div>

        <div
          class="col-sm-10 col-md mx-auto mt-md-4 mt-lg-0 text-center"
        >
          <img src="~/assets/images/Total_Balance.png" class="w-100" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.Landing {
  z-index: 0;
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("~/assets/images/homeLanding-bg.png");
    opacity: 0.8;
    z-index: -1;
    background-size: 100% 50%;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    @media (min-width: 762px) {
      background-size: 100% 80%;
    }

    @media (min-width: 1000px) {
      background-size: 70% 100%;
    }
  }

  .text {
    h1 {
      font-size: 30px;
    }

    @media (min-width: 576px) {
      h1 {
        font-size: 33px;
      }
    }
    @media (min-width: 768px) {
      h1 {
        // font-size: 39px;
      }
    }
    @media (min-width: 992px) {
      h1 {
        font-size: 50px;
      }
    }
    @media (min-width: 1200px) {
      h1 {
        font-size: 55px;
      }
      p {
        font-size: 18px;
      }
      .btn {
        font-size: 20px;
      }
    }
    @media (min-width: 2000px) {
      h1 {
        font-size: 64px;
        font-weight: bold;
      }
      p {
        font-size: 24px;
      }
    }
    .btn {
      letter-spacing: 0.5px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
}
</style>
