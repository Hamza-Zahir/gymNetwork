<template>
  <section class="Landing bg-bd text-light pb-5">
    <div class="container">
      <div class="d-lg-flex justify-content-around align-items-center">
        <div
          class="
            text
            col-sm-12 col-lg-7
            mx-auto mx-lg-0
            px-md-2
            pe-xl-4
            pt-3
            mt-lg-5
          "
        >
          <h1
            class="py-2 pt-lg-3 mt-md-3 fw-bold"
            v-html="content.header_title"
          ></h1>
          <p
            class="col col-lg-11 mt-md-4"
            v-html="content.header_description"
          ></p>
          <div class="col-lg-6 my-4 mx-auto mx-lg-0 mt-md-5">
            <a
              href="https://gymnetwork.io/dashboard"
              target="_blank"
              class="
                BTN
                text-center
                rounded-50
                bg-ba
                fw-600
                text-light
                box-sh-l
                col-12
              "
              v-html="content.launch_to_app"
            ></a>
          </div>
        </div>

        <div
          class="
            form
            col-sm-10 col-lg-5 col-xl-4
            fw-600
            mx-auto mx-lg-0
            rounded
            p-4
          "
        >
          <div class="r" v-html="content.header_info"></div>
        </div>
      </div>
      <div class="boxes p-2 p-xxl-3 mt-5 mt-lg-2 rounded-20 d-flex flex-wrap">
        <div
          class="
            box1
            col-12 col-md-6 col-xl
            text-center text-xl-start
            px-2
            ps-sm-4 ps-lg-5
            my-3
          "
        >
          <span class="pc fw-bold" v-html="content.total_burnt"></span>
          <div
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-xl-start
              mt-2
              fw-bold
              fs-4
              mt-3
            "
          >
            <img src="~/assets/images/logo.png" alt="" /><span
            >{{TotalBurnt}}
            </span>
          </div>
        </div>
        <div
          class="border-bottom d-md-none border-secondary col-12 col-md"
        ></div>
        <div
          class="
            box2
            col-12 col-md-6 col-xl
            text-center text-xl-start
            px-2
            ps-sm-4 ps-lg-5
            my-3
            ps-md-4
          "
        >
          <span class="pc fw-bold" v-html="content.gymnet_price"></span>
          <div class="mt-2 fw-bold fs-4 mt-3"> {{GYMNETPrice}}</div>
        </div>
        <div class="border-bottom d-md-none border-secondary col-12"></div>

        <div
          class="
            box3
            col-12 col-md-6 col-xl
            text-center text-xl-start
            px-2 px-sm-3
            ps-lg-5 ps-sm-4
            my-3
          "
        >
          <span class="pc fw-bold" v-html="content.total_supply"></span>
          <div
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-xl-start
              mt-2
              fw-bold
              fs-4
              mt-3
            "
          >
            <img src="~/assets/images/logo.png" alt="" />
            <span>{{ TotalSupply }} </span>
          </div>
        </div>
        <div class="border-bottom d-md-none border-secondary col-12"></div>

        <div
          class="
            col-12 col-md-6 col-xl
            text-center text-xl-start
            px-2
            ps-sm-4 ps-lg-5
            my-3
            col-md
          "
        >
          <span class="pc fw-bold fw-600" v-html="content.total_value_locked"></span>
          <div class="mt-3 fw-bold fs-4">$ {{ TotalValueLocked }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {

  computed: {
    ...mapGetters([
      "content",
      "TotalBurnt",
      "GYMNETPrice",
      "TotalSupply",
      "TotalValueLocked",
    ]),
  },
  methods: {
    ...mapActions(["LoadBlockchainData"]),

  },
  mounted() {
    setInterval(() => {
      this.LoadBlockchainData();
    }, 1000 * 30);
    this.LoadBlockchainData();
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
    background: url("~/assets/images/homeLanding-bg.png");
    opacity: 0.8;
    z-index: -1;
    background-size: 100% 50%;
    background-repeat: no-repeat;
    background-position: 100% 100%;
  }

  .text {
    h1 {
      font-size: 30px;
    }
    .BTN {
      font-size: 20px;
      padding: 12px 40px;
    }
  }

  .form {
    color: #055160;
    background: #cff4fc;

      .a{
      line-break: none;
      text-decoration: underline;
    }



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
      width: 30px;
      margin-right: 5px;
    }
  }

  @media (min-width: 762px) {
    &::before {
      background-size: 100% 80%;
    }
  }
  @media (min-width: 576px) {
    .text {
      h1 {
        font-size: 33px;
      }
    }
  }

  @media (min-width: 768px) {
    .boxes {
      .box1,
      .box3 {
        border-right: 1px solid #999898;
      }
    }

    .text {
      h1 {
        font-size: 39px;
      }
    }
  }

  @media (min-width: 992px) {
    .text {
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
  }

  @media (min-width: 1200px) {
    .boxes {
      .box2 {
        border-right: 1px solid #999898;
      }
    }

    .text {
      h1 {
        font-size: 65px;
      }
    }
    &::before {
      background-size: 1000px 700px;
    }
  }

  @media (min-width: 2000px) {
    .text {
      h1 {
        font-size: 64px;
        font-weight: bold;
      }

      p {
        font-size: 24px;
      }
    }
  }
}
</style>
