/* Manejo del DOM */

const showPokemones = document.getElementById("cards");
const filterType = document.getElementById("filterType");
const orderData= document.getElementById("order");
const filterEgg = document.getElementById("filterEggs");
const data = window.POKEMON.pokemon;
const size = document.getElementById("result");
let condition;
let i=0, cardPokemon = '', j=0;
let dataEggs;
let dataType;
let sizePokemon = 0;
let eventOrder = 0;
let dataSorted;




/*Funcion que muestra pokemones*/

const showPokemon = (data) =>{


for ( i=0; i<data.length;i++){
cardPokemon += 
`<div class="pokemonCards  col-12 col-sm-4 col-md-3">
<div class="cardsAll">
<div class="imgPokemon">
<img src=${data[i].img}  alt="${data[i].name}" class="imgpokemonlist">
</div>
<div class="card-body">
<div class="">
<h6 class="card-title">${data[i].name} N${data[i].num}</h6>

</div>
<p class = "card-title"><span class="titlePokemon">Tipo:`


for ( j=0; j<data[i].type.length;j++){

cardPokemon += `${data[i].type[j]} 
</span>`
  
}

cardPokemon += 
`</p>
</p><a href="#" class="btn btn-primary btnCard" data-toggle="modal" data-target="#miModal${data[i].name}">Detalle</a>
</div>
</div>
</div>`


/*Modal para mostrar pokemones*/

cardPokemon += `
<div class="modal fade" id="miModal${data[i].name}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<h4 class="modal-title" id="myModalLabel">${data[i].name}</h4>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>			
</div>
<div class="modal-body">
<span>
<img src="${data[i].img}" alt="${data[i].img}" class="">
</span>
<span>Height: ${data[i].height}</span>
<span>Weight: ${data[i].weight}</span>

</div>

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
condition = filterType.options[filterType.selectedIndex].text; 

if (condition !== 'Filtrar por tipo') {


dataType = window.filterData(data, condition,"type");
dataType = window.sortData(dataType,"num","Ascendente");
eventOrder = 1;


showResult(sizePokemon = window.computeStats(dataType));


showPokemon(dataType, sizePokemon);
}

});

filterEgg.addEventListener("change",()=>{
    cardPokemon= '';
    condition = filterEgg.options[filterEgg.selectedIndex].text;

    
    if (condition !== 'Filtrar por huevos') {
     
    eventOrder = 2;
    dataEggs = window.filterData(data, condition, "egg");
    dataEggs = window.sortData(dataEggs,"num","Ascendente");
    showResult(sizePokemon = window.computeStats(dataEggs));
    showPokemon(dataEggs, sizePokemon);
    }
    
    });

   
/*Calcular pokemones*/ 
const showResult =() =>{

if(eventOrder === 1){
    
    size.innerHTML = `<p col- 12 >Se muestran ${dataType.length} Pokemones tipo ${condition} que representa el ${sizePokemon}% del total de Pokemones</p>`;
}

if(eventOrder === 2){
    
    size.innerHTML = `<p col-12>Se muestran ${dataEggs.length} Pokemones de ${condition} que representa el ${sizePokemon}% del total de Pokemones </p>`;
}
}


/*Ordenar pokemones*/

orderData.addEventListener("change", () => {
cardPokemon= '';
let sortOrderSelect = orderData.options[orderData.selectedIndex].text;

if (eventOrder === 0){

    dataSorted = data;
}
if (eventOrder === 1){

    dataSorted = dataType;
}
if (eventOrder === 2){

    dataSorted = dataEggs;
} 

if (sortOrderSelect === "A-Z"){
dataSorted = window.sortData(dataSorted,"name","A-Z");
}

if (sortOrderSelect === "Z-A"){
dataSorted = window.sortData(dataSorted,"name","Z-A");
}
if (sortOrderSelect=== "Ascendente"){
    dataSorted = window.sortData(dataSorted,"num","Ascendente");
}

if (sortOrderSelect=== "Descendente"){
    dataSorted = window.sortData(dataSorted,"num","Descendente");
}

showPokemon(dataSorted);
});













