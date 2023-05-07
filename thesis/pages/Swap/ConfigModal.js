// This section creating UI for slippage tolerance part

import React, { useState, useEffect } from "react";
import Image from "next/image";
import close from '../../images/close.png'
import lock from '../../images/lock.png'
import redclose from '../../images/redclose.png'
import ReactSwitch from "react-switch";

const styles = {

  Token:`absolute bg-[#1e1e1e] w-[30rem] h-[25rem] mx-auto my-0 p-8 rounded-lg`,
  Token_box:`text-[1.2rem] leading-[0]`,
  Token_box_heading:`flex items-center justify-between text-white`,
  Token_box_h2:`text-[1.2rem] leading-[4] text-white`,
  Token_box_input:`flex gap-4 items-center leading-tight`,
  Token_box_input_button:`bg-[#cff80b] text-[900] text-base cursor-pointer px-4 py-2 rounded-lg border-0`,
  Token_box_input_input:` w-4/5 border text-end text-[#cff80b] px-4 py-2 rounded-lg border-0 border-solid border-[#cff80b]`,
  Token_box_para:`flex items-center gap-4 text-white`,
  Token_box_toggle:`flex items-center justify-between`,

}

const ConfigModal = ({
  setOpenSetting,
  setSlippage,
  slippage,
  deadline,
  setDeadline,
}) => {

  const [checked, setChecked] = useState(false);


  return (
    <div className={styles.Token}>
    <div className={styles.Token_box}>
      <div className={styles.Token_box_heading}>
        <h4>Setting</h4>
        <Image
          src={redclose}
          alt="close"
          width={50}
          height={50}
          onClick={() => setOpenSetting(false)}
        />
      </div>

      <p className={styles.Token_box_para}>
        Slippage tolerance{""}
        <Image src={lock} alt="img" width={20} height={20} />
      </p>

      <div className={styles.Token_box_input}>
        <button className={styles.Token_box_input_button}>Auto</button>
        <input
          className={styles.Token_box_input_input}
          type="text"
          placeholder={slippage}
          onChange={(e) => setSlippage(e.target.value)}
        />
      </div>

      <p className={styles.Token_box_para}>
        Deadline Time{""}
        <Image src={lock} alt="img" width={20} height={20} />
      </p>

      <div className={styles.Token_box_input}>
        <input
        className={styles.Token_box_input_input}
          type="text"
          placeholder={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button className={styles.Token_box_input_button}>minutes</button>
      </div>


      <h2 className={styles.Token_box_h2}>Interface Setting</h2>

      <div className={styles.Token_box_toggle}>
        <p className={styles.Token_box_para}>Transaction deadline</p>
        <ReactSwitch checked={checked} onChange={() => { setChecked(!checked) }} />
      </div>
    </div>
  </div>
)
  
}

export default ConfigModal