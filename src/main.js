/* Manejo del DOM */

/*Declarando las variables*/
const showPokemones = document.getElementById("cards");
const filterType = document.getElementById("filterType");
const orderData= document.getElementById("order");
const filterEgg = document.getElementById("filterEggs");
const data = window.POKEMON.pokemon;
const size = document.getElementById("result");
let condition;
let i;
let cardPokemon = ''; 
let j;
let dataEggs;
let dataType;
let sizePokemon = 0;
let eventOrder = 0;
let dataSorted;




/*Funcion que muestra pokemones*/

const showPokemon = (data) =>{

/*For para imprimir las cards de acuerdo a la data recibida
para mostrar los pokemones en su totalidad,
por filtro y por orden*/

for ( i=0; i<data.length;i++){
cardPokemon += 
`<div class="pokemonCards  col-12 col-sm-4 col-md-3">
<div class="cardsAll">
<div class="imgPokemon">
<img src=${data[i].img}  alt="${data[i].name}" class="imgpokemonlist">
</div>
<div class="card-body">
<div class="">
<h6 class="card-title">${data[i].num} ${data[i].name} </h6>

</div>
<div class = "card-title"><span class="titlePokemon">Tipo: `

/* mostrar el tipo de pokemon sin comas(,)*/
for ( j=0; j<data[i].type.length;j++){

cardPokemon += ` ${data[i].type[j]} </span>`
  
}

/*aqui termina el for y continua mostrando los datos debajo del tipo*/
cardPokemon += 
`</div>
<div>Huevos:
${data[i].egg}
</div>

</p><a href="#" class="btn btn-primary btnCard" data-toggle="modal" data-target="#miModal${data[i].id}">Detalle</a>
</div>
</div>
</div>`


/*Modal para mostrar pokemones que se enlaza con el data-target psandole el id
y colocandolo en el id del modal*/

cardPokemon += `
<div class="modal fade" id="miModal${data[i].id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog modal-sm" role="document">
<div class="modal-content">
<div class="modal-header">
<h4 class="modal-title" id="myModalLabel">${data[i].num} ${data[i].name}</h4>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>			
</div>
<div class="modal-body modalalign">
<div>
<img src="${data[i].img}" alt="${data[i].img}" class="">
</div>
<div>
<span>Peso:${data[i].weight}  </span>

<span>  Alto:${data[i].height}</span>
</div>
<div>
<span>Tipo: `

/* mostrar el tipo de pokemon sin comas(,) dentro del modal*/
for (j=0; j<data[i].type.length;j++){

cardPokemon += `${data[i].type[j]} </span>`
}
cardPokemon += `
</div>
<div>
<span>Caramelos: ${data[i].candy} </span>
<div>  Huevos: ${data[i].egg}</div>
</div>
<div>
Evolución:</div>`
/* mostrar la evolucion del pokemon dentro del modal*/

//verifico si la propiedad next_evolution existe dentro del pokemon
    if (data[i].hasOwnProperty("next_evolution")){
 // si existe capturo los objetos que contiene la propiedad       
    let evolucion = Object.values(data[i].next_evolution);
    //pregunto  si el tamano del arreglo de objetos es igual a 2
    //para imprimir la palabra primera  y segunda
    if(evolucion.length === 2){
         cardPokemon += ` Primera: `  
    }
    //si no es de el tamano indicado imprime solo unica
    else {
        cardPokemon += ` Única: `  
    }
    
         //for que imprime la  evolucion despues de ser unica o primera
         for(let j=0; j<evolucion.length;j++){
            //capturando la evolucion
            cardPokemon += ` ${evolucion[j].name}`
            //if que imprime la palabra segunda si el pokemon evoluciona dos veces
            //pregunta si el tamano es de 2 y que j sea menor que 0 
         if(evolucion.length ===2 && j<1){
             //imprimendo la segunda evolucion
            cardPokemon += ` | Segunda: `
    } 
}
    }
//si no posee la propiedad next_evolution muestra lo siguiente en el modal
else {
    cardPokemon += ` No evoluciona`

}`
</span>`
//cerrando los div del modal
cardPokemon += `

</div>
</div>
</div>
</div>
</div>`;
}
//mostrando los pokemones al inicializar la pagina
showPokemones.innerHTML = cardPokemon;

}
/*llamar a la funcion mostrar pokemones al inicio de la pagina*/
showPokemon(data);


/* Funcion filtrar pokemones por tipo*/
filterType.addEventListener("change",()=>{
//colocando los select de filtro por huevo y de ordenar en el primer index
filterEgg.selectedIndex =0;
orderData.selectedIndex = 0;
//vaciando la variable que imprime las cards
cardPokemon= '';
//capturando la condicion por la que se hara el filtro
condition = filterType.options[filterType.selectedIndex].value;

//condicionando que no tome el primer valor del select
if (condition !== 'Filtrar por tipo') {
//capturando evento de select para mantener el filtro y poder ordenar de acuerdo al filtro
eventOrder = 1;
//capturando la data filtrada de acuerdo al tipo de pokemon
dataType = window.filterData(data, condition,"type");
//ordenando la data por numero para mostrarla la primera vez en el html
dataType = window.sortData(dataType,"num","Ascendente");
//igualando la condicion al valor del select para mostrar la cantidad del tipo elegido y su porcentaje
condition = filterType.options[filterType.selectedIndex].text;
//mostrando el parrafo de la cantidad y el porcentaje del tipo de pokemon filtrado
//enviando la data filtrada por tipo y la data que contiene todos los pokemones
//para hacer el calculo del porcentaje
showResult(sizePokemon = window.computeStats(dataType,data),condition);

//pasando la data filtrada a la funcion para mostrar los pokemones
showPokemon(dataType);
}

});

/* Funcion filtrar pokemones por huevos*/
filterEgg.addEventListener("change",()=>{
    //colocando los select de filtro por tipo y de ordenar en el primer index
    filterType.selectedIndex = 0;
    orderData.selectedIndex =0;
    //vaciando la variable que imprime las cards
    cardPokemon= '';
    //capturando la condicion por la que se hara el filtro
    condition = filterEgg.options[filterEgg.selectedIndex].value;

    //condicionando que no tome el primer valor del select
    if (condition !== 'Filtrar por huevos') {
     //capturando evento de select para mantener el filtro y poder ordenar de acuerdo al filtro
    eventOrder = 2;
    //capturando la data filtrada de acuerdo al tipo de huevo
    dataEggs = window.filterData(data, condition, "egg");
    //ordenando la data por numero para mostrarla la primera vez en el html
    dataEggs = window.sortData(dataEggs,"num","Ascendente");
    //igualando la condicion al valor del select para mostrar la cantidad del tipo elegido y su porcentaje
    condition = filterEgg.options[filterEgg.selectedIndex].text;
    //mostrando el parrafo del la cantidad y el porcentaje del tipo de pokemon filtrado
    //enviando la data filtrada por huevo y la data que contiene todos los pokemones
    //para hacer el calculo del porcentaje
    showResult(sizePokemon = window.computeStats(dataEggs,data),condition);
    //pasando la data filtrada a la funcion para mostrar los pokemones
    showPokemon(dataEggs);
    }
    
    });

   
/*Funcion Calcular pokemones*/ 
const showResult =(sizePokemon, condition) =>{

 //comprobando que se esta en el evento del filtrar por tipo
 //y mostrando la cantidad y el porcentaje por su tipo
if(eventOrder === 1){
    
    size.innerHTML = `<p class = "col- 12 result" >Se muestran ${dataType.length} Pokemones tipo ${condition} que representa el ${sizePokemon}% del total de Pokemones</p>`;
}
//comprobando que se esta en el evento del filtrar huevos y 
// y mostrando la cantidad y el porcentaje por km
if(eventOrder === 2){
    
    size.innerHTML = `<p class = "col- 12 result" >Se muestran ${dataEggs.length} Pokemones de ${condition} que representa el ${sizePokemon}% del total de Pokemones </p>`;
}
}


/*Funcion Ordenar pokemones*/

orderData.addEventListener("change", () => {
//vaciando la variable que imprime las cards
cardPokemon= '';
//capturando el valor del select para el criterio del orden
let sortOrderSelect = orderData.options[orderData.selectedIndex].value;
//capturando cual evento se selecciono

//igual a 0 si no se ha accionado ningun select y se ordenan todos los pokemones
//usando la variable data
if (eventOrder === 0){

    dataSorted = data;
}
//igual a 1 si no se ha accionado el filtrar por tipo
//usando la variable dataType que captura la data por tipo
if (eventOrder === 1){

    dataSorted = dataType;
}
//igual a 2 si no se ha accionado el filtrar por huevo
//usando la variable dataEggs que captura la data por huevos
if (eventOrder === 2){

    dataSorted = dataEggs;
} 
//de acuerdo al evento accionado se envia la data correspondiente
//y se ordena de acuerdo al nombre o numero de pokemon
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
//mostrando la data ordenada
showPokemon(dataSorted);
});













