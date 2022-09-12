<template>
  <div class="container my-5">
<h1 class="text-center fw-bold">You might also be interested in these articles:</h1>

<div class="my-4 d-flex flex-wrap">
      <div
        v-for="blog in Blogs"
        :key="`blog-${blog.id}`"
        class="py-3 p-md-3 col-12 col-md-6 col-lg-4"
      :class="blog.id == _id ? 'd-none' : ''"
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

</style>
