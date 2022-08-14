<template>
  <div class="">
    <Landing />
    <Products />
    <Section_2 />
    <Vault />
    <Deposit />
    <Farming />
    <BuyCrypto />
  </div>
</template>

<script>
import Landing from "~/components/product/Landing.vue";
import Products from "~/components/product/Products.vue";
import Section_2 from "~/components/product/Section_2.vue";
import Vault from "~/components/product/Vault.vue";
import Deposit from "~/components/product/Deposit.vue";
import Farming from "../components/product/Farming.vue";
import BuyCrypto from "../components/product/BuyCrypto.vue";
export default {
  name: "IndexPage",
  components: { Landing, Products, Section_2, Vault, Deposit, Farming, BuyCrypto },
};
</script>
