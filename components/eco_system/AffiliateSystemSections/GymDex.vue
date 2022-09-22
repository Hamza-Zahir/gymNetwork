<template>
  <div class="section containe text-light py-5">
    <h4 class="NavigationName d-lg-none">
      <span class="rounded-circle me-2"></span> {{content.gymDex}}
    </h4>
    <div class="content d-md-flex align-items-center my-5">
      <div class="text col-md-8 pe-md-3">
        <h1 class="my-4">{{content.gymDex}}</h1>

        <div class="img text-center d-md-none my-3">
          <img
            src="~/assets/images/StreetMetaverse/AffiliateSystem/GYM_DEX.png"
            alt=""
          />
        </div>
        <div class="paragraph py-3" v-html="content.gymDex_desc"></div>

        <a
          href="https://gymnetwork.io/dashboard/"
          target="_blank"
          class="BTN bg-ba text-light fw-600 box-sh-l rounded-50"
          >{{content.more_about_gymDex}}</a
        >
      </div>
      <div class="img d-none text-center d-md-block col-4">
        <img
          src="~/assets/images/StreetMetaverse/AffiliateSystem/GYM_DEX.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["content"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/style/AffiliateSystem.scss";
</style>
