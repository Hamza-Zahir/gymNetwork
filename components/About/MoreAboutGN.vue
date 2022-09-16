<template>
  <div class="MoreAboutGN py-5">
    <div class="py-4">
      <h1 class="container text-center fw-bold mx-auto">
        Even more about GYM Network
      </h1>
      <div
        class="
          content
          mt-3
          col-sm-11 col-md-12
          mx-sm-auto
          px-3
          mx-2
          mz-lg-auto
          py-5
        "
      >
        <div class="box box-1 d-flex flex-column rounded-20 text-light bg-bd">
          <div class="p-3 p-lg-4">
            <h2 class="fw-bold">Guide</h2>
            <p>
              Detailed tutorials, guides, promotion material and much more can
              be found in our documentation on Gitbook
            </p>
          </div>
          <a
            href="https://docs.gymnetwork.io/"
            target="_blank"
            class="text-light p-3 p-lg-4 fw-600"
            >Go to guide
            <b-icon icon="arrow-up-right" class="m-0"></b-icon>
          </a>
        </div>
        <div class="box box-2 d-flex flex-column rounded-20 text-dark light-bg">
          <div class="p-3 p-lg-4">
            <h2 class="fw-bold">Telegram</h2>
            <p class="pc">
              You can get important information and answers to your questions in
              our official Telegram group
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-end">
            <a
              href="https://t.me/gymnetwork_english"
              target="_blank"
              class="text-ba p-3 p-lg-4 fw-600"
              >Join now
              <b-icon icon="arrow-up-right" class="m-0"></b-icon>
            </a>
            <img src="~/assets/images/Telegram-bg.png" alt="" />
          </div>
        </div>
        <div class="box box-3 d-flex flex-column rounded-20 text-light bg-bd">
          <div class="p-3 p-lg-4">
            <h2 class="fw-bold">Blog & News</h2>
            <p>
              Read the latest topics and important knowledge for crypto
              investors on our blog
            </p>
          </div>
          <nuxt-link to="/blog" class="text-light p-3 p-lg-4 fw-600">
            Go to Blog
          </nuxt-link>
        </div>
        <div class="box box-4 d-flex flex-column rounded-20 text-dark light-bg">
          <div class="p-3 p-lg-4">
            <h2 class="fw-bold">Twitter</h2>
            <p class="pc">
              On our Twitter account, you will get the fastest news and changes
              around GYM Network
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-end">
            <a
              href="https://twitter.com/GymNet_Official?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              class="text-ba p-3 p-lg-4 fw-600"
              >Join now
              <b-icon icon="arrow-up-right" class="m-0"></b-icon>
            </a>
            <img src="~/assets/images/Twitter-bg.png" alt="" />
          </div>
        </div>

        <div class="box box-6 d-flex flex-column rounded-20 text-dark light-bg">
          <div class="p-3 p-lg-4">
            <h2 class="fw-bold">Support</h2>
            <p class="pc">
              Our support is available 24 hours a day for important questions
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-end">
            <a
              href="https://gymnetwork.gitbook.io/english/support-and-contact-us/costumer-support"
              target="_blank"
              class="col text-ba p-3 p-lg-4 fw-600"
              >To support
              <b-icon icon="arrow-up-right" class="m-0"></b-icon>
            </a>
            <img src="~/assets/images/Support.png" alt="" />
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
  h1 {
    font-size: 34px;
    max-width: 700px;
    @media (min-width: 768px) {
      font-size: 40px;
    }
    @media (min-width: 992px) {
      font-size: 55px;
    }
  }
  .content {
    max-width: 1200px;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    gap: 25px;
    .box {
      overflow: hidden;
      justify-content: space-between;
      p {
        margin-top: 20px;
      }
      img {
        max-width: 40%;
      }
    }
    .light-bg {
      background: #f3f3f3;
    }
    @media (min-width: 768px) {
      grid-template-rows: repeat(5, 120px);
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      .box {
        font-size: 14px;
      }
      .box-1 {
        grid-area: 1/1/3/2;
      }
      .box-2 {
        grid-area: 1/2/6/3;
        img {
          max-width: 40%;
          height: 200px;
        }
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
    @media (min-width: 992px) {
      grid-template-rows: repeat(5, 130px);
      .box {
        font-size: 16px;
      }
      .box-2 {
        img {
          max-width: 40%;
          height: auto;
        }
      }
    }
  }
}
</style>
