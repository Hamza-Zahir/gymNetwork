<template>
  <section class="Team py-5">
    <div class="Team-container mx-auto pt-5">
      <div class="title mx-auto text-center">
        <h1 class="text-center fw-bold">{{content.gym_network_team}}</h1>
        <p class="pc mt-4">
          {{content.gym_network_team_desc}}
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
                <span class="text-secondary">{{ content[developer.jobTitle] }}</span>
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
  import { mapGetters } from "vuex";

import TeamOfModerator from "./TeamOfModerator.vue";
const team = [
  {
    id: 1,
    name: "Alberto Mera",
    jobTitle: "system_designer",
    img: require("~/assets/images/team/AlbertoMera.png"),
    title: "",
    team: [],
  },
  {
    id: 2,
    name: "Lewis Mhlanga",
    jobTitle: "moderator",
    img: require("~/assets/images/team/LewisMhlanga.png"),
    title: "",
    team: [],
  },
  {
    id: 3,
    name: "Timur Öztürk",
    jobTitle: "moderator",
    img: require("~/assets/images/team/TimurÖztürk.png"),
    title: "",
    team: [],
  },
  {
    id: 4,
    name: "Diana Kasprovych",
    jobTitle: "lead_designer_UX_UI",
    img: require("~/assets/images/team/diana.jpg"),
    title: "UX/UI",
    team: [
      {
        id: 1,
        name: "Diana Kasprovych",
        jobTitle: "lead_designer_UX_UI",
        img: require("~/assets/images/team/DianaKasprovych.png"),
        text: "Diana_Kasprovych_desc",
      },
      {
        id: 2,
        name: "Jacob Oblasser",
        jobTitle: "projectmanger_UX_UI",
        img: require("~/assets/images/team/JacobOblasser.png"),
        text: "Jacob_Oblasser_desc",
      },
      {
        id: 3,
        name: "Ania Bodariuk",
        jobTitle: "UX_UI_designer",
        img: require("~/assets/images/team/AniaBodariuk.png"),
        text: "Ania_Bodnariuk_desc",
      },
    ],
  },
];

export default {
  computed: {
      ...mapGetters(["content"]),
    },
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
