<template>
  <section class="py-5 bg-light">
    <div class="container py-lg-5 my-lg-5">
      <h1 class="fw-bold text-center pb-lg-4">Appeared on</h1>
      <div class="mt-4 d-flex flex-wrap mt-5">
        <div
          v-for="(link, i) in links_1"
          :key="`link-${i}`"
          class="d-block p-2 col-6 col-sm-4 col-md-3 col-lg-2"
        >
          <a :href="link.link" target="blank">
            <img :src="link.logo" alt="" class="w-100" />
          </a>
        </div>
      </div>
      <div class="mt-4 d-flex flex-wrap mt-2">
        <div
          v-for="(link, i) in links_2"
          :key="`logo-${i}`"
          class="d-block p-2 col-6 col-sm-4 col-md-3 col-lg-2"
        >
          <a :href="link.link" target="blank">
            <img :src="link.logo" alt="" class="w-100" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const links_1 = [
  {
    link: "https://bitcoinist.com/gym-network-gymnet-is-now-available-for-trading-on-lbank-exchange/",
    logo: require("~/assets/images/AppearedOn/bitcoinist.png"),
  },
  {
    link: "https://www.livebitcoinnews.com/gym-network-gymnet-is-now-available-for-trading-on-lbank-exchange/",
    logo: require("~/assets/images/AppearedOn/Live-Bitcoin-News.png"),
  },
  {
    link: "https://www.newsbtc.com/press-releases/gym-network-gymnet-is-now-available-for-trading-on-lbank-exchange/",
    logo: require("~/assets/images/AppearedOn/newbtc.png"),
  },
  {
    link: "https://www.digitaljournal.com/pr/gym-network-gymnet-is-now-available-for-trading-on-lbank-exchange",
    logo: require("~/assets/images/AppearedOn/DigitalJournal.png"),
  },
];
const links_2 = [
  {
    link: "https://www.marketwatch.com/press-release/gym-network-gymnet-is-now-available-for-trading-on-lbank-exchange-2022-09-03?mod=mw_quote_news_seemore",
    logo: require("~/assets/images/AppearedOn/markrtWatch.png"),
  },
  {
    link: "https://www.investing.com/news/cryptocurrency-news/gym-network-to-offer-defi-people-allinclusive-metaversemerging-recreation-with-earning-money-2778315",
    logo: require("~/assets/images/AppearedOn/investing.png"),
  },
  {
    link: "https://blockonomi.com/gym-network-the-first-ever-defi-platform-with-integrated-affiliate-system-exceeded-all-expectations-at-its-launch/",
    logo: require("~/assets/images/AppearedOn/blockOnomi.png"),
  },
  {
    link: "https://www.benzinga.com/pressreleases/22/03/g25942962/gym-network-to-offer-defi-people-all-inclusive-metaverse",
    logo: require("~/assets/images/AppearedOn/benzinga.png"),
  },
  {
    link: "https://finance.yahoo.com/news/gym-network-offer-defi-people-171500305.html",
    logo: require("~/assets/images/AppearedOn/yohoo.png"),
  },
  {
    link: "https://cryptodaily.co.uk/2022/03/gym-network-the-first-ever-defi-platform-with-integrated-affiliate-system-exceeded-all-expectations-at-its-launch",
    logo: require("~/assets/images/AppearedOn/cryptoDaily.png"),
  },
  {
    link: "https://www.newsbtc.com/press-releases/gym-network-the-first-ever-defi-platform-with-integrated-affiliate-system-exceeded-all-expectations-at-its-launch/",
    logo: require("~/assets/images/AppearedOn/newsBTC.png"),
  },
  {
    link: "https://u.today/press-releases/gym-network-the-first-ever-defi-platform-with-integrated-affiliate-system-exceeded",
    logo: require("~/assets/images/AppearedOn/utoday.png"),
  },
  {
    link: "https://cryptopotato.com/gym-network-launches-new-defi-platform-with-integrated-affiliate-system/",
    logo: require("~/assets/images/AppearedOn/cryptoPotato.png"),
  },
  {
    link: "https://crypto.news/gym-network-the-first-ever-defiplatform-with-integrated-affiliate-system-exceeded-all-expectations-at-its-launch/",
    logo: require("~/assets/images/AppearedOn/cryptonews.png"),
  },
];
export default {
  data() {
    return {
      links_1,
      links_2,
    };
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  h1 {
    font-size: 50px;
  }
}
</style>
