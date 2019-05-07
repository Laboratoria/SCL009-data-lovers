
let first = document.getElementById("midFirstTeam");// SELECT VACIO
let team= [];
let showAverage=getElementById("average");// div para mostrar resultado
const myData = Object.values(window.LOL.data);   
//funcion calcular
    const computeStats = (data) => {
let topft=document.getElementById("topFirstTeam").value;
let jungleft=document.getElementById("jumgleFirstTeam").value;
showAverage.innerHTML="";
data.forEach(element=>{
    if(topft==element.name){
        let topInfo=element.info.attack;
        let topStats=element.stats.armor;

    }
    if(jungleft==element.name){
        let jungleInfo=element.info.attack;
        let jungleStats=element.stats.armor;

    }
    let averageInfo= topInfo+jungleInfo/2;
    let averageStatsArmor= topStats+jungleStats/2;
    showAverage.innerHTML+= `<div> ${averageInfo}  </div>`

});

}
//EJEMPLO
/* const resultDiv = (data) => {

    containerResult.innerHTML = "";
    data.forEach(element => {
      containerResult.innerHTML += `<div class="card col-sm-12 col-md-4 col-lg-2 mt-4"  id="my-card" onclick="loadModal('${element.name}')" >
                                      <img class="card-img-top" id="img-card" src="${element.img}" alt="Card image cap">
                                      <div class="card-body">${element.name} <br> ${element.title} 
                                      <div class="text-info"> ${element.tags} </div>
                                      
                                    </div>
                                  `;
    })
  } 
   */