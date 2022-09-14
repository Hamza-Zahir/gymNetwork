<template>
  <div class="content mx-auto d-md-flex flex-wrap py-5 my-lg-5">
    <div class="col col-md-4 p-2 p-lg-4">
      <HoverCard
        _id="1"
        link_url="https://www.youtube.com/watch?v=zCKvSVJeXRI"
        :link_text="content.watch_tutorial"
        :title="content.choose_crypto_wallet"
        :text="content.choose_crypto_wallet_desc"
        :img="images[0]"
      />
    </div>
    <div class="col col-md-4 p-2 p-lg-4">
      <HoverCard
        _id="2"
        link_url=""
        :link_text="content.watch_tutorial"
        :title="content.transfer_bnb"
        :text="content.transfer_bnb_desc"
        :img="images[1]"
      />
    </div>
    <div class="col col-md-4 p-2 p-lg-4">
      <HoverCard
        _id="3"
        link_url=""
        :link_text="content.watch_tutorial"
        :title="content.connect_your_wallet"
        :text="content.connect_your_wallet_desc"
        :img="images[2]"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import HoverCard from "./cards/GetStartedCard.vue";

export default {
  computed: {
    ...mapGetters(["content"]),
  },
  data() {
    return {
      images: [
        require("~/assets/images/getStarted1.png"),
        require("~/assets/images/getStarted2.png"),
        require("~/assets/images/getStarted3.png"),
      ],
    };
  },
  components: {
    HoverCard,
  },
};
</script>

<style lang="scss" scoped>
.content {
  max-width: 1050px;
}
</style>
