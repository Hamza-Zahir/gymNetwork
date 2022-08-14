<template>
  <div class="BuyCard mt-3">
    <div class="text-center text-bd fw-500">How much do you want to buy?</div>
    <h1 class="mx-auto text-bd border-bottom px-3 py-1 my-3 fw-bold">
      lei1000
    </h1>
    <div class="fs-14 pc text-center my-2">
      You get
      <span class="fw-600">0.5910000020 BNB</span>
      <b-icon icon="arrow-down-up" class="m-0 p-0 ms-1 pc cp"></b-icon>
    </div>
    <div class="my-3 d-flex justify-content-center align-items-center">
      <div class="cp bg-bl rounded-50 p-2">
        <img src="~/assets/images/ron.png" alt="" />
        <span class="fw-600">RON</span>
        <b-icon icon="chevron-down" class="m-0 p-0"></b-icon>
      </div>
      <b-icon icon="arrow-right" class="h1 m-0 p-0 pc mx-2"></b-icon>
      <div class="cp bg-bl rounded-50 p-2">
        <img src="~/assets/images/bnb.png" alt="" />
        <span class="fw-600">BNB</span>
        <b-icon icon="chevron-down" class="m-0 p-0"></b-icon>
      </div>
    </div>

    <div class="">
      <span class="pc ps-3">Payment method</span>
      <div class="rounded-50 border border-primary pc text-center py-2 mt-1 cp">
        <b-icon icon="credit-card-2-back-fill" class="m-0 p-0 text-bl"></b-icon>
        Credit card
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center mt-3">
      <div class="d-flex align-items-center">
        <span class="me-1"><img src="~/assets/images/logo-full-purple.png" alt="" /></span>

        <div class="d-flex flex-column">
          <span class="pc fs-12">Best rate via</span>
          <span class="cp fs-14"
            >Moonpay
            <b-icon icon="chevron-down" class="m-0 p-0"></b-icon>
          </span>
        </div>
      </div>
      <div class="fs-12 pc text-end d-flex flex-column">
        <span>1 BNB = 993,90011 RON</span>
        <span>Includes all fees</span>
      </div>
    </div>

    <div
      class="bg-ba py-2 text-light text-center cp rounded-50 w-100 fw-500 mt-4 box-sh-l"
    >
      Buy BNB
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showContent: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.BuyCard {
  h1 {
    width: fit-content;
  }

  img {
    width: 26px;
  }
  .text-bl {
    color: #719dc0;
  }
  .bg-bl {
    background: #c3d3e0;
  }
  .fs-12 {
    font-size: 12px;
  }
}
</style>
