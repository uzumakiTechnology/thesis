import React from 'react'
import Image from 'next/image'
import Shiba from '../../images/shiba.png'
import close from '../../images/close.png'

const styles = {
    TokenList: `absolute w-auto bg-[#1e1e1e] z-[1111111111] ml-[66.4rem] mt-8 p-4 rounded-lg`,
    TokenList_close:`absolute right-[-1rem] cursor-pointer top-[-2rem] z-[1111111111]`,
    TokenList_title: `w-full font-black leading-[5] text-[#cff80b] text-[0.8rem] px-4 py-[0.2rem] rounded-lg`,
    TokenList_box:`relative cursor-pointer border-b-[#d1f80b53] border-b border-solid`,
    TokenList_box_info:`grid grid-cols-[1fr_5fr] gap-4 items-center`,
    TokenList_box_info_symbol:`bg-[#cff80b] text-[#1e1e1e] font-bold p-2 rounded-lg`,
}

const TokenList = ({tokenData, setOpenTokenBox}) => {
    //console.log(tokenData);

    let tokenList = [];
    for (let i = 0; i < tokenData.length; i++) {
        if (i % 2 == 1) tokenList.push(tokenData[i]);
      }
      console.log(tokenList);
  return (
    <div className={styles.TokenList}>
        <p className={styles.TokenList_close} onClick={()=>{
             setOpenTokenBox(false)
        }}>
            <Image alt='close' src={close} width={50} height={50}/>

        </p>
        <div className={styles.TokenList_title}>

            <h4>Your Token List </h4>
        </div>
        {
            tokenList.map((e, index)=>(
                <div key={index} className={styles.TokenList_box}>
                    <div className={styles.TokenList_box_info}>
                    <p className={styles.TokenList_box_info_symbol}>
                        {e.name}
                    </p>
                    <p>
                        <span>{e.tokenBalance.slice(0,9)}</span> {e.symbol}

                    </p>
                    </div>     
                </div>
            ))
        }
    </div>
  )
}

export default TokenList