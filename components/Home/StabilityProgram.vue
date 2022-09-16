<template>
  <section class="StabilityProgram py-5 bg-light">
    <div class="container py-3">
      <h1 class="my-2 text-center fw-bold my-5">
        {{ content.stability_program }}
      </h1>
      <div class="content">
        <div class="boxes d-lg-flex flex-wrap mt-4 pt-3 pb-5">
          <StabilityProgramCard
            :title="content.farm_sp"
            :text="content.farm_sp_desc"
            :img="imges[0]"
            _id="1"
          />
          <StabilityProgramCard
            :title="content.locking_sp"
            :text="content.locking_sp_desc"
            :img="imges[1]"
            _id="2"
          />
          <StabilityProgramCard
            :title="content.burning_gymnet"
            :text="content.burning_gymnet_desc"
            :img="imges[2]"
            _id="3"
          />
          <StabilityProgramCard
            :title="content.through_codetermination_rights"
            :text="content.through_codetermination_rights_desc"
            :img="imges[3]"
            _id="4"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StabilityProgramCard from "./cards/StabilityProgramCard.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    StabilityProgramCard,
  },
  computed: {
    ...mapGetters(["content"]),
  },
  data() {
    return {
      imges: [
        require("~/assets/images/Rectangle_stability.png"),
        require("~/assets/images/Rectangle_stability_2.png"),
        require("~/assets/images/BuyGYMNET.png"),
        require("~/assets/images/Rectangle_stability_3.png"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.StabilityProgram {
  position: relative;

  @media (min-width: 768px) {
    h1 {
      font-size: 50px;
    }
  }
}
</style>
