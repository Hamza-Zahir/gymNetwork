<template>
  <div class="Header bg-bd text-light">
    <div v-if="$route.path == '/'" class="d-none d-lg-block">
      <Links />
    </div>
    <div
      class="container d-flex justify-content-between align-items-center py-4"
    >
      <nuxt-link to="/" class="logo d-flex align-items-center">
        <span class="pe-2"><img src="~/assets/images/logo.png" alt="" /></span>
        <span class="fw-600"> Gym Network </span>
      </nuxt-link>
      <div
        class="
          menu_lg
          col
          ms-4 ms-xl-5
          d-none d-lg-flex
          justify-content-between
          align-items-center
        "
      >
        <div class="links col-8 d-flex">
          <nuxt-link to="/Product" class="ms-4 ms-xl-5">
            {{ content.products }}
          </nuxt-link>
          <nuxt-link to="/eco_system" class="ms-4 ms-xl-5">
            {{ content.eco_system }}
          </nuxt-link>
          <nuxt-link to="/about" class="ms-4 ms-xl-5">
            {{ content.about }}
          </nuxt-link>
          <nuxt-link to="/blog" class="ms-4 ms-xl-5">
            {{ content.blog }}
          </nuxt-link>
        </div>
        <div class="d-flex ms-4 ms-xl-5">
          <a
            href="https://gymnetwork.io/dashboard"
            target="_blank"
            class="fw-600"
            >{{ content.launch_to_app }}</a
          >
          <div
            class="select fw-600 ms-4 ms-xl-5"
            @click="showLanguages = !showLanguages"
          >
            <span class="p-2"
              >{{ language }}
              <b-icon
                v-if="!showLanguages"
                icon="chevron-down"
                class="m-0 p-0"
              ></b-icon>
              <b-icon
                v-if="showLanguages"
                icon="chevron-up"
                class="m-0 p-0"
              ></b-icon>
            </span>
            <div v-if="showLanguages" class="other_languages text-center px-2">
              <div
                v-for="lang in languages"
                :key="lang"
                @click="
                  () => {
                    stourContent(lang);
                    // language = lang;
                  }
                "
                class="border-top py-2"
                :class="language === lang ? '' : 'text-secondary'"
              >
                <span class="">{{ lang }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-lg-none">
        <b-icon
          v-if="!showMenu"
          icon="list"
          @click="showMenu = !showMenu"
          class="cp h1 m-0 p-0"
        ></b-icon>
        <b-icon
          v-if="showMenu"
          icon="x-lg"
          @click="showMenu = !showMenu"
          class="cp h5 m-0 p-0"
        ></b-icon>
        <div
          :class="showMenu ? 'ms-0' : ''"
          class="menu_sm bg-bd text-center pb-5"
        >
          <div v-if="$route.path == '/'" class="p-2">
            <Links class="rounded-20 container py-3" />
          </div>

          <div class="px-5">
            <div class="" @click="showMenu = !showMenu">
              <nuxt-link to="/Product" class="d-block py-2 mb-2">
                {{ content.products }}
              </nuxt-link>
              <nuxt-link to="/eco_system" class="d-block py-2 my-2">
                {{ content.eco_system }}
              </nuxt-link>
              <nuxt-link to="/about" class="d-block py-2 my-2">
                {{ content.about }}
              </nuxt-link>
              <nuxt-link to="/blog" class="d-block py-2 my-2">
                {{ content.blog }}
              </nuxt-link>
            </div>
            <div class="my-3">
              <div
                class="select fw-600"
                @click="showLanguages = !showLanguages"
              >
                <span class="p-2"
                  >{{ language }}
                  <b-icon
                    v-if="!showLanguages"
                    icon="chevron-down"
                    class="m-0 p-0"
                  ></b-icon>
                  <b-icon
                    v-if="showLanguages"
                    icon="chevron-up"
                    class="m-0 p-0"
                  ></b-icon>
                </span>
                <div
                  v-if="showLanguages"
                  class="other_languages text-center px-2"
                >
                  <div
                    v-for="lang in languages"
                    :key="lang"
                    @click="
                      () => {
                        stourContent(lang);
                        // language = lang;
                      }
                    "
                    class="border-top py-2"
                    :class="language === lang ? '' : 'text-secondary'"
                  >
                    <span class="">{{ lang }}</span>
                  </div>
                </div>
              </div>
              <div class="col col-sm-6 mx-auto" @click="showMenu = !showMenu">
                <a
                  href="https://gymnetwork.io/dashboard/"
                  target="_blank"
                  class="btn border rounded-15 my-3 w-100 py-2"
                >
                  {{ content.launch_to_app }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      languages: ["EN", "JA", "KO", "TH", "ZH", "RU", "PT", "EC"],
      showLanguages: false,
      showMenu: false,
    };
  },

  methods: {
    ...mapActions(["stourContent", "getContent"]),
  },
  computed: {
    ...mapGetters(["content", "language"]),
  },
  mounted() {
    this.getContent();
  },
};
</script>
<style lang="scss" scoped>
.Header {
  z-index: 9999;
  position: relative;
  box-shadow: 5px 5px 10px 0px #0a0a0a59;
  .logo {
    font-size: 19px;
    img {
      width: 33px;
    }
  }
  a {
    color: #fdf4f4;
    text-decoration: none;
  }
  a.nuxt-link-exact-active {
    font-weight: 600;
    font-size: 17px;
  }
  .select {
    position: relative;
    cursor: pointer;
    .other_languages {
      position: absolute;
      top: calc(100% + 2px);
      left: 0;
      width: 100%;
      background: #1c2852;
    }
  }
  .menu_sm {
    max-height: 450px;
    overflow: scroll;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    box-shadow: 10px 10px 10px 0px black;
    transition: 0.7s;
    margin-left: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
