<template>

  <div v-if="Links" class="LinksNavbar light-bg py-2">
    <div class="container d-flex align-items-lg-center">
      <div class="col d-flex flex-wrap">
        <a href="https://www.certik.com/projects/gym-network" target="blank" class="d-block col-6 p-2 col-lg-3"
          ><img src="~/assets/images/links/certik.png" alt="" class=""
        /></a>
        <a href="https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Gymnet-v1.0.pdf" target="blank" class="d-block col-6 p-2 col-lg-3"
          ><img src="~/assets/images/links/peckShield.png" alt="" class=""
        /></a>
        <a href="https://t.me/gymnetwork_english" target="blank" class="d-block col-6 p-2 col-lg-3"
          ><img
            src="~/assets/images/links/officialTelegram.png"
            alt=""
            class=""
        /></a>
        <a href="https://www.alpacafinance.org/" target="blank" class="d-block col-6 p-2 col-lg-3"
          ><img src="~/assets/images/links/alpaca.png" alt="" class=""
        /></a>
      </div>
      <b-icon
        icon="x-lg"
        class="m-0 ms-3 ms-lg-5 text-secondary cp"
        @click="Links = false"
      ></b-icon>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
     Links: true,
    }
  }

};
</script>

<style lang="scss" scoped>
.LinksNavbar {
  a {
    img {
      max-width: 100%;
    }
  }
}
</style>
