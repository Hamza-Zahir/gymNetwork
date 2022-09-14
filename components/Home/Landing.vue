<template>
  <section class="Landing bg-bd text-light pb-5">
    <div class="container">
      <div class="d-lg-flex justify-content-around align-items-center">
        <div class="text col-sm-12 col-lg-7 mx-auto mx-lg-0 px-md-2 pe-xl-4 pt-3 mt-lg-5">
          <h1 class="py-2 pt-lg-3 mt-md-3 fw-bold">
            {{ content.header_title }}
          </h1>
          <p class="col col-lg-11 mt-md-4">
            {{ content.header_description }}
          </p>
          <div class="col-lg-6 my-4 mx-auto mx-lg-0 mt-md-5">
            <a href="https://gymnetwork.io/dashboard"
            target="_blank"
              class="BTN text-center rounded-50 bg-ba fw-500 text-light box-sh-l">{{ content.launch_to_app }}</a>
          </div>
        </div>

        <div class="form col-sm-10 col-lg-5 col-xl-4 fw-600 mx-auto mx-lg-0 rounded p-4">
          <div class="">
            Old community members can transfer their holdings and assets to the
            new version via
            <a href="http://old.gymnetwork.io/dashboard/community-transfer/" target="_blank">Start Transfer</a>
            link
          </div>
        </div>
      </div>
      <div class="boxes p-2 p-xxl-3 mt-5 mt-lg-2 rounded-20 d-flex flex-wrap">
        <div class="box1 col-12 col-md-6 col-xl text-center text-xl-start px-2 ps-sm-4 ps-lg-5 my-3">
          <span class="pc fw-bold">{{ content.total_burnt }}</span>
          <div class="d-flex align-items-center justify-content-center justify-content-xl-start mt-2 fw-bold fs-4 mt-3">
            <img src="~/assets/images/logo.png" alt="" /><span>
              5,882,590.38
            </span>
          </div>
        </div>
        <div class="border-bottom d-md-none border-secondary col-12 col-md"></div>
        <div class="box2 col-12 col-md-6 col-xl text-center text-xl-start px-2 ps-sm-4 ps-lg-5 my-3 ps-md-4">
          <span class="pc fw-bold">{{ content.gymnet_price }}</span>
          <div class="mt-2 fw-bold fs-4 mt-3">$ 0.0940</div>
        </div>
        <div class="border-bottom d-md-none border-secondary col-12"></div>

        <div class="box3 col-12 col-md-6 col-xl text-center text-xl-start px-2 px-sm-3 ps-lg-5 ps-sm-4 my-3">
          <span class="pc fw-bold">{{ content.total_supply }}</span>
          <div class="d-flex align-items-center justify-content-center justify-content-xl-start mt-2 fw-bold fs-4 mt-3">
            <img src="~/assets/images/logo.png" alt="" />
            <span>419,377,410.62 </span>
          </div>
        </div>
        <div class="border-bottom d-md-none border-secondary col-12"></div>

        <div class="col-12 col-md-6 col-xl text-center text-xl-start px-2 ps-sm-4 ps-lg-5 my-3 col-md">
          <span class="pc fw-bold fw-600">{{
          content.total_value_locked
          }}</span>
          <div class="mt-3 fw-bold fs-4">$ 29,118,207.49</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["content"]),
  },
};
</script>

<style lang="scss" scoped>

</style>
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

    @media (min-width: 1200px) {
      background-size: 1000px 700px;
    }
  }

  .text {
    h1 {
      font-size: 30px;
    }

    .BTN {
      font-size: 20px;
      padding: 15px 40px;
    }

    @media (min-width: 576px) {
      h1 {
        font-size: 33px;
      }
    }

    @media (min-width: 768px) {
      h1 {
        font-size: 39px;
      }
    }

    @media (min-width: 992px) {
      h1 {
        font-size: 50px;
      }

      p {
        font-size: 20px;
      }

      .BTN {
        width: fit-content;
      }
    }

    @media (min-width: 1200px) {
      h1 {
        font-size: 65px;
      }

      p {
        // font-size: 18px;
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
  }

  .form {
    color: #055160;
    background: #cff4fc;

    a {
      line-break: none;
      text-decoration: underline;
    }

    // font-size: 18px;
  }

  .boxes {
    position: relative;

    .pc {
      color: #b4b4b4;
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: inherit;
      background: #153151b7;
      backdrop-filter: blur(6px);
      z-index: -1;
    }

    img {
      width: 25px;
      margin-right: 5px;
    }

    @media (min-width: 768px) {

      .box1,
      .box3 {
        border-right: 1px solid #999898;
      }
    }

    @media (min-width: 1200px) {
      .box2 {
        border-right: 1px solid #999898;
      }
    }
  }
}
</style>
