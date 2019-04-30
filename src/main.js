/* Manejo del DOM */

const showPokemones = document.getElementById("cards");

const filterType = document.getElementById("filterType");

const orderdata= document.getElementById("order");

let i=0, cardPokemon = '',j=0;

const data = window.POKEMON.pokemon;




/*Funcion que muestra pokemones*/

const showPokemon = () =>{

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
/*llamar a la funcion mostrar pokemones al inicio de la pagina*/
showPokemon(data);

/*Filtrar pokemones*/

filterType.addEventListener("change",()=>{
    cardPokemon= '';
    let condition = document.getElementById("filterType").value;
        
    const dataType = window.filterData(data, condition);
 

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
        


    

    showPokemones.innerHTML = cardPokemon;

}

});

/*Ordenar pokemones*/

orderdata.addEventListener("change", () => {
cardPokemon= '';

let sortOrderSelect = document.getElementById("order").value;


let dataSorted;

    if (sortOrderSelect === "orderaz"){
        dataSorted = window.sortData(data,"name","ascaz");

    }

    if (sortOrderSelect === "orderza"){
        dataSorted = window.sortData(data,"name","descza");

    }
if (sortOrderSelect=== "ascendent"){
    dataSorted = window.sortData(data,"num","ascnum");
}

if (sortOrderSelect=== "descendent"){
    dataSorted = window.sortData(data,"num","descnum");
}

for ( i=0; i<dataSorted.length;i++){

  

    cardPokemon += `<div class="pokemonCards  col-xs-12 col-md-3">
    <div class="cardsAll">
    <div class="imgPokemon">
     <img src=${dataSorted[i].img}  alt='Pokemon' class="imgpokemonlist">
    
    </div>
    <div class="card-body">
        <div class ="namePokemon"><h5 class="card-title">${dataSorted[i].name} N${dataSorted[i].num}</h5>
        
        </div><span>Tipo:</span>`
    
    
    for ( j=0; j<dataSorted[i].type.length;j++){
    
        cardPokemon += `<span class="card-text">${dataSorted[i].type[j]} </span>`
      
    }
    
    cardPokemon += `<p></p><a href="#" class="btn btn-primary">Detalle</a>
    </div>
    </div>
    </div>`;
    


}

showPokemones.innerHTML = cardPokemon;
});
