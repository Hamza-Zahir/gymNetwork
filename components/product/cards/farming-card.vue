<template>
  <div class="box rounded-20 border border-info mt-2">
    <h1 class="d-flex justify-content-between align-items-center m-0 text-light">
      <span>{{ data.title }}</span>
      <b-icon v-if="showContent" icon="chevron-up" @click="showContent = !showContent" class="m-0 p-0"></b-icon>
      <b-icon v-if="!showContent" icon="chevron-down" @click="showContent = !showContent" class="m-0 p-0"></b-icon>
    </h1>
    <div class="bg-bl px-3 py-3 fw-500" v-if="showContent">
      <p v-for="(tex, i) in data.text" :key="`${data.title}-${i + 1}`">
        {{ tex }}
      </p>
      <div class="bg-ba text-light py-2 text-center fw-600 col rounded-15 mt-4 box-sh-l">Start now</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      required: true,
      type: Object,
    }

  },
  data() {
    return {
      showContent: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  overflow: hidden;
  h1{
    background: url("~/assets/images/Rectangle.png");
    background-size: cover;
    padding: 30px 20px;
  }
}
</style>
