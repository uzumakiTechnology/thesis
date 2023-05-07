import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {GrClose} from 'react-icons/gr'
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import Button from '../../Button';
import { setPrevRandao } from '@nomicfoundation/hardhat-network-helpers';
import logo from '../../../../images/logo.svg'

const styles = {
  sideBar:``,
  sideBar_closeBtn:`absolute transition-all duration-[0.2s] ease-[ease-in-out] cursor-pointer shadow-[var(--box-shadow)] right-8 top-12;`,
  sideBar_box:`border-b-[color:var(--icons-color)] bg-[color:var(--main-bg-color)] p-8 border-b border-solid;`,
  sideBar_box_p:`mt-[-2rem];`,
  sideBar_social:`flex gap-[1.3rem] text-2xl items-center;`,
  sideBar_social_a:`transition-all duration-[0.3s] ease-[ease-in] grid p-[0.2rem] rounded-[50%];`,
  sideBar_menu:` uppercase font-medium border-b-[color:var(--icons-color)] p-8 border-b border-solid;`,
  sideBar_menu_box:`flex justify-between items-center cursor-pointer;`,
  sideBar_discover:`padding-inline: 1rem;`,
  sideBar_button:`flex items-center justify-between p-8;`
}

const SideBar = ({setOpenSideMenu}) => {

  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  // discover categories
  const discover = [
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
  ];
  // helpCenter categories
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const openDiscoverMenu = () =>{
    if(!openDiscover){
      setOpenDiscover(true);
    }else{
      setOpenDiscover(false);
    }
  }

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className={styles.sideBar}>
    <GrClose
      className={styles.sideBar_closeBtn}
      onClick={() => closeSideBar()}
    />

    <div className={styles.sideBar_box}>
      <Image src={logo} alt="logo" width={150} height={150} />
      <p className={styles.sideBar_box_p}>
        Discover the most outstanding articles on all topices of NFT & write
        your own stories and share them
      </p>
      <div className={styles.sideBar_social}>
        <a className={styles.sideBar_social_a} href="#">
          <TiSocialFacebook />
        </a>
        <a className={styles.sideBar_social_a} href="#">
          <TiSocialLinkedin />
        </a>
        <a className={styles.sideBar_social_a} href="#">
          <TiSocialTwitter />
        </a>
        <a className={styles.sideBar_social_a} href="#">
          <TiSocialYoutube />
        </a>
        <a className={styles.sideBar_social_a} href="#">
          <TiSocialInstagram />
        </a>
      </div>
    </div>

    <div className={styles.sideBar_menu}>
      <div>
        <div
          className={styles.sideBar_menu_box}
          onClick={() => openDiscoverMenu()}
        >
          <p>Discover</p>
          <TiArrowSortedDown />
        </div>

        {openDiscover && (
          <div className={styles.sideBar_discover}>
            {discover.map((el, i) => (
              <p key={i + 1}>
                <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
              </p>
            ))}
          </div>
        )}
      </div>

      <div>
        <div
          className={styles.sideBar_menu_box}
          onClick={() => openHelpMenu()}
        >
          <p>Help Center</p>
          <TiArrowSortedDown />
        </div>

        {openHelp && (
          <div className={styles.sideBar_discover}>
            {helpCenter.map((el, i) => (
              <p key={i + 1}>
                <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
              </p>
            ))}
          </div>
        )}
      </div>
    </div>

    <div className={styles.sideBar_button}>
      <Button btnName="Create" handleClick={() => {}} />
      <Button btnName="Connect Wallet" handleClick={() => {}} />
    </div>
  </div>  )
}

export default SideBar