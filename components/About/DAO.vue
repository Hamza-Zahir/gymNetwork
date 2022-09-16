<template>
  <section class="DAO pt-5 text-light">
    <div class="container pt-5">
      <h1 class="fw-bold text-md-center mx-auto mt-lg-4 pb-lg-4">
        Decentralized Autonomous Organization
      </h1>

      <div class="text col-md-7 col-lg-6 col-xxl-7 pe-xxl-5 mt-5">
        <p class="">
          GYM NETWORK is owned by the users. Everyone of you has voting power in
          the measure of your GYMNET token holdings.
        </p>
        <p class="col-lg-11">
          Owning GYMNET means that you will be able to propose new “Exercise
          Routines” (proposals to improve the system) and vote on the routines
          proposed by others.
        </p>

        <p class="col-md-9">
          This is how the Network will be managed once 75% of GYMNET tokens have
          been distributed to you, the users.
        </p>
      </div>
    </div>
    <div class="img col-sm-10 col-md-8 col-lg-7 ms-auto text-end">
      <img src="~/assets/images/Block_9_img.png" class="mt-4 ms-auto" alt="" />
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
.DAO {
  position: relative;
  background: url("~/assets/images/StreetMetaverse/AffiliateSystem/bg.png");
  background-size: cover;
  background-position: 50% 50%;
  h1 {
    font-size: 34px;
    max-width: 800px;
    @media (min-width: 768px) {
      font-size: 40px;
    }
    @media (min-width: 992px) {
      font-size: 55px;
    }
  }

  .text {
    @media (min-width: 1200px) {
      font-size: 18px;
    }
    @media (min-width: 1400px) {
      font-size: 20px;
    }
    @media (min-width: 2000px) {
      font-size: 25px;
      padding-top: 50px;
    }
  }

  .img {
    img {
      width: 100%;
      max-width: 900px;
      min-height: 350px;
    }

    @media (min-width: 576px) {
      margin-top: -40px;
    }

    @media (min-width: 768px) {
      margin-top: -110px;
    }
    @media (min-width: 992px) {
      margin-top: -240px;
    }
    @media (min-width: 1200px) {
      margin-top: -240px;
    }
    @media (min-width: 2000px) {
      margin-top: -350px;
    }
  }
}
</style>
