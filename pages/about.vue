<template>
  <div :style="` margin-top : ${marginTop}`">
    <Landing />
    <AppearedOn />
    <Mission />
    <DAO />
    <Team />
    <Tokenomics />
    <MoreAboutGN />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Landing from "~/components/About/Landing.vue";
import AppearedOn from "~/components/About/AppearedOn.vue";
import Mission from "~/components/About/Mission.vue";
import DAO from "~/components/About/DAO.vue";
import Team from "~/components/About/Team.vue";
import Tokenomics from "~/components/About/Tokenomics.vue";
import MoreAboutGN from "~/components/About/MoreAboutGN.vue";
export default {
  components: {
    Landing,
    AppearedOn,
    Mission,
    DAO,
    Team,
    Tokenomics,
    MoreAboutGN,
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
