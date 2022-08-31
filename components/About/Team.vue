<template>
  <section class="Team py-5">
    <div class="container">
      <h1 class="text-center fw-bold">GYM Network Team</h1>

      <div class="content my-5">
        <div class="boxs d-sm-flex flex-wrap mx-auto justify-content-center">
          <div
            class="box p-2 p-sm-3 p-md-2 col-sm-6 col-md-5 col-lg-3"
            v-for="developer in team"
            :key="`developer-${developer.id}`"
          >
            <a
              :href="`#developer-${developer.id}`"
              class="d-block border rounded-25 mx-auto h-100"
              @click="developerAccess = developer"
            >
              <div class="img">
                <img
                  :src="developer.img"
                  alt=""
                  class="w-100"
                  :class="developerAccess == developer ? 'filter' : ''"
                />
              </div>
              <div class="p-3">
                <h4 class="text-bd fw-bold m-0">{{ developer.name }}</h4>
                <span class="text-secondary">{{ developer.jobTitle }}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div  v-for="developer in team" :key="developer.id" class="bg-light">
      <TeamOfModerator v-if="developerAccess == developer" :Moderator="developer" />
    </div>
    <div class="p text-center mx-auto col-md-10 mt-5 text-bd fw-600">
      There are many more team members working in programming, web development,
      marketing, HR management, and tech recruitment to ensure the success of
      GYM NETWORK.
    </div>
  </section>
</template>

<script>
import TeamOfModerator from "./TeamOfModerator.vue";
const team = [
  {
    id: 1,
    name: "Alberto Mera",
    jobTitle: "System Designer",
    img: require("~/assets/images/team/AlbertoMera.png"),
    team: [
      {
        id: 1,
        name: "Jacob Oblasser",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/JacobOblasser.png"),
        text: "Marketing Projectmanager Trendda briefs and monitors the requirements between the Gym team and Trendda due to his experience in online marketing and branding. His mission is to build the concept behind the websites.",
      },
      {
        id: 2,
        name: "Diana Kasprovych",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/DianaKasprovych.png"),
        text: "Lead UX/UI designer for Gym Network Platform and website, CashFT and Marketplace. Diana has experience in finances projects, crypto platforms, branding. Her mission is to think about the logic and UX of the project. Build a brand for CashFT with her team",
      },
      {
        id: 3,
        name: "Ania Bodariuk",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/AniaBodariuk.png"),
        text: "Lead UX/UI Designer of Gym Street and UX/UI Designer of Gym Network. She has a background in branding and e-commerce projects. Lately, she is deeply into designing for Web 3.0. Her mission is to make your interaction with both platforms native and exciting.",
      },
      {
        id: 4,
        name: "Anna Kulyba",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/AnnaKulyba.png"),
        text: "Lead UX/UI Designer of Gym Street and UX/UI Designer of Gym Network. She has a background in branding and e-commerce projects. Lately, she is deeply into designing for Web 3.0. Her mission is to make your interaction with both platforms native and exciting.",
      },
    ],
  },
  {
    id: 2,
    name: "Lewis Mhlanga",
    jobTitle: "Moderator",
    img: require("~/assets/images/team/LewisMhlanga.png"),

    team: [
    {
        id: 1,
        name: "Jacob Oblasser",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/JacobOblasser.png"),
        text: "Marketing Projectmanager Trendda briefs and monitors the requirements between the Gym team and Trendda due to his experience in online marketing and branding. His mission is to build the concept behind the websites.",
      },
      {
        id: 2,
        name: "Diana Kasprovych",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/DianaKasprovych.png"),
        text: "Lead UX/UI designer for Gym Network Platform and website, CashFT and Marketplace. Diana has experience in finances projects, crypto platforms, branding. Her mission is to think about the logic and UX of the project. Build a brand for CashFT with her team",
      },
      {
        id: 3,
        name: "Ania Bodariuk",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/AniaBodariuk.png"),
        text: "Lead UX/UI Designer of Gym Street and UX/UI Designer of Gym Network. She has a background in branding and e-commerce projects. Lately, she is deeply into designing for Web 3.0. Her mission is to make your interaction with both platforms native and exciting.",
      },
      {
        id: 4,
        name: "Anna Kulyba",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/AnnaKulyba.png"),
        text: "Lead UX/UI Designer of Gym Street and UX/UI Designer of Gym Network. She has a background in branding and e-commerce projects. Lately, she is deeply into designing for Web 3.0. Her mission is to make your interaction with both platforms native and exciting.",
      },
    ],
  },
  {
    id: 3,
    name: "Timur Öztürk",
    jobTitle: "Moderator",
    img: require("~/assets/images/team/TimurÖztürk.png"),

    team: [
    {
        id: 1,
        name: "Jacob Oblasser",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/JacobOblasser.png"),
        text: "Marketing Projectmanager Trendda briefs and monitors the requirements between the Gym team and Trendda due to his experience in online marketing and branding. His mission is to build the concept behind the websites.",
      },
      {
        id: 2,
        name: "Diana Kasprovych",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/DianaKasprovych.png"),
        text: "Lead UX/UI designer for Gym Network Platform and website, CashFT and Marketplace. Diana has experience in finances projects, crypto platforms, branding. Her mission is to think about the logic and UX of the project. Build a brand for CashFT with her team",
      },
      {
        id: 3,
        name: "Ania Bodariuk",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/AniaBodariuk.png"),
        text: "Lead UX/UI Designer of Gym Street and UX/UI Designer of Gym Network. She has a background in branding and e-commerce projects. Lately, she is deeply into designing for Web 3.0. Her mission is to make your interaction with both platforms native and exciting.",
      },
      {
        id: 4,
        name: "Anna Kulyba",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/AnnaKulyba.png"),
        text: "Lead UX/UI Designer of Gym Street and UX/UI Designer of Gym Network. She has a background in branding and e-commerce projects. Lately, she is deeply into designing for Web 3.0. Her mission is to make your interaction with both platforms native and exciting.",
      },
    ],
  },
  {
    id: 4,
    name: "Alex Berezovskyi",
    jobTitle: "Head of UI/UX",
    img: require("~/assets/images/team/AlexBerezovskyi.png"),

    team: [
    {
        id: 1,
        name: "Jacob Oblasser",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/JacobOblasser.png"),
        text: "Marketing Projectmanager Trendda briefs and monitors the requirements between the Gym team and Trendda due to his experience in online marketing and branding. His mission is to build the concept behind the websites.",
      },
      {
        id: 2,
        name: "Diana Kasprovych",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/DianaKasprovych.png"),
        text: "Lead UX/UI designer for Gym Network Platform and website, CashFT and Marketplace. Diana has experience in finances projects, crypto platforms, branding. Her mission is to think about the logic and UX of the project. Build a brand for CashFT with her team",
      },
      {
        id: 3,
        name: "Ania Bodariuk",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/AniaBodariuk.png"),
        text: "Lead UX/UI Designer of Gym Street and UX/UI Designer of Gym Network. She has a background in branding and e-commerce projects. Lately, she is deeply into designing for Web 3.0. Her mission is to make your interaction with both platforms native and exciting.",
      },
      {
        id: 4,
        name: "Anna Kulyba",
        jobTitle: "System Designer",
        img: require("~/assets/images/team/AnnaKulyba.png"),
        text: "Lead UX/UI Designer of Gym Street and UX/UI Designer of Gym Network. She has a background in branding and e-commerce projects. Lately, she is deeply into designing for Web 3.0. Her mission is to make your interaction with both platforms native and exciting.",
      },
    ],
  },
];

export default {
  data() {
    return {
      team,
      developerAccess: team[0],
    };
  },
  components: { TeamOfModerator },
};
</script>

<style lang="scss" scoped>
.Team {
  background: #ffffff;
  .boxs {
    width: fit-content;
    .box {
      a {
        max-width: 250px;
        overflow: hidden;
        border-radius: 25px;
        box-shadow: 0px 0px 2px 0px #9797979a;
        transition: all 0.4s;
        img {
          filter: grayscale(1);
        }
        .filter {
          filter: grayscale(0) !important;
        }
        &:hover {
          box-shadow: 0px 0px 8px 0px #979797;
          transform: translateY(-10px);
          img {
            filter: grayscale(0);
          }
        }
      }
    }
  }

  .p {
    font-size: 18px;
    max-width: 650px;
    letter-spacing: 0.5px;
  }
}
</style>
