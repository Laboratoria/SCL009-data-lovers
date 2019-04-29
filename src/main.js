/* Manejo del DOM */

const showPokemones = document.getElementById("cards");

const filterType = document.getElementById("filterType");



let i=0, cardPokemon = '',j=0;
let data = POKEMON.pokemon;




/Funcion que muestra pokemones/

const showPokemon = (data) =>{

for ( i=0; i<data.length;i++){

  

cardPokemon += `<div class="pokemonCards  col-xs-12 col-md-3">
<div class="cardsAll">
<div class="imgPokemon">
 <img src=${data[i].img}  alt='Pokemon' class="imgpokemonlist">

</div>
<div class="card-body">
    <div class ="namePokemon">
    <h5 class="card-title">${data[i].name} N${data[i].num}</h5>
    </div><span>Tipo:</span>`


for ( j=0; j<data[i].type.length;j++){

    cardPokemon += `<span class="card-text">${data[i].type[j]} </span>`
  
}

cardPokemon += `<p></p><a href="#" class="btn btn-primary">Detalle</a>
</div>
</div>
</div>`;

    

}

showPokemones.innerHTML = cardPokemon;

}
/llamar a la funcion mostrar pokemones al inicio de la pagina/
showPokemon(data);

/Filtrar pokemones/

filterType.addEventListener("click",()=>{
    cardPokemon= '';
    let condition = document.getElementById("filterType").value;
        
    let dataType;

  
    if (condition === "Filtrar"){
        data = POKEMON.pokemon;
        showPokemon(data);

  }

else{

    dataType = window.filterData(data, condition);
 

    for ( i=0; i<dataType.length;i++){

  

        cardPokemon += `<div class="pokemonCards  col-xs-12 col-md-3">
        <div class="cardsAll">
        <div class="imgPokemon">
         <img src=${dataType[i].img}  alt='Pokemon' class="imgpokemonlist">
        
        </div>
        <div class="card-body">
            <div class ="namePokemon"><h5 class="card-title">${dataType[i].name} N${dataType[i].num}</h5>
            
            </div><span>Tipo:</span>`
        
        
        for ( j=0; j<dataType[i].type.length;j++){
        
            cardPokemon += `<span class="card-text">${dataType[i].type[j]} </span>`
          
        }
        
        cardPokemon += `<p></p><a href="#" class="btn btn-primary">Detalle</a>
        </div>
        </div>
        </div>`;
        


    }

    showPokemones.innerHTML = cardPokemon;

}

});


