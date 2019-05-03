const myData = Object.values(window.LOL.data); // OB arr q contiene los valores de las prop de obj
let  result = "";
const containerResult = document.getElementById("container-result"); //div q contiene todos mis resultados

const resultDiv = (data) => {
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


const selectRol = document.getElementById("rol-lol"); // accedo al evento (addEventListener)
selectRol.addEventListener("change", () => {
  const selectRol = document.getElementById("rol-lol").value // accedo al valor (el rol que escoge el usuario)
  result = window.filterData(myData, selectRol);
  resultDiv(result);
})

const sortTest = document.getElementById("sort-by");
sortTest.addEventListener("change", () => {
//const selectSort = document.getElementById("sort-by").value
const selectSort = document.getElementById("ascendente").selected; // capturo sólo el que quiero
result = window.sortData(result, selectSort);
resultDiv(result);

})

const difficult = document.getElementById("sort-dif");
difficult.addEventListener("change", () => {
const selectDifficult = document.getElementById("lowDifficult").selected; // capturo sólo el que quiero
result = window.sortDifficulty(result, selectDifficult);
resultDiv(result);


})

const btnChampions = document.getElementById("champions");
btnChampions.addEventListener("click", () => {
    resultDiv(myData);
})