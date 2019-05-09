window.onload = () => {
  const myData = Object.values(window.LOL.data); // OB arr q contiene los valores de las prop de obj
  
  
  const containerResult = document.getElementById("container-result"); //div q contiene todos mis resultados
  
  const resultDiv = (data) => { //funcion de resultados que muestra las cards
    containerResult.innerHTML = "";
    //containerModal.innerHTML = "";
    data.forEach(element => {
      containerResult.innerHTML += `<div class="my-card card col-sm-12 col-md-4 col-lg-2 mt-4" 
                                      >
                                      <img class="card-img-top" id="img-card" src="${element.img}" >
                                      <div class="card-body">
                                      <button type="button" class="btn btn-block btn-style" 
                                        id="botonModal"  data-id="${element.id}" 
                                        data-toggle="modal" data-target="#${element.id}"
                                        > ${element.id}</button>
                                    
                                    </div>
                                    `;
                              
                                  });
  }
  resultDiv(myData); 


 /*funcion del modal*/
 const containerModal = document.getElementById("container-modal");
 const loadModal = (element) => {
   containerModal.innerHTML += `<div class="modal fade" id="${element.id}">
   <div class="modal-dialog">
     <div class="modal-content">
     
       <!-- Modal Header -->
       <div class="modal-header">
         <button type="button" class="close" data-dismiss="modal">X</button>
       </div>
       
       <!-- Modal body -->
       <div class="modal-body">
       <h3 class="modal-title">${element.id.toUpperCase()}</h3>
         <img class="card-img-top" id="img-modal" src="${element.splash}" alt="Card image cap">
           <div class="card-body">${element.title} 
           <div class="text-info"> ${element.tags} </div>
           <div class="text-blurb"> ${element.blurb} </div>
           <div class= "stats-info ">
           <p>Dificultad: ${element.info.difficulty} </p> <meter min="0" max="10" low="3" high="5" optimum="7" value="${element.info.difficulty}" ></meter>
     <p>Ataque: ${element.info.attack} </p> <meter min="0" max="10" low="3" high="5" optimum="7" value="${element.info.attack}" ></meter>
     <p>Defensa: ${element.info.defense} </p> <meter min="0" max="10" low="3" high="5" optimum="7" value="${element.info.defense}" ></meter>
     <p>Magia: ${element.info.magic} </p> <meter min="0" max="10" low="3" high="5" optimum="7" value="${element.info.magic}" ></meter>
     <p>Salud:${element.stats.hp} </p> <meter min="340" max="700" low="340" high="600" optimum="500" value="${element.stats.hp}" ></meter>
     </div>
       </div>
       <!-- Modal footer -->
       <div class="modal-footer">
         <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
       </div>
     </div>
   </div>
 </div> <!--  fin  The Modal -->`;
 } //fin de windowOnload


let result = ""; //Var que contiene resultados, vacía.

  /*Filtrado por rol*/
  const selectRol = document.getElementById("rol-lol"); // accedo al evento (addEventListener)
  selectRol.addEventListener("change", () => {
    const selectRol = document.getElementById("rol-lol").value // accedo al valor (el rol que escoge el usuario)
    result = window.filterData(myData, selectRol);
    resultDiv(result);
    let percentForRol= window.statsRol(result);
    document.getElementById("percent-rol").innerHTML= ` <div class= "percent-div">
 
   <meter min="10" max="100" low="20" high="50" value="${percentForRol}" ></meter> <p class="percent-p"> Porcentaje por rol: ${percentForRol} % </p>
    </div>
  
    `
  })
  
  /*Ordenado por nombre a-z, z-a*/
  const sortTest = document.getElementById("sort-by");
  sortTest.addEventListener("change", () => {
    const selectSort = document.getElementById("sort-by").value
    result = window.sortData(result, "name", selectSort);
    resultDiv(result);
  })
  
  /*Ordenado por dificultad ascendente y descendente*/
  const difficult = document.getElementById("sort-dif");
  difficult.addEventListener("change", () => {
    const selectDifficult = document.getElementById("sort-dif").value // capturo sólo el que quiero
    result = window.sortDifficulty(result, "info.difficulty", selectDifficult);
    resultDiv(result);
  })
  
  /*Enlace que lleva al inicio*/
  const btnHome= document.getElementById("logo-lol");
  btnHome.addEventListener("click", function(){location.reload()
    });
   
  
  /*Enlace que muestra las estadísticas*/
  const btnStats = document.getElementById("stats-champions");
  btnStats.addEventListener("click", () => {
    let statistic = window.computeStats(myData);
    document.getElementById("stats-compute").innerHTML= 
    
    `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Estadísticas de salud de todos los campeones </div>
  <div class="card-body">
    
    <p class="card-text"> El nivel máx de salud es de: ${statistic[0]} </p>
     <p class="card-text"> El nivel mín de salud es de: ${statistic[1]} </p>
     <p class="card-text">El promedio de salud es de: ${statistic[2]} </p>
</div>

     `
 
    document.getElementById("stats-compute").style.display = "block";
    document.getElementById("select-rol").style.display="none";
  })
  
 
  const initapp = () => { // función que carga más rápido el modal
    containerModal.innerHTML = '';
    myData.forEach(element => {
    loadModal(element);
    })
  }
  
  initapp();
  
}