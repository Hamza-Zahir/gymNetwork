<template>
  <div class="py-4">

  <div id="Tokenomics" class="Tokenomics bg-light d-lg-flex">
    <div class="information_box col-lg-6">
      <h1 class="fw-bold mt-5">{{content.tokenomics}}</h1>
      <h3 class="d-sm-flex fw-bold my-4">
        <span class="text-bd me-3">{{content.total_supply}}</span>
        <span class="d-flex my-3 my-sm-0 TotalSupply"
          ><img src="~/assets/images/logo.png" class="me-2" />594 000 000</span
        >
      </h3>
      <div class="listContent my-5">
        <span class="border_left"></span>
        <div class="list text-bd">
          <h4 class="fw-bold d-flex py-3 border-bottom">
            <span class="point"></span>
            <span class="px-3 px-sm-4">01</span>
            <span class=""
              >{{content.token_holders}} v 1.5
              <br />
              <small class="fw-500 text-secondary">21% 124M</small>
            </span>
          </h4>
          <h4 class="fw-bold d-flex py-3 border-bottom">
            <span class="point"></span>

            <span class="px-3 px-sm-4">02</span>
            <span class=""
              >{{content.vault}} BNB
              <br />
              <small class="fw-500 text-secondary">11% 65M</small>
            </span>
          </h4>
          <h4 class="fw-bold d-flex py-3 border-bottom">
            <span class="point"></span>

            <span class="px-3 px-sm-4">03</span>
            <span class=""
              >{{content.vault}} BUSD
              <br />
              <small class="fw-500 text-secondary">11% 65M</small>
            </span>
          </h4>
          <h4 class="fw-bold d-flex py-3 border-bottom">
            <span class="point"></span>

            <span class="px-3 px-sm-4">04</span>
            <span class=""
              >{{content.farm}} BNB/ Gymnet
              <br />
              <small class="fw-500 text-secondary">17% 100M</small>
            </span>
          </h4>
          <h4 class="fw-bold d-flex py-3 border-bottom">
            <span class="point"></span>

            <span class="px-3 px-sm-4">05</span>
            <span class=""
              >{{content.farm}} BUSD/ Gymnet
              <br />
              <small class="fw-500 text-secondary">17% 100M</small>
            </span>
          </h4>
          <h4 class="fw-bold d-flex py-3 border-bottom">
            <span class="point"></span>

            <span class="px-3 px-sm-4">06</span>
            <span class=""
              >{{content.single_pool}}
              <br />
              <small class="fw-500 text-secondary">10% 60M</small>
            </span>
          </h4>
          <h4 class="fw-bold d-flex py-3 border-bottom">
            <span class="point"></span>

            <span class="px-3 px-sm-4">07</span>
            <span class=""
              >{{content.launchpad}}
              <br />
              <small class="fw-500 text-secondary">3% 20M</small>
            </span>
          </h4>
          <h4 class="fw-bold d-flex py-3 border-bottom">
            <span class="point"></span>

            <span class="px-3 px-sm-4">08</span>
            <span class=""
              >{{content.card}} APY
              <br />
              <small class="fw-500 text-secondary">2% 10M</small>
            </span>
          </h4>
          <h4 class="fw-bold d-flex py-3 border-bottom">
            <span class="point"></span>

            <span class="px-3 px-sm-4">09</span>
            <span class=""
              >{{content.community_fund}}
              <br />
              <small class="fw-500 text-secondary">8% 50M</small>
            </span>
          </h4>
        </div>
      </div>
    </div>

    <div class="img_box bg-bl col-lg-6">
      <img src="~/assets/images/bg-tokenomics.jpg" alt="" class="w-100" />
    </div>
  </div></div>
</template>

<script>
  import { mapGetters } from "vuex";

export default {
  computed: {
      ...mapGetters(["content"]),
    },
  mounted() {
    this.handelScroling();
  },
  methods: {
    handelScroling() {
      const cards = [
        ...document.querySelectorAll("#Tokenomics .information_box .list h4"),
      ];
      const list = document.querySelector("#Tokenomics .information_box .list");

      const border_left = document.querySelector(
        "#Tokenomics .information_box .listContent .border_left"
      );

      list.addEventListener("scroll", () => {
        const listHight = cards[0].offsetHeight * cards.length;

        const border_left_height =
          (list.scrollTop * 100) / (listHight - list.offsetHeight);
        border_left.style.height = `${border_left_height}%`;
        const index = +(
          list.scrollTop /
          ((listHight - list.offsetHeight) / cards.length)
        ).toFixed(0);

        cards.map((e, i) => {
          if (index > i) {
            e.children[0].style.background = "#245b99";
          } else {
            e.children[0].style.background = "#a8b1bb";
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.Tokenomics {
  position: relative;
  .bg-bl{
background: #a2c8f867;
  }
  .information_box {
    padding: 15px;
    .TotalSupply {
      color: #245b99;
    }
    h3 {
      img {
        width: 30px;
      }
    }
    .listContent {
      position: relative;
      overflow: hidden;
      .border_left {
        position: absolute;
        display: inline-block;
        left: 7px;
        top: 0;
        width: 2px;
        height: 0;
        background: #245b99;
        z-index: 2;
      }

      .list {
        max-height: 350px;
        overflow: scroll;

        &::-webkit-scrollbar {
          display: none;
        }

        h4 {
          position: relative;
          margin: 0;
          margin-left: 8px;
          font-size: 20px;
          .point {
            display: inline-block;
            position: absolute;
            left: -4px;
            top: calc(50% - 4px);
            width: 8px;
            height: 8px;
            background: #a8b1bb;
            border-radius: 50%;
            z-index: 3;
            box-shadow: 0px 0px 0px 2px #f3f3f3;
          }
          small{
            display: inline-block;
            padding-top: 10px;
          }
          &::before {
            content: "";
            display: inline-block;
            position: absolute;
            left: -1px;
            top: 0;
            width: 2px;
            height: 100%;
            background: #a8b1bb;
            z-index: 1;
          }
        }
      }
    }
  }
  .img_box {
    max-height: 500px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      // align-self: stretch;
min-height: 100%;
    }
  }

  @media (min-width: 576px) {
    .information_box {
      padding-left: 55px;
      padding-right: 55px;
    }
  }
  @media (min-width: 992px) {
    .information_box {
      padding-left: 40px;
      padding-right: 30px;
    }
    .img_box {
      position: absolute;
      min-height: 100%;
      right: 0;
      top: 0;
      img {
        min-height: 100%;
      }
    }
    .information_box {
      .listContent {
        .list {
          h4 {
            font-size: 25px;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 50px;
    }
    .information_box {
      padding-top: 60px;
      padding-left: 100px;


      .list {
        max-height: 400px;
      }
    }
  }
  @media (min-width: 1400px) {
    .information_box {
      padding-left: 150px;
    }
  }
  @media (min-width: 2000px) {
    .information_box {
      padding-left: 290px;
      .list {
        max-height: 470px;
      }
    }
  }
}
</style>
