<template>
  <section class="Section2 py-4 bg-light">
    <span class="GymnetLabel d-none d-sm-block"
      >Gymnet Gymnet Gymnet Gymnet</span
    >
    <div class="container py-3">
      <h1 class="my-2 text-center fw-bolder">Products and earnings</h1>
      <div class="content">
        <div class="boxes mt-4 pt-3 col-md-10 col-lg-9 mx-auto pb-5">
          <div
            class="pb-3 box ps-sm-5"
            v-for="box in boxes"
            :key="`box-${box.id}`"
          >
            <span class="label bg-bd rounded-circle fw-600">{{ box.id }}</span>
            <div
              class="d-sm-flex align-items-center justify-content-between rounded-15 border border-info bg-bl p-3 ms-md-3"
            >
              <div class="img rounded-15 col-sm-5 col-lg-4">
                <img :src="box.img" alt="" />
              </div>
              <div class="text mt-3 mt-sm-0 ms-sm-2 col-md-7">
                <h4 class="m-0">{{ box.title }}</h4>
                <p class="text-secondary mt-2 my-sm-1 my-lg-2">
                  {{ box.text }}
                </p>
                <a
                  :href="`#${box.link}`"
                  class="BTN bg-ba cp text-center py-2 px-3 rounded-20 text-light fw-500 mt-lg-3 box-sh-l"
                >
                  Read more</a
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
export default {
  data() {
    return {
      boxes: [
        {
          id: 1,
          img: require("~/assets/images/vault.png"),
          title: "Vault",
          text: "Get lucrative returns in GYMNET with your coins without having to lock away your cryptos.",
          link: "Vault",
        },
        {
          id: 2,
          img: require("~/assets/images/Farm.png"),
          title: "Farm",
          text: "Ensure profitable yields and high APYs by combining BNB with GYMNET in the farm.",
          link: "Farming",
        },
        {
          id: 3,
          img: require("~/assets/images/SinglePool.png"),
          title: "Single Pool",
          text: "Platziere GYMNET, um Provisionen über mehrere Ebenen zu verdienen und/oder vermehre deine GYMNET Token, indem du sie für einen gewissen Zeitraum sperrst.",
          link: "SinglePool",
        },

        {
          id: 4,
          img: require("~/assets/images/BuyGYMNET.png"),
          title: "Buy GYMNET",
          text: "Kaufe GYMNET zu attraktiven Gebühren einfach über alle gängigen Zahlungsmöglichkeiten.",
          link: "BuyCrypto",
        },
        {
          id: 5,
          img: require("~/assets/images/AffiliateSystem.png"),
          title: "Affiliate System",
          text: "Baue dir dein eigenes Krypto Empfehlungsbusiness und ein langfristiges passives Einkommen auf.",
          link: "AffiliateSystem",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.Section2 {
  position: relative;
  .GymnetLabel {
    position: absolute;
    right: 0;

    top: 0;
    width: fit-content;

    transform-origin: left center;
    transform: translateX(95%) rotate(90deg);
  }
  .boxes {
    @media (min-width: 576px) {
      max-height: 380px;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    @media (min-width: 768px) {
      max-height: 410px;
    }

    @media (min-width: 992px) {
      max-height: 425px;
    }

    @media (min-width: 1200px) {
      max-height: 480px;
    }

    @media (min-width: 1400px) {
      max-height: 545px;
    }
  }

  .box {
    position: relative;
    max-width: 300px;
    margin: 0 auto;

    .label {
      display: flex;
      align-items: center;
      justify-content: center;
      // border: 1px solid #65cbfa;
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
        width: 100%;
      }
    }

    @media (min-width: 576px) {
      max-width: 100%;

      .label {
        top: 17px;
        left: 0;
        box-shadow: 0px 0px 0px 5px #f9f9f9;
      }

      p,
      .BTN {
        font-size: 14px;
      }

      .BTN {
        width: fit-content;
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
    }

    @media (min-width: 768px) {
      p,
      .BTN {
        font-size: 16px;
      }
    }
  }
}
</style>
