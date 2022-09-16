<template>
  <div class="">
    <div class="border-bottom question">
      <div
        class="head cp d-flex justify-content-between py-4 px-2"
        @click="
          () => {
            ShowAnswer(`showAnswer-${id}`);
          }
        "
        :class="`showAnswer-${id}`"
      >
        <span class="bg-bl" :style="showAnswer ? 'height: 100%;' : ''"></span>
        <h4 class="m-0">{{ question }}</h4>
        <b-icon
          icon="chevron-down"
          :style="showAnswer ? 'transform: rotate(-180deg);' : ''"
          class="h4 m-0 p-0 text-secondary"
        ></b-icon>
      </div>
      <div
        class="col-12 pc pt-1 Answer"
        :class="showAnswer ? 'showAnswer' : ''"
      >
        <p class="p-3 pt-4">{{ answers }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showAnswer: false,
    };
  },
  methods: {
    async headOptions(_class) {
      document.addEventListener("click", (e) => {
        if (!e.target.classList.contains(_class)) this.showAnswer = false;
      });
    },
    async ShowAnswer(_class) {

      this.headOptions(_class);
      this.showAnswer = !this.showAnswer;
    },
  },
  props: {
    question: {
      required: true,
      type: String,
    },
    id: {
      required: true,
      type: Number,
    },
    answers: {
      required: true,
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
p {
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.7;
}
.head {
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
  }
  span.bg-bl {
    background: #e4f5ff;
    width: 100%;
    height: 0%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
}

.question {
  * {
    transition: 0.2s ease-out;
  }
  .Answer {
    max-height: 0;
    transition: max-height 0.4s ease-out;
    overflow: hidden;
  }
  .showAnswer {
    max-height: 1000px;
    transition: max-height 0.5s ease-in;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
