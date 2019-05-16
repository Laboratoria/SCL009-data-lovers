/* Manejo del DOM */



  fetch('https://raw.githubusercontent.com/nohestmm/SCL009-data-lovers/master/src/data/pokemon/pokemon.json')
  .then(response =>{return response.json()})
  
  .then(myJson => {
 const dataPokemon = myJson.pokemon;
/*Declarando las variables*/
let sizePokemon = 0;
let elementTypePokemon;
const showPokemones = document.getElementById("cards");
const filterType = document.getElementById("filterType");
const orderData= document.getElementById("order");
const filterEgg = document.getElementById("filterEggs");
//const dataPokemon = window.POKEMON.pokemon;
const size = document.getElementById("result");
const myChartPokemon = document.getElementById("chartPokemon");
const search = document.getElementById("buttonSearching");
let condition;
let i;
let cardPokemon = ''; 
let j;
let dataEggs;
let dataType;
let eventOrder = 0;
let dataSorted;
let dataEvolution;
let evolution;
let searchPokemon;






/*Funcion que muestra pokemones*/

const showPokemon = (data) =>{

/*For para imprimir las cards de acuerdo a la data recibida
para mostrar los pokemones en su totalidad,
por filtro y por orden*/

data.forEach(element => {
    

cardPokemon += 
`<div class="pokemonCards  col-12 col-sm-4 col-md-3">
<div class="cardsAll">
<div class="imgPokemon">
<img src=${element.img}  alt="${element.name}" class="imgpokemonlist">
</div>
<div class="card-body">
<div class="">
<h6 class="card-title">${element.num} ${element.name} </h6>

</div>
<div class = "card-title"><span class="titlePokemon">`

/* mostrar el tipo de pokemon sin comas(,)*/


for ( j=0; j<element.type.length;j++){

cardPokemon += `${element.type[j]}</span>`
if(element.type.length === 2 && j<1){
    //imprimendo la segunda evolucion
   cardPokemon += `<span class="titlePokemon">`
} 

}

/*aqui termina el for y continua mostrando los datos debajo del tipo*/
cardPokemon += 
`</div>
<div class = "card-title"><img src="./img/egg.png" class= "icon">
${element.egg}
</div>

</p><a href="#" class="btn btn-primary btnCard" data-toggle="modal" data-target="#miModal${element.id}">Ver mas</a>
</div>
</div>
</div>`


/*Modal para mostrar pokemones que se enlaza con el data-target psandole el id
y colocandolo en el id del modal*/

cardPokemon += `
<div class="modal fade" id="miModal${element.id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog modal-sm" role="document">
<div class="modal-content">

<div class="modal-body">
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>	
<div>
<img src="./img/blue-degrade-vector.jpg" class="">
</div>
<div>
<img src="${element.img}" alt="${element.img}" class="imgModal">

</div>
<div>
<div>
<h4 class="modal-title" id="myModalLabel">${element.num} ${element.name}</h4>
			
</div>
<span>Peso:${element.weight}  </span>

<span>  Alto:${element.height}</span>
</div>
<div>
<span class="titlePokemon">`

/* mostrar el tipo de pokemon sin comas(,)*/


for ( j=0; j<element.type.length;j++){

cardPokemon += `${element.type[j]}</span>`
if(element.type.length === 2 && j<1){
    //imprimendo la segunda evolucion
   cardPokemon += `<span class="titlePokemon">`
} 
  
}
cardPokemon += `
</div>
<div>
<span><img src="./img/candy.png" class= "icon">${element.candy} </span>
<div><img src="./img/egg.png" class= "icon">${element.egg}</div>
</div>



<div>
Evolución:</div>`
/* mostrar la evolucion del pokemon dentro del modal*/

//verifico si la propiedad next_evolution existe dentro del pokemon
if (element.hasOwnProperty("next_evolution")){
    // si existe capturo los objetos que contiene la propiedad       
       evolution = Object.values(element.next_evolution);
       //pregunto  si el tamano del arreglo de objetos es igual a 2
       //para imprimir la palabra primera  y segunda
    
       
            //for que imprime la  evolucion despues de ser unica o primera
        evolution.forEach(element =>{
                let name = element.name;
                dataEvolution = window.filterData(dataPokemon,name,"name");
               //capturando la evolucion
               cardPokemon += `<img src ="${dataEvolution[0].img}">
               <p>${dataEvolution[0].name}</p>`
               //if que imprime la palabra segunda si el pokemon evoluciona dos veces
               //pregunta si el tamano es de 2 y que j sea menor que 0 
            if(evolution.length ===2 && j<1){
                //imprimendo la segunda evolucion
               cardPokemon += `<img src ="./img/arrow.png"> `
       } 
   });
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
</div>`

});

//mostrando los pokemones al inicializar la pagina
showPokemones.innerHTML = cardPokemon;
imgTypePokemon();
}
/*funcion que coloca la imagen del tipo de pokemon*/

const imgTypePokemon =() =>{
elementTypePokemon = document.getElementsByClassName("titlePokemon");

for(i=0;i<elementTypePokemon.length; i++){
if(elementTypePokemon[i].textContent === "Water")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/water.png" class="icon" alt="water" target= "water">';
}

if(elementTypePokemon[i].textContent === "Rock")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/rock.png" class="icon" alt="rock">';
}

if(elementTypePokemon[i].textContent === "Grass")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/grass.png" class="icon" alt="grass">';
}

if(elementTypePokemon[i].textContent === "Poison")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/poison.png" class="icon" alt="poison">';
}
if(elementTypePokemon[i].textContent === "Fire")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/fire.png" class="icon" alt="fire">';
}

if(elementTypePokemon[i].textContent === "Dragon")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/dragon.png" class="icon" alt="dragon">';
}

if(elementTypePokemon[i].textContent === "Bug")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/bug.png" class="icon" alt="bug">';
}

if(elementTypePokemon[i].textContent === "Flying")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/flying.png" class="icon" alt="flying">';
}

if(elementTypePokemon[i].textContent === "Normal")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/normal.png" class="icon" alt="normal">';
}
if(elementTypePokemon[i].textContent === "Electric")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/electric.png" class="icon" alt="electric">';
}
if(elementTypePokemon[i].textContent === "Fighting")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/fighting.png" class="icon" alt="fighting">';
}

if(elementTypePokemon[i].textContent === "Ghost")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/ghost.png" class="icon" alt="ghost">';
}

if(elementTypePokemon[i].textContent === "Psychic")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/psychic.png" class="icon" alt="psychic">';
}

if(elementTypePokemon[i].textContent === "Ground")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/ground.png" class="icon" alt="gorund">';
}

if(elementTypePokemon[i].textContent === "Ice")
{ 
elementTypePokemon[i].innerHTML = '<img src="./img/ice.png" class="icon" alt="ice">';
}

}

}

/*llamar a la funcion mostrar pokemones al inicio de la pagina*/

showPokemon(dataPokemon);
/*Evento Buscar pokemones*/ 
search.addEventListener("click", () =>{
eventOrder = 3;
dataSorted = '';
myChartPokemon.innerHTML = '';
filterType.selectedIndex = 0;
filterEgg.selectedIndex = 0;
orderData.selectedIndex =0;
cardPokemon ='';
size.innerHTML= '';
let name = document.getElementById("inputSearching").value;
searchPokemon = window.filterData(dataPokemon,name,"name");
showPokemon(searchPokemon);
});

/*Funcion Calcular pokemones*/ 
const showResult =() =>{

 //comprobando que se esta en el evento del filtrar por tipo
 //y mostrando la cantidad y el porcentaje por su tipo
if(eventOrder === 1){
    
    myChartPokemon.innerHTML = `<canvas id="myChart" class="chart"></canvas>`
    size.innerHTML = `<p class = "col- 12 result" >Se muestran ${dataType.length} Pokemones tipo ${condition} que representa el ${sizePokemon}% del total de Pokemones</p>`;
}
//comprobando que se esta en el evento del filtrar huevos y 
// y mostrando la cantidad y el porcentaje por km
if(eventOrder === 2){
    myChartPokemon.innerHTML = `<canvas id="myChart" class="chart"></canvas>`
    size.innerHTML = `<p class = "col- 12 result" >Se muestran ${dataEggs.length} Pokemones de ${condition} que representa el ${sizePokemon}% del total de Pokemones </p>`;
}
}

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
if (condition !== "Filtrar por tipo") {
//capturando evento de select para mantener el filtro y poder ordenar de acuerdo al filtro
eventOrder = 1;
//capturando la data filtrada de acuerdo al tipo de pokemon
dataType = window.filterData(dataPokemon, condition,"type");
//ordenando la data por numero para mostrarla la primera vez en el html
dataType = window.sortData(dataType,"num","Ascendente");
//igualando la condicion al valor del select para mostrar la cantidad del tipo elegido y su porcentaje
condition = filterType.options[filterType.selectedIndex].text;
//mostrando el parrafo de la cantidad y el porcentaje del tipo de pokemon filtrado
//enviando la data filtrada por tipo y la data que contiene todos los pokemones
//para hacer el calculo del porcentaje
showResult(sizePokemon = window.computeStats(dataType,dataPokemon),condition);

//pasando la data filtrada a la funcion para mostrar los pokemones



let ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Total Pokemones', 'Porcentaje ' + condition],
        datasets: [{
            label: '# of Votes',
            data: [dataPokemon.length, sizePokemon],
            backgroundColor: [
                
                
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                
            ],
            borderColor: [
               
                
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    
});

}
showPokemon(dataType);
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
    if (condition !== "Filtrar por huevos") {
     //capturando evento de select para mantener el filtro y poder ordenar de acuerdo al filtro
    eventOrder = 2;
    //capturando la data filtrada de acuerdo al tipo de huevo
    dataEggs = window.filterData(dataPokemon, condition, "egg");
    //ordenando la data por numero para mostrarla la primera vez en el html
    dataEggs = window.sortData(dataEggs,"num","Ascendente");
    //igualando la condicion al valor del select para mostrar la cantidad del tipo elegido y su porcentaje
    condition = filterEgg.options[filterEgg.selectedIndex].text;
    //mostrando el parrafo del la cantidad y el porcentaje del tipo de pokemon filtrado
    //enviando la data filtrada por huevo y la data que contiene todos los pokemones
    //para hacer el calculo del porcentaje
    showResult(sizePokemon = window.computeStats(dataEggs,dataPokemon),condition);
    //pasando la data filtrada a la funcion para mostrar los pokemones\

   
    let ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Total Pokemones ' , 'Porcentaje ' + condition],
            datasets: [{
                label: '# of Votes',
                data: [dataPokemon.length, dataEggs.length],
                backgroundColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    
                ],
                borderWidth: 1
            }]
        },
        
    });



    
    }
    
    showPokemon(dataEggs);
    });

   



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

    dataSorted = dataPokemon;
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

if (eventOrder === 3){

    dataSorted = searchPokemon;
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


  });




