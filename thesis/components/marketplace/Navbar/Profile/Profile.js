import React from 'react'
import Image from 'next/image'
import {FaUserAlt, FaRegImage, FaUserEdit} from 'react-icons/fa'
import { MdHelpCenter } from 'react-icons/md'
import {TbDownloadOff, TbDownload} from 'react-icons/tb'
import Link from 'next/link'
import user1 from '../../../../images/user-1.png'

const styles = {
  profile:`absolute shadow-[var(--box-shadow)] text-base w-80 left-[-17rem] z-[22222222222] bg-[color:var(--main-bg-color)] px-2 py-8 rounded-2xl top-[4.5rem]`,
  profile_account:`flex items-start gap-8 p-6;`,
  profile_account_img:`rounded-[50%];`,
  profile_account_info:`leading-[0.3];`,
  profile_account_info_p:`font-semibold;`,
  profile_menu:``,
  profile_menu_one:``,
  profile_menu_one_item:`flex items-center gap-8 transition-all duration-[0.3s] ease-[ease-in] px-6 py-0;`,
  profile_menu_two:``,
}

const Profile = () => {
  return (
<div className={styles.profile}>
      <div className={styles.profile_account}>
        <Image
          src={user1}
          alt="user profile"
          width={50}
          height={50}
          className={styles.profile_account_img}
        />

        <div className={styles.profile_account_info}>
          <p className={styles.profile_account_info_p}>Shoaib Bhai</p>
          <small>X038499382920203...</small>
        </div>
      </div>

      <div className={styles.profile_menu}>
        <div className={styles.profile_menu_one}>
          <div className={styles.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/myprofile" }}>My Profile</Link>
            </p>
          </div>
          <div className={styles.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{ pathname: "/my-items" }}>My Items</Link>
            </p>
          </div>
          <div className={styles.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: "/edit-profile" }}>Edit Profile</Link>
            </p>
          </div>
        </div>

        <div className={styles.profile_menu_two}>
          <div className={styles.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/help" }}>Help</Link>
            </p>
          </div>
          <div className={styles.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link href={{ pathname: "/disconnet" }}>Disconnet</Link>
            </p>
          </div>
        </div>
      </div>
    </div>  )
}

export default Profile