<template>
  <section class="StabilityProgram py-5 bg-light">
    <div class="container py-3">
      <h1 class="my-2 text-center fw-bold my-5">
        {{ content.stability_program }}
      </h1>
      <div class="content">
        <div class="boxes d-lg-flex flex-wrap mt-4 pt-3 pb-5">
          <!-- <div class="box col-lg-3 mt-4 mt-sm-0 p-sm-3" v-for="box in boxes" :key="`box-${box.id}`">
            <div
              class="content d-sm-flex d-lg-block align-items-center justify-content-between rounded-20 border border-info bg-bl p-3 h-100">
              <span class="label bg-bd rounded-circle fw-600">{{
              box.id
              }}</span>

              <div class="img rounded-15 col-sm-5 col-lg-12">
                <img :src="box.img" alt="" />
              </div>
              <div class="text mt-3 ms-sm-3 ms-lg-0 col">
                <h5 class="m-0 fw-600">{{ box.title }}</h5>
                <p class="text-secondary mt-2 my-sm-1 my-lg-2">
                  {{ box.text }}
                </p>
              </div>
            </div>
          </div> -->
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
