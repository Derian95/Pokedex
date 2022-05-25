import React from 'react'
import styles from './PokemonList.module.css'
import Card from '../../components/Card'

export default function PokemonList({data}) {
    
    return (
        <div className={styles.container}>
            {data.map((pokemon, index) => {
                return (
                    <Card {...pokemon} key={index} />
                )
            })}
        </div>
    )
}
