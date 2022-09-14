<template>
  <section  class="Vault py-5">
    <div id="Vault" class="content1 py-5">
      <div class="container py-3">
        <h1 class="fw-bolder">Vault</h1>
        <div class="text pc my-4 col-md-10  col-xl-9">
          <p>
            Want to earn high returns while keeping your coins liquid at all
            times? GYM Network's Vault combines lucrative APY's with maximum
            security and flexibility.
          </p>
          <p>
            Your BNB or other coins that you use to generate GYMNET earnings are
            stored at ALPACA, one of the most trusted and secure DeFi Yield
            farming platforms in the crypto world.
          </p>
        </div>
      </div>
    </div>
    <div class="content2 text-light py-5">
      <div class="container py-3">
        <div
          class="w-100 d-md-flex flex-row-reverse align-items-center justify-content-between"
        >
          <div class="img mx-auto col-sm-10 mx-md-0 col-md-6 col-lg-5">
            <img src="~/assets/images/TotalBalance.png" class="w-100" alt="" />
          </div>
          <div class="text my-2 col col-lg-6">
            <p>
              You can transfer your coins from the Vault to your wallet at any
              time without paying extra fees.
            </p>
            <p>
              Our Vault is for those who attach great importance to security,
              but at the same time do not want to miss out on good returns. The
              perfect combination of security, liquidity and high returns.
            </p>
            <a
            href="https://gymnetwork.io/dashboard/"
            target="_blank"
              class="BTN bg-ba rounded-50  fw-600 cp box-sh-l text-light text-center mt-4 mt-lg-5"
            >
              Start now
          </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.Vault {


  .content1 {
    background: white;
  }
  .content2 {
    background: url("~/assets/images/vault_bg.png");
    .BTN {
      padding: 13px 35px;
      font-size: 18px;

    }
  }
  @media (min-width: 768px) {


  .BTN{
    font-size: 20px;
    width: fit-content;
  }
}
@media (min-width: 1200px) {
   h1 {
     font-size: 50px;
  }
  p{
    font-size: 20px;
  }

}
}
</style>
