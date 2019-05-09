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

  
  let calculateAllHp = window.calculateAllHp(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  let calculateAllAttacks= window.calculateAllAttacks(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  let calculateAttackRange= window.calculateAttackRange(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  showMyTeamTotal.innerHTML="";
  showMyTeamTotal.innerHTML+= `<div class="col-md-12 average"><p class="textCalculated"> 
  VIDA TOTAL<br>
  ${calculateAllHp}
  </p></div><div class="col-md-12 average"><p class="textCalculated">
  DAÑO TOTAL<br>
  ${calculateAllAttacks}</p></div>
  <div class="col-md-12 average"><p class="textCalculated"> 
  PROMEDIO RANGO DE ATAQUE<br>
  ${calculateAttackRange}
  </p></div>`
  
  
});


