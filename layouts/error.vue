
<template>
  <div class="error bg-bd text-light text-center">
    <div class="container py-5 py-md-2">
      <div class="img">
        <img src="~/assets/images/error.png" class="img404 rounded-50" alt="" />
      </div>
      <div class="text col-sm-9 col-md-7">
        <img src="~/assets/images/logoRotet.png" class="logoRoutet" alt="" />
        <div class="content rounded-20 p-3 py-4">
          <h1 class="fw-bolder">Error 404</h1>
          <p class="fw-500">Page not found</p>
          <p class="mb-3">
            Something went wrong. The page was not found or doesn't exist
          </p>

          <nuxt-link
            to="/"
            class="rounded-50 bg-ba px-5 mx-auto mt-md-5 py-2 fw-600 text-light box-sh-l"
            >Back to home page</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.error {
  background: #142e4d;
}
.container {
  position: relative;
  min-height: 400px;
  .img {
    .img404 {
      position: relative;
      max-height: 100%;
      max-width: 100%;
      display: block;
      opacity: 0.8;
      mask: linear-gradient(90deg, #142e4d, #142e4d, #142e4d, #142e4d38);
    }
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 300px;
    min-height: 60%;
    font-size: 14px;

    .content {
      position: absolute;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: inherit;
        background: #a3a3a32f;
        backdrop-filter: blur(6px);
        z-index: -1;
      }
    }
    .logoRoutet {
      position: absolute;
      height: 80px;
      top: -50px;
      right: 15%;
      z-index: -1;
    }
    h1 {
      font-size: 40px;
    }
    a {
      text-decoration: none;
      display: block;
    }
    @media (min-width: 600px) {
      font-size: 16px;
      h1 {
        font-size: 55px;
      }
      a {
        width: fit-content;
      }

      .logoRoutet {
        height: 100px;
      }
    }
  }
}
</style>



