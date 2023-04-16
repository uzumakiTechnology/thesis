import byteCodePair from '../artifacts-zk/contracts/SobajaswapV1Factory.sol/SobajaswapV1Factory.json';
import { keccak256 } from "ethers/lib/utils";
import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { log } from 'console';

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Generating pair .......`);

  const DAI = '0x355d88ef9CCB06078a10cF7111091cAe7756c210';
  const SP = '0x7f17E2e9FCc20308108B594FE68e20055D7CD8d3';

  const Factory = require('../artifacts-zk/contracts/SobajaswapV1Factory.sol/SobajaswapV1Factory.json')

  // Initialize the wallet.
  const wallet = new Wallet("8205f2d295b3f9ccd07f652bc1d2cbcf3bcf878e384def497978b5aeee17ac1e");
  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const F = await deployer.loadArtifact("SobajaswapV1Factory");
  
  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  const receipt = await Factory.createPair(DAI,SP);
  console.log(receipt);
  

}
