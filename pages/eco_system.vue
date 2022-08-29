<template>
<div class="">
  <landing/>
  <StreetMetaverse/>
  <AffiliateSystem/>
  <GetStarted/>
  <Telegram/>

</div>
</template>
<script>
import Landing from "~/components/eco_system/Landing.vue";
import StreetMetaverse from "~/components/eco_system/StreetMetaverse.vue";
import AffiliateSystem from "~/components/eco_system/AffiliateSystem.vue";
import Telegram from "~/components/Telegram.vue";
import GetStarted from "../components/product/GetStarted.vue";

export default {
  components: {
    Landing,
    StreetMetaverse,
    AffiliateSystem,
    Telegram,
    GetStarted
},
};
</script>

<style lang="scss" scoped></style>

