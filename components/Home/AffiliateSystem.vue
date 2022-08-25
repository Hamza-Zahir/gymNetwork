<template>
  <section class="AffiliateSystem pt-5">
    <div class="text-center container pt-4">
      <h1 class="fw-bolder">GYM Network Affiliate System</h1>
      <p class="fw-600 fs-14 col-sm-10 mx-auto">
        With GYM Network's affiliate system, you can build your own crypto
        referral business and long-term passive income.
      </p>
    </div>
    <div class="content mt-5">
      <div class="container">
        <div class="text pc col-sm-7 col-md-6 col-lg-5 col-xxl-4">
          <p class="">
            Become a part of the GYM Network community today and create your own
            financial freedom.
          </p>

          <nuxt-link to="" class="text-dark d-block mt-4 mt-lg-5"
            >Read more
            <b-icon icon="arrow-up-right" class="m-0 p-0"></b-icon>
          </nuxt-link>
        </div>
      </div>
      <div
        class="img ms-auto col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-6 text-end"
      >
        <img
          src="~/assets/images/AffiliateSystem_Home_img.png"
          class="img-1 w-100"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.AffiliateSystem {
  background: #ffffff;
  position: relative;

  .content {
    z-index: 0;
    position: relative;
    a{
      text-decoration: none;
    }
    .text {
      @media (min-width: 992px) {
        margin-bottom: -130px;
        font-size: 20px;
      }
      @media (min-width: 1000px) {
        margin-left: 130px;
      }
      @media (min-width: 1200px) {
        margin-left: 170px;
        transform: translateY(30px);
      }
      @media (min-width: 1400px) {
        margin-left: 230px;
        transform: translateY(50px);
      }
    }

    .img {
      margin-top: 20px;

      @media (min-width: 576px) {
        margin-top: -100px;
      }

      @media (min-width: 992px) {
        margin-top: -170px;
      }
      @media (min-width: 1200px) {
        margin-top: -180px;
      }
    }
  }
}
</style>
