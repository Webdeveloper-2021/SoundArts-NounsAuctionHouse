// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
// import { util } from "chai";
import { utils } from "ethers";
const config = {
    name: "WE_ARE_KLOUD",
    symbol: "KLOUD",
    baseUri: "",
    maxSupply: 5000,
    price: utils.parseEther("0.125"),
    // tokenAddress: "0xB8Da418FFC2Cb675B8B3d73dca0E3f10811FBbdD",
    tokenAddress: "0x6f1247Ea33A5C674A53e7710b246764e0D5b9Cb8",     // rinkeby erc721a
    minterAddress: "0x5233cd008943C1bFe70a353867432Bf56e9b57A2",
    auctionAddress: "0x2D525EdF24588bAF9389Bebcd59B81674103aADd",
    timeBuffer: 600,
    reservePriceETH: utils.parseEther("2"),
    reservePriceAPE: utils.parseEther("3000"),
    minBidIncrementPercentage: 5,
    duration: 86400,
    wethAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 
    apeAddress: "0x4d224452801ACEd8B2F0aebE155379bb5D594381"
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
  console.log("config ====", config)
  const NounsAuctionHouse = await hre.ethers.getContractFactory("NounsAuctionHouse");
  const contract = await NounsAuctionHouse.deploy(
    config.tokenAddress,
    config.wethAddress,
    config.apeAddress,
    config.timeBuffer,
    config.reservePriceETH,
    config.reservePriceAPE,
    config.minBidIncrementPercentage,
    86400
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
