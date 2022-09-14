<template>
  <section class="py-5">
    <div class="container py-lg-5">
      <h1 class="fw-bolder text-center pb-lg-4">Our Mission</h1>
      <div class="mt-5 d-sm-flex flex-wrap">
        <div
          v-for="(mission, i) in missions"
          :key="`mission-${i + 1}`"
          class="box py-2 p-md-2 p-lg-3 mx-auto mx-md-0"
        >
          <div
            class="border border-info bg-bl rounded-20 p-3 d-sm-flex align-items-center h-100"
          >
            <div class="img col-sm-4  text-center rounded-15 py-4 py-sm-0">
              <img :src="mission.img" alt="" class="" />
            </div>
            <div class="text col pc mt-4 mt-sm-0 py-lg-2 m-sm-0 ps-sm-4 ps-lg-3 ps-xl-5">
              {{ mission.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const missions = [
  {
    img: require("~/assets/images/mission-1.png"),
    text: "Security, transparency, flexibility and high returns don't work together? At GYM Network they do, because we combine values that would be impossible in the conventional financial world.",
  },
  {
    img: require("~/assets/images/mission-2.png"),
    text: "With GYM Network we create a DeFi Metaverse, where every investor can build his own financial freedom.",
  },
  {
    img: require("~/assets/images/mission-3.png"),
    text: "We combine the possibilities to achieve high returns through staking and yield farming with the certainty that your coins are available at any time. We are maximally transparent and disclose all information.",
  },
  {
    img: require("~/assets/images/mission-4.png"),
    text: "We want to live in a world where everyone can successfully create their own financial future through easy access to future technologies, such as DeFi, NFTs and Metaverse. This is our mission!",
  },
];

export default {
  data() {
    return {
      missions,
    };
  },
};
</script>

<style lang="scss" scoped>
  @media (min-width: 768px) {
    h1 {
      font-size: 50px;
    }

  }
.box {

  .img
  {
    background: url("~/assets/images/mission-bg.png");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    img{
    max-width: 70%;

  }
  }

  @media (min-width: 576px) {
    width: 100%;
  }
  @media (min-width: 992px) {
    width: 50%;
    font-size: 14px;
    min-height: 230px;
  }
  @media (min-width: 1200px) {

    font-size: 18px;
  }
}
</style>
