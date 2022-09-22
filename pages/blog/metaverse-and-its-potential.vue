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
          {{ content.metaverse_and_its_potential }}
        </div>
        <nuxt-link
          to="/blog/what-is-gym-network"
          class="
            next-btn
            border border-secondary border-2
            p-2
            px-md-4
            cp
            d-flex
            align-items-center
            text-secondary
          "
        >
          <span class="d-none d-md-inline">{{ content.next_article }}</span>

          <b-icon icon="arrow-right-short" class="h4 m-0 md-sm-2"></b-icon>
        </nuxt-link>
      </div>

      <div class="Body py-5 d-xl-flex">
        <div class="content col-xl-8">
          <div class="d-md-flex justify-content-between align-items-center">
            <h1 class="fw-bold">{{ content.metaverse_and_its_potential }}</h1>
            <div class="text-secondary fw-600 text-end">
              <b-icon icon="calendar-event"></b-icon>
              10.08.22
            </div>
          </div>
          <img src="~/assets/images/blog/Metaverse.jpg" alt="" class="w-100" />

          <div
            class="paragraph"
            v-html="content.metaverse_and_its_potential_intro"
          ></div>

          <h2>{{ content.table_of_contents }}</h2>
          <ul>
            <li>
              <a href="#metaverse">{{ content.Metaverse_the_hype_is_on }}</a>
            </li>
            <li>
              <a href="#what-metaverse">{{ content.What_is_the_Metaverse }}</a>
            </li>
            <li>
              <a href="#there-metaverse">{{
                content.There_is_not_the_one_metaverse
              }}</a>
            </li>
            <li>
              <a href="#best">{{
                content.The_best_known_Metaverse_projects
              }}</a>
            </li>
            <li>
              <a href="#world">{{
                content.The_world_of_finance_in_metaverse
              }}</a>
            </li>
            <li>
              <a href="#potential">{{ content.The_potential_of_Metaverse }}</a>
            </li>
            <li>
              <a href="#invest">{{ content.Invest_in_Metaverse }}</a>
            </li>
            <li>
              <a href="#street">{{
                content.GYM_Street_the_exceptional_metaverse
              }}</a>
            </li>
            <li>
              <a href="#conclusion">{{
                content.Conclusion_Metaverse_and_its_potential
              }}</a>
            </li>
          </ul>

          <img
            src="~/assets/images/blog/Metaverse_2.png"
            alt=""
            class="w-100"
          />

          <div class="py-1" id="metaverse">
            <h2>{{ content.Metaverse_the_hype_is_on }}</h2>
            <div
              class="paragraph"
              v-html="content.Metaverse_the_hype_is_on__content"
            ></div>
          </div>

          <div class="py-1" id="what-metaverse">
            <h2>{{ content.What_is_the_Metaverse }}</h2>
            <div
              class="paragraph"
              v-html="content.What_is_the_Metaverse_content"
            ></div>
          </div>

          <div class="py-1" id="there-metaverse">
            <h2>{{ content.There_is_not_the_one_metaverse }}</h2>
            <div
              class="paragraph"
              v-html="content.There_is_not_the_one_metaverse_content"
            ></div>
          </div>

          <div class="py-1" id="best">
            <h2>{{ content.The_best_known_Metaverse_projects }}</h2>
            <div
              class="paragraph"
              v-html="content.The_best_known_Metaverse_projects_content"
            ></div>
          </div>

          <div class="py-1" id="world">
            <h2>{{ content.The_world_of_finance_in_metaverse }}</h2>
            <div
              class="paragraph"
              v-html="content.The_world_of_finance_in_metaverse_content"
            ></div>
          </div>

          <div class="py-1" id="potential">
            <h2>{{ content.The_potential_of_Metaverse }}</h2>
            <div
              class="paragraph"
              v-html="content.The_potential_of_Metaverse_content"
            ></div>
          </div>
          <img
            src="~/assets/images/blog/Metaverse_3.png"
            alt=""
            class="w-100"
          />

          <div class="py-1" id="invest">
            <h2>{{ content.Invest_in_Metaverse }}</h2>
            <div
              class="paragraph"
              v-html="content.Invest_in_Metaverse_content"
            ></div>
          </div>
          <div class="py-1" id="street">
            <h2>{{ content.GYM_Street_the_exceptional_metaverse }}</h2>
            <div
              class="paragraph"
              v-html="content.GYM_Street_the_exceptional_metaverse_content"
            ></div>

            <nuxt-link
              to="/eco_system/#StreetMetaverse"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc"
            >
              {{ content.go_to_GYM_Street }}</nuxt-link
            >
          </div>

          <div class="py-1" id="conclusion">
            <h2>{{ content.Conclusion_Metaverse_and_its_potential }}</h2>
            <div
              class="paragraph"
              v-html="content.Conclusion_Metaverse_and_its_potential_content"
            ></div>
          </div>
          <div class="py-2">
            <div
              class="paragraph"
              v-html="content.metaverse_and_its_potential_conclusion"
            ></div>
            <nuxt-link
              to="/blog"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc"
            >
              {{ content.To_the_blog }}</nuxt-link
            >
          </div>

          <ShareLink title="Metaverse and its potential" />
        </div>
        <div
          class="sidbar my-4 col-xl-4 p-lg-3 pe-lg-0 mt-lg-5 pt-lg-5 ps-xl-5"
        >
          <CopyLink />
        </div>
      </div>
    </div>
    <InterestedArticles _id="3" />
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
