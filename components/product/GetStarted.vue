<template>
  <section class="GetStarted py-5 bg-light">
    <div class="container py-3">
      <h1 class="my-2 fw-bolder text-center">
        How to get started with GYM Network
      </h1>
       <div class="content mx-auto d-md-flex flex-wrap py-5 my-lg-5">
        <div
          v-for="item in data"
          :key="item.id"
          class="col col-md-4 p-2 p-lg-3"
        >
          <HoverCard :data="item" />
        </div>
      </div>
      <div class="bg bg-1">
        <img src="~/assets/images/Colored.png" class="w-100" alt="" />
      </div>
      <div class="bg bg-2">
        <img src="~/assets/images/Colored.png" class="w-100" alt="" />
      </div>
    </div>
  </section>
</template>
<script>
import HoverCard from "../cards/HoverCard.vue";
const data = [
  {
    id: 1,
    title: "Choose a crypto wallet",
    text: "like MetaMask or Trust Wallet",
    img: require("~/assets/images/getStarted1.png"),
    link: {
      url: "",
      text: "Watch tutorial",
    },
  },
  {
    id: 2,
    title: "Transfer BNB",
    text: "to your wallet",
    img: require("~/assets/images/getStarted2.png"),
    link: {
      url: "",
      text: "Watch tutorial",
    },
  },
  {
    id: 3,
    title: "Connect your wallet",
    text: "to the website and make your first deposit into the Vault (from 0.051 BNB)",
    img: require("~/assets/images/getStarted3.png"),
    link: {
      url: "",
      text: "Watch tutorial",
    },
  }
];
export default {
  data() {
    return {
      data,
    };
  },
  components: {
    HoverCard,
  },
};
</script>
<style lang="scss" scoped>
.GetStarted {
  background: white;
  .content {
    max-width: 820px;

    .box {
      position: relative;
      cursor: pointer;

      &:hover {
        .text {
          transform: translateY(-10px);
          background: #153151 !important;
          * {
            color: white !important;
          }
        }
      }

      * {
        transition: all 0.5s ease;
      }

      .text {
        width: 100%;
        height: 100%;
        z-index: 2;
      }
      .box-img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        overflow: hidden;
        img {
          height: 100%;
        }
      }

      @media (min-width: 768px) {
        &:hover {
          .text {
            transform: translateY(40px) rotate(7deg);
            background: #153151 !important;
            z-index: 9;
            * {
              color: white !important;
            }
          }
          .box-img {
            transform: translateY(-40px) rotate(-7deg);
          }
        }
      }
      @media (min-width: 992px) {
        &:hover {
          .text {

            transform:  rotate(10deg) translateY(7px);
            background: #153151 !important;
            * {
              color: white !important;
            }
          }
          .box-img {
            transform: translateY(-70px) rotate(-10deg);
          }
        }
      }
    }
  }

  .bg-white {
    background: white;
  }
  a {
    text-decoration: none;
  }
  .container {
    overflow: hidden;
    position: relative;
    z-index: 0;
    .bg {
      z-index: -2;
      position: absolute;
      width: 200px;
      opacity: 0.4;
    }

    .bg-1 {
      top: 100px;
      left: -20px;
    }
    .bg-2 {
      bottom: 0px;
      right: -10px;
    }
    @media (min-width: 576px) {
      .bg {
        width: 250px;
      }
    }
    @media (min-width: 1000px) {
      .bg-1 {
        left: 10px;
      }
      .bg-2 {
        width: 300px;
        right: 100px;
        bottom: -150px;
      }
    }

    @media (min-width: 1200px) {
      .bg-1 {
        left: 100px;
      }
      .bg-2 {
        right: 0px;
        bottom: -50px;
      }
    }
  }
}
</style>
