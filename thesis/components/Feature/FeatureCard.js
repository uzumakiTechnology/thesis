import React from 'react'
import Image from 'next/image'
import FeatureCardRow from '../Feature/FeatureCardRow'
import RightArrow from '../../images/svg/rightArrow'


const styles = {
  trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  trendingCardWrapper: `flex items-center justify-between`,
  button: `text-[#6188FF] flex items-center cursor-pointer whitespace-nowrap justify-between`
}

const FeatureCard = ({title,icon,trendingData}) => {
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className='flex'>
        {icon && <Image src={icon} width={27} height={27} alt='' />}
        &nbsp;&nbsp;
          <p className='font-bold'>{title}</p>
        </div>
        <div className={styles.button}>More <RightArrow /></div>
      </div>
      <br/>
      {
        trendingData.map((item, index) =>{
          return (
            <FeatureCardRow
            key={index}
            number={item.number}
            symbol={item.symbol}
            name={item.name}
            icon={item.icon}
            isIncrement={item.isIncrement}
            rate={item.rate}
            /> 
          )
        })
      }
    </div>
  )
}

export default FeatureCard