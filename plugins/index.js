import Web3 from "web3";
const contractAddres = "0x0012365F0a1E5F30a5046c680DCB21D07b15FcF7";
import ContractAbi from "~/json/AbiContract.json";

const scrolling = () => {
  const flickity = document.querySelector(".flickity");
  const cheldren = flickity.children;
  const _cheldrenLength = cheldren.length;
  const _pages =
    _cheldrenLength - flickity.clientWidth / cheldren[0].clientWidth;
  const scrollingInterval = setInterval(() => {
    const _scrollLeft = flickity.scrollLeft;

    if (_scrollLeft < _pages * cheldren[0].clientWidth) {
      flickity.scrollLeft += cheldren[0].clientWidth;
    } else {
      flickity.scrollLeft = 0;
    }
  }, 2000);
  flickity.addEventListener("mouseenter", () => {
    clearInterval(scrollingInterval);
  });
};

export default {
  Scrolling() {
    scrolling();
  },

  async LoadBlockchainData() {
    const web3 = new Web3("https://bsc-dataseed.binance.org/");
    const Contract = new web3.eth.Contract(ContractAbi, contractAddres);
    const decimals = await Contract.methods.decimals().call();
    let GYMNETPrice = await Contract.methods.getGYMNETPrice().call();
    let minted = await Contract.methods.minted().call();
    let TotalSupply = await Contract.methods.totalSupply().call();
    let MAX_SUPPLY = await Contract.methods.MAX_SUPPLY().call();
    const TotalBurnt = (minted - TotalSupply) / 10 ** decimals;
    GYMNETPrice = GYMNETPrice / 10 ** decimals;
    TotalSupply = TotalSupply / 10 ** decimals;
    MAX_SUPPLY = MAX_SUPPLY / 10 ** decimals;
    minted = minted / 10 ** decimals;

    const TotalValueLocked = "-------";

    return {
      TotalBurnt: TotalBurnt.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      GYMNETPrice: GYMNETPrice.toFixed(4),
      TotalSupply: TotalSupply.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      TotalValueLocked: TotalValueLocked.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    };
  },
};
