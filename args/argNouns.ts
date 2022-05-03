const hre = require("hardhat");
import { utils } from "ethers";
import { parseEther } from "ethers/lib/utils";
module.exports = [    
    "0x6f1247Ea33A5C674A53e7710b246764e0D5b9Cb8",     // rinkeby erc721a    tokenAddress,
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",       //wethAddress
    "0x4d224452801ACEd8B2F0aebE155379bb5D594381",       //apeAddress,
    600,                                                //timeBuffer
    // BigNumber { _hex: '0x1bc16d674ec80000', _isBigNumber: true },                              //reservePriceETH
    // BigNumber { _hex: '0xa2a15d09519be00000', _isBigNumber: true },                           //reservePriceAPE
    parseEther("2"),
    parseEther("3000"),    
    5,                                                  //minBidIncrementPercentage
    86400
]