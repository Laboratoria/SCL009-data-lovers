
const calculateBtnB= document.getElementById("btnCalculateAverageB");
const calculateBtnA= document.getElementById("btnCalculateAverageA");


calculateBtnA.addEventListener("click", ()=>{  //BOTON TEAM 1-A
  let showMyTeamTotal= document.getElementById("averageTeamA");
  let topTotal =document.getElementById("topFirstTeam").value;
  let jungleTotal=document.getElementById("jungleFirstTeam").value;
  let midTotal=document.getElementById("midFirstTeam").value;
  let adcTotal=document.getElementById("adcFirstTeam").value;
  let supportTotal=document.getElementById("supportFirstTeam").value;

  
  let calculateAllAttacks= window.calculateAllAttacks(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  let calculateAttackRange= window.calculateAttackRange(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  let calculateDefense = window.calculateDefense(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  let calculateMagic = window.calculateMagic(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  showMyTeamTotal.innerHTML="";
  showMyTeamTotal.innerHTML+= `<div class="col-md-12 average"><p class="textCalculated">
  ATAQUE<br>
  ${calculateAllAttacks}</p></div>
  <div class="col-md-12 average"><p class="textCalculated"> 
  ATAQUE MÁGICO<br>
  ${calculateMagic}
  </p></div>
  <div class="col-md-12 average"><p class="textCalculated"> 
  DEFENSA<br>
  ${calculateDefense}
  </p></div>
  <div class="col-md-12 average"><p class="textCalculated"> 
  RANGO DE ATAQUE<br>
  ${calculateAttackRange}
  </p></div>`
 

  
});

calculateBtnB.addEventListener("click", ()=>{//BOTON TEAM 2-B
  let showMyTeamTotal= document.getElementById("averageTeamB");
  let topTotal =document.getElementById("topSecondTeam").value;
  let jungleTotal=document.getElementById("jungleSecondTeam").value;
  let midTotal=document.getElementById("midSecondTeam").value;
  let adcTotal=document.getElementById("adcSecondTeam").value;
  let supportTotal=document.getElementById("supportSecondTeam").value;
  
  
  let calculateAllAttacks= window.calculateAllAttacks(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  let calculateAttackRange= window.calculateAttackRange(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  let calculateDefense = window.calculateDefense(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  let calculateMagic = window.calculateMagic(topTotal,jungleTotal,midTotal,adcTotal,supportTotal,window.LOLdata);
  showMyTeamTotal.innerHTML="";
  showMyTeamTotal.innerHTML+= `<div class="col-md-12 average"><p class="textCalculated">
  ATAQUE<br>
  ${calculateAllAttacks}</p></div>
  <div class="col-md-12 average"><p class="textCalculated"> 
  ATAQUE MÁGICO<br>
  ${calculateMagic}
  </p></div>
  <div class="col-md-12 average"><p class="textCalculated"> 
  DEFENSA<br>
  ${calculateDefense}
  </p></div>
  <div class="col-md-12 average"><p class="textCalculated"> 
  RANGO DE ATAQUE<br>
  ${calculateAttackRange}
  </p></div>`
  


  
  
});


