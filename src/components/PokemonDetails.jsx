// src/components/PokemonDetails.jsx
// src/components/PokemonDetails.jsx

import { useParams } from 'react-router-dom';

const PokemonDetails = (props) => {
 // src/components/PokemonDetails.jsx
const { pokemonId } = useParams();
console.log('pokemonId:', pokemonId);
const singlePokemon = props.pokemon.find((poke) => poke._id === Number(pokemonId));
console.log('Pokemon Object:', singlePokemon)
// Always verify that any props are being passed correctly!
    return (
      <>
        <h2>{singlePokemon.name}</h2>
    <dl>
      <dt>Weight:</dt>
      <dd>{singlePokemon.weight}</dd>
      <dt>Height:</dt>
      <dd>{singlePokemon.height}</dd>
    </dl>
      </>
    );
  };
  
  export default PokemonDetails;
  