<template>
  <div class="bg-wh" :style="` margin-top : ${marginTop}`">
    <div class="container py-4">
      <div
        class="
          Head
          d-flex
          align-items-center
          justify-content-between
          fw-600
          py-2
        "
      >
        <div class="phat">
          <span class="text-secondary">{{ content.blog }}</span> /
          {{ content.how_can_you_earn_money_with_GYM_Network }}
        </div>
        <nuxt-link
          to="/blog/gym-street-and-its-ecosystem"
          class="
            next-btn
            border border-secondary border-2
            p-2
            px-lg-4
            cp
            d-flex
            align-items-center
            text-secondary
          "
        >
          <span class="d-none d-lg-inline">{{ content.next_article }}</span>

          <b-icon icon="arrow-right-short" class="h4 m-0 ms-lg-2"></b-icon>
        </nuxt-link>
      </div>

      <div class="Body py-5 d-xl-flex">
        <div class="content col-xl-8">
          <div class="">
            <h1 class="fw-bold">
              {{ content.how_can_you_earn_money_with_GYM_Network }}
            </h1>
            <div class="text-secondary fw-600 text-end">
              <b-icon icon="calendar-event"></b-icon>
              11.08.22
            </div>
          </div>
          <img src="~/assets/images/blog/earnMoney.jpg" alt="" class="w-100" />

          <div
            class="paragraph"
            v-html="content.how_can_you_earn_money_with_GYM_Network_intro"
          ></div>

          <h2>{{ content.table_of_contents }}</h2>

          <ul>
            <li>
              <a href="#what_is_GYM_Network">{{
                content.What_is_GYM_Network
              }}</a>
            </li>
            <li>
              <a href="#staking">{{
                content.Staking_farming_liquidity_mining
              }}</a>
            </li>
            <li>
              <a href="#what-staking">{{ content.What_is_staking }}</a>
            </li>
            <li>
              <a href="#yield">{{ content.What_is_yield_farming }}</a>
            </li>
            <li>
              <a href="#mining">{{ content.What_is_liquidity_mining }}</a>
            </li>
            <li>
              <a href="#crypto">{{ content.How_to_earn_crypto_with_GYM }}</a>
            </li>
            <li>
              <a href="#vault">{{ content.GYM_vault }}</a>
            </li>
            <li>
              <a href="#farming">{{ content.GYM_farming }}</a>
            </li>
            <li>
              <a href="#single">{{ content.single_pool }}</a>
            </li>
            <li>
              <a href="#affiliate">{{ content.affiliate_layer_solution }}</a>
            </li>
            <li>
              <a href="#started">{{
                content.how_can_you_get_started_with_GYM_Network
              }}</a>
            </li>
          </ul>

          <img
            src="~/assets/images/blog/earnMoney_2.png"
            alt=""
            class="w-100"
          />

          <div class="py-1" id="what_is_GYM_Network">
            <h2>{{ content.What_is_GYM_Network }}</h2>
            <div
              class="paragraph"
              v-html="content.What_is_GYM_Network_content"
            ></div>
          </div>

          <div class="py-1" id="staking">
            <h2>{{ content.Staking_farming_liquidity_mining }}</h2>
            <div
              class="paragraph"
              v-html="content.Staking_farming_liquidity_mining_content"
            ></div>
          </div>

          <div class="py-1" id="what-staking">
            <h2>{{ content.What_is_staking }}</h2>
            <div
              class="paragraph"
              v-html="content.What_is_staking_content"
            ></div>
          </div>

          <div class="py-1" id="yield">
            <h2>{{ content.What_is_yield_farming }}</h2>
            <div
              class="paragraph"
              v-html="content.What_is_yield_farming_content"
            ></div>
          </div>
          <div class="py-1" id="mining">
            <h2>{{ content.What_is_liquidity_mining }}</h2>
            <div
              class="paragraph"
              v-html="content.What_is_liquidity_mining_content"
            ></div>
          </div>
          <div class="py-1" id="crypto">
            <h2>{{ content.How_to_earn_crypto_with_GYM }}</h2>
            <div
              class="paragraph"
              v-html="content.How_to_earn_crypto_with_GYM_content"
            ></div>
          </div>
          <div class="py-1" id="vault">
            <h2>{{ content.GYM_vault }}</h2>
            <div class="paragraph" v-html="content.GYM_vault_content"></div>
            <nuxt-link
              to="/product/#Vault"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l my-3 w-fc"
            >
              {{ content.go_to_the_vault }}
            </nuxt-link>
          </div>
          <div class="py-1" id="farming">
            <h2>{{ content.GYM_farming }}</h2>
            <div class="paragraph" v-html="content.GYM_farming_content"></div>
          </div>
          <img
            src="~/assets/images/blog/earnMoney_3.png"
            alt=""
            class="w-100"
          />

          <div class="py-1" id="single">
            <h2>{{ content.single_pool }}</h2>
            <div class="paragraph" v-html="content.single_pool_content"></div>
          </div>
          <div class="py-1" id="affiliate">
            <h2>{{ content.affiliate_layer_solution }}</h2>
            <div
              class="paragraph"
              v-html="content.affiliate_layer_solution_content"
            ></div>
          </div>
          <div class="py-1" id="started">
            <h2>{{ content.how_can_you_get_started_with_GYM_Network }}</h2>
            <div
              class="paragraph"
              v-html="content.how_can_you_get_started_with_GYM_Network_content"
            ></div>
            <nuxt-link
              to="/#GetStarted"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l my-3 w-fc"
            >
              {{ content.start_now }}
            </nuxt-link>
          </div>
          <div class="py-2">
            <div class="paragraph" v-html="content.how_can_you_earn_money_with_GYM_Network_conclusion"></div>
            <nuxt-link
              to="/blog"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc"
            >
              {{content.To_the_blog}}</nuxt-link>
          </div>
        
          <ShareLink title="How can you earn money with GYM Network?" />
        </div>
        <div
          class="sidbar my-4 col-xl-4 p-lg-3 pe-lg-0 mt-lg-5 pt-lg-5 ps-xl-5"
        >
          <div class="mt-5"><CopyLink /></div>
        </div>
      </div>
    </div>
    <InterestedArticles _id="1" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import InterestedArticles from "~/components/Blog/InterestedArticles.vue";
import CopyLink from "~/components/Blog/CopyLink.vue";
import ShareLink from "~/components/Blog/ShareLink.vue";
export default {
  components: { InterestedArticles, CopyLink, ShareLink },
  mounted() {
    this.getmarginTop();
  },
  methods: {
    ...mapActions(["getmarginTop"]),
  },
  computed: {
    ...mapGetters(["marginTop", "content"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/style/blog.scss";
</style>
