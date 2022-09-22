<template>
  <section class="py-5">
    <div class="container py-lg-5">
      <h1 class="fw-bolder text-center pb-lg-4">{{content.our_mission}}</h1>
      <div class="mt-5 d-sm-flex flex-wrap">
        <div
          v-for="(mission, i) in missions"
          :key="`mission-${i + 1}`"
          class="box py-2 p-md-2 p-lg-3 mx-auto mx-md-0"
        >
          <div
            class="
              border border-info
              bg-bl
              rounded-20
              p-3
              d-sm-flex
              align-items-center
              h-100
            "
          >
            <div class="img col-sm-4 text-center rounded-15 py-4 py-sm-0">
              <img :src="mission.img" alt="" class="" />
            </div>
            <div
              class="
                text
                col
                pc
                mt-4 mt-sm-0
                py-lg-2
                m-sm-0
                ps-sm-4 ps-lg-3 ps-xl-5
              "
            >
              {{ content[mission.text] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  import { mapGetters } from "vuex";

const missions = [
  {
    img: require("~/assets/images/mission-1.png"),
    text: "our_mission_desc_1",
  },
  {
    img: require("~/assets/images/mission-2.png"),
    text: "our_mission_desc_2",
  },
  {
    img: require("~/assets/images/mission-3.png"),
    text: "our_mission_desc_3",
  },
  {
    img: require("~/assets/images/mission-4.png"),
    text: "our_mission_desc_4",
  },
];

export default {
  computed: {
      ...mapGetters(["content"]),
    },
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
  .img {
    background: url("~/assets/images/mission-bg.png");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    img {
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
