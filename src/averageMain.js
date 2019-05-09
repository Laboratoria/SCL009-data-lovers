//addevent de boton calcular
//console.log(window.average("Jinx","Bard","Aatrox","Nami", "Soraka", dataLol))




let calculateBtn= document.getElementById("btnCalculateAverage");
calculateBtn.addEventListener("click", ()=>{
  let showMyTeamTotal= document.getElementById("average");
  let topTotal =document.getElementById("topFirstTeam").value;
  let jungleTotal=document.getElementById("jungleFirstTeam").value;
  let midTotal=document.getElementById("midFirstTeam").value;
  let adcTotal=document.getElementById("adcFirstTeam").value;
  let supportTotal=document.getElementById("supportFirstTeam").value;

  
  
  let calculateAllAttacks= window.calculateAllAttacks(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata)
  
  showMyTeamTotal.innerHTML="";
  showMyTeamTotal.innerHTML+= `<p class="textCalculated">DAÑO TOTAL DEL EQUIPO <br>${calculateAllAttacks}</p>`
  
});


