import React from 'react'
import styles from './Pagination.module.css'
import arrowLeft from '../../assets/left2.png'
import arrowRight from '../../assets/right.png'

export default function Pagination({previous, changuePag,next,total,op, re}) {
 
    return (
    <div className={styles.container}>
        {previous == null ?
        (<button
          disabled={true}
          onClick={() => changuePag(previous)}> <img src={arrowLeft} alt="" /> </button>)
        : (<button
          onClick={() =>
            {changuePag(previous), re()}} ><img src={arrowLeft} alt="" /></button>)}
    <p>{total} de 1126</p>
      {next == null ?
        (<button
          disabled={true}
          onClick={() => changuePag(next) }><img src={arrowRight} alt="" /></button>)
        : (<button
          onClick={() => {changuePag(next),op()}}><img src={arrowRight} alt="" /></button>)}
    </div>
  )
}
