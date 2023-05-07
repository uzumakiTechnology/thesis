const { expect } = require("chai");
const {ethers} = require('hardhat')

// goerli
const DAI = '0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844'
const WETH9 = '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
const USDC = '0x07865c6E87B9F70255377e024ace6630C1Eaa37F'

// mainnet
// const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
// const WETH9 = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
// const USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

describe("SingleSwapToken", () =>{
    let singleSwapToken;
    let accounts;
    let weth;
    let dai;
    let usdc;

    before(async() =>{
        accounts = await ethers.getSigners();

        weth = await ethers.getContractAt('IWETH', WETH9);
        dai = await ethers.getContractAt('IERC20', DAI);


        const SingleSwapToken = await ethers.getContractFactory('SingleSwapToken');
        singleSwapToken = await SingleSwapToken.deploy();

        await singleSwapToken.deployed();


    })
    it("swapExactInputSingle", async () =>{
        const amountIn = 10n ** 18n;

        //Deposite WETH
        await weth.connect(accounts[0]).deposit({value: amountIn});
        await weth.connect(accounts[0]).approve(singleSwapToken.address, amountIn);

        // SWAP
        await singleSwapToken.swapExactInputSingle(amountIn);
        console.log("DAI balance: " , await dai.balanceOf(accounts[0].address) );

        // console.log(weth);
        // console.log(dai);
        // console.log(usdc);
        //console.log(accounts); // 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
        // console.log(singleSwapToken);

    }) 

})

