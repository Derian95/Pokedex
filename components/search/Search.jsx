import React from 'react'
import styles from './Search.module.css'
export default function Search({data,setData,search}) {
  return (
      <div className={styles.container}>
    <input  className={styles.textInput} type="text" placeholder='search' 
      value={data} 
      onChange={(e)=> setData(e.target.value)} 

    />
      

      <input className={styles.button} type="submit" value={"Search"}  onClick={()=>search()}/>
      </div>
  )
}
