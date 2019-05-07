const myData = Object.values(window.LOL.data); // OB arr q contiene los valores de las prop de obj

let result = "";


const containerResult = document.getElementById("container-result"); //div q contiene todos mis resultados

const resultDiv = (data) => {

  containerResult.innerHTML = "";
  data.forEach(element => {
    containerResult.innerHTML += `<div class="card col-sm-12 col-md-4 col-lg-2 mt-4"  id="my-card" onclick="loadModal('${element.name}')" >
                                    <img class="card-img-top" id="img-card" src="${element.img}" alt="Card image cap">
                                    <div class="card-body">${element.name}<br> ${element.title} 
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
  const selectSort = document.getElementById("sort-by").value
  result = window.sortData(result, "name", selectSort);
  resultDiv(result);


})


const difficult = document.getElementById("sort-dif");
difficult.addEventListener("change", () => {
  const selectDifficult = document.getElementById("sort-dif").value // capturo sólo el que quiero
  result = window.sortDifficulty(result, "info.difficulty", selectDifficult);
  resultDiv(result);
})

const btnChampions = document.getElementById("champions");
btnChampions.addEventListener("click", () => {
  resultDiv(myData);
  let statistic = window.computeStats(myData);
  document.getElementById("max-result").innerHTML = statistic[0];
  document.getElementById("min-result").innerHTML = statistic[1];
  document.getElementById("average-result").innerHTML = statistic[2];
  document.getElementById("stats-compute").style.display = "block";
 

})



const containerModal = document.getElementById("container-modal");

//const loadModal = (name) => {   // este name me lo entrega onclick
//console.log(name);*/
const resultModal = myData.filter((element) =>{
  if (element.name === name ){
    // console.log(element.name);
    return true;
  }
  return false;
} 
); 

const element = resultModal[0]
     

containerModal.innerHTML = "";
  containerModal.innerHTML = `<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
    
      <!-- Modal Header -->
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">X</button>
      </div>
      
      <!-- Modal body -->
      <div class="modal-body">
        <img class="card-img-top" id="img-modal" src="${element.splash}" alt="Card image cap">
      </div>
      <div class="modal-body">
          <h4 class="modal-title">${element.name}</h4>
          <div class="text-info">Info <br>
                                  attack:       ${element.info.attack} <br>
                                  defense:      ${element.info.defense} <br>
                                  magic:         ${element.info.magic} <br>
                                  difficulty:   ${element.info.difficulty} <br> </div>
          <div class="card-body">${element.title} 
          <div class="text-info"> ${element.tags} </div>
          <div class="text-blurb"> ${element.blurb} </div>
          
          
         
      </div>
      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
      
    </div>
  </div>
</div> <!--  fin  The Modal -->`;

 //$("#myModal").modal(); /* lanza  el modal*/

//}