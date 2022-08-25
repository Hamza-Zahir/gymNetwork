<template>
  <section class="Farming py-5">
    <div class="container py-3">
      <div class="d-md-none">
        <FarmingCard :data="Farming" />
        <FarmingCard :data="SinglePool" />
      </div>

      <div class="cards-lg d-none d-md-flex mx-auto col-lg-10 col-xl-10">
        <h1
          @click="
            () => {
              chengeBoxes();
            }
          "
          class="me-4 btnCard text-center m-0 text-light rounded-20 cp"
        >
          <span>{{ BoxClosed.title }}</span>
        </h1>

        <div class="displyCards col">
          <div
            :class="BoxOpen == Farming ? 'showCard' : ''"
            class="disply Farming bg-bl parent border border-info rounded-20 p-4 col d-flex flex-column justify-content-between"
          >
            <h1>{{ Farming.title }}</h1>
            <div class="mt-3">
              <p v-for="(tex, i) in Farming.text" :key="i + 1">
                {{ tex }}
              </p>
            </div>
            <div
              class="bg-ba BTN text-light py-2 px-5 cp text-center fw-600 rounded-15 mt-4 box-sh-l"
            >
              Start now
            </div>
          </div>
          <div
            :class="BoxOpen == SinglePool ? 'showCard ' : ''"
            class="disply SinglePool border border-info bg-bl rounded-20 p-4 col d-flex flex-column justify-content-between"
          >
            <h1>{{ SinglePool.title }}</h1>
            <div class="mt-3">
              <p v-for="(tex, i) in SinglePool.text" :key="i + 1">
                {{ tex }}
              </p>
            </div>
            <div
              class="bg-ba BTN text-light py-2 px-5 cp text-center fw-600 rounded-15 mt-4 box-sh-l"
            >
              Start now
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FarmingCard from "./cards/farming-card.vue";

const Farming = {
  title: "Farming",
  text: [
    "Earn high returns with GYM Network's Yield farming.",
    "By connecting GYMNET and BNB and providing them as liquidity, you will receive GYMNET tokens as rewards every day.",
    "The returns are often higher than in the Vault. Also, in farming, you can transfer your deployed coins and earnings to your wallet at any time.",
    "A 4% deposit fee goes to the buyback and burn program, which stabilizes the price of GYMNET.",
  ],
};
const SinglePool = {
  title: "Single Pool",
  text: [
    "Through the Single Pool you can not only use your GYMNET to increase them through staking.",
    "You lock GYMNET in the Single Pool for a certain period of time and thereby increase your GYMNET with high APY.",
    "Additionally, earn Governance Tokens for different locking periods, which even allow you to participate in NFT earnings.",
  ],
};
export default {
  data() {
    return {
      BoxOpen: SinglePool,
      BoxClosed: Farming,
      Farming,
      SinglePool,
    };
  },
  components: { FarmingCard },
  methods: {
    chengeBoxes() {
      const box1 = this.BoxOpen;
      const box2 = this.BoxClosed;
      this.BoxOpen = box2;
      this.BoxClosed = box1;
    },
  },
};
</script>

<style lang="scss" scoped>
.Farming {
  background: white;
  * {
    transition: all 1s linear;
  }
  .cards-lg {
    height: 430px;
    .displyCards {
      position: relative;
      overflow: hidden;
      .disply {
        height: 100%;
        width: 100%;
        background: #ebf2fa;
        position: absolute;
        left: -190%;
        top: 0;
      }
    }
    .btnCard {
      background: url("~/assets/images/Rectangle_column.png");
      background-size: cover;
      overflow: hidden;
      height: 100%;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        display: block;
        transform: rotate(-90deg);
        position: absolute;
        width: 300px;
      }
    }
    .showCard {
      left: 0 !important;
    }
    .BTN {
      width: fit-content;
    transition: all 0.3s linear;

    }
  }
}
</style>
