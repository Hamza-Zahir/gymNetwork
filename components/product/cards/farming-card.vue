<template>
  <div class="box rounded-20 border border-info mt-2">
    <h1
      class="
        d-flex
        cp
        justify-content-between
        align-items-center
        m-0
        text-light
      "
      :class="position"
      @click="
        () => {
          ShowContent(position);
        }
      "
    >
      <span>{{ data.title }}</span>
      <span :style="showContent ? 'transform: rotate(-180deg);' : ''">
        <b-icon icon="chevron-down" class="m-0 p-0"></b-icon>
      </span>
    </h1>
    <div class="bg-bl fw-500 Content" :class="showContent ? 'showContent' : ''">
      <p class="" v-for="(tex, i) in data.text" :key="`${data.title}-${i + 1}`">
        {{ tex }}
      </p>
      <a
        href="https://gymnetwork.io/dashboard/"
        target="_blank"
        class="
          BTN
          bg-ba
          col-12
          text-light text-center
          fw-600
          rounded-20
          mt-4
          box-sh-l
        "
      >
        Start now
      </a>
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
    position: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    async headContent(_class) {
      document.addEventListener("click", (e) => {
        if (!e.target.classList.contains(_class)) {
          this.showContent = false;
        }
      });
    },
    async ShowContent(_class) {
      await this.headContent(_class);
      this.showContent = !this.showContent;
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  overflow: hidden;
  * {
    transition: 0.2s ease-out;
  }
  h1 {
    background: url("~/assets/images/Rectangle.png");
    background-size: cover;
    padding: 30px 20px;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 3;
    }
  }

  .Content {
    max-height: 0;
    transition: max-height 0.25s ease-out;
    overflow: hidden;
  }
  .showContent {
    max-height: 800px;
    transition: max-height 0.35s ease-in;
    padding: 20px;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .BTN {
    padding: 11px 30px;
  }
}
</style>
