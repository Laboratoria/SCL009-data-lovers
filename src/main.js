window.onload = () => {
  const myData = Object.values(window.LOL.data); // OB arr q contiene los valores de las prop de obj
  
  let result = ""; //Var que contiene resultados, vacía.
  
  const containerResult = document.getElementById("container-result"); //div q contiene todos mis resultados
  
  const resultDiv = (data) => {
    containerResult.innerHTML = "";
    containerModal.innerHTML = "";
    data.forEach(element => {
      containerResult.innerHTML += `<div class="my-card card col-sm-12 col-md-4 col-lg-2 mt-4" 
                                      >
                                      <img class="card-img-top" id="img-card" src="${element.img}" >
                                      <div class="card-body">
                                      <button type="button" class="btn btn-primary" 
                                        id="botonModal"  data-id="${element.id}" 
                                        data-toggle="modal" data-target="#${element.id}"> 
                                           ${element.name}   
                                      </button>
                                      <div class="text-info"> ${element.tags.join(" ")} </div>
                                    </div>
                                    `;
                                    loadModal(element);
                                  });
  }
  
  //Filtrado por rol
  const selectRol = document.getElementById("rol-lol"); // accedo al evento (addEventListener)
  selectRol.addEventListener("change", () => {
    const selectRol = document.getElementById("rol-lol").value // accedo al valor (el rol que escoge el usuario)
    result = window.filterData(myData, selectRol);
    resultDiv(result);
  })
  
  //Ordenado por nombre a-z, z-a
  const sortTest = document.getElementById("sort-by");
  sortTest.addEventListener("change", () => {
    const selectSort = document.getElementById("sort-by").value
    result = window.sortData(result, "name", selectSort);
    resultDiv(result);
  })
  
  //Ordenado por dificultad ascendente y descendente
  const difficult = document.getElementById("sort-dif");
  difficult.addEventListener("change", () => {
    const selectDifficult = document.getElementById("sort-dif").value // capturo sólo el que quiero
    result = window.sortDifficulty(result, "info.difficulty", selectDifficult);
    resultDiv(result);
  })
  
  //Enlace que lleva al inicio
  const btnHome= document.getElementById("home");
  btnHome.addEventListener("click", function(){location.reload()});
  document.getElementById("select-rol").style.display="none";
  
  //Enlace que muestra todos los campeones
  const btnChampions = document.getElementById("champions");
  btnChampions.addEventListener("click", () => {
    resultDiv(myData);
    document.getElementById("select-rol").style.display="none";
    document.getElementById("stats-compute").style.display="none";
  })
  
  //Enlace que muestra los filtros y ordenado
  const filterOrder = document.getElementById("filter-champions");
  filterOrder.addEventListener("click", () => {
    document.getElementById("stats-compute").style.display="none";
    document.getElementById("select-rol").style.display="block";
  })
  
  //Enlace que muestra las estadísticas
  const btnStats = document.getElementById("stats-champions");
  btnStats.addEventListener("click", () => {
    let statistic = window.computeStats(myData);
    document.getElementById("max-result").innerHTML = statistic[0];
    document.getElementById("min-result").innerHTML = statistic[1];
    document.getElementById("average-result").innerHTML = statistic[2];
    document.getElementById("stats-compute").style.display = "block";
    document.getElementById("select-rol").style.display="none";
  })
  
  //funcion del modal
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
          <img class="card-img-top" id="img-modal" src="${element.splash}" alt="Card image cap">
        </div>
        <div class="modal-body"><div class="text-info"> ${element.tags} </div>
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
  }
  
  }