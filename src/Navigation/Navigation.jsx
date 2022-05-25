import { BrowserRouter , Route,Routes} from "react-router-dom";
import App from "../App";
import Details from "../../views/detail/Details";
import React from 'react'

export default function Navigation() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/pokedex" element={<App />} />
        <Route  path="/Details/:pokemonid" element={<Details />} />
    </Routes>
    </BrowserRouter>
  )
}
