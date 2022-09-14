<template>
  <div class="mb-5">
<h1 class="container text-center fw-bold py-3 mx-auto">You might also be interested in these articles:</h1>

  <div class="cards pb-5 px-2 col-sm-11 col-lg-12 mx-sm-auto my-5 d-flex flex-wrap">
      <div
        v-for="blog in Blogs"
        :key="`blog-${blog.id}`"

      :class="blog.id == _id ? 'd-none' : ''"
      class="py-3 p-sm-3 p-xl-4 col-12 col-md-6 col-lg-4"
      >
        <BlogCard :blog="blog" />
       
      </div>
    </div>


  </div>
</template>

<script>
  import Blogs from "~/json/Blogs.json";
import BlogCard from "./BlogCard.vue";

  export default {
    data() {
    return {
      Blogs,
    };
  },
  props:{
    _id: {
      required: true,
      type: String,
    },
  },
  components: {
    BlogCard,
  },
  }
</script>

<style lang="scss" scoped>
h1{
  font-size: 40px;
  max-width: 800px;
  @media (min-width: 768px) {
  font-size: 50px;

  }
}
.cards{
    max-width: 1300px;


  }
</style>
