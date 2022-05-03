import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import { Logger } from "tslog";
import config from "./config/configNew";

const logger: Logger = new Logger();


task("deploy-auction1", "Deploys Auction contract")
    .setAction(
        async (args, hre) => {
            // const factory = await hre.ethers.getContractFactory(`contracts/NounsAuctionHouse.sol:NounsAuctionHouse`);
            const factory = await hre.ethers.getContractFactory(`NounsAuctionHouse`);
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
    );

    // address _nouns,
    // address _weth,
    // address _ape,
    // uint256 _timeBuffer,
    // uint256 _reservePriceETH,
    // uint256 _reservePriceAPE,
    // uint8 _minBidIncrementPercentage,
    // uint256 _duration