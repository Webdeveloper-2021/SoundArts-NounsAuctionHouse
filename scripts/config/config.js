import { util } from "chai";
import { utils } from "ethers";

const payees = [
    "0x27a19c04Fc5045846Ca9C61da7b9B5dBa153Bb56",
    "0xE0a9D95D6B0B87a058653D0305FDA10A82d64256",
    "0x392678bc9BBcc5F53Db693e557f94a6549CB2692",
    "0x6d9e80fb5c9606f9e505c9166cec32101b6572a6",
    "0x1c9ff65c105Dc8737E681DD62F0d495c6951002E",
    "0x0BF6305D4382C37a7C330604048AE9813DDadE28",
    "0x559C4b03a2474b04074c3678d08Fd5B8BaE85028",
];

const shares = [
    500000,
    250000,
    150000,
    62500,
    18750,
    9375,
    9375
];

export default {
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
    apeAddress: "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
    // minterSigner: process.env.TEST_PAYEE_0 as string,
    minterSigner: process.env.TEST_PAYEE_0,
    payees,
    shares
}

