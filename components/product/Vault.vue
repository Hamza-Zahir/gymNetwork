<template>
  <section class="Vault py-5">
    <div id="Vault" class="content1 py-md-5">
      <div class="container py-3">
        <h1 class="fw-bolder">{{content.vault}}</h1>
        <div class="text pc my-4 col-md-10 col-xl-9">
          <div class="pragraph" v-html="content.vault_desc"></div>
        </div>
      </div>
    </div>
    <div class="content2 text-light py-5">
      <div class="container py-3">
        <div
          class="
            w-100
            d-md-flex
            flex-row-reverse
            align-items-center
            justify-content-between
          "
        >
          <div class="img mx-auto col-sm-10 mx-md-0 col-md-6 col-lg-5">
            <img src="~/assets/images/TotalBalance.png" class="w-100" alt="" />
          </div>
          <div class="text my-2 col col-lg-6">
          <div class="pragraph" v-html="content.vault_start_desc"></div>
            <a
              href="https://gymnetwork.io/dashboard/"
              target="_blank"
              class="
                BTN
                col-12
                bg-ba
                rounded-50
                fw-600
                cp
                box-sh-l
                text-light text-center
                mt-4 mt-lg-5
              "
            >
              {{content.start_now}}
            </a>
          </div>
        </div>
      </div>
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
.Vault {
  .content1 {
    background: white;
  }
  .content2 {
    background: url("~/assets/images/vault_bg.png");
    .BTN {
      padding: 12px 35px;
      font-size: 18px;
    }
  }
  @media (min-width: 768px) {
    .BTN {
      font-size: 20px;
      width: fit-content;
    }
  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 50px;
    }
    .pragraph {
      font-size: 20px;
    }
  }
}
</style>
