<template>
  <div class="Header bg-bd text-light py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo d-flex align-items-center">
        <span class="pe-2"><img src="~/assets/images/logo.png" alt="" /></span>
        <span class="fw-600"> Gym Network </span>
      </div>
      <div
        class="menu_lg col ms-4 ms-xl-5 d-none d-lg-flex justify-content-between align-items-center"
      >
        <div class="links col-8 d-flex">
          <nuxt-link to="/" class="ms-4 ms-xl-5"> Products </nuxt-link>
          <nuxt-link to="/eco_system" class="ms-4 ms-xl-5">
            Eco-system
          </nuxt-link>
          <nuxt-link to="/about" class="ms-4 ms-xl-5"> About </nuxt-link>
          <nuxt-link to="/blog" class="ms-4 ms-xl-5"> Blog </nuxt-link>
        </div>
        <div class="d-flex ms-4 ms-xl-5">
          <nuxt-link to="/blog"> Launch to APP </nuxt-link>
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
                @click="language = lang"
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
        <b-icon v-if="!showMenu" icon="list" @click="showMenu = !showMenu" class=" h1 m-0 p-0"></b-icon>
        <b-icon v-if="showMenu" icon="x-lg" @click="showMenu = !showMenu" class="h5 m-0 p-0"></b-icon>
        <div v-if="showMenu" class="menu_sm bg-bd text-center">

        <div class="px-5">
          <nuxt-link to="/" class="d-block py-2 mb-2"> Products </nuxt-link>
          <nuxt-link to="/eco_system" class="d-block py-2 my-2">
            Eco-system
          </nuxt-link>
          <nuxt-link to="/about" class="d-block py-2 my-2 "> About </nuxt-link>
          <nuxt-link to="/blog" class="d-block py-2 my-2 "> Blog </nuxt-link>

       <div class="my-3">

          <div
            class="select fw-600 "
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
                @click="language = lang"
                class="border-top py-2"
                :class="language === lang ? '' : 'text-secondary'"
              >
                <span class="">{{ lang }}</span>
              </div>
            </div>
          </div>
          <div class="col col-sm-6 mx-auto">
          <nuxt-link to="/blog" class="btn border rounded-15 my-3 w-100 py-2"> Launch to APP </nuxt-link>
       </div> </div>
       </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      language: "EN",
      languages: ["EN","DE", "ES", "ID", "JA"],
      showLanguages: false,
      showMenu: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.Header {
  z-index: 9999;
  position: relative;
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
  .menu_sm{
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
  }
}
</style>
