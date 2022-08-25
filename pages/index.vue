<template>
  <div>
    <Landing />
    <ListedOn />
    <InvestmentSystem />
    <Metaverse />
    <StabilityProgram />
    <GetStarted />
    <AffiliateSystem />
    <Telegram/>
  </div>
</template>

<script>
import Landing from "~/components/Home/Landing.vue";
import ListedOn from "~/components/Home/ListedOn.vue";
import InvestmentSystem from "~/components/Home/InvestmentSystem.vue";
import Metaverse from "~/components/Home/Metaverse.vue";
import StabilityProgram from "../components/Home/StabilityProgram.vue";
import GetStarted from "~/components/Home/GetStarted.vue";
import AffiliateSystem from "~/components/Home/AffiliateSystem.vue";
import Telegram from "~/components/product/Telegram.vue";
export default {
  components: {
    Landing,
    ListedOn,
    InvestmentSystem,
    Metaverse,
    StabilityProgram,
    GetStarted,
    AffiliateSystem,
    Telegram
},
};
</script>

<style lang="scss" scoped></style>
