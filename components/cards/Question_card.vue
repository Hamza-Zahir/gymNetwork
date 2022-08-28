<template>
  <div class="">
    <div class="border-bottom">
      <div
        class="head cp d-flex justify-content-between py-4 px-2"
        @click="ShowAnswer(`showAnswer-${id}`)"
        :class="showAnswer ? `bg-bl showAnswer-${id}` : `showAnswer-${id}`"
      >
        <h4 class="m-0">{{ question.question }}</h4>
        <b-icon
          v-if="!showAnswer"
          icon="chevron-down"
          class="h4 m-0 p-0 text-secondary"
        ></b-icon>
        <b-icon
          v-if="showAnswer"
          icon="x-lg"
          class="m-0 p-0 text-secondary"
        ></b-icon>
      </div>
      <div v-if="showAnswer" class="col-12 pt-3 pc">
        <p class="p-2">{{ question.answers }}</p>
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
        console.log(e.target);
      });
    },
    async ShowAnswer(_class) {
      await this.headOptions(_class).then((this.showAnswer = !this.showAnswer));
    },
  },
  props: {
    question: {
      required: true,
      type: Object,
    },
    id: {
      required: true,
      type: Number,
    },
  },
};
</script>
<style lang="scss" scoped>
p {
  font-size: 17px;
  letter-spacing: 0.6px;
  line-height: 1.6;
}
.head {
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
.bg-bl {
  background: #e4f5ff;
}
</style>
