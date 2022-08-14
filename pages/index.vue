<template>
  <div class="">
    <Landing />
    <Products />
    <Section_2 />
    <Vault />
    <Farming />
    <BuyCrypto />
    <AffiliateSystem />
    <Holder />
    <GetStarted />
    <Telegram />
    <Footer />
  </div>
</template>

<script>
import Landing from "~/components/product/Landing.vue";
import Products from "~/components/product/Products.vue";
import Section_2 from "~/components/product/Section_2.vue";
import Vault from "~/components/product/Vault.vue";
import Farming from "~/components/product/Farming.vue";
import BuyCrypto from "~/components/product/BuyCrypto.vue";
import AffiliateSystem from "~/components/product/AffiliateSystem.vue";
import Holder from "~/components/product/Holder.vue";
import GetStarted from "~/components/product/GetStarted.vue";
import Telegram from "~/components/product/Telegram.vue";
import Footer from "~/components/product/Footer.vue";
export default {
  name: "IndexPage",
  components: {
    Landing,
    Products,
    Section_2,
    Vault,
    Farming,
    BuyCrypto,
    AffiliateSystem,
    Holder,
    GetStarted,
    Telegram,
    Footer,
  },
};
</script>
