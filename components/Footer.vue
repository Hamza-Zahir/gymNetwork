<template>
  <footer class="Footer bg-bd2 pt-5 text-light">
    <div class="container">
      <div class="d-lg-flex">
        <div class="col-lg-4 pe-lg-5 mt-lg-4">
          <div class="logo d-flex align-items-center">
            <span class="pe-2"
              ><img src="~/assets/images/logo.png" alt=""
            /></span>
            <span class="fw-600"> Gym Network </span>
          </div>
          <p class="my-3 fs-14">
            The union of Metaverse and DeFi Aggregator Investment System.
            Lucrative returns in DeFi, Yield Farming, Staking, NFTs and more.
          </p>
        </div>
        <div class="links d-flex flex-wrap col">
          <div class="my-3 col-6 col-md-3">
            <div class="box mx-auto">
              <span class="fw-bold">About</span>
              <br />
              <br />

              <nuxt-link to="">Support</nuxt-link>
              <nuxt-link to="">Newsletter</nuxt-link>
              <nuxt-link to="">Community</nuxt-link>
              <nuxt-link to="">Blog & News</nuxt-link>
              <nuxt-link to="">Smart Contract</nuxt-link>
              <nuxt-link to="">Documentation</nuxt-link>
            </div>
          </div>
          <div class="my-3 col-6 col-md-3">
            <div class="box mx-auto">
              <span class="fw-bold">Eco-System</span>
              <br />
              <br />
              <nuxt-link to="">CashFT </nuxt-link>
              <nuxt-link to="">Exchange</nuxt-link>
              <nuxt-link to="">Gymstreet</nuxt-link>
              <nuxt-link to="">Zuckerland</nuxt-link>
              <nuxt-link to="">Metablocks </nuxt-link>
              <nuxt-link to="">Metaverse Campus</nuxt-link>
            </div>
          </div>

          <div class="my-3 col-6 col-md-3">
            <div class="box mx-auto">
              <span class="fw-bold">Products</span>
              <br />
              <br />
              <nuxt-link to="">Vault</nuxt-link>
              <nuxt-link to="">Farming</nuxt-link>
              <nuxt-link to="">Single Pool</nuxt-link>
              <nuxt-link to="">Buy GYMNET</nuxt-link>
              <nuxt-link to="">Affiliate System</nuxt-link>
            </div>
          </div>
          <div class="my-3 col-6 col-md-3">
            <div class="box mx-auto">
              <span class="fw-bold">Help</span>
              <br />
              <br />
              <nuxt-link to="">Guide </nuxt-link>
              <nuxt-link to="">Support</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3 mt-2">
        <a
          href="https://twitter.com/GymNet_Official?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="blank"
          class="me-1"
          ><img src="~/assets/images/twitter.png" alt=""
        /></a>
        <a href="https://t.me/gymnetwork_english" target="blank" class="ms-1"
          ><img src="~/assets/images/telegram-circle.png" alt=""
        /></a>
      </div>
      <div class="border-top border-secondary"></div>
    </div>
    <div class="text-center py-3 pc fs-14">
      <span class="h6 m-0 p-0">©</span> Gym Network 2022
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.Footer {
  .logo {
    img {
      width: 30px;
    }
  }
  .links {
    .box {
      width: fit-content;
    }
    a {
      display: block;
      color: white;
      text-decoration: none;
      transition: 0.5s;
      &:hover {
        transform: scale(1.1) translate(7px);
      }
    }
  }
}
</style>
