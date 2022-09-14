<template>
  <section class="Landing bg-bd text-light pt-3 pt-md-5">
    <div class="container mb-5 pb-5 pt-3   mt-md-4 my-lg-5 ">
      <div class="mt-lg-5">
        <div class="text mx-auto mx-sm-0 px-md-2">
          <h1 class="py-2  pt-lg-3 mt-md-3 fw-bold">About GYM Network</h1>
          <p class="col col-sm-8 col-md-6 col-lg-5  my-3 mt-md-4">
            We make DeFi, Crypto, finance and Metaverse easy to use for everyone
          </p>
            <a
              href="https://gymnetwork.io/dashboard/"
              target="_blank"
              class="BTN text-center rounded-50 bg-ba mt-5 fw-500 text-light box-sh-l"
            >
            Start now
          </a>

        </div>


      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.Landing {
  z-index: 0;
  position: relative;
padding-bottom: 150px;


@media (min-width: 576px) {
  padding-bottom: 200px;
    }


    @media (min-width: 992px) {
      padding-bottom: 200px;

}
@media (min-width: 1200px) {
      padding-bottom: 240px;

}
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("~/assets/images/abuot_landing_bg.jpg");
    z-index: -1;
    background-size: 500px 300px;
    background-repeat: no-repeat;
    background-position: 100% 100%;

    @media (min-width: 500px) {
      background-size: 600px 300px;
    }

    @media (min-width: 576px) {

      background-size: 800px 500px;

    }
    @media (min-width: 768px) {

background-size: 900px 600px;

}
@media (min-width: 992px) {
background-size: 900px 600px;
}
    @media (min-width: 1200px) {
      background-size: 1100px 700px;
    }
    @media (min-width: 1400px) {
      background-size: 1300px 700px;
    }
  }

  .text {
    h1 {
      font-size: 40px;
    }

    .BTN {
      font-size: 20px;
      padding: 9px 40px;
    }

    @media (min-width: 576px) {
      .BTN {
        width: fit-content;
      }
    }

    @media (min-width: 992px) {
      h1 {
        font-size: 38px;
      }

      p {
        font-size: 18px;
      }
    }

    @media (min-width: 1200px) {
      h1 {
        font-size: 45px;
      }

      .btn {
        font-size: 20px;
      }
    }

    @media (min-width: 1400px) {
      h1 {
        font-size: 56px;
      }

      p,
      .BTN {
        font-size: 22px;
      }
    }
  }


}
</style>
