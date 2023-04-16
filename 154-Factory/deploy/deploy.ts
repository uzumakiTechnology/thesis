import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import hre from 'hardhat'

import byteCodePair from '../artifacts-zk/contracts/SobajaswapV1Factory.sol/SobajaswapV1Factory.json';
import { keccak256 } from "ethers/lib/utils";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the Factory contract`);

  // Initialize the wallet.
  const wallet = new Wallet("8205f2d295b3f9ccd07f652bc1d2cbcf3bcf878e384def497978b5aeee17ac1e");
  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const Factory = await deployer.loadArtifact("SobajaswapV1Factory");
  const InitHash = keccak256(byteCodePair.bytecode).toString();

  console.log('Init hash is :', InitHash);
  

  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  const FactoryContract = await deployer.deploy(Factory,['0x998f5d682a11dAEA3Adf8cd4D3cC6EC73405c770']);

  // Show the contract info.
  const contractAddress = FactoryContract.address;
  console.log(`${Factory.contractName} was deployed to ${contractAddress}`);


}
