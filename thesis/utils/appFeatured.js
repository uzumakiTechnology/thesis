import { ethers } from "ethers";
import { 
    erc20Token1ABI,
    erc20Token1Address,
    erc20Token2ABI,
    erc20Token2Address,
    singleSwapTokenABI,
    singleSwapTokenAddress,
    multiHopSwapTokenABI,
    multiHopSwapTokenAddress,
    IWETHABI,
    IWETHAddress,
    
} from "../constants/constant";



export const checkIfWalletConnected = async () =>{
    try {
        if(!window.ethereum) return console.log('Please install Metamask');
        const accounts = await window.ethereum.request({
            method:"eth_accounts",
        })
        const firstAccounts = accounts[0];
        return firstAccounts;
    } catch (error) {
        console.log(error);
    }
}

// erc20Token1 fetching
export const FetchErc20Token1Contract = (signerOrProvider) => 
    new ethers.Contract(erc20Token1Address, erc20Token1ABI, signerOrProvider);

// erc20Token2 fetching
export const FetchErc20Token2Contract = (signerOrProvider) => 
    new ethers.Contract(erc20Token2Address, erc20Token2ABI, signerOrProvider);

// singleSwapToken fetching
export const FetchSingleSwapTokenContract = (signerOrProvider) =>
    new ethers.Contract(singleSwapTokenAddress, singleSwapTokenABI, signerOrProvider);

// MultiHopSwapTokenAddress
export const FetchMultiHopSwapTokenContract = (signerOrProvider) =>
    new ethers.Contract(multiHopSwapTokenAddress, multiHopSwapTokenABI, signerOrProvider);


const DAIAddress = '0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844'
// IWETH 
export const FetchDAIContract = (signerOrProvider) =>
    new ethers.Contract(DAIAddress, IWETHABI, signerOrProvider);


export const ConnectingWithDaiToken = async () =>{
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner(); 
        const Daicontract = FetchDAIContract(signer);
        return Daicontract;
    } catch (error) {
        console.log(error);
    }
}


export const FetchIWETHContract = (signerOrProvider) =>
  new ethers.Contract(IWETHAddress, IWETHABI, signerOrProvider);

// connect with ERC20Token1 contract 
export const ConnectingWithErc20Token1 = async () =>{
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();   
        const erc20token1contract = FetchErc20Token1Contract(signer);
        return erc20token1contract;
    } catch (error) {
        console.log(error);
    }
}
export const ConnectingWithErc20Token2 = async () =>{
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(); 
        const erc20token2contract = FetchErc20Token2Contract(signer);
        return erc20token2contract;
    } catch (error) {
        console.log(error);
    }
}
export const ConnectingWithSingleSwapToken = async () =>{
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(); 
        const singleSwapTokenContract = FetchSingleSwapTokenContract(signer);
        return singleSwapTokenContract;
    } catch (error) {
        console.log(error);
    }
}

export const ConnectingWithMultiHopSwapToken = async () =>{
    try {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(); 
        const multiHopSwapTokenContract = FetchMultiHopSwapTokenContract(signer);
        return multiHopSwapTokenContract;
    } catch (error) {
        console.log(error);
    }
}

export const ConnectingWithIWETHToken = async () =>{
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner(); 
        const IWETHContract = FetchIWETHContract(signer);
        return IWETHContract;
    } catch (error) {
        console.log(error);
    }
}

