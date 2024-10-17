// src/components/PokemonList.jsx

import { Link } from 'react-router-dom';


const PokemonList = (props) => {
    return (
      <>
        <h2>Pokemon</h2>
        <ul>
          {props.pokemon.map((currentPokemon) => (
            <li key={currentPokemon.name}>{currentPokemon.name}</li>
          ))}
        </ul>
      </>
    );
  };
  
  export default PokemonList;
  