<template>
  <div :style="` margin-top : ${marginTop}`">
    <Landing />
    <Products_1 />
    <Products_2 />
    <Vault />
    <Farming />
    <BuyCrypto />
    <Holder />
    <GetStarted />
    <Telegram />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Landing from "~/components/product/Landing.vue";
import Products_1 from "~/components/product/Products_1.vue";
import Products_2 from "~/components/product/Products_2.vue";
import Vault from "~/components/product/Vault.vue";
import Farming from "~/components/product/Farming.vue";
import BuyCrypto from "~/components/product/BuyCrypto.vue";
import Holder from "~/components/product/Holder.vue";
import GetStarted from "~/components/product/GetStarted.vue";
import Telegram from "~/components/Telegram.vue";
export default {
  components: {
    Landing,
    Products_1,
    Products_2,
    Vault,
    Farming,
    BuyCrypto,
    Holder,
    GetStarted,
    Telegram,
  },
  mounted() {
    this.getmarginTop();
  },
  methods: {
    ...mapActions(["getmarginTop"]),
  },
  computed: {
    ...mapGetters(["marginTop"]),
  },
};
</script>
