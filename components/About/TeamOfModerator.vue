<template>
  <div
    :id="`Team-${Moderator.id}`"
    class="container teamsOf py-5"
    @mouseenter="
      () => {
        handelScrolling();
      }
    "

  >

    <h1 class="fw-bold text-center mt-lg-5">{{content.team}} {{ Moderator.title }}</h1>
    <div class="teams py-5">
      <div class="d-flex flickity py-2 m-0">
        <div
          v-for="developer in Moderator.team"
          :key="`dev-${developer.id}`"
          class="m-0 px-2 px-md-3 px-xxl-4 col-12 col-md-6 col-xl-4"
        >
          <div class="box border rounded-20 p-3 mx-auto">
            <div class="d-flex align-items-center">
              <div class="img me-3"><img :src="developer.img" alt="" /></div>
              <div class="">
                <h5 class="fw-bold text-bd">{{ developer.name }}</h5>
                <span class="text-secondary">{{ content[developer.jobTitle] }}</span>
              </div>
            </div>
            <div class="pc mt-4">
              {{ content[developer.text] }}
            </div>
          </div>
        </div>
      </div>

      <div class="text-center pages_scroll mt-4">
        <span
          v-for="i in pages"
          :key="i"
          @click="scrollTo(i)"
          class="rounded-circle cp"
          :class="pageScroll == i ? 'bg-ba' : ''"
        >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import Flickity from "~/node_modules/vue-flickity/src/flickity";
import { mapGetters } from "vuex";

import plugins from "~/plugins/index";

export default {
  computed: {
      ...mapGetters(["content"]),
    },
  data() {
    return {
      pages: 1,
      pageScroll: 1,
    };
  },
  mounted() {
    this.handelScrolling();
    this.Scrolling();
  },
  methods: {
    scrollTo(i) {
      const flickity = document.querySelector(".flickity");
      const cheldren = flickity.children;
      flickity.scrollLeft = (i - 1) * cheldren[0].clientWidth;
      this.pageScroll = i;
    },
    Scrolling() {
      plugins.Scrolling();
    },

    handelScrolling() {
      const flickity = document.querySelector(".flickity");
      const cheldren = flickity.children;
      const _cheldrenLength = cheldren.length;
      let _pages =
        _cheldrenLength - flickity.clientWidth / cheldren[0].clientWidth;
      let _scrollLeft = flickity.scrollLeft;

      this.pages = _pages + 1;

      this.pageScroll = Math.ceil(
        (Math.floor(_scrollLeft) + cheldren[0].clientWidth) /
          cheldren[0].clientWidth
      );
      flickity.addEventListener("scroll", () => {
        _scrollLeft = flickity.scrollLeft;
        _pages =
          _cheldrenLength - flickity.clientWidth / cheldren[0].clientWidth;

        this.pageScroll = Math.ceil(
          (Math.floor(_scrollLeft) + cheldren[0].clientWidth) /
            cheldren[0].clientWidth
        );
      });
    },
  },

  props: {
    Moderator: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.teamsOf {
  .flickity {
    overflow: scroll;
    align-items: stretch;
    transition: scroll all 1s;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .box {
    height: 100%;
    background: #ffffff;
    img {
      width: 80px;
    }
  }

  .pages_scroll {
    span {
      display: inline-block;
      margin: 8px;
      border: 1px solid #2f6eb6;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
