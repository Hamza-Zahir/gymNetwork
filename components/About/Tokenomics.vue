<template>
  <div class="Tokenomics py-5 bg-light">
    <div class="container">
      <h1 class="fw-bold text-center">Tokenomics</h1>
      <div
        class="content pt-5 mb-lg-3 d-md-flex justify-content-center align-items-center"
      >
        <div class="boxs col-md-5 mx-md-auto">
          <div
            class="box TOTAL_SUPPLY border border-info rounded-20 bg-bl px-3 py-2"
          >
            <span class="text-secondary fs-14">TOTAL SUPPLY</span>
            <div class="d-flex align-items-center text-ba mt-1">
              <span
                ><img src="~/assets/images/logo.png" alt="" class="me-2"
              /></span>
              <span class="fw-bold">400 000 000</span>
            </div>
          </div>
          <div
            class="box SINGLE_FARM border border-info rounded-20 bg-bl px-3 py-2 text-ba"
          >
            <span class="text-secondary fs-14">SINGLE FARM</span>
            <div class="fw-bold mt-1">
              <span> 7.25% </span>
              <span> 29M </span>
            </div>
          </div>
          <div
            class="box VAULTS border border-info rounded-20 bg-bl px-3 py-2 text-ba"
          >
            <span class="text-secondary fs-14">VAULTS</span>
            <div class="fw-bold mt-1">
              <span> 22% </span>
              <span> 88M</span>
            </div>
          </div>
        </div>
        <div class="text mt-3 pc col-md-6 col-lg-5 mx-lg-auto">
          <p>
            GYMNET Tokenomics gives every user the opportunity to earn long-term
            rewards over and over again.
          </p>

          <p>
            In this way, the user always gets access to absolutely unique
            opportunities by holding GYMNET tokens and at the same time is
            rewarded with GYMNET for taking advantage of these opportunities.
          </p>
        </div>
      </div>
    </div>
    <div class="bg bg-1">
      <img src="~/assets/images/4001.png" class="w-100" alt="" />
    </div>
    <div class="bg bg-2">
      <img src="~/assets/images/logoRotetLeft-1.png" class="w-100" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Tokenomics {
  position: relative;
  z-index: 0;
  overflow: hidden;
  .boxs {
    z-index: 0;
    position: relative;
    min-height: 200px;
    .box {
      width: fit-content;
      position: absolute;
      img {
        width: 25px;
      }
    }
    .TOTAL_SUPPLY {
      top: 0;
      right: 50px;
    }
    .SINGLE_FARM {
      top: 60px;
      right: 0px;
    }
    .VAULTS {
      top: 110px;
      right: 80px;
      z-index: -1;
    }
  }

  .bg {
    position: absolute;
    z-index: -1;
  }
  .bg-1 {
    width: 90%;
    top: 60px;
    left: -100px;
    opacity: 0.7;
  }

  .bg-2 {
    width: 70%;
    top: 120px;
    left: -40px;
  }

  @media (min-width: 420px) {
    .bg-1 {
      width: 70%;
    }

    .bg-2 {
      width: 40%;
      left: 20px;
    }
  }
  @media (min-width: 600px) {
    .bg-1 {
      width: 60%;
    }

    .bg-2 {
      width: 200px;
      top: 90px;
      left: 100px;
    }
  }

  @media (min-width: 768px) {
    .bg-1 {
      width: 400px;
    }

    .bg-2 {
      top: 40px;
      left: 0px;
    }
  }
  @media (min-width: 1000px) {
    .bg-1 {
      width: 50%;
    }

    .bg-2 {
      top: 20%;
      left: 15%;
    }
  }
  @media (min-width: 1500px) {
    .bg-1 {
      top: 0;
    }

    .bg-2 {
      left: 23%;
    }
  }
  @media (min-width: 1700px) {
    .bg-1 {
      left: 0;
      top: -100px;
    }

    .bg-2 {
      left: 25%;
    }
  }
}
</style>
