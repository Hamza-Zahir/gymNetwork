<template>
  <section id="AffiliateSystem" class="AffiliateSystem pt-5">
    <span class="GymnetLabel d-none d-sm-block"
      >Gymnet Gymnet Gymnet Gymnet</span
    >
    <div class="text-center container">
      <h1 class="fw-bolder">Affiliate System</h1>
      <p class="fw-600 fs-14">
        Earn high returns with GYM Network's Yield Farming
      </p>
    </div>
    <div class="content mt-5">
      <div class="container">
        <div
          class="text pc col-sm-11 col-md-6 col-lg-5 px-xl-5 mx-auto mx-md-0 py-md-5"
        >
          <p class="">
            Build a sustainable passive income with our affiliate system.
          </p>
          <p>
            In addition, there are pools that allow you to earn from worldwide
            rewards.
          </p>
          <p>
            GYM NETWORK is one of the first DeFi projects to have an integrated
            affiliate system based on smart contracts.
          </p>


            <div
              class="cp BTN text-center rounded-50 bg-ba fw-500 text-light mt-xxl-4 col-10 col-sm-5 col-md-4 col-xxl-5 my-4 mx-auto mx-sm-0 box-sh-l"
            >
              Start now
              </div>


        </div>
      </div>
      <div class="imgs">
        <img
          src="~/assets/images/PartnerStatistic.png"
          class="img-1 d-lg-none"
          alt=""
        />
        <img
          src="~/assets/images/System.png"
          class="img-1 d-none d-lg-block"
          alt=""
        />
        <img src="~/assets/images/SystemBgSm.png" class="img-2" alt="" />
      </div>
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
.AffiliateSystem {
  background: #ffffff;
  position: relative;
  .BTN{
    padding: 10px 20px ;
  }
  .GymnetLabel {
    position: absolute;
    left: 0;
    top: 0;
    width: fit-content;
    transform-origin: left center;
    transform: rotate(90deg) translateY(-80%);
  }

  .content {
    z-index: 0;
    position: relative;
    .text {
      height: fit-content;
      .btn {
        letter-spacing: 0.5px;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      @media (min-width: 1200px) {
        min-height: 450px;
      }
      @media (min-width: 2000px) {
        min-height: 500px;
        font-size: 25px;
        .btn {
          font-size: 25px;
        }
      }
      @media (min-width: 2300px) {
        min-height: 600px;
      }
    }

    .imgs {
      margin-top: 20px;
      position: relative;
      .img-1 {
        width: 100%;
      }
      .img-2 {
        position: absolute;
        top: -10px;
        left: 50%;
        width: 200px;
        z-index: -1;
        transform: translate(-50%);
      }
      @media (min-width: 576px) {
        width: 70%;
        margin-left: auto;
        z-index: -1;
        display: flex;
        justify-content: end;
        margin-top: -70px;
      }
      @media (min-width: 768px) {
        width: 68%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 0px;
      }
      @media (min-width: 992px) {
        .img-2 {
          width: 250px;
          transform: translate(-70%);
        }
      }
      @media (min-width: 1100px) {
        width: auto;
      }
      @media (min-width: 1300px) {
        .img-2 {
          width: 300px;
          transform: translate(-80%);
        }
      }
      @media (min-width: 1500px) {
        .img-2 {
          width: 350px;
          transform: translate(-80%);
        }
      }

    }
  }
}
</style>
