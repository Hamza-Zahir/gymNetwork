<template>
  <div class="container py-2">
    <div
      class="sort-btn bg-ba ms-md-4 rounded-15 cp"
      @click="showSort = !showSort"
    >
      <div
        class="BTN rounded-15 border border-primary text-ba fw-600 px-3 py-1 bg-light"
      >
        {{ sort }}
        <b-icon v-if="!showSort" icon="sort-down" class="h5 m-0 ms-2"></b-icon>
        <b-icon v-if="showSort" icon="sort-up" class="h5 m-0 ms-2"></b-icon>
      </div>
      <ul v-if="showSort" class="m-0 p-0 fw-600 text-center">
        <li
          class="p-2 border-bottom rounded-15 t"
          :class="sort === 'Newest first' ? 'text-secondary':''"
          @click="
            () => {
              blogs = Blogs;
              sort = 'Newest first';
            }
          "
        >
          Newest first
        </li>
        <li
          class="p-2 border-bottom rounded-15"
          :class="sort === 'Latest articles' ? 'text-secondary':''"
          @click="
            () => {
              blogs = BlogBlogsLatest;
              sort = 'Latest articles';
            }
          "
        >
          Latest articles
        </li>
        <li
          class="p-2 border-bottom rounded-15"
          :class="sort === 'Most popular' ? 'text-secondary':''"
          @click="
            () => {
              blogs = BlogMostPopular;
              sort = 'Most popular';
            }
          "
        >
          Most popular
        </li>
      </ul>
    </div>
    <div class="my-4 d-flex flex-wrap">
      <div
        v-for="blog in blogs"
        :key="`blog-${blog.id}`"
        class="py-3 p-md-3 col-12 col-md-6 col-lg-4 col-xxl-3"
      >
        <BlogCard :blog="blog" />
      </div>
    </div>
  </div>
</template>

<script>
import Blogs from "~/json/Blogs.json";

import BlogCard from "./BlogCard.vue";

const BlogBlogsLatest = [... Blogs].reverse()
const BlogMostPopular = [... Blogs].sort(() => 0.6 - Math.random())
export default {
  data() {
    return {
      BlogMostPopular,
      Blogs,
      BlogBlogsLatest,
      blogs: Blogs,
      sort: "Newest first",
      showSort: false,
    };
  },

  components: {
    BlogCard,
  },
};
</script>

<style lang="scss" scoped>
.sort-btn {
  background: #ffffff;

  position: relative;
  z-index: 10;
  @media (min-width: 768px) {
    width: fit-content;
  }
  .BTN {
    text-align: center;
    // width: fit-content;
  }

  ul {
    width: 100%;
    background: inherit;
    position: absolute;
    top: 100%;
    left: 0;

    border-radius: 0 0 15px 15px;
    li {
      list-style: none;
      cursor: pointer;
    }
  }
}
</style>
