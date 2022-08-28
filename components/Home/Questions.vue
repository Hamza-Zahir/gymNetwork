<template>
  <section id="FAQ" class="my-5">
    <div class="container">
      <div class="row m-0">
        <div class="title col-lg-4">
          <h1 class="fw-bold my-3 mt-md-5">Frequently Asked Questions</h1>
        </div>
        <div class="px-lg-3 col-lg-8">
          <div v-if="!showMoreQuestion">
            <div v-for="i in 4" :key="`question-${i}`">
              <Question_card :question="questions[i - 1]" :id="i" />
            </div>
          </div>
          <span
            v-if="!showMoreQuestion"
            @click="showMoreQuestion = !showMoreQuestion"
            class="d-block mt-4 fw-600 p-3 text-primary cp"
            >Learn more
          </span>
          <div v-if="showMoreQuestion">
            <div v-for="i in questions.length" :key="`question-${i}`">
              <Question_card :question="questions[i - 1]" :id="i" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import questions from "~/json/Questions.json";
import Question_card from "../cards/Question_card.vue";

export default {
  data() {
    return {
      questions,
      // FirstQuestions: questions.splice(0, 4),
      // moreQuestion: questions.splice(3),
      showMoreQuestion: false,
    };
  },
  components: { Question_card },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
