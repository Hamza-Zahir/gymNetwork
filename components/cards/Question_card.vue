<template>
  <div class="">
    <div class="border-bottom py-3">
      <div
        class="head cp d-flex justify-content-between"
        @click="showAnswer = !showAnswer"
      >
        <h3 class="m-0">{{ question.question }}</h3>
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
        <div v-for="(answer, i) in question.answers" :key="`answer-${i + 1}`">
          <div class="">
            <span class="" v-for="(ans, i) in answer" :key="`ans-${i + 1}`">
              <span v-if="typeof ans == 'object'">
                <a :href="ans.src">{{ ans.key }}</a>
              </span>
              <span v-if="typeof ans == 'string'">
                {{ ans }}
              </span>
            </span>
          </div>
          <br />
        </div>
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
  props: {
    question: {
      required: true,
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped></style>
