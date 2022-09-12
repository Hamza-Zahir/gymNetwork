<template>
  <section class="Products text-center">
    <div class="container py-5">
      <div class="py-5">
        <h1 class="my-2 fw-bold mb-md-4">Products and earnings</h1>
        <div class="mt-5 col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto py-5">
          <div class="bg-ba rounded-20 box">
            <img src="~/assets/images/Certik.png" class="" alt="" />
          </div>
          <div class="d-flex my-3">
            <div class="rounded-20 col bg_light box me-2">
              <img src="~/assets/images/SecuritScore.png" alt="" />
            </div>
            <div class="rounded-20 col bg-bd box ms-2">
              <img src="~/assets/images/peckShield.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="bg bg-1">
        <img src="~/assets/images/4001.png" class="w-100" alt="" />
      </div>
      <div class="bg bg-2">
        <img src="~/assets/images/4001.png" class="w-100" alt="" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.Products {
  background: white;

  .container {
    overflow: hidden;
    position: relative;
    z-index: 0;
    .bg {
      z-index: -1;
      position: absolute;
      width: 200px;
      opacity: 0.8;
      @media (min-width: 576px) {
        width: 250px;
      }
    }

    .bg-1 {
      top: 50px;
      left: 0;
      @media (min-width: 1000px) {
        top: 80px;
        left: 90px;
        width: 300px;

      }
    }
    .bg-2 {
      bottom: -20px;
      right: -10px;

      @media (min-width: 1000px) {
        width: 600px;
        right:50px;
        bottom: -350px;
      }
     
    }
    .bg_light {
      background: #ebf2fa;
    }

    .box {
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-width: 90%;
      }
    }
    h1{
      font-size: 45px;
    }
    h1 {
  @media (min-width: 1200px) {
    font-size: 50px;
  }
}
  }
}
</style>
