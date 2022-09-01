<template>
  <div>
<Landing/>
<BlogsMenu/>
  </div>
</template>

<script>
import Landing from '~/components/Blog/Landing.vue';
import BlogsMenu from '~/components/Blog/BlogsMenu.vue';
  export default {
    components: { Landing, BlogsMenu }
}
</script>

<style lang="scss" scoped>

</style>
