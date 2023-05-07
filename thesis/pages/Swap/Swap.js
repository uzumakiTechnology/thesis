import React, { useContext } from 'react'
import Header from '../../components/Header'
import { GearFill } from 'react-bootstrap-icons'
import ConfigModal from './ConfigModal'
import { useState, useEffect } from 'react'
import TokenList from './TokenList'
import Image from 'next/image'
import eth from '../../images/eth.png'
import loading from '../../images/loading.gif'
import { ConnectWallet } from '@thirdweb-dev/react'
import ChooseToken from './ChooseToken'
import { ethers } from 'ethers'
import { SwapTokenContext } from '../../context/SwapContext'


const styles = {
   SwapSection:`w-[90%] flex items-center justify-center relative mx-auto my-8`,
   SwapSection_box:`bg-[#1e1e1e] w-[30rem] mt-20 p-4 rounded-lg`,
   SwapSection_box_heading:`flex items-center justify-between;`,
   SwapSection_box_heading_img:``,
   SwapSection_box_input:`flex items-center justify-between border mt-4 pl-8 rounded-lg border-solid border-[#cff80b] `,
   SwapSection_box_input_button:`flex items-center justify-between gap-4 leading-[0] bg-[#cff80b] font-bold text-[1.2rem] p-4 rounded-lg`,
   SwapSection_box_input_input:` bg-transparent text-[#cff80b] text-[1.2rem] border-0`,
   SwapSection_box_btn:`bg-[#cff80b] w-full text-[1.2rem] mt-6 p-4 rounded-[2rem] border-0; outline: 0 `,
}

const Swap = () => {

    const {account, ether, tokenData, singleSwapToken, weth9, dai} = useContext(SwapTokenContext);

    const [openSetting, setOpenSetting] = useState(false);
    const [openToken, setOpenToken] = useState(false);
    const [openTokensTwo, setOpenTokensTwo] = useState(false);

    const [openTokenBox, setOpenTokenBox] = useState(false);

  
    const [tokenSwapOutPut, setTokenSwapOutPut] = useState(0);
    const [poolMessage, setPoolMessage] = useState("");
    const [search, setSearch] = useState(false);
    const [swapAmount, setSwapAmount] = useState(0);

    const [tokenOne, setTokenOne] = useState({
        name: "",
        image: "",
        symbol: "",
        tokenBalance: "",
        tokenAddress: "",
      });
      //TOKEN 2
      const [tokenTwo, setTokenTwo] = useState({
        name: "",
        image: "",
        symbol: "",
        tokenBalance: "",
        tokenAddress: "",
      });

      const connectWallet = async () =>{
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner()
      }


  return (
    <div>
        <Header/>
        {!openTokenBox && (
            <TokenList tokenData={tokenData} setOpenTokenBox={setOpenTokenBox} />
        )}        

     <div className={styles.SwapSection}>
      <div className={styles.SwapSection_box}>
        <div className={styles.SwapSection_box_heading}>
          <p className='text-white'>Swap</p>
          <div className={styles.SwapSection_box_heading_img}>
            <GearFill className='position:relative' onClick={()=> setOpenSetting(true)}/>
          </div>
        </div>

        <div className={styles.SwapSection_box_input}>
          <input
            type="number"
            placeholder="0"
            onChange={(e) => (
              callOutPut(e.target.value),
              setSwapAmount(e.target.value),
              setSearch(true)
            )}
          />
          <button className={styles.SwapSection_box_input_button} onClick={() => setOpenToken(true)}>
            <Image
              src={eth}
              width={20}
              height={20}
              alt="ether"
            />
            {tokenOne.symbol || "ETH"}
            {/* <small>{tokenOne.tokenBalance.slice(0, 7)}</small> */}
            <small>{ether.slice(0,5)}</small>

          </button>
        </div>

        <div className={styles.SwapSection_box_input}>
          <input type="text" placeholder="0" /> 
          <p>
            {search ? (
              <Image
                src={loading}
                width={100}
                height={40}
                alt="loading"
              />
            ) : (
              tokenSwapOutPut
            )}
          </p>
          <button className={styles.SwapSection_box_input_button} onClick={() => setOpenTokensTwo(true)}>
            <Image
              src={eth}
              width={20}
              height={20}
              alt="ether"
            />
            {tokenTwo.symbol || "ETH"}
            {/* <small>{tokenTwo.slice(0, 8)}</small> */}
            <small>{dai}</small>
          </button>
        </div>

        {search ? (
          <Image src={loading} width={100} height={40} alt="loading" />
        ) : (
          poolMessage
        )}

        {account ? (
          <button
            className={styles.SwapSection_box_btn}
            onClick={() =>
              singleSwapToken({
                token1: tokenOne,
                token2: tokenTwo,
                swapAmount,
              })
            }
          >
            Swap
          </button>
        ) : (
          <button
            onClick={() => connectWallet()}
            className={styles.SwapSection_box_btn}
          >
            Connect Wallet
          </button>
        )}
      </div>

      {openSetting && <ConfigModal setOpenSetting={setOpenSetting} />}

      {openToken && (
        <ChooseToken
          openToken={setOpenToken}
          tokens={setTokenOne}
          tokenData={tokenData}
        />
      )}
      {openTokensTwo && (
        <ChooseToken
          openToken={setOpenTokensTwo}
          tokens={setTokenTwo}
          tokenData={tokenData}
        />
      )}
    </div>
      </div> 
  )
}

export default Swap