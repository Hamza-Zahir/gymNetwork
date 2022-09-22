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
        <div class="phat mt-3">
          <span class="text-secondary">{{ content.blog }}</span> /
          {{ content.What_is_GYM_Network }}
        </div>
      </div>

      <div class="Body py-5 d-xl-flex">
        <div class="content col-xl-8">
          <div class="d-md-flex justify-content-between align-items-center">
            <h1 class="fw-bold">{{ content.What_is_GYM_Network }}</h1>
            <div class="text-secondary fw-600 text-end">
              <b-icon icon="calendar-event"></b-icon>
              10.08.22
            </div>
          </div>
          <img src="~/assets/images/blog/GYMNetwork.jpg" alt="" class="w-100" />

          <div
            class="paragraph"
            v-html="content.What_is_GYM_Network_intro"
          ></div>

          <h2>{{ content.table_of_contents }}</h2>
          <ul>
            <li>
              <a href="#GymNetwork">{{
                content.GYM_Network_A_DeFi_Aggregator_Investment_System
              }}</a>
            </li>
            <li>
              <a href="#Mission">{{ content.The_mission_of_GYM_Network }}</a>
            </li>
            <li>
              <a href="#solutions">{{ content.solutions_from_GYM_Network }}</a>
            </li>
            <li>
              <a href="#GymVault">{{ content.GYM_vault }}</a>
            </li>
            <li>
              <a href="#GymFarming">{{ content.GYM_farming }}</a>
            </li>
            <li>
              <a href="#SinglePool">{{ content.single_pool }}</a>
            </li>
            <li>
              <a href="#affiliate">{{ content.affiliate_layer_solution }}</a>
            </li>
            <li>
              <a href="#Makes">{{
                content.What_makes_GYM_Network_so_unique
              }}</a>
            </li>
            <li>
              <a href="#Getstarted"
                >{{ content.How_do_I_get_started_with_GYM_Network }}
              </a>
            </li>
            <li>
              <a href="#Conclusion">{{
                content.conclusion_about_GYM_Network
              }}</a>
            </li>
          </ul>
          <img
            src="~/assets/images/blog/GYMNetwork_2.png"
            alt=""
            class="w-100"
          />
          <div class="py-1" id="GymNetwork">
            <h2>
              {{ content.GYM_Network_A_DeFi_Aggregator_Investment_System }}
            </h2>
            <div
              class="paragraph"
              v-html="
                content.GYM_Network_A_DeFi_Aggregator_Investment_System_content
              "
            ></div>
          </div>
          <div class="py-1" id="Mission">
            <h2>{{ content.The_mission_of_GYM_Network }}</h2>
            <div
              class="paragraph"
              v-html="content.The_mission_of_GYM_Network_content"
            ></div>
          </div>

          <div class="py-1" id="solutions">
            <h2>{{ content.solutions_from_GYM_Network }}</h2>
            <div
              class="paragraph"
              v-html="content.solutions_from_GYM_Network_content"
            ></div>
          </div>

          <div class="py-1" id="GymVault">
            <h2>{{ content.GYM_vault }}</h2>
            <div
              class="paragraph"
              v-html="content.WIGN_GYM_vault_content"
            ></div>
            <nuxt-link
              to="/product/#Vault"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc"
              >{{ content.To_the_Vault }}</nuxt-link
            >
          </div>
          <div class="py-1" id="GymFarming">
            <h2>{{ content.GYM_farming }}</h2>
            <div
              class="paragraph"
              v-html="content.WIGN_GYM_vault_content_content"
            ></div>
          </div>
          <div class="py-1" id="SinglePool">
            <h2>{{ content.single_pool }}</h2>
            <div
              class="paragraph"
              v-html="content.WIGN_single_pool_content"
            ></div>
          </div>
          <img
            src="~/assets/images/blog/GYMNetwork_3.png"
            alt=""
            class="w-100"
          />
          <div class="py-1" id="affiliate">
            <h2>{{ content.affiliate_layer_solution }}</h2>
            <div
              class="paragraph"
              v-html="content.WIGN_affiliate_layer_solution_content"
            ></div>
            <nuxt-link
              to="/product/#AffiliateSystem"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc my-3"
            >
              {{ content.start_now }}</nuxt-link
            >
          </div>
          <div class="py-1" id="Makes">
            <h2>{{ content.What_makes_GYM_Network_so_unique }}</h2>
            <div
              class="paragraph"
              v-html="content.What_makes_GYM_Network_so_unique_content"
            ></div>
            <nuxt-link
              to="/#Roadmap"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc"
            >
              {{ content.about_the_roadmap }}</nuxt-link
            >
          </div>
          <div class="py-1" id="Getstarted">
            <h2>{{ content.How_do_I_get_started_with_GYM_Network }}</h2>
            <div
              class="paragraph"
              v-html="content.How_do_I_get_started_with_GYM_Network_content"
            ></div>

            <nuxt-link
              to="/#GetStarted"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc"
            >
              {{ content.start_now }}</nuxt-link
            >
          </div>
          <div class="py-1" id="Conclusion">
            <h2>{{ content.conclusion_about_GYM_Network }}</h2>
            <div
              class="paragraph"
              v-html="content.conclusion_about_GYM_Network_content"
            ></div>
          </div>
          <div class="py-2">
            <div
              class="paragraph"
              v-html="content.What_is_GYM_Network_conclusion"
            ></div>

            <nuxt-link
              to="/blog"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc"
            >
              {{content.To_the_blog}}</nuxt-link
            >
          </div>

          <ShareLink title="What is GYM Network?" />
        </div>

        <div
          class="sidbar my-4 col-xl-4 p-lg-3 pe-lg-0 mt-lg-5 pt-lg-5 ps-xl-5"
        >
          <CopyLink />
        </div>
      </div>
    </div>
    <InterestedArticles _id="4" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import InterestedArticles from "~/components/Blog/InterestedArticles.vue";
import CopyLink from "~/components/Blog/CopyLink.vue";
import ShareLink from "~/components/Blog/ShareLink.vue";

export default {
  mounted() {
    this.getmarginTop();
  },
  methods: {
    ...mapActions(["getmarginTop"]),
  },
  computed: {
    ...mapGetters(["marginTop", "content"]),
  },
  components: { InterestedArticles, CopyLink, ShareLink },
};
</script>

<style lang="scss" scoped>
@import "~/assets/style/blog.scss";
</style>
