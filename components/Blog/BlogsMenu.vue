<template>
  <div class="py-2 pb-5">
    <div class="container">
      <div
        class="sort-btn bg-ba ms-md-4 rounded-15 cp"
        @click="showSort = !showSort"
      >
        <div
          class="BTN rounded-50 border border-primary text-ba fw-600 bg-light"
        >
          {{ sort }}
          <b-icon
            v-if="!showSort"
            icon="sort-down"
            class="h3 m-0 ms-2"
          ></b-icon>
          <b-icon v-if="showSort" icon="sort-up" class="h3 m-0 ms-2"></b-icon>
        </div>
        <ul v-if="showSort" class="m-0 p-0 fw-600 text-bd">
          <li
            class="border-bottom rounded-15"
            :class="sort === 'Newest first' ? 'text-secondary' : ''"
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
            class="border-bottom rounded-15"
            :class="sort === 'Latest articles' ? 'text-secondary' : ''"
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
            class="border-bottom rounded-15"
            :class="sort === 'Most popular' ? 'text-secondary' : ''"
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
    </div>
    <div
      class="cards px-2 col-sm-11 col-lg-12 mx-sm-auto my-5 d-flex flex-wrap"
    >
      <div
        v-for="blog in blogs"
        :key="`blog-${blog.id}`"
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

const BlogBlogsLatest = [...Blogs].reverse();
const BlogMostPopular = [...Blogs].sort(() => 0.6 - Math.random());
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

  .BTN {
    font-size: 23px;
    padding: 12px 30px;
  }
  @media (min-width: 768px) {
    width: fit-content;
  }
  .BTN {
    text-align: center;
    // font-size: 20px;
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
      font-size: 23px;
      padding: 12px 30px;
      &:hover {
        background: #eef8fc;
      }
    }
  }
}
.cards {
  max-width: 1300px;
}
</style>
