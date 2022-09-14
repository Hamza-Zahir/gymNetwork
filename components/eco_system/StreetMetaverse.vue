<template>
  <section id="StreetMetaverse" class="StreetMetaverse py-5 bg-light">

    <div class="container py-3 py-lg-5">
      <div class="tetxTitle mx-auto">
        <h1 class="my-0 pb-lg-4 fw-bold text-center ">
          The GYM Street Metaverse ecosystem
        </h1>
        <p class="text-center pc pt-3">
          Get access to cutting-edge DeFi technologies.
        </p>
      </div>
      <div class="content mx-auto d-md-flex flex-wrap py-5 my-lg-5">
        <div v-for="item in data" :key="item.id" class="col col-md-4  p-2 p-lg-3 p-xl-4">
          <HoverCard :_id="item.id" :link_url="item.link.url" :link_text="item.link.text" :title="item.title"
            :text="item.text" :img="item.img" />
        </div>
      </div>
    </div>
    <div class="bg bg-1">
      <img src="~/assets/images/logoRotetLeft.png" class="w-100" alt="" />
    </div>
    <div class="bg bg-2">
      <img src="~/assets/images/4001.png" class="w-100" alt="" />
    </div>
  </section>
</template>
<script>
import HoverCard from "../cards/GetStartedCard.vue";
const data = [
  {
    id: "1",
    title: "Gymstreet.io",
    text: "Our unique DeFi Metaverse",
    img: require("~/assets/images/StreetMetaverse/img-1.png"),
    link: {
      url: "http://gymstreet.io/",
      text: "More about Gymstreet",
    },
  },
  {
    id: "2",
    title: "Metablocks.io",
    text: "NFT Miner specially designed for metaverses",
    img: require("~/assets/images/StreetMetaverse/img-2.png"),
    link: {
      url: "https://metablocks21.com/",
      text: "More about metablocks",
    },
  },
  {
    id: '3',
    title: "cashFT",
    text: "The crypto and NFT debit card",
    img: require("~/assets/images/StreetMetaverse/img-3.png"),
    link: {
      url: "",
      text: "Coming Soon",
    },
  },
  {
    id: '4',
    title: "zuckerland.io",
    text: "Marketplace for NFTs",
    img: require("~/assets/images/StreetMetaverse/img-4.png"),

    link: {
      url: "",
      text: "Coming Soon",
    },
  },
  {
    id: '5',
    title: "Exchange",
    text: "Easily and intuitively exchange coins",
    img: require("~/assets/images/StreetMetaverse/img-5.png"),
    link: {
      url: "https://gymnetwork.io/dashboard/",
      text: "Go to Gym DEX",
    },
  },
  {
    id: '6',
    title: "Metaverse Campus",
    text: "Learn how DeFi, Metaverse and co. work",
    img: require("~/assets/images/StreetMetaverse/img-6.jpg"),
    link: {
      url: "",
      text: "Coming Soon",
    },
  },
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
.StreetMetaverse {
  background: white;
  position: relative;
  z-index: 0;
  overflow: hidden;

  .tetxTitle {
    max-width: 600px;

    @media (min-width: 1000px) {

      h1 {
        font-size: 50px;

      }

      p {
        font-size: 20px;

      }
    }


  }


  .content {
    max-width: 1100px;
  }

  .bg-white {
    background: white;
  }

  .bg {
    z-index: -4;
    position: absolute;
    width: 200px;
  }

  .bg-1 {
    top: 100px;
    left: -20px;
  }

  .bg-2 {
    bottom: -50px;
    right: -20px;
  }

  @media (min-width: 576px) {
    .bg-1 {
      width: 250px;
    }

    .bg-2 {
      width: 400px;
      bottom: -150px;
    }
  }

  @media (min-width: 1000px) {
    .bg-1 {
      width: 350px;
    }

  }

  @media (min-width: 1200px) {
    .bg-2 {
      width: 600px;
      bottom: -200px;
      right: -200px;
    }
  }

  @media (min-width: 2000px) {
    .bg-1 {
      left: 200px;
    }

    .bg-2 {
      width: 900px;
      bottom: -300px;
      right: -300px;
    }
  }
}
</style>
