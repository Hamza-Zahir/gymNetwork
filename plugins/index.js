import Web3 from "web3";
const contractAddres = "0x0012365F0a1E5F30a5046c680DCB21D07b15FcF7";
import ContractAbi from "~/json/AbiContract.json";
import VaultContractABI from "~/json/VaultContractABI.json";
import StrategyContractABI from "~/json/StrategyContractABI.json";
import farmingContractABI from "~/json/farmingContractABI.json";
import lpTokenABI from "~/json/lpTokenABI.json"
import SinglePoolABI from "~/json/SinglePoolABI"
const Vault_ContractAddress = "0x916ee43Ac5F338364986B9AA86f7962a5779d0a1";
const Farming_ContractAddress = "0x8229f84384D2B2c0b21bbA1120208a2106b384c8";
const SinglePool_ContractAddress = "0xD249a1e3EEbae66B6B6C57197146C47e8e67E046";


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
  const web3 = new Web3("https://bsc-dataseed.binance.org/");
  const Vault_Contract = new web3.eth.Contract(VaultContractABI, Vault_ContractAddress);
  const poolLength = await Vault_Contract.methods.getPoolLength().call()

  let Vault_TVL = 0
  for (let i = 0; i < poolLength; i++) {
    const PoolInfo = await Vault_Contract.methods.poolInfo(i).call()
    const strategyAddress = PoolInfo.strategy
    const tokenAddress = PoolInfo.want
    const StrategyContract = new web3.eth.Contract(StrategyContractABI, strategyAddress);
    const sharesTotal = await StrategyContract.methods.sharesTotal().call()
    if (tokenAddress == "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c") {
      Vault_TVL += (sharesTotal / 10 ** 18) * BNbPrice;
    } else if (tokenAddress == "0x0012365F0a1E5F30a5046c680DCB21D07b15FcF7") {
      Vault_TVL += (sharesTotal / 10 ** 18) * gymnetPrice;
    } else if (tokenAddress == "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56") {
      Vault_TVL += sharesTotal / 10 ** 18
    }

  }

  return Vault_TVL;
}

const getFarmingTVL = async (BNbPrice, gymnetPrice) => {
  const web3 = new Web3("https://bsc-dataseed.binance.org/");
  const farming_Contract = new web3.eth.Contract(farmingContractABI, Farming_ContractAddress);
  const poolLength = await farming_Contract.methods.poolLength().call()

  let Farming_TVL = 0
  for (let i = 0; i < poolLength; i++) {
    const PoolInfo = await farming_Contract.methods.poolInfo(i).call()
    const lpTokenAddress = PoolInfo.lpToken
    const lpTokenContract = new web3.eth.Contract(lpTokenABI, lpTokenAddress);

    const token0 = await lpTokenContract.methods.token0().call()
    const token1 = await lpTokenContract.methods.token1().call()
    const reserves = await lpTokenContract.methods.getReserves().call()

    if (token0 == "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c") {
      Farming_TVL += (reserves[0] / 10 ** 18) * BNbPrice;
    } else if (token0 == "0x0012365F0a1E5F30a5046c680DCB21D07b15FcF7") {
      Farming_TVL += (reserves[0] / 10 ** 18) * gymnetPrice;
    } else if (token0 == "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56") {
      Farming_TVL += reserves[0] / 10 ** 18
    }

    if (token1 == "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c") {
      Farming_TVL += (reserves[1] / 10 ** 18) * BNbPrice;
    } else if (token1 == "0x0012365F0a1E5F30a5046c680DCB21D07b15FcF7") {
      Farming_TVL += (reserves[1] / 10 ** 18) * gymnetPrice;
    } else if (token1 == "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56") {
      Farming_TVL += reserves[1] / 10 ** 18
    }

  }

  return Farming_TVL;
}


const getSinglePoolTVL = async (gymnetPrice) => {
  const web3 = new Web3("https://bsc-dataseed.binance.org/");
  const SinglePool = new web3.eth.Contract(SinglePoolABI, SinglePool_ContractAddress);
  const totalGymnetLoked = await SinglePool.methods.totalGymnetLocked().call()

  const SinglePoolTVL = (totalGymnetLoked / 10 ** 18) * gymnetPrice
  return SinglePoolTVL;

}




export default {
  Scrolling() {
    scrolling();
  },

  async LoadBlockchainData() {
    const web3 = new Web3("https://bsc-dataseed.binance.org/");
    const Contract = new web3.eth.Contract(ContractAbi, contractAddres);
    const decimals = await Contract.methods.decimals().call();
    let GYMNETPrice = await Contract.methods.getGYMNETPrice().call();
    let BNBPrice = await Contract.methods.getBNBPrice().call();
    let minted = await Contract.methods.minted().call();
    let TotalSupply = await Contract.methods.totalSupply().call();
    let MAX_SUPPLY = await Contract.methods.MAX_SUPPLY().call();
    const TotalBurnt = (minted - TotalSupply) / 10 ** decimals;




    GYMNETPrice = GYMNETPrice / 10 ** decimals;
    TotalSupply = TotalSupply / 10 ** decimals;
    MAX_SUPPLY = MAX_SUPPLY / 10 ** decimals;
    minted = minted / 10 ** decimals;



    const VaultTVL = await getVaultTVL(BNBPrice, GYMNETPrice)
    const FarmingTVL = await getFarmingTVL(BNBPrice, GYMNETPrice)
    const SinglePoolTVL = await getSinglePoolTVL(GYMNETPrice)

    const TotalValueLocked = (VaultTVL + FarmingTVL + SinglePoolTVL).toFixed(2);

















    return {
      TotalBurnt: TotalBurnt.toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      GYMNETPrice: GYMNETPrice.toFixed(4),
      TotalSupply: TotalSupply.toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      TotalValueLocked: TotalValueLocked.toString().replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      ),
    };
  },
};
