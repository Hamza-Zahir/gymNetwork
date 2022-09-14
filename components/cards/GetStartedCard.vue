<template>
  <div class="box h-100">
    <a
      :href="link_url"
      :target="link_url ? '_blank' : ''"
      class="text col border border-dark rounded-15 bg-white text-bd d-flex flex-column justify-content-between p-4 px-md-2 py-md-3 p-lg-4"

      >
      <div class="" >
        <h1 class="text-end fw-bolder">/0{{ _id }}</h1>
        <h4 class="fw-bold my-3">{{ title }}</h4>
        <p class="pc my-3">{{ text }}</p>
      </div>
      <div class="fs-14 fw-600 text-end mt-4 pc">
        {{link_url? link_text : "Coming Soon"}}
        <b-icon v-if="link_url" icon="arrow-up-right" class="m-0"></b-icon>
      </div>
    </a>
    <div class="box-img rounded-15 d-none d-md-block">
      <img :src="img" class="w-100" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link_url: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    link_text: {
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
    transition: transform 0.4s ease;
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
    &:hover {
      .text {
        transform: translateY(10px) rotate(5deg);
        background: #153151 !important;
        z-index: 9;

        * {
          color: white !important;
        }
      }
      .box-img {
        transition: 0.7s ease;
        transform: translateY(-80px) rotate(-5deg);
      }
    }
  }
  @media (min-width: 992px) {
    min-height: 350px;
    font-size: 18px;
    a {
      font-size: 18px;
    }

    &:hover {
      .box-img {
        transform: translateY(-100px) rotate(-5deg);
      }
    }
  }

}
</style>
