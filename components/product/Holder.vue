<template>
  <section class="Holder py-5">
    <div class="container py-3">
      <h1 class="my-2 fw-bold text-center">
        {{ content.gymnet_holder_benefits }}
      </h1>
      <div class="content mt-5 col-md-12 mx-auto">
        <div class="d-md-flex">
          <div
            class="box p-3 p-lg-4 bg-bd text-light rounded-15 my-4 m-md-3 col"
          >
            <h5 class="fw-bold">{{ content.three_percent_gymnet }}</h5>
            <div class="mt-2 mt-lg-3">
              {{ content.three_percent_gymnet_desc }}
            </div>
          </div>
          <div class="box light-bg p-3 p-lg-4 rounded-15 my-4 m-md-3 col">
            <h5 class="fw-bold text-dark">{{ content.gymnet_moon_fund }}</h5>
            <div class="pc mt-2 mt-lg-3">
              {{ content.gymnet_moon_fund_desc }}
            </div>
          </div>
        </div>
        <div class="d-md-flex">
          <div
            class="box p-3 p-lg-4 bg-ba text-light rounded-15 my-4 m-md-3 col"
          >
            <h5 class="fw-bold">
              {{ content.gymnet_metaverse_development_fund }}
            </h5>
            <div
              class="
                mt-2 mt-lg-4
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <div
                class=""
                v-html="content.gymnet_metaverse_development_fund_desc"
              ></div>
              <span><img src="~/assets/images/point.png" alt="" /></span>
            </div>
          </div>
          <div
            class="box bg-bd text-light p-3 p-lg-4 rounded-15 my-4 m-md-3 col"
          >
            <h5 class="fw-bold">{{ content.gymnet_community_support_fund }}</h5>
            <div class="mt-2 mt-lg-4">
              {{ content.gymnet_community_support_fund_desc }}
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
};
</script>

<style lang="scss" scoped>
.Holder {
  background: white;

  h5 {
    color: #ffffff;
  }

  .content {
    max-width: 900px;
    img {
      width: 50px;
    }
    .box {
      min-height: 140px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 50px;
    }
    .content {
      font-size: 20px;
    }
  }
}
</style>
