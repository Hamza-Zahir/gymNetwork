<template>
  <div :id="`developer-${Moderator.id}`" class="container teamsOf py-5">
    <h2 class="fw-bold text-center">Team of {{ Moderator.name }}</h2>
    <div class="teams py-5">

      <flickity
        ref="flickity"
        class="py-4"
        :options="flickityOptions"
      >
        <div
          v-for="developer in Moderator.team"
          :key="`dev-${developer.id}`"
          class="carousel-cell col-md-6 col-lg-4 col-xxl-3 p-2"
        >
          <div class="box border rounded-20 p-3">
            <div class="d-flex align-items-center">
              <div class="img me-3"><img :src="developer.img" alt="" /></div>
              <div class="">
                <h5 class="fw-bold text-bd">{{ developer.name }}</h5>
                <span class="text-secondary">{{ developer.jobTitle }}</span>
              </div>
            </div>
            <div class="text-center pc mt-4">
              {{ developer.text }}
            </div>
          </div>
        </div>
      </flickity>
    </div>
  </div>
</template>

<script>
import Flickity from "vue-flickity";
export default {
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        groupCells: true,
        autoPlay: true,
      },
    };
  },
  components: {
    Flickity,
  },
  props: {
    Moderator: {
      required: true,
      type: Object,
    },
  },


};
</script>

<style lang="scss" scoped>
.teamsOf {
  .carousel-cell{
    min-height: 100%;
    display: flex;

  }
  .box {
    background: #ffffff;
    // min-height: 100%;
    img {
      width: 80px;
    }
  }
}

// .................................


</style>
