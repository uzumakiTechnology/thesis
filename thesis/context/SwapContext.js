import React ,{createContext, useEffect, useState}from 'react' 
import { useContext } from 'react'
import { ethers, BigNumber } from 'ethers'
import {
    checkIfWalletConnected, 

    ConnectingWithErc20Token1,
    ConnectingWithErc20Token2,
    ConnectingWithIWETHToken,
    ConnectingWithMultiHopSwapToken,
    ConnectingWithSingleSwapToken,
    ConnectingWithDaiToken,
} from '../utils/appFeatured'
import { ConnectWallet } from '@thirdweb-dev/react'
import { IWETHABI } from '../constants/constant'
import ERC20 from '../constants/ERC20.json'
import { parseEther } from 'ethers/lib/utils.js'


export const SwapTokenContext = createContext();

export const SwapTokenContextProvider = ({children}) =>{

    const swap = '';

    // usestate
    const [account, setAccount] = useState("");
    const [ether, setEther] = useState("");
    const [networkConnect, setNetworkConnect] = useState(""); // goerli etc ...
    const [weth9, setWeth9] = useState(""); // weth balance using for single/multiHop swap
    const [dai, setDai] = useState(""); // dai balance using for single/multiHop swap

    const [tokenData, setTokenData] = useState([]); // All user token will be storing in this array ( how much token user have in his/her wallet)
    const [getAllLiquidity, setgetAllLiquidity] = useState([]);

    const addToken = [
        '0xD809b822C40d64Acbe27845113472Ef8f7A1f0b8',
        '0x8f5b531f7bB690a95CCA642AD83c421d7C3AD8ec'
    ];

    
    // Fetch data

    const fetchingData = async () =>{
        try {
            // get user account
            const userAccount = await checkIfWalletConnected();
            setAccount(userAccount);

            // provider
            const provider = new ethers.providers.Web3Provider(window.ethereum)
           
            // check balance
            const balance = await provider.getBalance(userAccount);
            const convertBalance = BigNumber.from(balance).toString();
            const ethValue = ethers.utils.formatEther(convertBalance);
            setEther(ethValue);
            //console.log(ethValue);

            //get Network name
            const network = await provider.getNetwork();
            //console.log(network);
            setNetworkConnect(network.name);


            // ALL Token Balance
            addToken.map( async(e,index) =>{
                //getting contract
                const contract = new ethers.Contract(e, ERC20, provider);

                // getting balance of Token
                const userBalance = await contract.balanceOf(userAccount);
                const tokenLeft = BigNumber.from(userBalance).toString();
                const convertTokenBalance = ethers.utils.formatEther(tokenLeft);
                //console.log(contract);
                console.log(convertTokenBalance);

                // getting name and symbol
                const name = await contract.name();
                const symbol = await contract.symbol();

                tokenData.push({
                    name:name,
                    symbol:symbol,
                    tokenBalance: convertTokenBalance
                })
                console.log(tokenData);
            })

            // weth balance
            const weth = await ConnectingWithIWETHToken();
            const wethBalance = await weth.balanceOf(userAccount);
            const wethToken = BigNumber.from(wethBalance).toString();
            const convertWethBalance = ethers.utils.formatEther(wethToken);
            setWeth9(convertWethBalance)
            //console.log(weth9);

            // any problem let reset metamask accounts

            //dai balance
            const daiContract = await ConnectingWithDaiToken();
            const daiBalance = await daiContract.balanceOf(userAccount);
            const daiToken = BigNumber.from(daiBalance).toString();
            const convertDaiBalance = ethers.utils.formatEther(daiToken);
            setDai(convertDaiBalance)
            //console.log(dai);

        } catch (error) {
            console.log(error);
        } 
    }

    // useEffect
    useEffect(()=>{
        //console.log(tokenData);
        fetchingData()
    },[])

    // Single Swap Token
    const singleSwapToken = async () =>{
        try {
            let singleSwapToken;
            let weth;
            let dai;

            // contract interaction
            singleSwapToken = await ConnectingWithSingleSwapToken();
            //console.log(singleSwapToken);
            weth = await ConnectingWithIWETHToken();
            dai = await ConnectingWithDaiToken();

            const amountIn = 10n ** 18n;
            // we have to deposit the amountIn to the contract
            // then the contract will swap it and return an amountOut
            await weth.deposit({value: amountIn});
            await weth.approve(singleSwapToken.address,amountIn);

            // Swap
            await singleSwapToken.swapExactInputSingle(amountIn,{
                gasLimit: 300000
            })

            const balance = await dai.balanceOf(account);
            const transferAmount = BigNumber.from(balance).toString();
            const ethValue = ethers.utils.formatEther(transferAmount);
            setDai(ethValue);
            console.log("DAI balance", ethValue);

        } catch (error) {
            console.log(error);
        }
    }


    // TOP Tokens

    return (
        <SwapTokenContext.Provider value={{account,weth9,dai,ether, tokenData, singleSwapToken}}>

            {children}
        </SwapTokenContext.Provider>

    )
}



