<template>
<div class="" :style="` margin-top : ${marginTop}`">
  <landing/>
  <StreetMetaverse/>
  <AffiliateSystem/>
  <GetStarted/>
  <Telegram/>

</div>
</template>
<script>
    import { mapActions, mapGetters } from "vuex";

import Landing from "~/components/eco_system/Landing.vue";
import StreetMetaverse from "~/components/eco_system/StreetMetaverse.vue";
import AffiliateSystem from "~/components/eco_system/AffiliateSystem.vue";
import Telegram from "~/components/Telegram.vue";
import GetStarted from "../components/eco_system/GetStarted.vue";

export default {
  components: {
    Landing,
    StreetMetaverse,
    AffiliateSystem,
    Telegram,
    GetStarted
},
mounted() {this.getmarginTop()},
  methods: {
    ...mapActions(["getmarginTop"]),
  },
  computed: {
    ...mapGetters(["marginTop"]),
  },
};
</script>

<style lang="scss" scoped></style>

