<template>
  <section id="GetStarted" class="GetStarted py-5 bg-light">
    <div class="container py-3">
      <h1 class="my-2 fw-bold text-center mx-auto">
       {{content.gym_network_title}}
      </h1>
      <GetStarted />
      <div class="bg bg-1">
        <img src="~/assets/images/4001.png" class="w-100" alt="" />
      </div>
      <div class="bg bg-2">
        <img src="~/assets/images/4007.png" class="w-100" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import GetStarted from "../GetStarted.vue";

export default {
  computed: {
    ...mapGetters(["content"]),
  },
  components: {
    GetStarted
},
};
</script>

<style lang="scss" scoped>
.GetStarted {
  background: white;
  position: relative;
  z-index: 0;


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

  .bg {
    z-index: -3;
    position: absolute;
    opacity: 0.8;

  }

  .bg-1 {
    top: 100px;
    left: -20px;
    width: 200px;
  }

  .bg-2 {
    bottom: 0px;
    right: 0px;
  }

  @media (min-width: 576px) {
    .bg-1 {
      width: 250px;
    }

    .bg-2 {
      width: 400px;
    }
  }

  @media (min-width: 1000px) {
    .bg-1 {
      left: 10px;
    }

  }

  @media (min-width: 1200px) {
    .bg-1 {
      left: 80px;
      top: 20px;
      width: 300px;
    }

    .bg-2 {
      width: 700px;
    }
  }

  @media (min-width: 2000px) {
    .bg-1 {
      left: 400px;
    }

    .bg-2 {
      width: 900px;
    }
  }
  @media (min-width: 1200px) {
     h1{
  font-size: 50px;
  max-width: 700px;

}
    }
}
</style>
