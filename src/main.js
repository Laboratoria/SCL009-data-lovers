/* Manejo del DOM */

const showPokemones = document.getElementById("cards");

const filterType = document.getElementById("filterType");

const orderData= document.getElementById("order");

let i=0, cardPokemon = '',j=0;

const data = window.POKEMON.pokemon;






/*Funcion que muestra pokemones*/

const showPokemon = (data) =>{

for ( i=0; i<data.length;i++){

  

cardPokemon += `<div class="pokemonCards  col-xs-12 col-md-3">
<div class="cardsAll">
<div class="imgPokemon">
 <img src=${data[i].img}  alt="${data[i].name}" class="imgpokemonlist">

</div>
<div class="card-body">
    <div class="">
    <p class="card-title">${data[i].name} N${data[i].num}</p>
    </div>
    <p class = "card-title"><span class="titlePokemon">Tipo:`


for ( j=0; j<data[i].type.length;j++){

    cardPokemon += `${data[i].type[j]} </span>`
  
}

cardPokemon += `</p><a href="#" class="btn btn-primary" data-toggle="modal" data-target="#miModal" id="${data[i].id}" onclick = "alert(${data[i].id})">Detalle</a>
</div>
</div>
</div>




<div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
                <h4 class="modal-title" id="myModalLabel"></h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				
			</div>
			<div class="modal-body">
				Texto del modal
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
filterType.addEventListener("click",(event)=>{
    cardPokemon= '';
    let condition = event.target.text;

           
    const dataType = window.filterData(data, condition);
 

 showPokemon(dataType);

});

/*Ordenar pokemones*/

orderData.addEventListener("click", (event) => {
cardPokemon= '';

let sortOrderSelect = event.target.text;


let dataSorted;

    if (sortOrderSelect === "A-Z"){
        dataSorted = window.sortData(data,"name","ascaz");

    }

    if (sortOrderSelect === "Z-A"){
        dataSorted = window.sortData(data,"name","descza");

    }
if (sortOrderSelect=== "Ascendente"){
    dataSorted = window.sortData(data,"num","ascnum");
}

if (sortOrderSelect=== "Descendente"){
    dataSorted = window.sortData(data,"num","descnum");
}

showPokemon(dataSorted);
});













