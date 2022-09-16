<template>
  <section class="bg-light py-5">
    <div class="text-center container py-4">
      <h1 class="fw-bolder">
        {{ content.join_telegram_group }}
      </h1>
      <p class="fw-600 py-3 pc">
        {{ content.join_telegram_group_desc }}
      </p>
      <a
        href="https://t.me/gymnetwork_english"
        target="blank"
        class="BTN cp bg-ba rounded-50 text-light mt-4 fw-600 box-sh-l"
      >
        {{ content.join_now }}
        <img src="~/assets/images/telegram.png" class="telegram-img" alt="" />
      </a>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["content"]),
  },
};
</script>

<style lang="scss" scoped>
.BTN {
  padding: 13px 35px;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 50px;
  }
}
</style>
