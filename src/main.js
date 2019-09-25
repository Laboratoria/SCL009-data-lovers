/* Manejo del DOM */
//declaramos una variable para llamar la data 
const codePoke = window.POKEMON.pokemon;
// Recargamos página
document.getElementById("recharge").addEventListener("click", () => {
  location.reload();
})
//mostrar toda la data a traves de una variable, tomando un id del body
let rootBody = document.getElementById("root");
//aqui llamamos a los pokemon solo por sus nombres en el orden que esta establecido en la data
let pokepoke = (codePoke) => {
  for (let i = 0; i < codePoke.length; i++) {
    rootBody.innerHTML +=
      `<div class="col-sm-2">
      <img src="${codePoke[i].img}" class="card-img-top" alt="Poke">
      <div class="card-body">
          <div class="col-sm-2">
        <h5 class="card-title">${codePoke[i].name}</h5>
        <h6 class="card-title">Número:${codePoke[i].num}</h6>
        <p class="card-text">Tipo:${codePoke[i].type}</p>
        </div>
      </div>`

  }
}

window.onload = pokepoke(codePoke);

// FILTRADO POR TIPO
let saveForType = document.getElementById("type");
saveForType.addEventListener("change", () => {

  let condition = saveForType.options[saveForType.selectedIndex].value; // guarda seleccion usiario
  //console.log(condition);

  //COUNTER
  let typeCounter = window.counterForType(codePoke, condition, "type");

  let filter = window.pokedexType(codePoke, condition);
  rootBody.innerHTML = "";
  document.getElementById("cantPokes").innerHTML =
    ` <div class= "cantPokes col-12">Existen ${typeCounter} pokemon tipo ${condition}</div> `

  filter.forEach(element => {
    rootBody.innerHTML +=

    `<div class="col-sm-2">
      <img src="${element.img}" class="card-img-top" alt="Poke">
      <div class="card-body">
          <div class="col-sm-2">
        <h5 class="card-title">${element.name}</h5>
        <h6 class="card-title">Número:${element.num}</h6>
        <p class="card-text">Tipo:${element.type}</p>
        </div>
      </div>`
  })

});

// FILTRANDO POR DEBILIDADES
let saveForWeakness = document.getElementById("weaknesses");
saveForWeakness.addEventListener("change", () => {

  let conditionTwo = saveForWeakness.options[saveForWeakness.selectedIndex].value;
  //console.log(condition);
  let filter = window.pokedexWeaknesses(codePoke, conditionTwo);
  rootBody.innerHTML = "";

  filter.forEach(element => {
    rootBody.innerHTML +=

      `<div class="col-sm-2">
    <img src="${element.img}" class="card-img-top" alt="Poke">
    <div class="card-body">
        <div class="col-sm-2">
      <h5 class="card-title">${element.name}</h5>
      <h6 class="card-title">Número:${element.num}</h6>
      <p class="card-text">Tipo:${element.type}</p>
      </div>
    </div>
  </div>`
  })

});

//SORT CORTITO

let ordenAs = document.getElementById("ascdesc");

ordenAs.addEventListener("change", () => {
  let pokeSort = ordenAs.value;

  let ordenPoke = "";
  ordenPoke = window.sortCode(codePoke, "name", pokeSort);
  rootBody.innerHTML = "";

  ordenPoke.forEach(element => {
    rootBody.innerHTML +=
      `<div class="col-sm-2">
     <img src="${element.img}" class="card-img-top" alt="Poke">
     <div class="card-body">
         <div class="col-sm-2">
       <h5 class="card-title">${element.name}</h5>
       <h6 class="card-title">Número:${element.num}</h6>
       <p class="card-text">Tipo:${element.type}</p>
       </div>
     </div>
   </div>`
  })

})

let ordenDes = document.getElementById("num");

ordenDes.addEventListener("change", () => {
  let pokeSortCode = ordenDes.value;

  let orden = "";
  orden = window.sortCode(codePoke, "num", pokeSortCode);
  rootBody.innerHTML = "";

  orden.forEach(element => {
    rootBody.innerHTML +=
      `<div class="col-sm-2">
     <img src="${element.img}" class="card-img-top" alt="Poke">
     <div class="card-body">
         <div class="col-sm-2">
       <h5 class="card-title">${element.name}</h5>
       <h6 class="card-title">Número:${element.num}</h6>
       <p class="card-text">Tipo:${element.type}</p>
       </div>
     </div>
   </div>`
  })

})

