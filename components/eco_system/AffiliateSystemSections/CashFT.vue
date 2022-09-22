<template>
  <div class="section containe text-light py-5">
    <h4 class="NavigationName d-lg-none">
      <span class="rounded-circle me-2"></span>{{content.cashFT}}
    </h4>
    <div class="content d-md-flex align-items-center my-5">
      <div class="text col-md-7 pe-md-3">
        <h1 class="my-4">{{content.CashFT_title}}</h1>

        <div class="img text-center d-md-none my-3">
          <img
            src="~/assets/images/StreetMetaverse/AffiliateSystem/cashFT.png"
            alt=""
          />
        </div>
        <div class="paragraph py-3" v-html="content.CashFT_desc"></div>


        <nuxt-link to="" class="BTN bg-ba text-light fw-600 box-sh-l rounded-50"
          >{{content.coming_soon}}</nuxt-link
        >
      </div>
      <div class="img d-none text-center d-md-block col-5">
        <img
          src="~/assets/images/StreetMetaverse/AffiliateSystem/cashFT.png"
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
ul {
  padding: 0;
  li {
    margin: 15px 20px;
  }
}
</style>
