<template>
  <div class="ShareBtn my-5">
    <div
      class="BTN cp d-flex align-items-center border text-bd rounded-50"
      @click="showlinks = !showlinks"
      :class="!showlinks ? 'box-sh-l' : ''"
    >
      <span class="icon rounded-circle me-2">
        <b-icon icon="share-fill" class="h5 m-0"></b-icon>
      </span>
      <span class="fw-bold"> {{content.share_it}}</span>
    </div>
    <div v-if="showlinks" class="links d-flex justify-content-evenly py-3">
      <div class="me-2 cp" @click="openTwitter()">
        <img src="~/assets/images/twitter-blue.png" alt="" />
      </div>
      <a
        :href="`https://t.me/share/url?url=${url}&text=${title}`"
        target="_blank"
        class="ms-2"
      >
        <img src="~/assets/images/telegram-blue.png" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      url: "",
      showlinks: false,
    };
  },
  props: {
    title: {
      required: true,
      type: String,
    },
  },
  computed: {
    ...mapGetters(["content"]),
  },
  mounted() {
    this.getPhat();
  },
  methods: {
    getPhat() {
      this.url = window.location;
    },
    openTwitter() {
      window.open(
        `https://twitter.com/intent/tweet?text=${this.title} ${this.url}`,
        "_blank",
        "width=600,height=500,top=100,left=200 "
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.ShareBtn {
  width: fit-content;
  position: relative;

  .links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 999;
  }
}
.BTN {
  background: #ebf7fc;
  padding: 10px 25px;
}
img {
  width: 45px;
}
</style>
