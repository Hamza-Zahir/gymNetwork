<template>
  <div class="Landing bg-bd text-light pt-5">
    <div class="container">
      <div class="text col-sm-9 col-lg-7 mt-lg-5 pe-sm-2 pe-md-5 pe-lg-0">
        <h1 class="py-2 pt-lg-3">
          GYM Network Products The perfect workout for your tokens!
        </h1>
        <p class="col-sm-9 col-lg-11">
          Lucrative DeFi earnings with Vault, Farming and Single Pool as well as
          a long-term passive income through our affiliate layer solution.
          That's what our products can do!
        </p>
        <div class="col-10 col-sm-5 col-md-4 col-xl-3 my-4 mx-auto mx-sm-0">
          <nuxt-link
            to=""
            class="btn rounded-50 bg-ba fw-500 ls-1 text-light w-100"
          >
            Launch to APP
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="img">
      <img src="~/assets/images/landing.png" class="" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Landing {
  z-index: 0;
  position: relative;
  .text {
    h1 {
      font-size: 30px;
      @media (min-width: 576px) {
        font-size: 33px;
      }
      @media (min-width: 768px) {
        font-size: 39px;
      }
      @media (min-width: 992px) {
        font-size: 50px;
      }
      @media (min-width: 1430px) {
        font-size: 60px;
      }
    }
    p {
      font-size: 14px;
      @media (min-width: 768px) {
        font-size: 16px;
      }
      @media (min-width: 1430px) {
        font-size: 18px;
      }
    }
    .btn {
      letter-spacing: 0.5px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  .img {
    margin-top: 20px;
    img {
      height: 100%;
      width: 100%;
    }
    @media (min-width: 576px) {
      margin-top: -350px;
      height: 350px;
      width: 60%;
      margin-left: auto;
      z-index: -1;
      position: relative;
      display: flex;
      justify-content: end;

      img {
        width: 100%;
        // z-index: -1;
      }
    }
    @media (min-width: 768px) {
      height: auto;
    }
    @media (min-width: 992px) {
      margin-top: -440px;
    }
    @media (min-width: 1100px) {
      width: 55%;
    }
    @media (min-width: 1200px) {
      width: 53%;
    }
    @media (min-width: 1430px) {
      margin-top: -460px;
    }
  }
}
</style>
