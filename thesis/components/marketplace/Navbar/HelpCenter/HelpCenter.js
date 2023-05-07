import React from 'react'
import Link from 'next/link'

const styles = {
  box:``,
  helpCenter:`transition-all duration-[0.3s] ease-[ease-in] px-4 py-2;`,
}

const HelpCenter = () => {
  const helpCenterCategories = [
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
  ]
  return (
    <div className={styles.box}>
      {
        helpCenterCategories.map((e,i) =>(
          <div key={i+1} className={styles.helpCenter}>
              <Link href={{ pathname: `${e.link}` }}>{e.name}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default HelpCenter