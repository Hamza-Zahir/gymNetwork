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
          <span class="text-secondary">{{content.blog}}</span> / {{content.gym_street_and_its_ecosystem}}
        </div>
        <nuxt-link
          to="/blog/metaverse-and-its-potential"
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
          <span class="d-none d-md-inline">{{content.next_article}}</span>

          <b-icon icon="arrow-right-short" class="h4 m-0 ms-md-2"></b-icon>
        </nuxt-link>
      </div>

      <div class="Body py-5 d-xl-flex">
        <div class="content col-xl-8">
          <div class="d-md-flex justify-content-between align-items-center">
            <h1 class="fw-bold">{{content.gym_street_and_its_ecosystem}}</h1>
            <div class="text-secondary fw-600 text-end">
              <b-icon icon="calendar-event"></b-icon>
              10.08.22
            </div>
          </div>
          <img src="~/assets/images/blog/ecosystem.jpg" alt="" class="w-100" />
          <div
            class="paragraph"
            v-html="content.gym_street_and_its_ecosystem_intro"
          ></div>


          <h2>{{content.table_of_contents}}</h2>

          <ul>
            <li><a href="#What_is_GYM_Street">{{content.What_is_GYM_Street}}</a></li>
            <li><a href="#growth">{{content.The_growth_potential_of_metaverse}}</a></li>
            <li>
              <a href="#earn">{{content.earn_money_with_virtual_land_from_GYM_Street}}</a>
            </li>
            <li><a href="#around">{{content.The_ecosystem_around_GYM_Street}}</a></li>
            <li><a href="#metablocks">{{content.Metablocks_io}}</a></li>
            <li><a href="#cashFT">{{content.cashFT}}</a></li>
            <li><a href="#zuckerland">{{content.zuckerland_io}}</a></li>
            <li><a href="#dex">{{content.gymDex}}</a></li>
            <li><a href="#campus">{{content.metaverse_campus}}</a></li>
            <li>
              <a href="#conclusion">{{content.Conclusion_on_the_GYM_Street_ecosystem}}</a>
            </li>
          </ul>

          <img
            src="~/assets/images/blog/ecosystem_2.png"
            alt=""
            class="w-100"
          />

          <div class="py-1" id="What_is_GYM_Street">
            <h2>{{content.What_is_GYM_Street}}</h2>
            <div class="paragraph" v-html="content.What_is_GYM_Street_content"></div>

            <nuxt-link
              to="/eco_system/#StreetMetaverse"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l my-3 w-fc"
            >
              {{content.To_GYM_Street}}</nuxt-link
            >
          </div>

          <div class="py-1" id="growth">
            <h2>{{content.The_growth_potential_of_metaverse}}</h2>
            <div class="paragraph" v-html="content.The_growth_potential_of_metaverse_content"></div>

          </div>

          <div class="py-1" id="earn">
            <h2>{{content.earn_money_with_virtual_land_from_GYM_Street}}</h2>
            <div class="paragraph" v-html="content.earn_money_with_virtual_land_from_GYM_Street_content"></div>


          </div>

          <div class="py-1" id="around">
            <h2>{{content.The_ecosystem_around_GYM_Street}}</h2>
            <div class="paragraph" v-html="content.The_ecosystem_around_GYM_Street_content"></div>

          </div>

          <div class="py-1" id="metablocks">
            <h2>{{content.Metablocks_io}}</h2>
            <div class="paragraph" v-html="content.Metablocks_io_content"></div>

            <nuxt-link
              to="/eco_system/#Metablocks"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc"
            >
              {{content.go_to_Metablocks_io}}</nuxt-link
            >
          </div>
          <div class="py-1" id="cashFT">
            <h2>{{content.cashFT}}</h2>
            <div class="paragraph" v-html="content.cashFT_content"></div>
            <nuxt-link
              to="/eco_system/#CashFT"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc"
            >
              {{content.go_to_cashFT}}</nuxt-link>
          </div>
          <img
            src="~/assets/images/blog/ecosystem_3.png"
            alt=""
            class="w-100"
          />

          <div class="py-1" id="zuckerland">
            <h2>{{content.zuckerland_io}}</h2>
            <div class="paragraph" v-html="content.zuckerland_io_content"></div>
            <nuxt-link
              to="/eco_system/#zuckerland"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc"
            >
              {{content.go_to_zuckerland_io}}</nuxt-link
            >
          </div>
          <div class="py-1" id="dex">
            <h2>{{content.gymDex}}</h2>
            <div class="paragraph" v-html="content.gymDex_content"></div>
            <nuxt-link
              to="/eco_system/#GymDex"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc"
            >
              {{content.To_the_DEX}}</nuxt-link
            >
          </div>
          <div class="py-1" id="campus">
            <h2>{{content.metaverse_campus}}</h2>
            <div class="paragraph" v-html="content.metaverse_campus_content"></div>
            <nuxt-link
              to="/eco_system/#MetaverseCampus"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc"
            >
              {{content.go_to_metaverses_campus}}</nuxt-link
            >
          </div>
          <div class="py-1" id="conclusion">
            <h2>{{content.Conclusion_on_the_GYM_Street_ecosystem}}</h2>
            <div class="paragraph" v-html="content.Conclusion_on_the_GYM_Street_ecosystem_content"></div>

            <nuxt-link
              to="/#GetStarted"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc"
            >
              {{content.start_now}}</nuxt-link
            >
          </div>
          <div class="py-2">
            <div class="paragraph" v-html="content.gym_street_and_its_ecosystem_conclusion"></div>
            <nuxt-link
              to="/blog"
              class="BTN text-light bg-ba fw-600 rounded-50 box-sh-l w-fc"
            >
              {{content.To_the_blog}}</nuxt-link>
          </div>
          <ShareLink title="GYM Street and its ecosystem" />
        </div>
        <div
          class="sidbar my-4 col-xl-4 p-lg-3 pe-lg-0 mt-lg-5 pt-lg-5 ps-xl-5"
        >
          <CopyLink />
        </div>
      </div>
    </div>
    <InterestedArticles _id="2" />
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
