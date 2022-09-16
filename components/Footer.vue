<template>
  <footer class="Footer bg-bd2 pt-5 text-light">
    <div class="container text-center text-lg-start">
      <div class="d-lg-flex py-lg-5">
        <div class="col-lg-5 pe-lg-5 mt-lg-4">
          <div class="">
            <div
              class="
                logo
                d-flex
                align-items-center
                justify-content-center justify-content-lg-start
              "
            >
              <span class="pe-2"
                ><img src="~/assets/images/logo.png" alt=""
              /></span>
              <span class="fw-600"> Gym Network </span>
            </div>
            <p class="my-3">
              {{ content.footer_info }}
            </p>
          </div>

          <div class="my-3 mt-lg-5">
            <a
              href="https://twitter.com/GymNet_Official?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              class="me-2"
              ><img src="~/assets/images/twitter.png" alt=""
            /></a>
            <a
              href="https://t.me/gymnetwork_english"
              target="_blank"
              class="ms-2"
              ><img src="~/assets/images/telegram-circle.png" alt=""
            /></a>
          </div>
        </div>
        <div
          class="border-bottom border-secondary mx-auto col-6 d-md-none"
        ></div>

        <div class="links d-md-flex col ms-lg-3 ms-xl-5">
          <div class="my-3 col-md-4">
            <div class="box mx-auto">
              <h5 class="fw-bold mb-lg-3">{{ content.products }}</h5>
              <br />
              <nuxt-link to="/Product/#Vault">{{ content.vault }}</nuxt-link>
              <nuxt-link to="/Product/#Farming">{{
                content.farming
              }}</nuxt-link>
              <nuxt-link to="/Product/#SinglePool">{{
                content.single_pool
              }}</nuxt-link>
              <nuxt-link to="/Product/#BuyCrypto">{{
                content.buy_GYMNET
              }}</nuxt-link>
            </div>
          </div>
          <div
            class="border-bottom border-secondary mx-auto col-6 d-md-none"
          ></div>
          <div class="my-3 col-md-4">
            <div class="box mx-auto">
              <h5 class="fw-bold mb-lg-3">{{ content.eco_system }}</h5>
              <br />
              <nuxt-link to="/eco_system/#Gymstreet"
                >{{ content.gymstreet }}
              </nuxt-link>
              <nuxt-link to="/eco_system/#Metablocks">{{
                content.metablocks
              }}</nuxt-link>
              <nuxt-link to="/eco_system/#CashFT">{{
                content.cashFT
              }}</nuxt-link>
              <nuxt-link to="/eco_system/#zuckerland">{{
                content.zuckerland
              }}</nuxt-link>
              <nuxt-link to="/eco_system/#GymDex"
                >{{ content.gymDex }}
              </nuxt-link>
              <nuxt-link to="/eco_system/#MetaverseCampus">{{
                content.metaverse_campus
              }}</nuxt-link>
              <a
                href="https://gymnetwork.b-cdn.net/GYMNET_Whitepaper.pdf"
                target="_blank"
                >{{ content.whitepaper }}</a
              >
            </div>
          </div>
          <div
            class="border-bottom border-secondary mx-auto col-6 d-md-none"
          ></div>

          <div class="my-3 col-md-4">
            <div class="box mx-auto">
              <h5 class="fw-bold mb-lg-3">{{ content.about }}</h5>
              <br />
              <nuxt-link to="/Blog">{{ content.blog_news }}</nuxt-link>
              <a
                href="https://docs.gymnetwork.io/support-and-contact-us/customer-support"
                target="_blank"
                >{{ content.support }}</a
              >
              <a href="https://docs.gymnetwork.io/" target="_blank">{{
                content.guide
              }}</a>
              <a
                href="https://docs.gymnetwork.io/introduction/tokenomics"
                target="_blank"
                >{{ content.tokenContract }}</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="border-top border-secondary"></div>
    </div>
    <div class="text-center py-3 pc">
      <span class="h6 m-0 p-0">©</span> {{ content.gym_network }} 2022
    </div>
  </footer>
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
.Footer {
  .logo {
    img {
      width: 30px;
    }
  }
 
  a {
    img {
      width: 35px;
    }
  }

  .links {
    .box {
      width: fit-content;
    }

    a {
      display: block;
      color: white;
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        transform: scale(1.1);
        color: blue;
      }
    }
  }
}
</style>
