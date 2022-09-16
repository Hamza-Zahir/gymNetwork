<template>
  <div
    class="error bg-bd text-light text-center pb-4"
    :style="` padding-top : ${marginTop}`"
  >
    <div class="container py-5 py-md-2">
      <div class="img">
        <img src="~/assets/images/error.png" class="img404 rounded-50" alt="" />
      </div>
      <div class="text col-sm-9 col-md-7 px-3">
        <div class="content rounded-20 p-3 py-4">
          <img src="~/assets/images/logoRotet.png" class="logoRoutet" alt="" />

          <h1 class="fw-bolder">Error 404</h1>
          <p class="fw-500">Page not found</p>
          <p class="mb-3">
            Something went wrong. The page was not found or doesn't exist
          </p>

          <nuxt-link
            to="/"
            class="
              rounded-50
              bg-ba
              px-5
              mx-auto
              mt-md-4
              py-2
              fw-600
              text-light
              box-sh-
            "
            >Back to home page</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  mounted() {
    this.getmarginTop();
  },
  methods: {
    ...mapActions(["getmarginTop"]),
  },
  computed: {
    ...mapGetters(["marginTop"]),
  },
};
</script>

<style lang="scss" scoped>
.error {
  background: #142e4d;
}
.container {
  position: relative;

  .img {
    width: 100%;
    .img404 {
      position: relative;
      max-height: 100%;
      max-width: 100%;
      display: block;
      opacity: 0.8;
      mask: linear-gradient(90deg, #142e4d, #142e4d, #142e4d, #142e4d38);
    }
  }

  .text {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    .content {
      position: relative;
      min-width: 70%;
      min-height: 60%;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: inherit;
        background: #a3a3a32f;
        backdrop-filter: blur(6px);
        z-index: -1;
      }
    }
    .logoRoutet {
      position: absolute;
      height: 80px;
      top: -50px;
      right: 20px;
      z-index: -1;
    }
    h1 {
      font-size: 40px;
    }
    a {
      text-decoration: none;
      display: block;
    }
    @media (min-width: 600px) {
      h1 {
        font-size: 55px;
      }
      a {
        width: fit-content;
      }
      .content {
        font-size: 18px;
      }

      .logoRoutet {
        height: 100px;
      }
    }
    @media (min-width: 1200px) {
      .content {
        font-size: 22px;
      }
    }
  }
}
</style>
