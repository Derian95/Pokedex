import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../src/utils/api'
import axios from 'axios'
import styles from './Detail.module.css'
import Loading from '../../components/loading/Loading'
import Logo from '../../components/logo/Logo'
import { Link } from 'react-router-dom'
export default function Details() {

  const { pokemonid } = useParams()
  const [dataPokemon, setDataPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  let image = ""

  const getPokemon = async () => {
    const url = API + "/" + pokemonid
    const result = await axios.get(url)
    setDataPokemon(result.data)
    console.log(result.data)
    console.log(result.data.moves)
    setLoading(false)

  }

  useEffect(() => {
    getPokemon()
  }, []);

  if (loading) {
    return <Loading />
  }
  return (
    <div className={styles.container}>
      <Link to={"/Pokedex/"}>
        <Logo />
      </Link>
      <div className={styles.containerImage}>
        <img className={styles.image} src={dataPokemon.sprites.other.dream_world.front_default} alt="s" />
      </div>

      <h1>
        {dataPokemon.name}
      </h1>
      <div className={styles.body}>
        <h4>Height</h4>
        <p>
          {dataPokemon.height}
        </p>
        <h4>weight</h4>
        <p>
          {dataPokemon.weight}
        </p>
      </div>

      <div className={styles.containerMoves}>
        <h4>Moves</h4>
        {dataPokemon.moves.map((mov, index) => {
          return (
            <p key={index}>{mov.move.name}</p>
          )
        })}
      </div>

      <div className={styles.abilities}>
        <h4>Abilities</h4>
        {dataPokemon.abilities.map((abi, index) => {
          return (
            <p key={index}>{abi.ability.name}</p>
          )
        })}
      </div>


    </div>
  )
}
