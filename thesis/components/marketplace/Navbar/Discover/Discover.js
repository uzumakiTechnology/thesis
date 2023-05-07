import React, {useState} from 'react'
import Link from 'next/link'


const styles = {
  discover:`transition-all duration-[0.3s] ease-[ease-in] z-[2222222222] px-4 py-2;`,

}


const Discover = () => {

  const discover = [
    // total categories
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ]

  return (
   <div>
    {discover.map((elements,i)=>(
      <div key={i+1} className={styles.discover}>
        <Link href={{pathname: `${elements.link}`}}>{elements.name}</Link>
      </div>
    ))}
   </div>
  )
}

export default Discover