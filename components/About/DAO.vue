<template>
  <section class="DAO pt-5 text-light">
    <div class="container pt-5">
      <h1 class="fw-bold  text-md-center">
        <span>Decentralized</span>
        <span class="d-block d-md-inline text-center">Autonomous</span>
        <span class="d-block text-end d-md-inline">Organization</span>
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
    <div class="img col-sm-10 col-md-8 col-lg-6 ms-auto">
      <img src="~/assets/images/Block_9_img.png" class="img-1 w-100" alt="" />
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
  .text {
    @media (min-width: 1200px) {
      font-size: 17px;
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
      min-height: 350px;
    }

    @media (min-width: 576px) {
      margin-top: -30px;
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
