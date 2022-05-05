const hre = require("hardhat");
import { utils } from "ethers";
import { parseEther } from "ethers/lib/utils";
module.exports = [    
    "0x6f1247Ea33A5C674A53e7710b246764e0D5b9Cb8",     // rinkeby erc721a    tokenAddress,
    600,                                                //timeBuffer
    parseEther("2"),
    5,                                                  //minBidIncrementPercentage
    86400
]