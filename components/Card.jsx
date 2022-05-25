import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
export default function Card({ ...props }) {
    const { name, sprites, types } = props
    const color = types[0].type.name
    const back= styles.container
    
    return (
        <div className={
           
            styles.container
        } >
            <Link className={styles.link} to={"/Details/"+name} >
            <div className={styles.cardData}>
                
                <img className={styles.image} src={sprites.other.dream_world.front_default} alt="img" />
                <h3 className={styles.title}>{name}</h3>
                <div className={styles.type}>

                    {types.map((pokemonType, index) => {
                        return (
                            <p key={index}>
                                {pokemonType.type.name}
                            </p>
                        )
                    })

                    }
                </div>
            </div>
            </Link>

        </div>
    )
}
