<template>
  <section class="Section2 py-5 bg-light">
    <div class="container py-md-5">
      <h1 class="my-2 text-center fw-bolder">
        {{ content.products_and_earnings }}
      </h1>
      <div class="content">
        <div class="boxes mt-5 pt-3 col-md-10 col-lg-9 mx-auto pb-5">
          <div
            class="pb-4 box ps-md-5"
            v-for="box in boxes"
            :key="`box-${box.id}`"
          >
            <span class="label bg-bd rounded-circle fw-600">{{ box.id }}</span>
            <div
              class="
                d-md-flex
                align-items-center
                justify-content-between
                rounded-15
                border border-info
                bg-bl
                p-3
                ms-md-3
              "
            >
              <div class="img rounded-15 col-lg-4 text-center">
                <img :src="box.img" alt="" />
              </div>
              <div class="text mt-3 mt-md-0 col-md-7 ms-md-3">
                <h4 class="m-0 fw-bold text-bd">{{ content[box.title] }}</h4>
                <p class="text-secondary mt-2 my-sm-1 my-lg-2">
                  {{ content[box.text] }}
                </p>
                <a
                  :href="`#${box.link}`"
                  class="
                    BTN
                    col-12
                    bg-ba
                    cp
                    text-center
                    mt-3 mt-md-1
                    rounded-20
                    text-light
                    fw-500
                    mt-lg-3
                    box-sh-l
                  "
                >
                  {{ content.read_more }}</a
                >
              </div>
            </div>
          </div>
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

  data() {
    return {
      boxes: [
        {
          id: 1,
          img: require("~/assets/images/vault.png"),
          title: "vault",
          text: "earnings_vault_desc",
          link: "Vault",
        },
        {
          id: 2,
          img: require("~/assets/images/Farm.png"),
          title: "farm",
          text: "earnings_farm_desc",
          link: "Farming",
        },
        {
          id: 3,
          img: require("~/assets/images/SinglePool.png"),
          title: "single_pool",
          text: "earnings_single_pool_desc",
          link: "SinglePool",
        },

        {
          id: 4,
          img: require("~/assets/images/BuyGYMNET.png"),
          title: "buy_GYMNET",
          text: "earnings_buy_GYMNET_desc",
          link: "BuyCrypto",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.Section2 {
  position: relative;
  h1 {
    @media (min-width: 1200px) {
      font-size: 50px;
    }
  }
  .boxes {
    @media (min-width: 576px) {
      overflow-y: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    @media (min-width: 992px) {
      max-height: 600px;
    }
  }

  .box {
    position: relative;
    margin: 0 auto;
    .BTN {
      padding: 9px 25px;
    }
    .label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      color: white;
      position: absolute;
      top: -17px;
      left: 8px;
    }

    .img {
      overflow: hidden;

      img {
        max-width: 100%;
      }
    }

    @media (min-width: 768px) {
      .label {
        top: 17px;
        left: 0;
        box-shadow: 0px 0px 0px 5px #f9f9f9;
      }
      &::before {
        content: "";
        width: 0%;
        height: 100%;
        border: 1px solid #153151;
        position: absolute;
        top: 0%;
        left: 17px;
      }
      p {
        font-size: 14px;
      }
      .BTN {
        font-size: 14px;
        width: fit-content;
      }
    }
    @media (min-width: 992px) {
      p,
      .BTN {
        font-size: 16px;
      }
    }
  }
}
</style>
