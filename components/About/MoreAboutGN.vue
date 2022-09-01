<template>
  <div class="MoreAboutGN py-5">
    <div class="container py-4">
      <h1 class="text-center fw-bold">Even more about GYM Network</h1>
      <div class="content py-5">
        <div
          class="box box-1 d-flex flex-column rounded-20 text-light bg-bd my-3 my-lg-0"
        >
          <div class="p-3">
            <h2 class="fw-bold">Documentation</h2>
            <p>
              Detailed tutorials, guides, promotion material and much more can
              be found in our documentation on Gitbook
            </p>
          </div>
          <nuxt-link to="" class="text-light p-3 fw-600"
            >Go to documentation
            <b-icon icon="arrow-up-right" class="m-0"></b-icon>
          </nuxt-link>
        </div>
        <div
          class="box box-2 d-flex flex-column rounded-20 text-dark light-bg my-3 my-lg-0"
        >
          <div class="p-3">
            <h2 class="fw-bold">Telegram</h2>
            <p class="pc">
              You can get important information and answers to your questions in
              our official Telegram group
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-end">
            <a
              href="https://t.me/gymnetwork_english"
              target="blank"
              class="text-ba p-3 fw-600"
              >Join now
              <b-icon icon="arrow-up-right" class="m-0"></b-icon>
            </a>
            <span><img src="~/assets/images/Telegram-bg.png" alt="" /></span>
          </div>
        </div>
        <div
          class="box box-3 d-flex flex-column rounded-20 text-light bg-bd my-3 my-lg-0"
        >
          <div class="p-3">
            <h2 class="fw-bold">Blog & News</h2>
            <p>
              Read the latest topics and important knowledge for crypto
              investors on our blog
            </p>
          </div>
          <nuxt-link to="" class="text-light p-3 fw-600">
            Go to Blog
            <b-icon icon="arrow-up-right" class="m-0"></b-icon>
          </nuxt-link>
        </div>
        <div
          class="box box-4 d-flex flex-column rounded-20 text-dark light-bg my-3 my-lg-0"
        >
          <div class="p-3">
            <h2 class="fw-bold">Twitter</h2>
            <p class="pc">
              On our Twitter account, you will get the fastest news and changes
              around GYM Network
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-end">
            <a
              href="https://twitter.com/GymNet_Official?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="blank"
              class="text-ba p-3 fw-600"
              >Join now
              <b-icon icon="arrow-up-right" class="m-0"></b-icon>
            </a>
            <span><img src="~/assets/images/Twitter-bg.png" alt="" /></span>
          </div>
        </div>
        <div
          class="box box-5 d-flex flex-column rounded-20 text-light bg-ba my-3 my-lg-0"
        >
          <div class="p-3">
            <h2 class="fw-bold">Newsletter</h2>
            <p>
              Regular news directly to your email inbox. Subscribe to our
              newsletter for free
            </p>
          </div>
          <nuxt-link to="" class="text-light p-3 fw-600">
            Subscribe
            <b-icon icon="arrow-up-right" class="m-0"></b-icon>
          </nuxt-link>
        </div>
        <div
          class="box box-6 d-flex flex-column rounded-20 text-dark light-bg my-3 my-lg-0"
        >
          <div class="p-3">
            <h2 class="fw-bold">Support</h2>
            <p class="pc">
              Our support is available 24 hours a day for important questions
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-end">
            <a href="" target="blank" class="text-ba p-3 fw-600"
              >To support
              <b-icon icon="arrow-up-right" class="m-0"></b-icon>
            </a>
            <span><img src="~/assets/images/Support.png" alt="" /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.MoreAboutGN {
  .content {
    .box {
      overflow: hidden;
justify-content: space-between;
    }
    .light-bg {
      background: #f3f3f3;
    }
    @media (min-width: 992px) {
      display: grid;
      grid-template-rows: repeat(5, 115px);
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;

      .box-1 {
        grid-area: 1/1/3/2;
      }
      .box-2 {
        grid-area: 1/2/4/3;
      }
      .box-3 {
        grid-area: 1/3/3/4;
      }
      .box-4 {
        grid-area: 3/1/6/2;
      }
      .box-5 {
        grid-area: 4/2/6/2;
      }
      .box-6 {
        grid-area: 3/3/6/3;
      }
    }
    @media (min-width: 1200px) {
      grid-template-rows: repeat(5, 100px);

  }
  }
}
</style>
