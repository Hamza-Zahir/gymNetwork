<template>
  <div class="Blog bg-wh" :style="` margin-top : ${marginTop}`">
    <Landing />
    <BlogsMenu />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Landing from "~/components/Blog/Landing.vue";
import BlogsMenu from "~/components/Blog/BlogsMenu.vue";
export default {
  components: { Landing, BlogsMenu },
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

<style lang="scss" scoped>
.Blog {
  min-height: calc(100vh - 445px);
}
</style>
