<template>
  <section id="GetStarted" class="GetStarted py-5 bg-light">
    <div class="container py-3 mt-lg-5">
      <h1 class="my-2 fw-bold text-center mx-auto">
        {{ content.gym_network_title }}
      </h1>


      <div class="content mx-auto d-md-flex flex-wrap py-5 ">
        <div class="col col-md-4 p-2 p-lg-4">
          <div
            class="box box-1 text-light rounded-15 h-100 d-flex flex-column justify-content-between p-4 px-md-2 py-md-3 p-lg-4"
          >
            <div class="img">
              <img src="~/assets/images/logoRotetLeft-2.png" alt="" />
            </div>
            <div class="">
              <h1 class="text-end fw-bolder">/01</h1>
              <h4 class="fw-bold my-3">{{ content.choose_crypto_wallet }}</h4>
              <p class="my-3">{{ content.choose_crypto_wallet_desc }}</p>
            </div>
            <a
              href="https://www.youtube.com/watch?v=zCKvSVJeXRI"
              target="_blank"
              class="fs-14 text-end mt-4 text-light"
            >
              Video tutorial
              <b-icon icon="arrow-up-right" class="m-0"></b-icon>
            </a>
          </div>
        </div>
        <div class="col col-md-4 p-2 p-lg-4">
          <div
            class="box box-2 bg-bl text-bd rounded-15 h-100 d-flex flex-column justify-content-between p-4 px-md-2 py-md-3 p-lg-4"
          >
            <div class="">
              <h1 class="text-end fw-bolder">/02</h1>
              <h4 class="fw-bold my-3">{{ content.transfer_bnb }}</h4>
              <p class="pc my-3">{{ content.transfer_bnb_desc }}</p>
            </div>
            <div class="img text-end">
              <img src="~/assets/images/morflax-studio.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col col-md-4 p-2 p-lg-4">
          <div
            class="box box-2 bg-bl text-bd rounded-15 h-100 d-flex flex-column justify-content-between p-4 px-md-2 py-md-3 p-lg-4"
          >
            <div class="">
              <h1 class="text-end fw-bolder">/03</h1>
              <h4 class="fw-bold my-3">{{ content.connect_your_wallet }}</h4>
              <p class="pc my-3">{{ content.connect_your_wallet_desc }}</p>
            </div>
            <a
              href="https://www.youtube.com/watch?app=desktop&v=DRKyrtixZ1A"
              target="_blank"
              class="fs-14 text-end mt-4 pc"
            >
              Video tutorial
              <b-icon icon="arrow-up-right" class="m-0"></b-icon>
            </a>
          </div>
        </div>
      </div>
     <div class="text-center">
       <nuxt-link
        to=""
        class="BTN cp bg-ba rounded-50 text-light text-center mt-4 fw-600 box-sh-l"
      >
        Start directly
    </nuxt-link>
    </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import GetStarted from "../GetStarted.vue";

export default {
  computed: {
    ...mapGetters(["content"]),
  },
  components: {
    GetStarted,
  },
};
</script>

<style lang="scss" scoped>
.GetStarted {
  background: white;
  position: relative;
  z-index: 0;
  .BTN {
    padding: 12px 35px;
    font-size: 18px;
  }





  @media (min-width: 768px) {
    h1 {
      font-size: 40px;
    }

  }

  h1 {
    font-size: 34px;
    max-width: 700px;

    @media (min-width: 992px) {
      font-size: 50px;
    }

    @media (min-width: 1200px) {
      font-size: 50px;
      max-width: 700px;
    }
  }
  .content {
    max-width: 1000px;
    @media (min-width: 768px) {
      .box {
        font-size: 14px;
      }
    }

    @media (min-width: 992px) {
      min-height: 350px;
      font-size: 18px;
      .box {
        font-size: 18px;
      }
    }
  }

  .box-1 {
    background: url("../../assets/images/bg-choose.png");
    background-size: cover;
    position: relative;
    img {
      width: 90px;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-10%, -40%);
      @media (min-width: 580px) {
        transform: translate(-30%, -40%);
      }
      @media (min-width: 768px) {
        // transform: translate(-30%, -40%);
      }
    }
  }
}
</style>
