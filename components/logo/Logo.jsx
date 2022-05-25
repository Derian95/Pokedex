import React from 'react'
import styles from './Logo.module.css'
export default function Logo({getPokemons}) {
  const logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png"

  return (
    <img className={styles.logo} src={logo} alt="img" onClick={()=>getPokemons()}/>

  )
}
