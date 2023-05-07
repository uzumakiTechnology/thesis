const { expect } = require("chai");
const {ethers} = require('hardhat')

const DAI = '0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844'
const WETH9 = '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
const USDC = '0x2f3A40A3db8a7e3D09B0adfEfbCe4f6F81927557'

// const V3_SWAP_ROUTER_ADDRESS = '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';

describe("MultiHopSwapToken", () =>{
    let multiHopSwapToken;
    let accounts;
    let weth;
    let dai;
    let usdc;

    before(async() =>{
        accounts = await ethers.getSigners();

        const MultiHopSwapToken = await ethers.getContractFactory('MultiHopSwapToken');
        multiHopSwapToken = await MultiHopSwapToken.deploy('0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45');

        await multiHopSwapToken.deployed();

        weth = await ethers.getContractAt('IWETH', WETH9);
        dai = await ethers.getContractAt('IWETH', DAI);
        usdc = await ethers.getContractAt('IERC20', USDC);


    })
    it("swapExactInputMultiHop", async () =>{
        const amountIn = 10n ** 18n;

        //Deposite WETH
        await dai.deposit({
            value: amountIn
        });
        await dai.approve(multiHopSwapToken.address, amountIn);

        // SWAP
        await multiHopSwapToken.swapExactInputMultiHop(amountIn);
        console.log("WETH balance: " , await weth.balanceOf(accounts[0].address));
    }) 
})

