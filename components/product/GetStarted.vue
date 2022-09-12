<template>
  <section class="GetStarted py-5 bg-light">
    <div class="container py-3">
      <h1 class="my-4 fw-bolder mx-auto text-center">
        How to get started with GYM Network
      </h1>
      <GetStarted />
      <div class="bg bg-1">
        <img src="~/assets/images/Colored.png" class="w-100" alt="" />
      </div>
      <div class="bg bg-2">
        <img src="~/assets/images/Colored.png" class="w-100" alt="" />
      </div>
    </div>
  </section>
</template>
<script>
import GetStarted from "../GetStarted.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    GetStarted
},
};
</script>
<style lang="scss" scoped>
.GetStarted {
  background: white;
  h1 {
    font-size: 34px;
    max-width: 700px;
    @media (min-width: 768px) {
      font-size: 40px;
    }
    @media (min-width: 992px) {
      font-size: 50px;
    }
  }
  

  .bg-white {
    background: white;
  }
  a {
    text-decoration: none;
  }
  .container {
    overflow: hidden;
    position: relative;
    z-index: 0;
    .bg {
      z-index: -2;
      position: absolute;
      width: 200px;
      opacity: 0.4;
    }

    .bg-1 {
      top: 100px;
      left: -20px;
    }
    .bg-2 {
      bottom: 0px;
      right: -10px;
    }
    @media (min-width: 576px) {
      .bg {
        width: 250px;
      }
    }
    @media (min-width: 1000px) {
      .bg-1 {
        left: 10px;
      }
      .bg-2 {
        width: 300px;
        right: 100px;
        bottom: -150px;
      }
    }

    @media (min-width: 1200px) {
      .bg-1 {
        left: 100px;
      }
      .bg-2 {
        right: 0px;
        bottom: -50px;
      }
    }
  }
}
</style>
