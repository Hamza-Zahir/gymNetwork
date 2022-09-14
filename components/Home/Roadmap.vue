<template>
  <section id="Roadmap" class="Roadmap py-5 bg-light">
    <div class="container py-3 py-md-5">
      <div class="title pb-4">
        <h1 class="my-2 text-center fw-bolder">
          {{ content.roadmap_title }}
        </h1>
        <p class="text-center pc py-4">
          {{ content.roadmap_desc }}
        </p>
      </div>
      <div class="conten pb-5">
        <div
          class="boxs"

        >
        <!-- @scroll="
            (e) => {
              changeColore(e);
            }
          " -->
          <span
            @click="
              (e) => {
                next(e);
              }
            "
            class="next btn_scrol rounded-circle"
            :class="left ? 'bg-bd' : 'bg-ba'"
          >
            <b-icon icon="arrow-right-short" class="h3 m-0"></b-icon>
          </span>

          <span
            class="prev btn_scrol rounded-circle"
            :class="right ? 'bg-bd' : 'bg-ba'"
            @click="
              (e) => {
                prev(e);
              }
            "
          >
            <b-icon icon="arrow-left-short" class="h3 m-0"></b-icon>
          </span>

          <RoudMapCard
            _id="1"
            :img="imges[0]"
            date="Q1-2022"
            :title="content.gymnet_vault"
            :text="content.gymnet_vault_desc"
          />
          <RoudMapCard
            _id="2"
            :img="imges[1]"
            date="Q2-2022"
            :title="content.yield_farming"
            :text="content.yield_farming_desc"
          />
          <RoudMapCard
            _id="3"
            :img="imges[2]"
            date="Q3-2022"
            :title="content.metaverse"
            :text="content.metaverse_slide_desc"
          />
          <RoudMapCard
            _id="4"
            :img="imges[3]"
            date="Q4-2022"
            :title="content.earn_crypto"
            :text="content.earn_crypto_desc"
          />
          <RoudMapCard
            _id="5"
            :img="imges[4]"
            date="Q1-2023"
            :title="content.launchpad"
            :text="content.launchpad_desc"
          />
          <RoudMapCard
            _id="6"
            :img="imges[5]"
            date="Q2-2023"
            :title="content.play_earn"
            :text="content.play_earn_desc"
          />
          <RoudMapCard
            _id="7"
            :img="imges[6]"
            date="Q3-2023"
            :title="content.ntf_marketplace"
            :text="content.ntf_marketplace_desc"
          />
          <RoudMapCard
            _id="8"
            :img="imges[7]"
            date="Q4-2023"
            :title="content.ar_app"
            :text="content.ar_app"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import RoudMapCard from "./cards/RoudMapCard.vue";

const imges = [
  require("~/assets/images/roadmap/img-1.png"),
  require("~/assets/images/roadmap/img-2.png"),
  require("~/assets/images/roadmap/img-3.png"),
  require("~/assets/images/roadmap/img-4.png"),
  require("~/assets/images/roadmap/img-5.png"),
  require("~/assets/images/roadmap/img-6.png"),
  require("~/assets/images/roadmap/img-7.png"),
  require("~/assets/images/roadmap/img-8.png"),
];
export default {
  computed: {
    ...mapGetters(["content"]),
  },
  data() {
    return {
      left: true,
      right: false,
      imges,
    };
  },
  methods: {
    next(e) {
      e.target.parentElement.scrollLeft +=
        250 - (e.target.parentElement.scrollLeft % 250);
    },
    prev(e) {
      if (e.target.parentElement.scrollLeft % 250 == 0) {
        e.target.parentElement.scrollLeft -= 250;
      } else {
        e.target.parentElement.scrollLeft -=
          e.target.parentElement.scrollLeft % 250;
      }
    },
    changeColore(e) {
    //   let Borders = document.querySelectorAll(
    //     ".Roadmap .boxs .box .Border span"
    //   );
    //   if (e.target.scrollLeft > 0) {
    //     this.right = true;
    //   } else {
    //     this.right = false;
    //   }
    //   if (
    //     e.target.scrollLeft >=
    //     250 * Borders.length - (e.target.clientWidth + 16)
    //   ) {
    //     this.left = false;
    //   } else {
    //     this.left = true;
    //   }
    //   Array.from(Borders).map((el, i) => {
    //     const index = Math.floor(e.target.clientWidth / 250);
    //     if (i <= index + 3) {
    //       el.style.background = "#021547";
    //     } else {
    //       el.style.background = "#9b9b9b";
    //     }
    //   });
    },
  },
  components: { RoudMapCard },
};
</script>

<style lang="scss" scoped>
.Roadmap {
  .conten {
    position: relative;
    padding-left: 30px;
    &::before {
      content: "";
      width: 100%;
      height: 6px;
      background: #021547;
      position: absolute;
      top: 285px;
      left: 0;
      z-index: 9;
    }
  }
  .boxs {
    width: 100%;
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
    .endOfScroll {
      span {
        display: block;
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
      cursor: pointer;

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
    .bg-ba {
      background: #6993b4;
    }
  }
  @media (min-width: 768px) {
    .title {
      h1 {
        font-size: 50px;
      }
      p {
        font-size: 23px;
      }
    }
  }
}
</style>
