<template>
  <nuxt-link
    :to="`/blog/${blog.link}`"
    class="
      card
      d-flex
      flex-column
      justify-content-between
      bg-light
      border
      rounded-20
      h-100
    "
    ><div class="">
      <div class="img d-flex justify-content-center align-items-center">
        <img
          :src="require(`~/assets/images/blog/${blog.img}`)"
          alt=""
          class=""
        />
      </div>

      <div class="text p-2 p-sm-3 py-lg-1 my-xl-4 mt-lg-3">
        <div class="h5 my-3 my-sm-2 text-bd fw-bold">{{ blog.title }}</div>
        <p class="pc pt-lg-2 py-xl-3">{{ blog.text }}</p>
      </div>
    </div>

    <div class="foter pc text-end fw-600 m-3 mt-lg-0">
      <small>{{ blog.date }}</small>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    blog: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  box-shadow: 0px 0px 4px 0px #000000b4;
  transition: 0.5s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 8px black;
  }
  .img {
    overflow: hidden;
    img {
      height: 100%;
      min-height: 200px;
      min-width: 100%;
      max-width: 170%;
    }
  }
  @media (min-width: 992px) {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    min-height: 450px;
  }
  @media (min-width: 1200px) {
    min-height: 500px;
  }
}
</style>
