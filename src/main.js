const accessValue = Object.values(LOL.data); // OB arr q contiene los valores de las prop de obj
const containerRol = document.getElementById("container-rol"); // div que imprime lo q seleccione en select
const container = document.getElementById("container-result"); //div q contiene todos mis campeones

const btnFilter = document.getElementById("select-filter");
btnFilter.addEventListener("click", () => {
    containerRol.innerHTML = "";
    const selectRol = document.getElementById("rol-lol").value
    const result = window.filterData(accessValue, selectRol);
    const showChampionsRol = "";
    const showRol = result.forEach(element => {
    
        containerRol.innerHTML += `  <div class="card col-4">
        <img class="card-img-top" src="${element.img}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.title} </p>
          <p class="card-text">${element.tags} </p>
          <p class="card-text">${element.blurb} </p>
          <p class="card-text"><small class="text-muted">WinnerLegends</small></p>
        </div>
      </div>
   
   `
    })
})




const btnChampions = document.getElementById("champions");
btnChampions.addEventListener("click", () => {
    const showChampions = "";
    const showNow = accessValue.forEach(element => {
        container.innerHTML += ` <div class="card col-4" style="width: 18em;">
<img class="card-img-top" src="${element.splash}" alt="Card image cap">
<div class="card-body"> ${element.name} <br> ${element.title} 
<div class="text-info"> ${element.tags} <br> ${element.blurb}  </div>
</div>
`
    });
})
