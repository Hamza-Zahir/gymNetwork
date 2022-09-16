<template>
  <section id="FAQ" class="py-5 bg-wh">
    <div class="container">
      <div class="row m-0">
        <div class="title col-lg-4">
          <h1 class="fw-bold my-3 mt-md-5">{{ content.faq }}</h1>
        </div>
        <div class="px-lg-3 col-lg-8">
          <div>
            <div v-for="i in questionsKeys.length" :key="`question-${i}`">
              <Question_card
                v-if="showMoreQuestion || i < 5"
                :question="Encontent[questionsKeys[i - 1][0]]"
                :answers="Encontent[questionsKeys[i - 1][1]]"
                :id="i"
              />
            </div>
          </div>
          <span
            v-if="!showMoreQuestion"
            @click="showMoreQuestion = !showMoreQuestion"
            class="d-block mt-4 fw-600 p-3 text-primary cp"
            >{{ content.learn_more }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";

import Question_card from "../cards/Question_card.vue";
import Encontent from "~/plugins/en";
const questionsKeys = [
  ["what_defi", "what_defi_desc"],
  ["what_smart_contract", "what_smart_contract_desc"],
  ["what_liquidity_meaning", "what_liquidity_meaning_desc"],
  ["what_liquidity_pool", "what_liquidity_pool_desc"],
  ["what_dao", "what_dao_desc"],
  ["what_dao_governance", "what_dao_governance_desc"],
  ["how_use_network", "how_use_network_desc"],
  ["which_wallet_use_to_connect", "which_wallet_use_to_connect_desc"],
  ["what_apy_apr", "what_apy_apr_desc"],
  ["where_rewords_vaults_come_from", "where_rewords_vaults_come_from_desc"],
  ["who_what_alpaca", "who_what_alpaca_desc"],
  ["what_binance", "what_binance_desc"],
  ["what_do_with_gymnet", "what_do_with_gymnet_desc"],
  ["where_gymnet_lysted", "where_gymnet_lysted_desc"],
  ["where_find_tutorials", "where_find_tutorials_desc"],
  ["how_affiliate_work", "how_affiliate_work_desc"],
];
export default {
  computed: {
    ...mapGetters(["content"]),
  },
  data() {
    return {
      questionsKeys,
      showMoreQuestion: false,
      Encontent,
    };
  },
  components: { Question_card },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
h1 {
  @media (min-width: 992px) {
    font-size: 40px;
  }
  @media (min-width: 1200px) {
    font-size: 45px;
  }
  @media (min-width: 1400px) {
    font-size: 53px;
  }
}
</style>
