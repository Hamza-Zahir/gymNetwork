<template>
  <div class="box h-100">
    <div
      class="text col border rounded-15 bg-white text-bd p-3 d-flex flex-column justify-content-between"
    >
      <div class="">
        <h1 class="text-end fw-bolder">/0{{ data.id }}</h1>
        <h4 class="fw-bold my-3">{{ data.title }}</h4>
        <p class="pc my-3">{{ data.text }}</p>
      </div>
      <a :href="data.link.url" class="text-dark fs-14 fw-600 text-end mt-3">
        {{ data.link.text }}
        <b-icon icon="arrow-up-right" class="m-0"></b-icon>
      </a>
    </div>
    <div class="box-img rounded-15 d-none d-md-block">
      <img :src="data.img" class="w-100" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  cursor: pointer;
  min-height: 200px;

  &:hover {
    z-index: 99;
    .text {
      transform: translateY(-10px);
      background: #153151 !important;
      * {
        color: white !important;
      }
    }
  }

  * {
    transition: all 0.5s ease;
  }

  .text {
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .box-img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0px;
    overflow: hidden;
    img {
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    min-height: 270px;
    &:hover {
      .text {
        transform: translateY(40px) rotate(7deg);
        background: #153151 !important;
        z-index: 9;
        * {
          color: white !important;
        }
      }
      .box-img {
        transform: translateY(-40px) rotate(-7deg);
      }
    }
  }
  @media (min-width: 992px) {
    min-height: 300px;
    &:hover {
      .text {
        transform: rotate(10deg) translateY(7px);
        background: #153151 !important;
        * {
          color: white !important;
        }
      }
      .box-img {
        transform: translateY(-70px) rotate(-10deg);
      }
    }
  }
}
</style>
