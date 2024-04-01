const hre = require("hardhat");

const tokens = (nToken) => {
    return hre.ethers.utils.parseUnits(nToken.toString(), "ether");
};

async function main() {
    // deploy token contract
    const _initialSupply = tokens(50000000);
    const TheBlockchainCoders = await hre.ethers.getContractFactory("TheBlockchainCoders");
    const theBlockchainCoders = await TheBlockchainCoders.deploy(_initialSupply);
    console.log(`TheBlockchainCoders: ${theBlockchainCoders.address}`);
    await theBlockchainCoders.deployed();


    // sale token contract
    const _tokenPrice = tokens(1);
    const TokenSale = await hre.ethers.getContractFactory("TokenSale");
    const tokenSale = (await TokenSale.deploy(theBlockchainCoders.address, _tokenPrice));
    await tokenSale.deployed();
    console.log(`Token Sale: ${tokenSale.address}`);
}

main().catch((e) => {
    console.log(e);
    process.exitCode = 1;
});