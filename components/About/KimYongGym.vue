<template>
  <section class="KimYongGym py-5">
    <div class="container">
      <div
        class="content px-2 py-5 rounded-20 d-sm-flex align-items-center justify-content-center"
      >
        <h1
          class="text-light text-center text-sm-start px-5 py-4 p-sm-0 col-sm-6 col-md-5 col-lg-4 pe-xl-3"
        >
          Let's welcome Kim Yong Gym
        </h1>
        <div class="img pb-4 pb-sm-0 col-sm-5 col-md-4 col-lg-5">
          <img src="~/assets/images/KimYongGym_img.png" alt="" class="w-100" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.KimYongGym {
  .content {
    background: url("~/assets/images/KimYongGym_bg.png");
    background-size: 105% 100%;
    h1 {
      letter-spacing: 0.3px;
    }
    @media (min-width: 576px) {
      background-size: 100% 100%;
    }
    @media (min-width: 992px) {
      h1 {
        font-size: 42px;
      }
    }
    @media (min-width: 1200px) {
      h1 {
        font-size: 50px;
      }
    }
  }
}
</style>
