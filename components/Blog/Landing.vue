<template>
  <div class="container py-3">
    <div
      class="d-md-flez border-bottom py-5 d-lg-flex justify-content-between align-items-center"
    >
      <div class="text-box col-lg-3 pe-lg-3">
        <h1 class="fw-bold">Blog</h1>
        <p class="pc my-3 pb-lg-0 fw-600">
          Latest news and information about GYM Network and its ecosystem
        </p>
      </div>
      <nuxt-link
        :to="`/blog/${Blog[0].link}`"
        class="Card col-lg-9 col-xl-8 d-block d-md-flex bg-bl p-2 p-sm-3 border rounded-20 mt-4 mt-lg-0"
      >
        <div
          class="img col-md-5 rounded-20 d-flex justify-content-center align-items-center"
        >
          <img
            :src="require(`~/assets/images/blog/${Blog[0].img}`)"
            alt=""
            class=""
          />
        </div>
        <div class="text col-md-7 ps-md-5">
          <div class=" ">
            <h3 class="my-3 text-dark">{{ Blog[0].title }}</h3>
            <p class="pc">{{ Blog[0].text }}</p>
          </div>
          <div class="foter pc text-end fw-600 px-2 p-sm-0">
            <small>{{ Blog[0].date }}</small>
          </div>
        </div>
      </nuxt-link>
    </div>
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
  @media (min-width: 1200px) {
    h1 {
      font-size: 45px;
    }
    p {
      font-size: 20px;
    }
  }
}
.Card {
  overflow: hidden;

  .img {
    overflow: hidden;
    img {
      height: 100%;
      min-height: 200px;
      min-width: 100%;
      max-width: 170%;
    }
  }
}
</style>
