<template>
  <div class="ContractLinks ">
    <div class="contracts mx-2 mx-md-3 mx-xxl-auto">
      <div
        class="text-center text-secondary p-1 d-sm-flex justify-content-between align-items-center"
      >
        <div class="col-sm-6 pe-sm-2">
          <div class="Contract justify-content-lg-start fs-14 my-1 " style="position: relative">
              <img
                src="~/assets/images/logo.png"
                alt=""
                style="width: 30px"
                class="me-2"
              />

            <span class="fw-600 text-dark">GYMNET</span>
            <span class="px-1 d-none d-lg-block">Contract<span class="o-0">_</span>Address: </span>
            <span class="address mx-1 d-block">
              0x0012365F0a1E5F30a5046c680DCB21D07b15FcF7
            </span>
            <span class="d-block">
              <b-icon
                icon="files"
                class="h5 m-0 ms-sm-2 cp"
                @click="
                  copyAddress(
                    '0x0012365F0a1E5F30a5046c680DCB21D07b15FcF7',
                    'addressCopied_1'
                  )
                "
              ></b-icon>
            </span>
            <div
              v-if="addressCopied_1"
              class="p-1 rounded fs-14"
              :class="addressCopied_1 ? 'linkCopied' : ''"
            >
              Copied!
            </div>
          </div>
        </div>
        <div class="border align-self-stretch"></div>
        <div class="col-sm-6 ps-sm-2">
          <div class="Contract justify-content-lg-end fs-14 my-1" style="position: relative">
              <img
              src="https://gymnetwork.io/_nuxt/img/VBTC.f3c0e5e.svg"
                alt=""
                style="width: 45px"
                class="me-2"
              />

            <span class="fw-600 text-dark">VBTC</span>
            <span class="px-1 d-none d-lg-block">Contract<span class="o-0">_</span>Address: </span>
            <span class="address mx-1 d-block">
              0x268bb0f44ab880be59ccd2b96bfa138211e27a20
            </span>
            <span class="d-block">
              <b-icon
                icon="files"
                class="h5 m-0 ms-sm-2 cp"
                @click="
                  copyAddress(
                    '0x268bb0f44ab880be59ccd2b96bfa138211e27a20',
                    'addressCopied_2'
                  )
                "
              ></b-icon>
            </span>
            <div
              v-if="addressCopied_2"
              class="p-1 rounded fs-14"
              :class="addressCopied_2 ? 'linkCopied' : ''"
            >
              Copied!
            </div>
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
      addressCopied_1: false,
      addressCopied_2: false,
    };
  },
  methods: {
    async copyAddress(_Address, _addressCopied) {
      if (_addressCopied == "addressCopied_1") {
        this.addressCopied_1 = false;
      } else {
        this.addressCopied_2 = false;
      }

      await navigator.clipboard.writeText(_Address);

      if (_addressCopied == "addressCopied_1") {
        this.addressCopied_1 = true;
      } else {
        this.addressCopied_2 = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ContractLinks {
  background: #ffffff;
  .contracts{

   max-width: 1400px;
  }


  span.address {
    overflow: hidden;
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    font-size: 12px;

    @media (min-width: 500px) {
      font-size: 14px;
    }
  }
  .Contract {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .o-0 {
      opacity: 0;
    }
    .linkCopied {
      position: absolute;
      right: 40px;
      top: 20%;
      width: 100px;
      background: #a0fdac;
      text-align: center;
      animation: hide 3s forwards;
      opacity: 1;

      @keyframes hide {
        to {
          opacity: 0;
          display: none;
        }
      }
    }
  }
}
</style>
