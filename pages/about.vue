<template>
  <div>
    <Landing />
    <AppearedOn />
    <Mission/>
  </div>
</template>

<script>
import Landing from "~/components/About/Landing.vue";
import AppearedOn from "~/components/About/AppearedOn.vue";
import Mission from "~/components/About/Mission.vue";
export default {
  components: { Landing, AppearedOn, Mission },
};
</script>

<style lang="scss" scoped></style>
