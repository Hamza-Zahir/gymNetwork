<template>
  <section class="Landing bg-bd text-light py-5">
    <div class="container mb-5 pb-5 pt-3  mt-md-4 my-lg-5">
      <div class="d-md-flex align-items-lg-center pb-lg-5 ">
        <div class="text col-sm-10 col-md-7 mx-auto mx-md-0 px-md-2">
          <h1 class="py-2 pt-lg-3 mt-md-3 fw-bold">About GYM Network</h1>
          <p class="col col-lg-10  my-3 mt-md-4">
            We make DeFi, Crypto, finance and Metaverse easy to use for everyone
          </p>
          <div class="col-md-8 col-lg-6 col-xl- mb-3 mt-5 mx-auto mx-sm-0 m">
            <a
              href="https://gymnetwork.io/dashboard/"
              target="blank"
              class="btn rounded-50 bg-ba fw-500 text-light w-100 box-sh-l"
            >
            Start now
          </a>
          </div>
        </div>

        <div
          class="img col-sm-10 col-md mx-auto mt-md-4 mt-lg-0 text-center pb-md-5 pe-md-5"
        >
          <img src="~/assets/images/logoRotet.png" class="me-md-5" alt="" />
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
    p{
       font-size: 18px;

    }


    @media (min-width: 576px) {
      h1 {
        font-size: 39px;
      }
    }

    @media (min-width: 992px) {
      h1 {
        font-size: 50px;
      }
      p {
        font-size: 25px;
      }
      .btn {
        font-size: 20px;
      }
    }
    @media (min-width: 1200px) {
      h1 {
        font-size: 60px;
      }
      p,.btn{
        font-size: 25px;
      }

    }
    @media (min-width: 2000px) {
      h1 {
        font-size: 64px;
        font-weight: bold;
      }
      p,.btn {
        font-size: 30px;
      }

    }
    .btn {
      letter-spacing: 0.5px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  .img{
    img{
      width: 150px;
      @media (min-width: 992px) {
        width: 180px;

      }
      @media (min-width: 1200px) {
        width: 200px;

      }
    }
  }
}
</style>
