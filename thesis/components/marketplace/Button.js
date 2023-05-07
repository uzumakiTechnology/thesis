import React from 'react'


const styles = {
    box:``,
    button:`bg-[color:var(--icons-color)] border border-[color:var(--icons-color)] text-[1.1rem] text-[color:var(--shadow-light-color)] cursor-pointer transition-all duration-[0.2s] ease-[ease-in] shadow-[var(--box-shadow)] px-8 py-4 rounded-[2rem] border-solid;`,
}

const Button = ({buttonName, handleClick}) => {

  return (
    <div className={styles.box}>
        <button className={styles.button} onClick={()=> handleClick()}>
            {buttonName}
        </button>
    </div>
  )
}

export default Button