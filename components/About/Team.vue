<template>
  <section class="Team py-5">
    <div class="Team-container mx-auto pt-5">
      <div class="title mx-auto text-center">
        <h1 class="text-center fw-bold">GYM Network Team</h1>
        <p class="pc mt-4">
          There are many more team members working in programming, web
          development, marketing, HR management, and tech recruitment to ensure
          the success of GYM NETWORK.
        </p>
      </div>

      <div class="content my-5">
        <div class="boxs d-sm-flex flex-wrap mx-auto justify-content-around">
          <div
            class="box p-2 p-sm-3 p-md-2 col-sm-6 col-md-5 col-lg-3 py-md-4"
            v-for="developer in team"
            :key="`developer-${developer.id}`"
          >
            <a
              :href="`#Team-${developer.id}`"
              class="d-block border rounded-25 mx-auto h-100"
              @click="
                () => {
                  if (developer.team.length) {
                    if (developerAccess === developer) {
                      developerAccess = {};
                    } else {
                      developerAccess = developer;
                    }
                  }
                }
              "
            >
              <div class="img">
                <img
                  :src="developer.img"
                  alt=""
                  class="w-100"
                  :class="developerAccess === developer ? 'filter' : ''"
                />
              </div>
              <div class="p-3">
                <h5 class="text-bd fw-bold m-0 mb-2">{{ developer.name }}</h5>
                <span class="text-secondary">{{ developer.jobTitle }}</span>
              </div>
            </a>
             
            <div v-if="developerAccess == developer" class="Signal bg-bl d-none d-lg-block"> </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="developer in team" :key="developer.id" class="bg-bl">
      <TeamOfModerator
        v-if="developerAccess == developer"
        :Moderator="developer"
      />
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
    title: "",
    team: [],
  },
  {
    id: 2,
    name: "Lewis Mhlanga",
    jobTitle: "Moderator",
    img: require("~/assets/images/team/LewisMhlanga.png"),
    title: "",
    team: [],
  },
  {
    id: 3,
    name: "Timur Öztürk",
    jobTitle: "Moderator",
    img: require("~/assets/images/team/TimurÖztürk.png"),
    title: "",
    team: [],
  },
  {
    id: 4,
    name: "Diana Kasprovych",
    jobTitle: "Lead designer UX/UI",
    img: require("~/assets/images/team/diana.jpg"),
    title: "UX/UI",
    team: [
      {
        id: 1,
        name: "Diana Kasprovych",
        jobTitle: "Lead designer UX/UI",
        img: require("~/assets/images/team/DianaKasprovych.png"),
        text: "Lead UX/UI designer for Gym Network Platform and website, CashFT and Marketplace. Diana has experience in finances projects, crypto platforms, branding. Her mission is to think about the logic and UX of the project. Build a brand for CashFT with her team.",
      },
      {
        id: 2,
        name: "Jacob Oblasser",
        jobTitle: "Projectmanger UX/UI",
        img: require("~/assets/images/team/JacobOblasser.png"),
        text: "Marketing Projectmanager Trendda briefs and monitors the requirements between the Gym team and Trendda due to his experience in online marketing and branding. His mission is to build the concept behind the websites.",
      },
      {
        id: 3,
        name: "Ania Bodariuk",
        jobTitle: "UX/UI Designer",
        img: require("~/assets/images/team/AniaBodariuk.png"),
        text: "Lead UX/UI Designer of Gym Street and UX/UI Designer of Gym Network. She has a background in branding and e-commerce projects. Lately, she is deeply into designing for Web 3.0. Her mission is to make your interaction with both platforms native and exciting.",
      },
    ],
  },
];

export default {
  data() {
    return {
      team,
      developerAccess: {},
    };
  },
  components: { TeamOfModerator },
};
</script>

<style lang="scss" scoped>
.Team {
  background: #ffffff;

  .Team-container {
    padding: 0 20px;
    max-width: 1400px;
  }

  .title {
    max-width: 700px;

    h1 {
      font-size: 34px;
    }

    @media (min-width: 768px) {
      h1 {
        font-size: 40px;
      }

      p {
        font-size: 18px;
      }
    }

    @media (min-width: 992px) {
      h1 {
        font-size: 55px;
      }
    }
  }

  .boxs {
    .box {
      position: relative;
      a {
        max-width: 280px;
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
    .Signal{
      width: 60px;
      height: 60px;
      position: absolute;
      top: 100%;
      right: 20%;
      clip-path: polygon(50% 0%, 100% 100%, 0 100%);

    }
  }

  .p {
    font-size: 18px;
    max-width: 650px;
    letter-spacing: 0.5px;
  }
}
</style>
