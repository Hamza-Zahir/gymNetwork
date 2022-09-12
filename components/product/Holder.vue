<template>
  <section class="Holder py-5">
    <div class="container py-3">
      <h1 class="my-2 fw-bold text-center">GYMNET Holder Benefits</h1>
      <div class="content mt-5 col-md-12 mx-auto">
        <div class="d-md-flex">
          <div class="box p-3 p-lg-4 bg-bd text-light rounded-15 my-4 m-md-3 col">
            <h5 class="fw-bold">3% GYMNET</h5>
            <div class="mt-2 mt-lg-3">
              from DEX fees on each sale for GYM holders by pools of 2500 GYM or
              more
            </div>
          </div>
          <div class="box light-bg p-3 p-lg-4 rounded-15 my-4 m-md-3 col">
            <h5 class="fw-bold text-dark">2% GYMNET Moon Fund </h5>
            <div class="pc mt-2 mt-lg-3">
              (Marketing, PR, Cooperations, Management) on SELL and BUY on a DE
            </div>
          </div>
        </div>
        <div class="d-md-flex">
          <div class="box p-3 p-lg-4 bg-ba text-light rounded-15 my-4 m-md-3 col">
            <h5 class="fw-bold">3% GYMNET Metaverse Development </h5>
            <div class="mt-2 mt-lg-4 d-flex justify-content-between align-items-center">
              <span class="">
              Fund <br />
              on SELL and BUY on a DEX
              </span>
              <span><img src="~/assets/images/point.png" alt=""></span>
            </div>
          </div>
          <div class="box bg-bd text-light p-3 p-lg-4 rounded-15 my-4 m-md-3 col">
            <h5 class="fw-bold">1% GYMNET Community Support Fund
            </h5>
            <div class="mt-2 mt-lg-4">
              (Airdrop, Bounty, Incentives) on SELL and BUY on a DEX
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.Holder {
  background: white;

h5{
  color: #ffffff;
}


.content {
    max-width: 900px;
    img{
      width: 50px;
    }
    .box{
      min-height: 140px;
      display: flex ;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  @media (min-width: 1200px) {
    h1 {
       font-size: 50px;
  }
.content {
font-size: 20px;
}

}
}
</style>
