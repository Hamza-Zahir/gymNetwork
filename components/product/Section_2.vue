<template>
  <section class="Section2 py-5 bg-light">

    <div class="container py-5">
      <h1 class="my-2 text-center fw-bolder">Products and earnings</h1>
      <div class="content">
        <div class="boxes mt-5 pt-3 col-md-10 col-lg-9 mx-auto pb-5">
          <div
            class="pb-4 box ps-md-5"
            v-for="box in boxes"
            :key="`box-${box.id}`"
          >
            <span class="label bg-bd rounded-circle fw-600">{{ box.id }}</span>
            <div
              class="d-md-flex align-items-center justify-content-between rounded-15 border border-info bg-bl p-3 ms-md-3"
            >
              <div class="img rounded-15 col-lg-4 text-center">
                <img :src="box.img" alt="" />
              </div>
              <div class="text mt-3 mt-md-0 col-md-7 ms-md-3">
                <h4 class="m-0 fw-bold">{{ box.title }}</h4>
                <p class="text-secondary mt-2 my-sm-1 my-lg-2">
                  {{ box.text }}
                </p>
                <a
                  :href="`#${box.link}`"
                  class="BTN bg-ba cp text-center px-4 mt-3 mt-md-0 rounded-20 text-light fw-500 mt-lg-3 box-sh-l"
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
          text: "ncrease your GYMNET tokens by locking them for a period of time.",
          link: "SinglePool",
        },

        {
          id: 4,
          img: require("~/assets/images/BuyGYMNET.png"),
          title: "Buy GYMNET",
          text: "Buy GYMNET at attractive fees easily through all major payment methods.",
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
        padding: 8px 0;
      }
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
      p{
         font-size: 14px;
      }
      .BTN {
         font-size: 14px;
        width: fit-content;

      }
    }
    @media (min-width: 992px) {
      p,.BTN{
         font-size: 16px;
      }
    }
  }
}
</style>
