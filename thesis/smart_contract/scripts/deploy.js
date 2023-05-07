// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.utils.parseEther("0.001");

  // ERC20Token1
  // const ERC20Token1 = await hre.ethers.getContractFactory("ERC20Token1");
  // const erc20Token1 = await ERC20Token1.deploy();
  // //ERC20Token2
  // const ERC20Token2 = await hre.ethers.getContractFactory("ERC20Token2");
  // const erc20Token2 = await ERC20Token2.deploy();
  // //SingleSwapToken
  // const SingleSwapToken = await hre.ethers.getContractFactory("SingleSwapToken");
  // const singleSwapToken = await SingleSwapToken.deploy();
  // //MultiHopSwapToken
  // const MultiHopSwapToken = await hre.ethers.getContractFactory("MultiHopSwapToken");
  // const multiHopSwapToken = await MultiHopSwapToken.deploy();

  const Token1 = await hre.ethers.getContractFactory("Token1");
  const token1 = await Token1.deploy();

  const Token2 = await hre.ethers.getContractFactory("Token2");
  const token2 = await Token2.deploy();

  // await erc20Token1.deployed();
  // await erc20Token2.deployed();
  // await singleSwapToken.deployed();
  // await multiHopSwapToken.deployed();

  await token1.deployed();
  await token2.deployed();

  // console.log(
  //   ` erc20Token1 deployed to ${erc20Token1.address}`
  // );
  // console.log(
  //   ` ercToken2 deployed to ${erc20Token2.address}`
  // ); 
  // console.log(
  //   ` SingleSwapToken deployed to ${singleSwapToken.address}`
  // );
  // console.log(
  //   ` MultiHopSwapToken deployed to ${multiHopSwapToken.address}`
  // );

    console.log(
     `Token1 deployed to ${token1.address}`
   );
   console.log(
    `Token2 deployed to ${token2.address}`
  );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
