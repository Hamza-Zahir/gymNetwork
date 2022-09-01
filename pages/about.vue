<template>
  <div>
    <Landing />
    <AppearedOn />
    <Mission />
    <DAO />
    <Team />
    <KimYongGym />
    <Tokenomics />
    <MoreAboutGN />
  </div>
</template>

<script>
import Landing from "~/components/About/Landing.vue";
import AppearedOn from "~/components/About/AppearedOn.vue";
import Mission from "~/components/About/Mission.vue";
import DAO from "~/components/About/DAO.vue";
import Team from "~/components/About/Team.vue";
import KimYongGym from "~/components/About/KimYongGym.vue";
import Tokenomics from "~/components/About/Tokenomics.vue";
import MoreAboutGN from "~/components/About/MoreAboutGN.vue";
export default {
  components: {
    Landing,
    AppearedOn,
    Mission,
    DAO,
    Team,
    KimYongGym,
    Tokenomics,
    MoreAboutGN,
  },
};
</script>

<style lang="scss" scoped></style>
