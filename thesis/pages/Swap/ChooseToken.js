import React, {useState} from 'react'
import Image from 'next/image'
import btc from '../../images/btc.png'
import eth from '../../images/eth.png'
import usdc from '../../images/usdc.png'
import usdt from '../../images/usdt.png'
import xrp from '../../images/xrp.png'
import bnb from '../../images/bnb.png'
import shiba from '../../images/shiba.png'
import cardano from '../../images/cardano.png'
import close from '../../images/close.png'
import search from '../../images/Search.png'


const styles = {
  ChooseToken:`absolute bg-[#1e1e1e] w-[30rem] h-[25rem] mx-auto my-0 p-8 rounded-lg`,
  ChooseToken_box:``,
  ChooseToken_box_heading:`flex items-center justify-between`,
  ChooseToken_box_search:`flex items-center bg-[#cff80b] gap-4 px-4 py-2 rounded-lg`,
  ChooseToken_box_search_img:``,
  ChooseToken_box_tokens:`grid grid-cols-[repeat(4,1fr)] gap-2 mt-6`,
  ChooseToken_box_tokens_span:`flex items-center gap-[0.2rem] w-[5.7rem] cursor-pointer p-[0.3rem] rounded-2xl border-2 border-solid border-[#cff80b]`,
  active:`bg-[#cff80b] text-[#1e1e1e]`,
  ChooseToken_box_search_input:`bg-transparent text-[#1e1e1e] font-medium w-[90%] border-0`,

}

const ChooseToken = ({openToken, tokens, tokenData}) => {


  const [activeToken, setActiveToken] = useState(1);

  const coins = [
    {
      name:"ETH",
      img: eth
    },
    {
      name: "btc",
      img:btc
    },
    {
      name:"usdc",
      img:usdc
    },
    {
      name:"usdt",
      img:usdt
    },
    {
      name:"xrp",
      img:xrp
    },
    {
      name:"cardano",
      img:cardano
    },
    {
      name:"bnb",
      img:bnb
    },
    {
      name:"shiba",
      img:shiba
    }
  ]
  
  return (
    <div className={styles.ChooseToken}>
      <div className={styles.ChooseToken_box}> 
        <div className={styles.ChooseToken_box_heading}>
          <h4>Select a Token</h4>
          <Image src={close} alt='close' width={50} height={50} onClick={()=>{
            openToken(false)
          }}/>
        </div>
        <div className={styles.ChooseToken_box_search}>
          <div className={styles.ChooseToken_box_search_img}> 
            <Image src={search} alt='search' width={20} height={20}/>
          </div>
          <input type="text" placeholder='Name or Address'/>
        </div>

          <div className={styles.ChooseToken_box_tokens}>
            {coins.map((e,index) =>(
              <span key={index +1} className={styles.active == index +1 ? `${styles.active}` : ""}
                onClick={()=> (setActiveToken(index+1),tokens({name:e.name,img: e.img}))}
              >
                <Image src={e.img || eth} alt='image' width={30} height={30} />
                {e.name}
              </span>
            ))}
          </div>

      </div>
      
    </div>
  )
}

export default ChooseToken