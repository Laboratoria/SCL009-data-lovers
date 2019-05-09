//addevent de boton calcular
//console.log(window.average("Jinx","Bard","Aatrox","Nami", "Soraka", dataLol))

<<<<<<< HEAD
const lolData = window.LOLdata;
let calculateBtn= document.getElementById("btnCalculateAverage");
calculateBtn.addEventListener("click", ()=>{
  let showMyTeamAverage= document.getElementById("average");
  let topAverage =document.getElementById("topFirstTeam").value;
  let jungleAverage=document.getElementById("jungleFirstTeam").value;
  let midAverage=document.getElementById("midFirstTeam").value;
  let adcAverage=document.getElementById("adcFirstTeam").value;
  let supportAverage=document.getElementById("supportFirstTeam").value;
 
  let calculateAverage = window.average(topAverage,jungleAverage , midAverage, adcAverage, 
   supportAverage, lolData);
=======


let calculateBtn= document.getElementById("btnCalculateAverage");
calculateBtn.addEventListener("click", ()=>{
  let showMyTeamTotal= document.getElementById("average");
  let topTotal =document.getElementById("topFirstTeam").value;
  let jungleTotal=document.getElementById("jungleFirstTeam").value;
  let midTotal=document.getElementById("midFirstTeam").value;
  let adcTotal=document.getElementById("adcFirstTeam").value;
  let supportTotal=document.getElementById("supportFirstTeam").value;
>>>>>>> ba971e69fdebd9afb67bfa31713456cbdfe04b26
  
  
  let calculateAllAttacks= window.calculateAllAttacks(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata)
  
  showMyTeamTotal.innerHTML="";
  showMyTeamTotal.innerHTML+= `<p class="textCalculated"> EL DAÑO TOTAL DE TU EQUIPO ES : <br>${calculateAllAttacks}</p>`
  
});


