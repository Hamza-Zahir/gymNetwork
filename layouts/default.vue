<template>
  <div class="app-default" :class="$route.path == '/' ? 'bg-bd' :''">

    <div id="HeadApp" class="">
      <contractLinks  v-if="$route.path == '/'"/>

      <Header />
    </div>
    <div class="content">

      <Nuxt />
    </div>

    <Footer />

  </div>
</template>

<style lang="scss" scoped>
.app-default {
  overflow: hidden;
  position: relative;
  min-height: 100vh;
  #HeadApp {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
  }
}
</style>

<script>

export default {
  data() {
    return {

    };
  },

  // methods: {
  //   getTopSpising() {
  //     const hight = document.getElementById("HeadApp");
  //     this.marginTop = `${hight.offsetHeight}px`;
  //   },
  // },
  // mounted() {
  //   this.getTopSpising();
  // },
};
</script>
