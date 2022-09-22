<template>
  <section class="DAO pt-5 text-light">
    <div class="container pt-5">
      <h1 class="fw-bold text-md-center mx-auto mt-lg-4 pb-lg-4">
       {{content.decentralized_autonomous_organization}}
      </h1>

      <div class="text col-md-7 col-lg-6 col-xxl-5 mt-5" v-html="content.decentralized_autonomous_organization_desc">


      </div>
    </div>
    <div class="img col-sm-10 col-md-8 col-lg-7 ms-auto text-end">
      <img src="~/assets/images/Block_9_img.png" class="mt-4 ms-auto" alt="" />
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
.DAO {
  position: relative;
  background: url("~/assets/images/StreetMetaverse/AffiliateSystem/bg.png");
  background-size: cover;
  background-position: 50% 50%;
  h1 {
    font-size: 34px;
    max-width: 800px;

    @media (min-width: 992px) {
      font-size: 55px;
    }
  }

  .text {
    line-height: 1.7;
    @media (min-width: 1200px) {
      font-size: 18px;
    }

    @media (min-width: 2000px) {
      padding: 50px 0 60px 0;
    }
  }

  .img {
    overflow: hidden;
    img {
      width: 100%;
      max-width: 900px;
      min-height: 350px;
    }

    @media (min-width: 576px) {
      margin-top: -40px;
    }

    @media (min-width: 768px) {
      margin-top: -220px;
      img {
        width: 130%;
        min-height: 400px;
        margin-right: -250px;
        margin-bottom: -40px;
      }
    }
    @media (min-width: 992px) {
      margin-top: -250px;
    }
    @media (min-width: 1200px) {
      margin-top: -260px;
      img {
        margin-bottom: -50px;
      }
    }
    @media (min-width: 1400px) {
      margin-top: -300px;
      img {
        width: 100%;
        margin-right: -100px;
        margin-bottom: -40px;
        min-height: 500px;
      }
    }
    @media (min-width: 1500px) {
      margin-top: -300px;
      img {
        width: 90%;
        margin-right: 0px;
        margin-bottom: 0px;
        min-height: 350px;
      }
    }
    @media (min-width: 2000px) {
      margin-top: -350px;
    }
  }
}
</style>
