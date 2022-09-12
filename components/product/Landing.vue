<template>
  <section class="Landing bg-bd text-light pt-5">
    <div class="container mt-xxl-5">
      <div
        class="text col-sm-9 col-lg-8 col-xxl-7 mt-lg-5 pe-sm-2 pt-lg-4 pe-md-5 pe-lg-0 pt-xl-5"
      >
        <h1 class="py-2 pt-lg-3 fw-bold">
          GYM Network Products The perfect workout for your tokens!
        </h1>
        <p class="col-sm-9 col-lg-10 col-xl-9 col-xxl-10 mt-xl-5 pe-xl-3">
          Lucrative DeFi earnings with Vault, Farming and Single Pool as well as
          a long-term passive income through our affiliate layer solution.
          That's what our products can do!
        </p>
        <!-- <div class="col-10 col-sm-5 col-md-4 col-xl-4  mx-auto mx-sm-0"></div> -->
          <a
            href="https://gymnetwork.io/dashboard/"
            target="blank"
            class="BTN my-4 my-sm-5 text-center rounded-50 bg-ba fw-600 text-light w-100 mt-xxl-4 box-sh-l"
          >
            Launch APP
          </a>

      </div>
    </div>
    <div class="img">
      <img src="~/assets/images/landing.png" class="" alt="" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.Landing {
  z-index: 0;
  position: relative;
  .text {
    .BTN{
      padding: 10px 35px;
      font-size: 20px;
    }
    h1 {
      font-size: 28px;
    }
    p {
      font-size: 14px;
    }
    @media (min-width: 576px) {
      .BTN{
      width: fit-content !important;
    }
    }
    @media (min-width: 768px) {
      h1 {
        font-size: 39px;
      }
      p {
        font-size: 16px;
      }
    }
    @media (min-width: 992px) {
      h1 {
        font-size: 50px;
      }
      p {
        font-size: 18px;
      }
    }
    @media (min-width: 1200px) {
      h1 {
        font-size: 64px;
        letter-spacing: 1.2px;
      }
      p {
        font-size: 22px;
      }
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
      }
    }
    @media (min-width: 768px) {
      height: auto;
    }
    @media (min-width: 992px) {
      margin-top: -340px;
    }
    @media (min-width: 1100px) {
      width: 60%;
    }
    @media (min-width: 1200px) {
      width: 800px;
      margin-top: -490px;
    }
    @media (min-width: 1330px) {
      margin-top: -490px;
    }
    @media (min-width: 1430px) {
      width: 950px;
      margin-top: -550px;
    }
    }

}
</style>
