// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
// import { util } from "chai";
import { utils } from "ethers";
const config = {
    // tokenAddress: "0xB8Da418FFC2Cb675B8B3d73dca0E3f10811FBbdD",
    tokenAddress: "0x6f1247Ea33A5C674A53e7710b246764e0D5b9Cb8",     // rinkeby erc721a
    timeBuffer: 600,
    reservePriceETH: utils.parseEther("2"),
    minBidIncrementPercentage: 5,
    duration: 86400  
}

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  console.log("deploy start ====")
//   console.log("config ====", config)
  const NounsAuctionHouse = await hre.ethers.getContractFactory("NounsAuctionHouse");
  const contract = await NounsAuctionHouse.deploy(
    config.tokenAddress,
    config.timeBuffer,
    config.reservePriceETH,
    config.minBidIncrementPercentage,
    config.duration
  );

  await contract.deployed();

  console.log("NounsAuctionHouse deployed to:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
