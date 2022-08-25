<template>
  <section class="StabilityProgram py-4 bg-light">
    <div class="container py-3">
      <h1 class="my-2 text-center fw-bolder">GYMNET Stability Program</h1>
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
                <h4 class="m-0 fw-bold">{{ box.title }}</h4>
                <p class="text-secondary mt-2 my-sm-1 my-lg-2">
                  {{ box.text }}
                </p>
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
          img: require("~/assets/images/Rectangle_stability.png"),
          title: "4% of the Farm & Single Pool",
          text: "deposit goes into the buyback & burn program to counteracting inflation.",
        },
        {
          id: 2,
          img: require("~/assets/images/Rectangle_stability_2.png"),
          title: "Locking in the single pool ",
          text: "reduces the GYMNET in circulation, which helps stabilize the price over the long term.",
        },
        {
          id: 3,
          img: require("~/assets/images/BuyGYMNET.png"),
          title: "Burning GYMNET",
          text: "through buyback & burn will result in an increase in the GYMNET price and a decreased sale of the token",
        },

        {
          id: 4,
          img: require("~/assets/images/Rectangle_stability_3.png"),
          title: "Through co-determination rights,",
          text: "the community has a direct impact on the future of GYM Network.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.StabilityProgram {
  position: relative;

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

      p {
        font-size: 14px;
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
      p {
        font-size: 16px;
      }
    }
  }
}
</style>
