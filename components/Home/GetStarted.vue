<template>
  <section class="GetStarted py-5 bg-light">
    <span class="GymnetLabel Label-1 d-none d-sm-block"
      >Gymnet Gymnet Gymnet Gymnet
    </span>
    <span class="GymnetLabel Label-2 d-none d-sm-block"
      >Gymnet Gymnet Gymnet Gymnet Gymnet</span
    >
    <div class="container py-3">
      <h1 class="my-2 pb-lg-4 fw-bolder text-center">
        How to get started with GYM Network
      </h1>
      <div class="mx-auto content d-md-flex py-5 my-lg-5">
        <div class="box col my-3 m-md-2 mx-lg-4">
          <div
            class="text col border rounded-15 bg-white text-bd p-3 d-flex flex-column justify-content-between"
          >
            <div class="">
              <h1 class="text-end fw-bolder">/01</h1>
              <h4 class="fw-600 mt-3">Choose a crypto wallet</h4>
              <p class="pc my-3">like MetaMask or Trust Wallet</p>
            </div>
            <nuxt-link to="" class="text-dark fs-14 fw-600 text-end mt-2"
              >Watch tutorial
              <b-icon icon="arrow-up-right" class="m-0"></b-icon>
            </nuxt-link>
          </div>
          <div class="box-img rounded-15 d-none d-md-block">
            <img src="~/assets/images/getStarted1.png" class="w-100" alt="" />
          </div>
        </div>

        <div class="box col my-3 m-md-2 mx-lg-4">
          <div
            class="text col border rounded-15 bg-white text-bd p-3 d-flex flex-column justify-content-between"
          >
            <div class="">
              <h1 class="text-end fw-bolder">/02</h1>
              <h4 class="fw-600 mt-3">Transfer BNB</h4>
              <p class="my-3">to your wallet</p>
            </div>
            <nuxt-link to="" class="text-dark fs-14 fw-600 text-end mt-2"
              >Watch tutorial
              <b-icon icon="arrow-up-right" class="m-0"></b-icon>
            </nuxt-link>
          </div>
          <div class="box-img rounded-15 d-none d-md-block">
            <img src="~/assets/images/getStarted2.png" class="w-100" alt="" />
          </div>
        </div>

        <div class="box col my-3 m-md-2 mx-lg-4">
          <div
            class="text col border rounded-15 bg-white text-bd p-3 d-flex flex-column justify-content-between"
          >
            <div class="">
              <h1 class="text-end fw-bolder">/03</h1>
              <h4 class="fw-600 mt-3">Connect your wallet</h4>
              <p class="pc my-3">
                to the website and make your first deposit into the Vault (from
                0.051 BNB)
              </p>
            </div>
            <nuxt-link to="" class="text-dark fs-14 fw-600 text-end mt-2"
              >Watch tutorial
              <b-icon icon="arrow-up-right" class="m-0"></b-icon>
            </nuxt-link>
          </div>
          <div class="box-img rounded-15 d-none d-md-block">
            <img src="~/assets/images/getStarted3.png" class="w-100" alt="" />
          </div>
        </div>
      </div>
      <div class="bg bg-1">
        <img src="~/assets/images/4001.png" class="w-100" alt="" />
      </div>
      <div class="bg bg-2">
        <img src="~/assets/images/4007.png" class="w-100" alt="" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.GetStarted {
  background: white;
  position: relative;
  z-index: 0;
  .GymnetLabel {
    position: absolute;
  }
  .Label-1 {
    left: 0;
    top: 20px;
    transform-origin: left center;
    transform: translateX(5%) rotate(90deg);
  }
  .Label-2 {
    right: 0;
    top: 30%;
    transform-origin: left center;
    transform: translateX(95%) rotate(90deg);
  }
  .content {
    max-width: 820px;

    .box {
      position: relative;
      cursor: pointer;

      &:hover {
        .text {
          transform: translateY(-10px);
          background: #153151 !important;
          * {
            color: white !important;
          }
        }
      }

      * {
        transition: all 0.5s ease;
      }

      .text {
        width: 100%;
        height: 100%;
        z-index: 2;
      }
      .box-img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        overflow: hidden;
        img {
          height: 100%;
        }
      }

      @media (min-width: 768px) {
        &:hover {
          .text {
            transform: translateY(40px) rotate(7deg);
            background: #153151 !important;
            z-index: 9;
            * {
              color: white !important;
            }
          }
          .box-img {
            transform: translateY(-40px) rotate(-7deg);
          }
        }
      }
      @media (min-width: 992px) {
        &:hover {
          .text {
            transform: translateY(60px) rotate(10deg);
            background: #153151 !important;
            * {
              color: white !important;
            }
          }
          .box-img {
            transform: translateY(-70px) rotate(-10deg);
          }
        }
      }
    }
  }

  .bg-white {
    background: white;
  }
  a {
    text-decoration: none;
  }

  .bg {
    z-index: -3;
    position: absolute;
opacity: 0.8;

  }

  .bg-1 {
    top: 100px;
    left: -20px;
    width: 200px;
  }
  .bg-2 {
    bottom: 0px;
    right: 0px;
  }
  @media (min-width: 576px) {
    .bg-1 {
      width: 250px;
    }
     .bg-2 {
      width: 400px;
    }
  }
  @media (min-width: 1000px) {
    .bg-1 {
      left: 10px;
    }

  }

  @media (min-width: 1200px) {
    .bg-1 {
      left: 100px;
    }
    .bg-2 {
      width: 700px;
    }
  }

 @media (min-width: 2000px) {
    .bg-1 {
      left: 400px;
    }
    .bg-2 {
      width: 900px;
    }
  }
 }

</style>
