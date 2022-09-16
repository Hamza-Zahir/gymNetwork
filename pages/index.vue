<template>
  <div class="" :style="` margin-top : ${marginTop}`">
    <Landing />
    <ListedOn />
    <InvestmentSystem />
    <Metaverse />
    <StabilityProgram />
    <GetStarted />
    <Roadmap />
    <Questions />
    <Telegram />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Landing from "~/components/Home/Landing.vue";
import ListedOn from "~/components/Home/ListedOn.vue";
import InvestmentSystem from "~/components/Home/InvestmentSystem.vue";
import Metaverse from "~/components/Home/Metaverse.vue";
import StabilityProgram from "../components/Home/StabilityProgram.vue";
import GetStarted from "~/components/Home/GetStarted.vue";
import Questions from "~/components/Home/Questions.vue";
import Telegram from "~/components/Telegram.vue";
import Roadmap from "~/components/Home/Roadmap.vue";
export default {
  components: {
    Landing,
    ListedOn,
    InvestmentSystem,
    Metaverse,
    StabilityProgram,
    GetStarted,
    Questions,
    Telegram,
    Roadmap,
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

<style lang="scss" scoped></style>
