<template>
  <div class="box col-lg-3 mt-4 mt-sm-0 p-sm-3">
    <div
      class="
        content
        d-sm-flex d-lg-block
        align-items-center
        justify-content-between
        rounded-20
        border border-info
        bg-bl
        p-3
        h-100
      "
    >
      <span class="label bg-bd rounded-circle fw-600">{{ _id }}</span>
      <div class="img rounded-15 col-sm-5 col-lg-12">
        <img :src="img" alt="" />
      </div>
      <div class="text mt-3 ms-sm-3 ms-lg-0 col">
        <h5 class="m-0 fw-600">{{ title }}</h5>
        <p class="text-secondary mt-2 my-sm-1 my-lg-2">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
    img: {
      required: true,
      type: String,
    },
    _id: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  .content {
    position: relative;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    color: white;
    position: absolute;
    top: -17px;
    left: 0px;
  }

  .img {
    overflow: hidden;
    text-align: center;

    img {
      max-width: 100%;
      margin: 0 auto;
    }
  }

  @media (min-width: 576px) {
    max-width: 100%;
  }

  @media (min-width: 992px) {
    min-height: 400px;
  }
}
</style>
