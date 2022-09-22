<template>
  <section class="Landing bg-bd text-light py-5">
    <div class="container pb-5 py-lg-5 mb-5">
      <div class="d-lg-flex align-items-lg-center pb-lg-5">
        <div class="text col-sm-12 col-lg-6 mx-auto mx-md-0 px-lg-2 my-lg-5">
          <h1 class="py-2 pt-lg-3 mt-md-3 fw-bold col-md-9 col-lg-12">
          {{content.ecosystem_header_title}}
          </h1>
          <p class="col col-lg-11 mt-md-4 col-md-7">
            {{content.ecosystem_header_desc}}
          </p>
          <a
            href="https://gymnetwork.io/dashboard"
            target="_blank"
            class="
              BTN
              col-12
              text-center
              rounded-50
              bg-ba
              fw-600
              text-light
              box-sh-l
              my-4 my-xxl-5
            "
            >{{ content.launch_to_app }}</a
          >
        </div>

        <div
          class="
            col-sm-10 col-md-8 col-lg
            mx-auto
            me-md-0
            mt-md-4 mt-lg-0
            text-center
          "
        >
          <img src="~/assets/images/Total_Balance.png" alt="" />
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
    background: url("~/assets/images/eco_system_landing-bg.png");
    z-index: -1;
    background-size: 600px 400px;
    background-repeat: no-repeat;
    background-position: 100% 100%;

    @media (min-width: 760px) {
      background-size: 1000px 600px;
    }

    @media (min-width: 1400px) {
      background-size: 1400px 700px;
    }
  }

  .text {
    h1 {
      font-size: 40px;
    }

    .BTN {
      font-size: 20px;
      padding: 12px 40px;
    }

    @media (min-width: 768px) {
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

  img {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    img {
      margin-top: -150px;
    }
  }

  @media (min-width: 992px) {
    img {
      margin-top: 0px;
      width: 500px;
    }
  }
}
</style>
