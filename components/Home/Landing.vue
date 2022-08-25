<template>
  <section class="Landing bg-bd text-light py-5">
    <div class="container">
      <div class="d-md-flex justify-content-around">
        <div class="text col-sm-10 col-md-6 mx-auto mx-md-0 px-md-2">
          <h1 class="py-2 pt-lg-3 mt-md-3">
            The perfect workout for your tokens!
          </h1>
          <p class="col col-lg-11 mt-md-4">
            We give you access to the best DeFi returns. The hard work is on us,
            you just get the results.
          </p>
          <div class="col-md-8 col-lg-6 col-xl- my-4 mx-auto mx-sm-0 mt-md-5">
            <nuxt-link
              to=""
              class="btn rounded-50 bg-ba fw-500 text-light w-100 box-sh-l"
            >
              Launch to APP
            </nuxt-link>
          </div>
        </div>

        <div
          class="form col-sm-10 col-md-6 col-lg-5 col-xl-4 bg-light fw-600 mx-auto mx-md-0 rounded-20 text-dark p-4"
        >
          <div class="">
            <h5 class="fw-bold">
              <span><img src="~/assets/images/bnb.png" alt="" /></span>
              <span
                >BNB <b-icon icon="chevron-down" class="m-0 p-0"></b-icon
              ></span>
            </h5>
            <input type="number" name="" id="" class="w-100 mt-2 p-2 rounded" />
            <div class="fs-14 text-secondary">
              <span>1 BNB </span> = <span> ~342,13$</span>
            </div>
          </div>
          <div class="d-flex my-4 align-items-center text-secondary">
            <span class="col border"></span>
            <b-icon icon="arrow-down-up" class="h5 m-0 p-0 mx-2"></b-icon>

            <span class="col border"></span>
          </div>
          <div class="">
            <h5 class="fw-bold">
              <span><img src="~/assets/images/logo.png" alt="" /></span>
              <span>GYMNET</span>
            </h5>
            <input type="number" name="" id="" class="w-100 mt-2 p-2 rounded" />
            <div class="fs-14 text-secondary">
              <span>1 GYMNET</span> = <span>~0.66$</span>
            </div>
          </div>

          <div
            class="rounded-20 border border-dark box-sh-l mt-4 text-center cp fw-600 py-2"
          >
            Swap
            <b-icon icon="arrow-up-right" class="m-0 p-0"></b-icon>
          </div>
        </div>
      </div>
      <div
        class="boxes border border-secondary p-2 mt-5 rounded-20 d-flex flex-wrap"
      >
        <div
          class="col-6 col-md px-2 ps-sm-4 ps-lg-5 my-2 border-end border-secondary"
        >
          <span class="fs-14 text-secondary">Total burnt</span>
          <div class="d-flex align-items-center mt-2 fw-bold">
            <img src="~/assets/images/logo.png" alt="" /><span>
              3,581,690
            </span>
          </div>
        </div>
        <div class="col px-2 ps-sm-4 ps-lg-5 my-2 ps-md-4">
          <span class="fs-14 text-secondary">GYMNET price</span>
          <div class="mt-2 fw-bold">$ 0.06717452</div>
        </div>
        <div class="border-start my-2 border-secondary d-none d-md-block"></div>

        <div
          class="col-6 col-md px-2 px-sm-3 ps-lg-5 ps-sm-4 my-2 border-end border-secondary"
        >
          <span class="fs-14 text-secondary">Total supply</span>
          <div class="d-flex align-items-center mt-2 fw-bold">
            <img src="~/assets/images/logo.png" alt="" />
            <span>304,788,450</span>
          </div>
        </div>
        <div class="col px-2 ps-sm-4 ps-lg-5 my-2 col-md">
          <span class="fs-14 text-secondary">Total value locked</span>
          <div class="d-flex align-items-center mt-2 fw-bold">$ 22,463,351</div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.Landing {
  z-index: 0;
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("~/assets/images/homeLanding-bg.png");
    opacity: 0.8;
    z-index: -1;
    background-size: 100% 50%;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    @media (min-width: 762px) {
      background-size: 100% 80%;
    }

    @media (min-width: 1000px) {
      background-size: 70% 100%;
    }
  }

  .text {
    h1 {
      font-size: 30px;
    }

    @media (min-width: 576px) {
      h1 {
        font-size: 33px;
      }
    }
    @media (min-width: 768px) {
      h1 {
        font-size: 39px;
      }
    }
    @media (min-width: 992px) {
      h1 {
        font-size: 50px;
      }
    }
    @media (min-width: 1200px) {
      h1 {
        font-size: 55px;
      }
      p {
        font-size: 18px;
      }
      .btn {
        font-size: 20px;
      }
    }
    @media (min-width: 2000px) {
      h1 {
        font-size: 64px;
        font-weight: bold;
      }
      p {
        font-size: 24px;
      }
    }
    .btn {
      letter-spacing: 0.5px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  .form {
    img {
      width: 35px;
    }
    input {
      background: #dee5ed;
      border: none;
      outline: none;
    }
  }
  .boxes {
    position: relative;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: inherit;
      background: #153151b7;
            backdrop-filter: blur(6px);
      z-index: -1;
    }
    img {
      width: 25px;
      margin-right: 5px;

    }
  }

}
</style>
