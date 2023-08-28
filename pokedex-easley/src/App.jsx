import React from 'react'
import { GlobalStyle } from './assets/GlobalStyle';
import Header from './Components/Header';
import PokemonCard from './Components/PokemonCard';
import PokedexPage from './Pages/PokedexPage';
import PokemonDetailPage from './Pages/PokemonDetailPage';
import PokemonsListPage from './Pages/PokemonsListPage';

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <h1>App</h1>
    <PokemonCard/>
    <PokedexPage/>
    <PokemonDetailPage/>
    <PokemonsListPage/>
        </>
  )
}

export default App