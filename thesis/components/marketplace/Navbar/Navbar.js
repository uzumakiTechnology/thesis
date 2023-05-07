import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

// icons
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import Button from '../Button';

import Discover from './Discover/Discover';
import SideBar from './SideBar/SideBar'
import HelpCenter from './HelpCenter/HelpCenter'
import Profile from './Profile/Profile'
import Notification from './Notification/Notification'

import logo from '../../../images/logo.svg'
const styles = {
  navbar:`@apply w-full relative z-[111111111];padding-block: 1.5rem;`,
  navbar_container:`@apply w-4/5 grid grid-cols-[repeat(2,1fr)] items-center justify-between gap-4 mx-auto my-0;`,
  navbar_container_left:`grid grid-cols-[1fr_2fr] items-center`,
  logo:``,
  navbar_container_left_box_input:``,
  navbar_container_left_box_input_box_input:`w-[90%] bg-transparent border-[none]`,
  navbar_container_left_box_input_box:`w-3/5 border border-[color:var(--icons-color)] flex items-center p-2 rounded-[2rem] border-solid`,
  navbar_container_right:`grid grid-cols-[1fr_1fr_0.5fr_1fr_0.3fr] gap-4 items-center`,
  navbar_container_right_discover:`relative cursor-pointer`,
  navbar_container_right_discover_box:`absolute shadow-[var(--box-shadow)] text-base w-60 bg-[color:var(--main-bg-color)] px-2 py-4 rounded-2xl`,
  navbar_container_right_help:`relative cursor-pointer`,
  navbar_container_right_help_box:`absolute shadow-[var(--box-shadow)] text-base w-60 bg-[color:var(--main-bg-color)] px-2 py-4 rounded-2xl`,
  navbar_container_right_notify:`relative cursor-pointer;`,
  notify:`  @apply text-[2rem];`,
  navbar_container_right_button:`relative cursor-pointer;`,
  navbar_container_right_profile_box:`relative cursor-pointer;`,
  navbar_container_right_profile:`rounded-[50%]`,
  navbar_container_right_menuBtn:`hidden`,
  menuIcon:`text-[2.5rem] cursor-pointer`,
  sideBar:`  @apply fixed w-96 bg-[color:var(--main-bg-color)] shadow-[var(--box-shadow)] h-screen overflow-y-auto hidden z-[11111] top-0;`,

}

const Navbar = () => {

  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) =>{
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  }
  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };
  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

return (
 <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_container_left}>
          <div className={styles.logo}>
            <Image
              src={logo}
              alt="NFT MARKET PLACE"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.navbar_container_left_box_input}>
            <div className={styles.navbar_container_left_box_input_box}>
              <input className={styles.navbar_container_left_box_input_box_input} type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={styles.search_icon} />
            </div>
          </div>
        </div>

        {/* //END OF LEFT SECTION */}
        <div className={styles.navbar_container_right}>
          <div className={styles.navbar_container_right_discover}>
            {/* DISCOVER MENU */}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={styles.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* HELP CENTER MENU */}
          <div className={styles.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={styles.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION */}
          <div className={styles.navbar_container_right_notify}>
            <MdNotifications
              className={styles.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className={styles.navbar_container_right_button}>
            <Button btnName="Create" handleClick={() => {}} />
          </div>

          {/* USER PROFILE */}

          <div className={styles.navbar_container_right_profile_box}>
            <div className={styles.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={styles.navbar_container_right_profile}
              />

              {profile && <Profile />}
            </div>
          </div>

          {/* MENU BUTTON */}

          <div className={styles.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={styles.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* SIDBAR CPMPONE/NT */}
      {openSideMenu && (
        <div className={styles.sideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>  )
}

export default Navbar