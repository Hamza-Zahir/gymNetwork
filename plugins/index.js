import Web3 from "web3";
import ContractAbi from "~/json/AbiContract.json";
import VaultContractABI from "~/json/VaultContractABI.json";
import StrategyContractABI from "~/json/StrategyContractABI.json";
import farmingContractABI from "~/json/farmingContractABI.json";
import lpTokenABI from "~/json/lpTokenABI.json";
import SinglePoolABI from "~/json/SinglePoolABI";
const VaultContractAddress = "0x916ee43Ac5F338364986B9AA86f7962a5779d0a1";
const FarmingContractAddress = "0x8229f84384D2B2c0b21bbA1120208a2106b384c8";
const SinglePoolContractAddress = "0xD249a1e3EEbae66B6B6C57197146C47e8e67E046";
const BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
const GymnetTokenAddress = "0x0012365F0a1E5F30a5046c680DCB21D07b15FcF7";
const BUSDTokenAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
const url = process.env.URL;

const scrolling = () => {
  const flickity = document.querySelector(".flickity");
  const cheldren = flickity.children;
  const _cheldrenLength = cheldren.length;

  const scrollingInterval = setInterval(() => {
    const _pages =
      _cheldrenLength - flickity.clientWidth / cheldren[0].clientWidth;
    const _scrollLeft = flickity.scrollLeft;

    if (_scrollLeft < _pages * cheldren[0].clientWidth - _pages) {
      flickity.scrollLeft += cheldren[0].clientWidth;
    } else {
      flickity.scrollLeft = 0;
    }
  }, 2500);
  flickity.addEventListener("mouseenter", () => {
    clearInterval(scrollingInterval);
  });
};

const getVaultTVL = async (BNbPrice, gymnetPrice) => {
  const web3 = new Web3(url);
  const Vault_Contract = new web3.eth.Contract(
    VaultContractABI,
    VaultContractAddress
  );
  const poolLength = await Vault_Contract.methods.getPoolLength().call();

  let Vault_TVL = 0;
  for (let i = 0; i < poolLength; i++) {
    const PoolInfo = await Vault_Contract.methods.poolInfo(i).call();
    const strategyAddress = PoolInfo.strategy;
    const tokenAddress = PoolInfo.want;
    const StrategyContract = new web3.eth.Contract(
      StrategyContractABI,
      strategyAddress
    );
    const sharesTotal = await StrategyContract.methods.sharesTotal().call();
    if (tokenAddress == BNBTokenAddress) {
      Vault_TVL += (sharesTotal / 10 ** 18) * BNbPrice;
    } else if (tokenAddress == GymnetTokenAddress) {
      Vault_TVL += (sharesTotal / 10 ** 18) * gymnetPrice;
    } else if (tokenAddress == BUSDTokenAddress) {
      Vault_TVL += sharesTotal / 10 ** 18;
    }
  }

  return Vault_TVL;
};

const getFarmingTVL = async (BNbPrice, gymnetPrice) => {
  const web3 = new Web3(url);
  const farming_Contract = new web3.eth.Contract(
    farmingContractABI,
    FarmingContractAddress
  );
  const poolLength = await farming_Contract.methods.poolLength().call();

  let Farming_TVL = 0;
  for (let i = 0; i < poolLength; i++) {
    const PoolInfo = await farming_Contract.methods.poolInfo(i).call();
    const lpTokenAddress = PoolInfo.lpToken;
    const lpTokenContract = new web3.eth.Contract(lpTokenABI, lpTokenAddress);

    const token0 = await lpTokenContract.methods.token0().call();
    const token1 = await lpTokenContract.methods.token1().call();
    const reserves = await lpTokenContract.methods.getReserves().call();

    if (token0 == BNBTokenAddress) {
      Farming_TVL += (reserves[0] / 10 ** 18) * BNbPrice;
    } else if (token0 == GymnetTokenAddress) {
      Farming_TVL += (reserves[0] / 10 ** 18) * gymnetPrice;
    } else if (token0 == BUSDTokenAddress) {
      Farming_TVL += reserves[0] / 10 ** 18;
    }

    if (token1 == BNBTokenAddress) {
      Farming_TVL += (reserves[1] / 10 ** 18) * BNbPrice;
    } else if (token1 == GymnetTokenAddress) {
      Farming_TVL += (reserves[1] / 10 ** 18) * gymnetPrice;
    } else if (token1 == BUSDTokenAddress) {
      Farming_TVL += reserves[1] / 10 ** 18;
    }
  }

  return Farming_TVL;
};

const getSinglePoolTVL = async (gymnetPrice) => {
  const web3 = new Web3(url);
  const SinglePool = new web3.eth.Contract(
    SinglePoolABI,
    SinglePoolContractAddress
  );
  const totalGymnetLoked = await SinglePool.methods.totalGymnetLocked().call();

  const SinglePoolTVL = (totalGymnetLoked / 10 ** 18) * gymnetPrice;
  return SinglePoolTVL;
};

export default {
  Scrolling() {
    scrolling();
  },

  async LoadBlockchainData() {
    // "https://bsc-dataseed.binance.org/"
    const web3 = new Web3(url);
    const Contract = new web3.eth.Contract(ContractAbi, GymnetTokenAddress);
    const GYMNETPriceInWei = await Contract.methods.getGYMNETPrice().call();
    const BNBPriceETH = await Contract.methods.getBNBPrice().call();
    const mintedInWei = await Contract.methods.minted().call();
    const TotalSupplyInWei = await Contract.methods.totalSupply().call();

    const mintedETH = Number(web3.utils.fromWei(mintedInWei));
    const GYMNETPriceETH = Number(web3.utils.fromWei(GYMNETPriceInWei));
    const TotalSupplyETH = Number(web3.utils.fromWei(TotalSupplyInWei));

    const TotalBurntETH = mintedETH - TotalSupplyETH;
    const VaultTVL = await getVaultTVL(BNBPriceETH, GYMNETPriceETH);
    const FarmingTVL = await getFarmingTVL(BNBPriceETH, GYMNETPriceETH);
    const SinglePoolTVL = await getSinglePoolTVL(GYMNETPriceETH);

    const TotalValueLocked = (VaultTVL + FarmingTVL + SinglePoolTVL).toFixed(2);

    return {
      TotalBurnt: TotalBurntETH.toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      GYMNETPrice: GYMNETPriceETH.toFixed(4),
      TotalSupply: TotalSupplyETH.toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      TotalValueLocked: TotalValueLocked.toString().replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      ),
    };
  },
};
