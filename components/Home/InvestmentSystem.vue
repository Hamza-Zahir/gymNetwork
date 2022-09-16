<template>
  <section class="investmentSystem pt-5">
    <div class="container">
      <div class="text col-md-9 col-lg-8 col-lg">
        <h1 class="fw-bold">
          {{ content.investment_system_title }}
        </h1>

        <p class="pc mt-3 col-md-10 mt-xxl-5 pt-3">
          {{ content.investment_system_description }}
        </p>

        <nuxt-link
          to="/Product"
          class="
            BTN
            col-12
            box-sh-l
            cp
            text-center
            rounded-50
            bg-ba
            fw-500
            text-light
            my-4
            mt-lg-5
          "
        >
          {{ content.go_to_the_products }}
        </nuxt-link>
      </div>
    </div>
    <div class="img text-end">
      <img src="~/assets/images/investment-lg.png" class="" alt="" />
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
.investmentSystem {
  background: #ffffff;
  position: relative;
  overflow: hidden;

  .BTN {
    padding: 12px 26px;
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
    .BTN {
    width: fit-content;
    // padding: 12px 26px;
  }
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
        margin-top: -170px;
      }
    }

    .text {
      transform: translateY(40px);
    }

    p {
      font-size: 18px;
    }

    .BTN {
      padding: 13px 26px;
      font-size: 18px;
    }
  }

  @media (min-width: 1200px) {
    .img {
      img {
        width: 70%;
        margin-top: -230px;
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
        width: 60%;
        margin-top: -270px;
      }
    }

    p {
      font-size: 20px;
    }
  }

  @media (min-width: 2000px) {
    .img {
      img {
        width: 50%;
        margin-top: -220px;
      }
    }

    .text {
      transform: translateY(60px);
    }
  }
}
</style>
