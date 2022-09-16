<template>
  <section class="Farming py-5">
    <div class="container py-5">
      <div id="Farming" class="py-xl-5">
        <div class="" id="SinglePool">
          <div class="d-md-none">
            <FarmingCard :data="Farming" position="data_Farming" />
            <FarmingCard :data="SinglePool" position="data_SinglePool" />
          </div>
          <div class="content-lg mx-auto d-none d-md-block">
            <div
              class="card-1 d-flex mx-auto col-md-12"
              :style="BoxOpen == SinglePool ? 'width: 100%;' : 'width: 0%;'"
            >
              <h1
                class="me-4 btnCard text-center m-0 text-light rounded-20 cp"
                @click="chengeBoxes()"
                :style="BoxOpen !== SinglePool ? 'width: 0%;' : ''"
              >
                <span>{{ Farming.title }}</span>
              </h1>

              <div class="displyCards col">
                <div
                  class="
                    disply
                    bg-bl
                    parent
                    border border-info
                    rounded-20
                    p-4
                    col
                    d-flex
                    flex-column
                    justify-content-around
                  "
                >
                  <h1 class="fw-bold">{{ SinglePool.title }}</h1>
                  <div class="mt-3">
                    <p v-for="(tex, i) in SinglePool.text" :key="i + 1">
                      {{ tex }}
                    </p>
                  </div>
                  <a
                    href="https://gymnetwork.io/dashboard/"
                    target="_blank"
                    class="
                      bg-ba
                      BTN
                      text-light
                      cp
                      text-center
                      fw-600
                      rounded-20
                      mt-4
                      box-sh-l
                    "
                  >
                    Start now
                  </a>
                </div>
              </div>
            </div>

            <div
              class="card-2 d-flex mx-auto col-md-12"
              :style="BoxOpen == Farming ? 'width: 100%;' : 'width: 0%;'"
            >
              <div class="displyCards col">
                <div
                  class="
                    disply
                    bg-bl
                    parent
                    border border-info
                    rounded-20
                    p-4
                    col
                    d-flex
                    flex-column
                    justify-content-around
                  "
                >
                  <h1 class="fw-bold">{{ Farming.title }}</h1>
                  <div class="mt-3">
                    <p v-for="(tex, i) in Farming.text" :key="i + 1">
                      {{ tex }}
                    </p>
                  </div>
                  <a
                    href="https://gymnetwork.io/dashboard/"
                    target="_blank"
                    class="
                      bg-ba
                      BTN
                      text-light
                      cp
                      text-center
                      fw-600
                      rounded-20
                      mt-4
                      box-sh-l
                    "
                  >
                    Start now
                  </a>
                </div>
              </div>
              <h1
                class="ms-4 btnCard text-center m-0 text-light rounded-20 cp"
                @click="chengeBoxes()"
                :style="BoxOpen !== Farming ? 'width: 0%;' : ''"
              >
                <span>{{ SinglePool.title }}</span>
              </h1>
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
    transition: all 0.3s ease-out;
  }
  .content-lg {
    position: relative;
    height: 500px;
    overflow: hidden;
    max-width: 1100px;
  }
  .card-1,
  .card-2 {
    height: 100%;
    position: absolute;
    top: 0;
    width: 0%;
    overflow: hidden;
    .displyCards {
      position: relative;
      overflow: hidden;
      .disply {
        height: 100%;
        width: 100%;
        background: #ebf2fa;
      }
    }
    .btnCard {
      background: url("~/assets/images/Rectangle_column.png");
      background-size: cover;
      overflow: hidden;
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

    .BTN {
      width: fit-content;
      padding: 12px 35px;
      transition: all 0.3s linear;
    }
  }

  .card-1 {
    right: 0;
  }
  .card-2 {
    left: 0;
  }

  @media (min-width: 1200px) {
    p {
      font-size: 20px;
    }
  }
}
</style>
