<template>
  <div class="box h-100">
    <div class="Border d-none d-md-block" :class="`Border-${_id}`">
      <span></span>
    </div>

    <div class="content" :class="(_id - 1) % 2 > 0 ? 'box_down' : 'box_up'">
      <div class="img text-center">
        <img :src="img" alt="" />
      </div>
      <div class="">
        <span class="text-secondary fw-600">{{ date }}</span>
        <h5 class="fw-bold">{{ title }}</h5>
        <p class="pc">{{ text }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    _id: {
      required: true,
      type: String,
    },
    img: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  .content {
    margin-top: 30px;
    img {
      max-width: 150px;
    }
  }
  @media (min-width: 768px) {
    .Border {
      position: absolute;
      top: 285px;

      span {
        width: 14px;
        height: 14px;
        position: absolute;
        top: -4px;
        left: 0px;
        background: #021547;
        border-radius: 50%;
      }
    }

    .content {
      width: 250px;
      margin-top: 0px;

      img {
        width: 120px;
      }
    }

    .box_up {
      img {
        margin-bottom: -15px;
      }
    }

    .box_down {
      display: flex;
      flex-direction: column-reverse;
      margin-top: 300px;

      img {
        margin-top: -15px;
      }
    }
  }
}
</style>
