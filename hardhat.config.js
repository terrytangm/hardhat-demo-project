// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
//require("./tasks/claimtoken");
require("./tasks/eth_foxe_getmerkle");
require("./tasks/generateMerkle");
require("./tasks/taskdemo");
require("./tasks/account_utils");
// 配置gas估算插件
require("hardhat-gas-reporter");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const { projectId, mnemonic1, ALCHEMY_API_KEY } = process.env;
module.exports = {
  networks: {
    // npx hardhat run scripts/deploy.js --network eth_testnet
    // 领水地址 : https://goerlifaucet.com/
    eth_testnet: {
      url: `https://goerli.infura.io/v3/${projectId}`,
      accounts: {
        mnemonic: mnemonic1,
      },
    },
    bsc: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: {
        mnemonic: mnemonic1,
      },
    },
    bsc_testnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts: {
        mnemonic: mnemonic1,
      },
    },
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
        blockNumber: 17342219,
      },
    },
  },
  solidity: {
    // 可修改编译器版本
    compilers: [
      {
        version: "0.8.18",
      },
      {
        version: "0.6.12",
      },
      {
        version: "0.8.7",
      },
      {
        version: "0.8.0",
      },
    ],
  },
  gasReporter: {
    // 开启gas估算插件 设置人民币和gas费换算，也可以设置为美元 usd
    enabled: false,
    currency: "USD",
    token: "ETH",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
};
