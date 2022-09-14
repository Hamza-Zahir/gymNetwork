<template>
  <div class="container py-3 py-lg-5">
    <div
      class="d-md-flez py-5 d-lg-flex justify-content-between justify-content-xxl-around align-items-center"
    >
      <div class="text-box col-lg-4 col-xl-4 pe-lg-3">
        <h1 class="fw-bold">Blog</h1>
        <p class="pc my-3 pb-lg-0 col-lg-12 col-xl-11">
          Latest news and information about GYM Network and its ecosystem
        </p>
      </div>
      <nuxt-link
        :to="`/blog/${Blog[0].link}`"
        class="Card col-lg-8 col-xl-8 col-xxl-7 d-block d-md-flex d-lg-block d-xl-flex bg-bl p-2 p-sm-3 border rounded-20 mt-4 mt-lg-0"
      >
        <div
          class="img col-md-5 col-lg-12 col-xl-5  d-flex justify-content-center align-items-center"
        >
          <img
            :src="require(`~/assets/images/blog/${Blog[0].img}`)"
            alt=""
            class="rounded-20"
          />
        </div>
        <div class="text col-md-7 col-lg-12 col-xl-7 ps-md-5 p-lg-2 ps-xl-4">
          <div class=" ">
            <h4 class="my-3 text-dark fw-600">{{ Blog[0].title }}</h4>
            <p class="pc">{{ Blog[0].text }}</p>
          </div>
          <div class="foter pc text-end fw-600 px-2 p-sm-0">
            <small>{{ Blog[0].date }}</small>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="border-bottom my-2"></div>
  </div>
</template>

<script>
import Blog from "~/json/Blogs.json";
export default {
  data() {
    return {
      Blog,
    };
  },
};
</script>

<style lang="scss" scoped>
.text-box {
  h1{
    font-size: 40px;
  }
  p {
      font-size: 18px;

    }
  @media (min-width: 768px) {
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 22px;
    }
  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 60px;
    }
    p {
      font-size: 25px;
    }
  }
}
.Card {
  overflow: hidden;

  .img {
    overflow: hidden;
    img {
      // height: 100%;
      min-height: 200px;
      min-width: 100%;
      max-width: 170%;
    }
  }
}
</style>
