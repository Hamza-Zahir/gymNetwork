<template>
  <section class="Roadmap py-4 bg-light">
    <div class="container py-3">
      <div class="title">
        <h1 class="my-2 text-center fw-bolder">GYM Network Roadmap</h1>
        <p class="text-center pc">
          Our vision for the future and what we have implemented to date
        </p>
      </div>
      <div class="conten pb-5">
        <div
          class="boxs"
          @scroll="
            (e) => {
              test(e);
            }
          "
        >
          <span
            @click="
              (e) => {
                next(e);
              }
            "
            class="next bg-bd btn_scrol rounded-circle"
          >
            <b-icon icon="arrow-right-short" class="h3 m-0"></b-icon>
          </span>

          <span
            class="prev bg-bd btn_scrol rounded-circle"
            @click="
              (e) => {
                prev(e);
              }
            "
          >
            <b-icon icon="arrow-left-short" class="h3 m-0"></b-icon>
          </span>
          <div
            v-for="(Roadmap, i) in Roadmaps"
            :key="`Roadmap-${i + 1}`"
            class="box h-100"
          >
            <div class="Border" :class="`Border-${i + 1}`"><span></span></div>

            <div class="content" :class="i % 2 > 0 ? 'box_down' : 'box_up'">
              <div class="img text-center">
                <img :src="Roadmap.img" alt="" />
              </div>
              <div class="">
                <span class="text-secondary fw-600">{{ Roadmap.date }}</span>
                <h4>{{ Roadmap.title }}</h4>
                <p class="pc">{{ Roadmap.text }}</p>
              </div>
            </div>
          </div>
          <div class="endOfScroll">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const Roadmaps = [
  {
    img: require("~/assets/images/roadmap/img-1.png"),
    date: "Q1-2022",
    title: "Gymnet Vault",
    text: "Earn the best interest in the most popular crypto assets and receive unique token rewards",
  },
  {
    img: require("~/assets/images/roadmap/img-2.png"),
    date: "Q2-2022",
    title: "Yield Farming",
    text: "Find the best and most lucrative farming deals in DeFi",
  },
  {
    img: require("~/assets/images/roadmap/img-3.png"),
    date: "Q3-2022",
    title: "Metaverse",
    text: "Buy land to get exclusive access to all future products and use them in our virtual world",
  },
  {
    img: require("~/assets/images/roadmap/img-4.png"),
    date: "Q4-2022",
    title: "Earn Crypto",
    text: "Earn attractive returns on Bitcoin, ETH, BNB, DOGE, Stablecoins and more.",
  },
  {
    img: require("~/assets/images/roadmap/img-5.png"),
    date: "Q1-2023",
    title: "Launchpad",
    text: "Be among the first to get access to new projects before they hit the market",
  },
  {
    img: require("~/assets/images/roadmap/img-6.png"),
    date: "Q2-2023",
    title: "Play & Earn",
    text: "Play online games and earn rewards, like the No-Loss Lottery, an absolutely unique DeFi-based lottery",
  },
  {
    img: require("~/assets/images/roadmap/img-7.png"),
    date: "Q3-2023",
    title: "NFT Marketplace",
    text: "Invest, collect and trade valuable NFTs on zuckerland.io, the NFT marketplace.",
  },
  {
    img: require("~/assets/images/roadmap/img-8.png"),
    date: "Q4-2023",
    title: "AR APP",
    text: "Augmented reality meets blockchain! Train in a virtual GYM while earning rewards for completing exercises",
  },
];
export default {
  data() {
    return {
      Roadmaps,
    };
  },
  methods: {
    next(e) {
      if (e.target.parentElement.scrollLeft % 250 == 0) {
        e.target.parentElement.scrollLeft += 250;
      } else {
        e.target.parentElement.scrollLeft +=
          250 - (e.target.parentElement.scrollLeft % 250);
      }
    },
    prev(e) {
      if (e.target.parentElement.scrollLeft % 250 == 0) {
        e.target.parentElement.scrollLeft -= 250;
      } else {
        e.target.parentElement.scrollLeft -=
          e.target.parentElement.scrollLeft % 250;
      }
    },
    test(e) {
      let Borders = document.querySelectorAll(
        ".Roadmap .boxs .box .Border span"
      );
      const endOfScroll = document.querySelector(".Roadmap .boxs .endOfScroll");

      endOfScroll.children[0].style.width = `${e.target.clientWidth - 250}px`;

      Array.from(Borders).map((el, i) => {
        const index = Math.floor(e.target.scrollLeft / 250);
        if (i <= index + 1) {
          el.style.background = "#021547";
        } else {
          el.style.background = "#9b9b9b";
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.Roadmap {
  .conten {
    position: relative;
    padding-left: 30px;
    &::before {
      content: "";
      width: 280px;
      height: 6px;
      background: #021547;
      position: absolute;
      top: 265px;
      left: 0;
      z-index: 9;
    }
  }
  .boxs {
    width: 100%;
    display: flex;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    // ...........................
    .endOfScroll {
      span {
        display: block;
      }
    }

    // ...........................
    .box {
      position: relative;
      .Border {
        width: 100%;
        height: 6px;
        background: #9b9b9b;
        position: absolute;
        top: 265px;
        span {
          width: 14px;
          height: 14px;
          position: absolute;
          top: -4px;
          left: 0px;
          background: inherit;
          border-radius: 50%;
        }
      }
      .Border-1,
      .Border-2 {
        span {
          background: #021547;
        }
      }
    }
    .content {
      width: 250px;
      img {
        width: 120px;
      }
    }
    .box_up {
      img {
        margin-bottom: -15px;
      }
    }
    .box_down {
      display: flex;
      flex-direction: column-reverse;
      margin-top: 285px;
      img {
        margin-top: -15px;
      }
    }

    .btn_scrol {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      color: white;
      margin: 0 20px;

      &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        border-radius: inherit;
      }
    }

    .next {
      left: 40px;
    }
  }
}
</style>
