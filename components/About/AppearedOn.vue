<template>
  <section class="py-5 bg-light">
    <div class="container py-lg-5">
      <h1 class="fw-bolder text-center">Appeared on</h1>
      <div class="mt-4 d-flex flex-wrap mt-5">
        <div
          v-for="(link, i) in links"
          :key="`logo-${i}`"
          class="d-block p-2 col-6 col-sm-4 col-md-3 col-lg-2"
        >
        <a :href="link.link" target="blank">
          <img :src="link.logo" alt="" class="w-100" />
        </a>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
const links = [
  {
    link: "",
    logo: require("~/assets/images/AppearedOn/markrtWatch.png"),
  },
  {
    link: "",
    logo: require("~/assets/images/AppearedOn/investing.png"),
  },
  {
    link: "",
    logo: require("~/assets/images/AppearedOn/coinQuora.png"),
  },
  {
    link: "",
    logo: require("~/assets/images/AppearedOn/benzinga.png"),
  },
  {
    link: "",
    logo: require("~/assets/images/AppearedOn/yohoo.png"),
  },
  {
    link: "",
    logo: require("~/assets/images/AppearedOn/cryptoDaily.png"),
  },
  {
    link: "",
    logo: require("~/assets/images/AppearedOn/newsBTC.png"),
  },
  {
    link: "",
    logo: require("~/assets/images/AppearedOn/utoday.png"),
  },
  {
    link: "",
    logo: require("~/assets/images/AppearedOn/cryptoPotato.png"),
  },
  {
    link: "",
    logo: require("~/assets/images/AppearedOn/cryptonews.png"),
  },
  {
    link: "",
    logo: require("~/assets/images/AppearedOn/blockOnomi.png"),
  },
];
export default {
  data() {
    return {
      links,
    };
  },
};
</script>

<style lang="scss" scoped></style>
