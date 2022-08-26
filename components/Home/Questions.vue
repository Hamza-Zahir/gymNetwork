<template>
  <section id="FAQ" class="my-5">
    <div class="container">
      <div class="row m-0">
        <div class="title col-lg-4">
          <h1 class="fw-bold my-3 mt-md-5">Frequently Asked Questions</h1>
        </div>
        <div class="px-lg-3 col-lg-8">
          <div v-for="(quest, i) in questions" :key="`question-${i}`">
            <Question_card :question="quest" />
          </div>
          <a href="" class="d-block mt-4 fw-600 p-3">Learn more</a>
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
      questions: questions,
    };
  },
  components: { Question_card },
};
</script>
<style lang="scss" scoped>
a{
  text-decoration: none;
}</style>
