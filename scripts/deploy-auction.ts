import { ethers } from "hardhat";

import { Logger } from "tslog";
import config from "../tasks/config/configNew";

const logger: Logger = new Logger();

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy


  const factory = await ethers.getContractFactory(`NounsAuctionHouse`);
  const instance = await factory.deploy(
      config.tokenAddress,
      config.wethAddress,
      config.apeAddress,
      config.timeBuffer,
      config.reservePriceETH,
      config.reservePriceAPE,
      config.minBidIncrementPercentage,
      86400
  );

  await instance.deployed();

  logger.info(instance.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
