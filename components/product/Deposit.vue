<template>
  <section class="Deposit py-5 bg-light">
    <div class="container py-3">
      <h1 class="my-2 text-center">
        Calculate your best returns for the GYM Vault
      </h1>
      <div class="py-4 d-md-flex justify-content-evenly align-items-center">
        <div class="deposit-box border rounded-15 p-3 col col-lg-6 col-xl-5">
          <h5 class="m-0 d-flex justify-content-between">
            <span>Deposit</span>
            <b-icon icon="x-lg" class="m-0 pc cp"></b-icon>
          </h5>
          <div class="mt-4">
            <div
              class="d-flex justify-content-between align-items-center px-2 my-1 fs-14"
            >
              <span class="pc">Balance: 30.568</span>
              <span class="cp rounded-20 bg-bl px-2">max</span>
            </div>
            <div
              class="border rounded-10 d-flex justify-content-between align-items-center p-2"
            >
              <div class="cp">
                <img src="~/assets/images/bnb.png" alt="" />
                <span class="fw-600">BNB</span>
                <b-icon icon="chevron-down" class="m-0 p-0"></b-icon>
              </div>
              <div class="d-flex align-items-center">
                <div class="pc d-flex flex-column align-items-center">
                  <span>0.00 BNB</span>
                  <span class="fs-14">0.00 USD</span>
                </div>
                <b-icon
                  icon="arrow-down-up"
                  class="h5 m-0 p-0 ms-1 pc cp"
                ></b-icon>
              </div>
            </div>
            <span class="pc px-2 mt-1 fs-14">Min Amount: 20 BNB</span>
          </div>
          <div class="bg-bl text-info px-2 py-1 fs-14 rounded-15 mt-3">
            <b-icon icon="info-circle" class="m-0 p-0"></b-icon>
            <span>You will need BNB in your wallet</span>
          </div>
          <div
            class="bg-ba py-2 text-light text-center cp rounded-50 w-100 fw-500 mt-4"
          >
            Launch to APP
          </div>
        </div>
        <div class="bg-bd border rounded-15 text-light mt-3 mt-md-0 p-3 col-md-5 col-lg-4 col-xl-3 ms-md-3">
          <div class="py-2">
            <span class="text-gry">Daily rewards:</span><br />
            <span class="fw-600">728.119</span>
            <span class="text-gry">~208.90$</span>
          </div>
          <div class="border mt-2"></div>
          <div class="py-2">
            <span class="text-gry">Weekly rewards:</span><br />
            <span class="fw-600">728.119</span>
            <span class="text-gry">~20158.90$</span>
          </div>
          <div class="border mt-2"></div>
          <div class="py-2">
            <span class="text-gry">Monthly rewards:</span><br />
            <span class="fw-600">728.119</span>
            <span class="text-gry">~20158.90$</span>
          </div>
        </div>
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
.Deposit {
  .deposit-box {
    background: white;
    img {
      width: 26px;
    }
  }
  .text-gry {
    color: #dadada;
  }
}
</style>
