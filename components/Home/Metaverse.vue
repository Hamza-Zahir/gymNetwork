<template>
  <section class="Metaverse bg-light">
    <div class="container py-5">
      <div class="text col-md-10 mt-lg-2">
        <h1 class="fw-bold">GYM Street — The Metaverse</h1>

        <p class="paragraph pc mt-3 mt-lg-4">
          A place where we can do anything! We create GYM Street as the future
          of our daily life. Work, finance, shopping, communication, real
          estate, sum up a new life in the Metaverse. Discover your unimagined
          potential and design your new life in the Metaverse with GYM Street.
        </p>

        <nuxt-link to="/eco_system"
          class="BTN box-sh-l cp text-center rounded-50 bg-ba fw-600 text-light mt-4 col-sm-5 col-lg-4 col-xl-3 mt-lg-5"
        >
          Go to GYM Street
        </nuxt-link>
      </div>
    </div>
    <div class="img pt-3">
      <div class="container d-md-flex flex-row-reverse justify-content-end">
        <div
          class="paragraph fw-600 text-light my-3 align-self-center col col-lg-6"
        >
          “We see a world where everyone is a part of the digital future and can
          shape their own financial freedom as an investor. Driven by our
          passion for Blockchain, DeFi and Metaverse, we are creating the
          solutions of tomorrow”.
        </div>
        <div class="col-9 col-sm-7 col-md-4 col-lg-5">
          <img src="~/assets/images/Metaverse_img.png" alt="" class="w-100" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.BTN {
  padding: 10px 20px;
}
.img {
  background: url("~/assets/images/Metaverse-bg.png");
  background-size: cover;
  background-position: 100% 100%;
}
.paragraph {
  @media (min-width: 1200px) {
    font-size: 20px;
  }
  @media (min-width: 1500px) {
    font-size: 25px;
  }
}
h1 {
  @media (min-width: 1500px) {
    font-size: 60px;
  }
}
</style>
