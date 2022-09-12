<template>
  <div v-if="Links" class="LinksNavbar light-bg py-2">
    <div
      class="content mx-auto px-lg-3 d-lg-flex flex-row-reverse align-items-lg-center"
    >
      <div class="text-end">
        <b-icon
          icon="x-lg"
          class="m-0 ms-3 ms-lg-4 text-secondary cp"
          @click="
            () => {
              Links = false;
              getmarginTop();
            }
          "
        ></b-icon>
      </div>
      <div class="col d-flex flex-wrap">
        <a
          href="https://www.certik.com/projects/gym-network"
          target="blank"
          class="d-block col-6 p-2 col-lg"
          ><img src="~/assets/images/links/certik.png" alt="" class="" />
          <small>{{content.audited}}</small></a
        >
        <a
          href="https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Gymnet-v1.0.pdf"
          target="blank"
          class="d-block col-6 p-2 col-lg"
          ><img src="~/assets/images/links/peckShield.png" alt="" class="" />
          <small>{{content.audited}}</small></a
        >
        <a
          href="https://t.me/gymnetwork_english"
          target="blank"
          class="d-block col-6 p-2 col-lg"
          ><img
            src="~/assets/images/links/officialTelegram.png"
            alt=""
            class="telegram"
          />
          <small class="fs-10">{{content.our_official_telegram}}</small>
        </a>
        <a
          href="https://www.alpacafinance.org/"
          target="blank"
          class="d-block col-6 p-2 col-lg"
          ><img src="~/assets/images/links/alpaca.png" alt="" class="" />
          <small>{{content.official_partner}}</small>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      Links: true,
    };
  },
  computed: {
    ...mapGetters(["content"]),
  },
  methods: {
    ...mapActions(["getmarginTop"]),
  },
};
</script>

<style lang="scss" scoped>
.LinksNavbar {
  .content {
    max-width: 1500px;
  }
  a {
    font-size: 12px;
    text-decoration: none;
    color: darkgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    img {
      // max-width: 30px;
      max-width: 100%;
    }
    .telegram {
      width: 25px;
    }
    .op-0 {
      opacity: 0;
    }

    @media (min-width: 992px) {
      margin: 0 2px;
    font-size: 10px;


      img {
        max-width: 100px;
      }
    }
    @media (min-width: 1200px) {
      margin: 0 5px;

      img {
        max-width: 130px;
      }

  }
  @media (min-width: 1400px) {
    font-size: 12px;

      img {
        max-width: 160px;
      }

  }
  }

}
</style>
