<template>
  <div id="AffiliateSystem" class="AffiliateSystem p-0 m-0">
    <div class="Navigation mx-auto">
      <div class="NavigationMenu text-light d-none d-lg-block pb-3">
        <a href="#Gymstreet" class="Gymstreet">
          <span class="Border"></span>
          <span class="rounded-circle me-2 point"></span>
          <span class="text"> Gymstreet.io</span>
        </a>
        <a href="#Metablocks" class="Metablocks">
          <span class="Border"></span>
          <span class="rounded-circle me-2 point"></span>
          <span class="text"> Metablocks.io</span>
        </a>
        <a href="#CashFT" class="CashFT">
          <span class="Border"></span>
          <span class="rounded-circle me-2 point"></span>
          <span class="text"> CashFT </span>
        </a>
        <a href="#zuckerland" class="zuckerland">
          <span class="Border"></span>
          <span class="rounded-circle me-2 point"></span>
          <span class="text"> zuckerland.io </span>
        </a>
        <a href="#GymDex" class="GymDex">
          <span class="Border"></span>
          <span class="rounded-circle me-2 point"></span>
          <span class="text"> GYM DEX </span>
        </a>
        <a href="#MetaverseCampus" class="MetaverseCampus">
          <span class=""></span>
          <span class="rounded-circle me-2 point"></span>
          <span class="text w-75"> Metaverse Campus</span>
        </a>
      </div>
    </div>
    <div class="AffiliateSystemSections col-12">
      <div id="Gymstreet" class="Section pt-lg-5"><Gymstreet /></div>
      <div id="Metablocks" class="Section pt-lg-5"><Metablocks /></div>
      <div id="CashFT" class="Section pt-lg-5"><CashFT /></div>
      <div id="zuckerland" class="Section pt-lg-5"><Zuckerland /></div>
      <div id="GymDex" class="Section mt-lg-5"><GymDex /></div>
      <div id="MetaverseCampus" class="Section pt-lg-5">
        <MetaverseCampus />
      </div>
    </div>
  </div>
</template>

<script>
import Gymstreet from "./AffiliateSystemSections/Gymstreet.vue";
import Metablocks from "./AffiliateSystemSections/Metablocks.vue";
import CashFT from "./AffiliateSystemSections/CashFT.vue";
import Zuckerland from "./AffiliateSystemSections/zuckerland.vue";
import GymDex from "./AffiliateSystemSections/GymDex.vue";
import MetaverseCampus from "./AffiliateSystemSections/MetaverseCampus.vue";
export default {
  components: {
    Gymstreet,
    Metablocks,
    CashFT,
    Zuckerland,
    GymDex,
    MetaverseCampus,
  },
  mounted() {
    this.handelScroling();
  },
  methods: {
    handelScroling() {
      const sections = [
        ...document.querySelectorAll(
          "#AffiliateSystem .AffiliateSystemSections .Section"
        ),
      ];
      const section = document.querySelector("#AffiliateSystem");
      const NavigationMenu = document.querySelector(
        "#AffiliateSystem .NavigationMenu"
      );

      addEventListener("scroll", () => {
        const HeadApphight = document.getElementById("HeadApp");
        const sectionOffsetBottom = section.offsetTop + section.offsetHeight;
        const NavigationMenuOffsetBottom = NavigationMenu.offsetHeight;

        if (
          window.scrollY >=
          sectionOffsetBottom -
            NavigationMenuOffsetBottom -
            HeadApphight.offsetHeight -
            50
        ) {
          NavigationMenu.style.position = "absolute";
          NavigationMenu.style.top = "auto";
          NavigationMenu.style.bottom = "10px";
        } else {
          if (section.offsetTop <= window.scrollY) {
            NavigationMenu.style.position = "fixed";
            NavigationMenu.style.top = `${HeadApphight.offsetHeight + 80}px`;
            NavigationMenu.style.bottom = "auto";
          } else {
            NavigationMenu.style.position = "absolute";
            NavigationMenu.style.top = `${HeadApphight.offsetHeight + 80}px`;
            NavigationMenu.style.bottom = "auto";
          }
        }
        sections.map((e) => {
          const sectionHeight = e.offsetHeight;
          const sectionOffsetTop = e.offsetTop + section.offsetTop;
          const link = document.querySelector(
            `#AffiliateSystem .NavigationMenu a.${e.id}`
          );
          const height =
            ((window.scrollY - sectionOffsetTop + 120) * 100) / sectionHeight;
          link.children[0].style.height = `${height}%`;
          if (height > 0) {
            link.children[1].style.background = "#ffffff";
            link.style.color = " #ffffff";
            link.style.fontWeight = "bold";
          } else {
            link.children[1].style.background = "#cacaca";
            link.style.color = " #cacaca";
            link.style.fontWeight = "normal";
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.AffiliateSystem {
  background: url("~/assets/images/StreetMetaverse/AffiliateSystem/bg.png");
  position: relative;
  background-size: cover;
  .Navigation {
    max-width: 1400px;
    padding: 30px;
  }
  // min-height
  .NavigationMenu {
    position: absolute;
    width: 160px;
    top: 50px;
    z-index: 9;
    a {
      display: flex;
      color: #cacaca;
      height: 60px;
      max-height: calc(60vh / 6);
      position: relative;
      overflow: hidden;

      * {
        transition: 0.5s ease-in;
      }
      .Border {
        display: inline-block;
        width: 4px;
        position: absolute;
        top: 0px;
        left: 7px;
        background: #ffffff;
      }
      .point {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: #cacaca;
        z-index: 2;
      }
      &:nth-child(1) {
        color: #ffffff !important;
        font-weight: bold !important;
        .point {
          background: #ffffff !important;
        }
      }

      .text {
        margin-top: -5px;
        font-weight: 600;
      }
      &::before {
        content: "";
        display: inline-block;
        width: 4px;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 7px;
        background: #cacaca;
        z-index: -1;
      }
    }
    a.MetaverseCampus {
      &::before {
        display: none;
      }
    }
  }
}

:is(#Gymstreet, #CashFT, #MetaverseCampus) {
  background: url("~/assets/images/StreetMetaverse/AffiliateSystem/bg-1.png");
  background-repeat: no-repeat;
  background-position: 120% 15%;

  @media (min-width: 768px) {
    background-position: 130% 15%;
  }

  @media (min-width: 1200px) {
    background-position: 100% 15%;
  }
  @media (min-width: 2000px) {
    background-position: 90% 15%;
  }
}

:is(#Metablocks, #GymDex) {
  background: url("~/assets/images/StreetMetaverse/AffiliateSystem/bg-3.png");
  background-repeat: no-repeat;

  background-size: 700px;

  background-position: 100% 160px;
  @media (min-width: 768px) {
    background-size: 90%;
    background-position: 100% 15%;
  }

  @media (min-width: 1400px) {
    background-size: 70%;
    background-position: 100% 30%;
  }
  @media (min-width: 2000px) {
    background-size: 50%;
    background-position: 100% 30%;
  }
}
#zuckerland {
  background: url("~/assets/images/StreetMetaverse/AffiliateSystem/bg-2.png");
  background-size: 300px;
  background-repeat: no-repeat;
  background-position: 100% 18%;
  @media (min-width: 768px) {
    background-position: 110% 23%;
  }
  @media (min-width: 992px) {
    background-position: 100% 10%;
  }
  @media (min-width: 1200px) {
    background-size: 400px;
    background-position: 105% 10%;
  }
  @media (min-width: 1600px) {
    background-size: 500px;
    background-position: 95% 10%;
  }
}
.Section {
  min-height: 40vh;
}
</style>
