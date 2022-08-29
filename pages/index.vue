<template>
  <div>
    <Landing />
    <ListedOn />
    <InvestmentSystem />
    <Metaverse />
    <StabilityProgram />
    <GetStarted />
    <AffiliateSystem />
    <Roadmap/>
    <Questions/>
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
import Questions from "~/components/Home/Questions.vue";
import Telegram from "~/components/Telegram.vue";
import Roadmap from "../components/Home/Roadmap.vue";
export default {
  components: {
    Landing,
    ListedOn,
    InvestmentSystem,
    Metaverse,
    StabilityProgram,
    GetStarted,
    AffiliateSystem,
    Questions,
    Telegram,
    Roadmap
},
};
</script>

<style lang="scss" scoped></style>
