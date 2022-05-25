import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'
import PokemonList from '../views/ListPokemon/PokemonList';
import Search from '../components/search/Search';
import Pagination from '../components/pagination/Pagination';
import {API} from './utils/api'
import Logo from '../components/logo/Logo';

function App() {
  const [post, setPost] = useState([]);
  const [next, setNext] = useState("");
  const [namePokemon, setNamePokemon] = useState("");
  const [previous, setPrevious] = useState("");
  const [total, setTotal] = useState(20);
  const [loading, setLoading] = useState(true);


  const getInformationPokemon = async (url) => {
    const response = await axios.get(url)
    return response.data

  }


  const getPokemons = async () => {
    const url = API;
    const result = await axios.get(url)
    //setPost(result.data.results)
    setNext(result.data.next)
    setPrevious(result.data.previous)

    const promises = result.data.results.map((pokemon) => {
      return getInformationPokemon(pokemon.url)
    })
    const result2 = await Promise.all(promises)
    setPost(result2)
    setLoading(false)

  }

  const changuePag = async (pagination) => {
    const url = pagination;
    const result = await axios.get(url)
    //setPost(result.data.results)
    setNext(result.data.next)
    setPrevious(result.data.previous)
    
    const promises = result.data.results.map((pokemon) => {
      return getInformationPokemon(pokemon.url)
    })
    const result2 = await Promise.all(promises)
    setPost(result2)
  }
 
  const searchPokemon=async()=>{
    if(namePokemon=="")
    {
      setPost("")
    }
    else{
    const url=API.concat(`/${namePokemon}`)
    const result= await axios.get(url)
      setPost([result.data])
    }
    
  }
  const addPages=()=>{
    setTotal(total+20)
  }
  const removePages=()=>{
    setTotal(total-20)
  }
  useEffect(() => {
    getPokemons()
  }, []);
 

if(loading){return <p>Cargando...</p>}  
  return (
    <div className="App" >
      <Logo getPokemons={getPokemons}/>
     <Search set={namePokemon} setData={setNamePokemon} search={searchPokemon}/>
      <Pagination next={next} previous={previous} changuePag={changuePag} op={addPages} re={removePages} total={total}  />
      <PokemonList data={post} />
      
      
    
    </div>
  )
}

export default App
