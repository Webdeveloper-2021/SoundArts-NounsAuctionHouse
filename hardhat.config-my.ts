// hardhat.config.ts
import * as dotenv from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";

import 'dotenv/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-abi-exporter';
// import 'hardhat-deploy';
// import 'hardhat-deploy-ethers';
// import 'hardhat-gas-reporter';
import '@typechain/hardhat';
// import 'solidity-coverage';
// import './tasks';

/**
 * http://myetherwallet.com = 0xe6792904a85fbe74961c338b775e1d3fcecb76ac
 * @see .env file
 */
const accounts = {
  mnemonic: process.env.MNEMONIC || 'test test test test test test test test test test test junk',
};

/*

*/
dotenv.config();


/**
 * This is a sample Hardhat task. To learn how to create your own go to
 * https://hardhat.org/guides/create-task.html
 */
/*
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
    console.log(await account.getBalance());
  }
});
*/

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    /*
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [process.env.WALLET_PRIVATE_KEY!].filter(Boolean),
    },
    */
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      gasPrice: 6 * 1000000000,
      chainId: 1,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts,
      // accounts: [process.env.WALLET_PRIVATE_KEY!].filter(Boolean),
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts,
      // accounts: [process.env.WALLET_PRIVATE_KEY!].filter(Boolean),
    },

    bsc: {
      url: 'https://bsc-dataseed.binance.org',
      accounts,
      chainId: 56,
      // gasPrice: 6 * 1000000000,
      blockGasLimit: 50000000,
      gas: 410000
    },

    bscscan: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts,
      // accounts: [process.env.WALLET_PRIVATE_KEY!].filter(Boolean),
      blockGasLimit: 50000000,
      gas: 410000
    },
    bsctest: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts,
      // accounts: [process.env.WALLET_PRIVATE_KEY!].filter(Boolean),
    },
    hardhat: {
      initialBaseFeePerGas: 0,
    },
  },
  abiExporter: {
    path: './abi',
    runOnCompile: true,
    clear: true,
    spacing: 2,
    pretty: true,
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
  typechain: {
    outDir: 'typechain',
  }
};

export default config;
