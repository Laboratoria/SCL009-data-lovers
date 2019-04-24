/* Manejo del DOM */

<<<<<<< Updated upstream
<<<<<<< Updated upstream
const containerMostrar = document.getElementById("cards");

let i=0, cardPokemon = '';


let arrPokemon = POKEMON.pokemon;

console.log("tamano de arreglo"+ arrPokemon.length);

for ( i=0; i<arrPokemon.length;i++){

  

cardPokemon += `<div class="pokemonCards  col-xs-12 col-md-3">
<div class="cardsAll">
<div class="imgPokemon">
 <img src=${arrPokemon[i].img}  alt='Pokemon' class="imgpokemonlist">

</div>
<div class="card-body">
    <h5 class="card-title">${arrPokemon[i].name} N${arrPokemon[i].num}</h5>
    <p class="card-text">${arrPokemon[i].type}</p>
        <a href="#" class="btn btn-primary">Detalle</a>
</div>
</div>
</div>`;

    

}

containerMostrar.innerHTML = cardPokemon;
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
