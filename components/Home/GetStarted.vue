<template>
  <section class="GetStarted py-5 bg-light">
    <span class="GymnetLabel Label-1 d-none d-sm-block"
      >Gymnet Gymnet Gymnet Gymnet
    </span>
    <span class="GymnetLabel Label-2 d-none d-sm-block"
      >Gymnet Gymnet Gymnet Gymnet Gymnet</span
    >
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
        <img src="~/assets/images/4001.png" class="w-100" alt="" />
      </div>
      <div class="bg bg-2">
        <img src="~/assets/images/4007.png" class="w-100" alt="" />
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
  position: relative;
  z-index: 0;
  .GymnetLabel {
    position: absolute;
  }
  .Label-1 {
    left: 0;
    top: 20px;
    transform-origin: left center;
    transform: translateX(5%) rotate(90deg);
  }
  .Label-2 {
    right: 0;
    top: 30%;
    transform-origin: left center;
    transform: translateX(95%) rotate(90deg);
  }
  .content {
    max-width: 820px;


  }

  .bg-white {
    background: white;
  }
  a {
    text-decoration: none;
  }

  .bg {
    z-index: -3;
    position: absolute;
opacity: 0.8;

  }

  .bg-1 {
    top: 100px;
    left: -20px;
    width: 200px;
  }
  .bg-2 {
    bottom: 0px;
    right: 0px;
  }
  @media (min-width: 576px) {
    .bg-1 {
      width: 250px;
    }
     .bg-2 {
      width: 400px;
    }
  }
  @media (min-width: 1000px) {
    .bg-1 {
      left: 10px;
    }

  }

  @media (min-width: 1200px) {
    .bg-1 {
      left: 100px;
    }
    .bg-2 {
      width: 700px;
    }
  }

 @media (min-width: 2000px) {
    .bg-1 {
      left: 400px;
    }
    .bg-2 {
      width: 900px;
    }
  }
 }

</style>
