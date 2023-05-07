require ("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY =  '8205f2d295b3f9ccd07f652bc1d2cbcf3bcf878e384def497978b5aeee17ac1e';

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    hardhat:{
      chainId: 1337,
    },
    zkTestnet: {
      url: "https://testnet.era.zksync.dev", // URL of the zkSync network RPC
      ethNetwork: "goerli", // URL of the Ethereum Web3 RPC, or the identifier of the network (e.g. `mainnet` or `goerli`)
      zksync: true,
      accounts:[PRIVATE_KEY]
  },
}
}