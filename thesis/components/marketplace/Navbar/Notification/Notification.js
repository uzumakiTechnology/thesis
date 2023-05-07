import React from 'react'
import Image from 'next/image'
import user1 from '../../../../images/user-1.png'
const styles = {
  notification:`absolute shadow-[var(--box-shadow)] text-base w-[25rem] left-[-20rem] z-[2222222222] bg-[color:var(--main-bg-color)] px-4 py-8 rounded-2xl top-14;`,
  notification_box:`flex items-start gap-4 transition-all duration-[0.3s] ease-[ease-in] p-4;`,
  notification_p:`text-[1.3rem] font-semibold mb-8;`,
  notification_box_img:`rounded-[5rem]`,
  notification_box_info:`leading-[0] mt-[-0.8rem]`,
  notification_box_info_h4:`font-semibold`,
  notification_box_info_p:`text-[15px] leading-[0.3] relative;`,
  notification_box_new:` w-2 h-2 bg-[aqua] rounded-[50%]`,

}
const Notification = () => {
  return (
 <div className={styles.notification}>
      <p className={styles.notification_p}>Notification</p>
      <div className={styles.notification_box}>
        <div className={styles.notification_box_img}>
          <Image
            src={user1}
            alt="profile image"
            width={50}
            height={50}
            className={styles.notification_box_img}
          />
        </div>
        <div className={styles.notification_box_info}>
          <h4 className={styles.notification_box_info_h4}>HIHIHI</h4>
          <p className={styles.notification_box_info_p}>Measure action your user...</p>
          <small>3 minutes ago</small>
        </div>
        <span className={styles.notification_box_new}></span>
      </div>
    </div>  )
}

export default Notification