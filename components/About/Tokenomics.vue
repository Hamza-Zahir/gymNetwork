<template>
  <div class="Tokenomics py-5 bg-light">
    <div class="py-5 px-2 mb-md-3 col-lg-11 mx-lg-auto">
      <h1 class="fw-bold text-center my-3">Tokenomics</h1>
      <div
        class="
          content
          mx-auto
          mt-5
          pt-5
          mb-lg-3
          d-md-flex
          justify-content-center
          align-items-center
        "
      >
        <div class="boxs col-md me-md-4 me-lg-5 pe-xl-5">
          <div class="box TOTAL_SUPPLY border border-info rounded-20 bg-bl">
            <span class="text-secondary fs-14">TOTAL SUPPLY</span>
            <div class="d-flex align-items-center text-ba mt-1">
              <span
                ><img src="~/assets/images/logo.png" alt="" class="me-2"
              /></span>
              <span class="fw-bold fs-5">419,306,325.81</span>
            </div>
          </div>
          <div
            class="box SINGLE_FARM border border-info rounded-20 bg-bl text-ba"
          >
            <span class="text-secondary fs-14">SINGLE FARM</span>
            <div class="fw-bold mt-1 fs-5">
              <span> 7.25% </span>
              <span> 29M </span>
            </div>
          </div>
          <div class="box VAULTS border border-info rounded-20 bg-bl text-ba">
            <span class="text-secondary fs-14">VAULTS</span>
            <div class="fw-bold mt-1 fs-5">
              <span> 22% </span>
              <span> 88M</span>
            </div>
          </div>

          <img
            src="~/assets/images/logoRotetLeft-1.png"
            class="imgLogo"
            alt=""
          />
        </div>
        <div class="text mt-5 mt-md-0 pc col-md-6 col-xl-5">
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

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    background: url("~/assets/images/4001.png");
    background-repeat: no-repeat;
    background-position: -100px 200px;
    background-size: 400px;
    z-index: -1;
    opacity: 0.7;
    @media (min-width: 500px) {
      background-size: 450px;
      background-position: -100px 150px;
    }

    @media (min-width: 992px) {
      background-size: 600px;
      background-position: -150px 200px;
    }
    @media (min-width: 1200px) {
      background-size: 600px;
      background-position: -150px 200px;
    }
    @media (min-width: 1400px) {
      background-size: 700px;
      background-position: -100px 160px;
    }
  }

  h1 {
    font-size: 50px;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 60px;
    }
  }
  .content {
    padding: 10px;
    max-width: 1300px;

    .boxs {
      z-index: 0;
      position: relative;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .imgLogo {
        width: 200px;
        position: absolute;
        z-index: -1;
        left: 0;
        top: -100px;

        @media (min-width: 500px) {
          left: calc(100% - 450px);
        }
        @media (min-width: 768px) {
          left: -50px;
        }
        @media (min-width: 1000px) {
          left: calc(100% - 500px);
        }
        @media (min-width: 1200px) {
          left: calc(100% - 550px);
        }
      }
      .box {
        width: fit-content;
        padding: 20px 15px;
        img {
          width: 30px;
        }
      }
      .TOTAL_SUPPLY {
        margin-right: 60px;
      }
      .SINGLE_FARM {
        margin-top: -15px;
      }
      .VAULTS {
        margin-right: 110px;
        margin-top: -15px;
        z-index: -1;
      }
    }

    @media (min-width: 992px) {
      p {
        font-size: 18px;
      }
      .boxs {
        .box {
          padding: 20px 30px;
        }
      }
    }
    @media (min-width: 1200px) {
      p {
        font-size: 20px;
      }
    }
  }
}
</style>
