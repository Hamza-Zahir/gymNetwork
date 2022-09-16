<template>
  <section class="Metaverse bg-light">
    <div class="container py-5">
      <div class="text col-md-10 mt-lg-2 py-xl-4">
        <h1 class="fw-bold">
          {{ content.gymstreet_title }}
        </h1>

        <p class="paragraph pc mt-3 mt-lg-4 pt-lg-4">
          {{ content.gymstreet_description }}
        </p>

        <nuxt-link
          to="/eco_system/#Gymstreet"
          class="
            BTN
            box-sh-l
            cp
            text-center
            rounded-50
            bg-ba
            fw-600
            text-light
            mt-4
            col-12
            mt-lg-5
          "
        >
          <!-- col-sm-5 col-lg-4 col-xl-3 -->
          {{ content.go_to_gymstreet }}
        </nuxt-link>
      </div>
    </div>
    <div class="img pt-3">
      <div class="container d-md-flex flex-row-reverse justify-content-end">
        <div
          class="
            paragraph
            fw-600
            text-light
            my-3
            align-self-center
            col col-lg-6
          "
        >
          {{ content.metaverse_desc }}
        </div>
        <div class="col-9 col-sm-7 col-md-4 col-lg-6">
          <img src="~/assets/images/Metaverse_img.png" alt="" class="w-100" />
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
.BTN {
  padding: 12px 26px;
  @media (min-width: 576px) {
    width: fit-content;
  }
  @media (min-width: 992px) {
    font-size: 18px;
  }
}
.img {
  background: url("~/assets/images/Metaverse-bg.png");
  background-size: cover;
  background-position: 50% 100%;
}
.paragraph {
  @media (min-width: 1200px) {
    font-size: 20px;
  }
  @media (min-width: 1500px) {
    font-size: 25px;
  }
}
h1 {
  @media (min-width: 1200px) {
    font-size: 50px;
  }
}
</style>
