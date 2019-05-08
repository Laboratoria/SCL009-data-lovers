//addevent de boton calcular
//console.log(window.average("Jinx","Bard","Aatrox","Nami", "Soraka", dataLol))

const dataLol = window.LOLdata;
let calculateBtn= document.getElementById("btnCalculateAverage");
calculateBtn.addEventListener("click", ()=>{
  let showMyTeamAverage= document.getElementById("average");
  let topAverage =document.getElementById("topFirstTeam").value;
  let jungleAverage=document.getElementById("jungleFirstTeam").value;
  let midAverage=document.getElementById("midFirstTeam").value;
  let adcAverage=document.getElementById("adcFirstTeam").value;
  let supportAverage=document.getElementById("supportFirstTeam").value;
 
  let calculateAverage = window.average(topAverage,jungleAverage , midAverage, adcAverage, 
   supportAverage, dataLol);
  

  showMyTeamAverage.innerHTML="";
  showMyTeamAverage.innerHTML+= `<p>${calculateAverage}</p>`
  

});

