<template>
  <div v-if="showlink" class="w-fc box-sh p-3 rounded-15 mx-auto">
    <h5 class="d-flex fw-bold justify-content-between py-2 border-bottom">
      Share link
      <b-icon
        icon="x-circle-fill"
        class="h4 m-0 ms-sm-2 text-bl cp"
        @click="showlink = false"
      ></b-icon>
    </h5>
    <div class="p-1 fw-500">Copy and share link</div>

    <div class="phat d-flex bg-light py-3 px-2 rounded-15">
      <span class="me-2">{{ url }}</span>
      <b-icon
        icon="files"
        class="h4 m-0 ms-sm-2 cp"
        @click="copyPhat()"
      ></b-icon>
      <div
        v-if="linkCopied"
        class="p-1 rounded"
        :class="linkCopied ? 'linkCopied' : ''"
      >
        link Copied
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      linkCopied: false,
      showlink: true,
    };
  },
  mounted() {
    this.getPhat();
  },
  methods: {
    getPhat() {
      this.url = window.location;
    },

  },
};
</script>

<style lang="scss" scoped>
.box-sh {
  box-shadow: 0px 0px 8px 0px #424242c9;
}

.text-bl {
  color: #b9e9f8;
}

.phat {
  position: relative;

  span {
    overflow: hidden;
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    font-size: 14px;
  }

  .linkCopied {
    position: absolute;
    bottom: calc(100% + 5px);
    right: 20px;
    width: 100px;
    background: #f0f0f0;
    text-align: center;
    animation: hide 3s forwards;
    opacity: 1;

    @keyframes hide {
      to {
        opacity: 0;
        display: none;
      }
    }
  }
}
</style>
