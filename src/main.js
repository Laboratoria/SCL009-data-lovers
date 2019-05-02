const myData = Object.values(LOL.data); // OB arr q contiene los valores de las prop de obj
const resultDiv = (data) =>{
  containerResult.innerHTML = "";
  data.forEach(element => {
    containerResult.innerHTML += `<div class="card col-sm-12 col-md-4 col-lg-2 mt-4">
                                    <img class="card-img-top" src="${element.splash}" alt="Card image cap">
                                    <div class="card-body">${element.name} <br> ${element.title} 
                                    <div class="text-info"> ${element.tags} </div>
                                  </div>
                                `;
  })
} 

const containerResult = document.getElementById("container-result"); //div q contiene todos mis resultados

const selectRol = document.getElementById("rol-lol"); // accedo al evento (addEventListener)
selectRol.addEventListener("change", () => {
  const selectRol = document.getElementById("rol-lol").value // accedo al valor (el rol que escoge el usuario)
  const result = window.filterData(myData, selectRol);
  resultDiv(result);

})

const btnChampions = document.getElementById("champions");
btnChampions.addEventListener("click", () => {
    resultDiv(myData);
})