import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";


// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the Router contract`);

  const WETH = '0xb9F6eD3566b66Fd5DFA58971a340D511d96c50dB';

  // Initialize the wallet.
  const wallet = new Wallet("8205f2d295b3f9ccd07f652bc1d2cbcf3bcf878e384def497978b5aeee17ac1e");
  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const Router = await deployer.loadArtifact("SobajaswapV1Router02");
  

  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  const RouterContract = await deployer.deploy(Router,['0x771073B0238243F83b79137e786A70c57E95b164',WETH]);

  // Show the contract info.
  const contractAddress = RouterContract.address;
  console.log(`${Router.contractName} was deployed to ${contractAddress}`);


}
