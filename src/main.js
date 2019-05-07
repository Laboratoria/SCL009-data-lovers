/* Manejo del DOM */

const championImgDiv = document.getElementById("championImg");
const orderChange = document.getElementById("userSelectedOrder");
const selectChange = document.getElementById("userSelectedTag");
const dataLol = window.LOLdata;
let champImg;
let champName;
let champDifficulty;


 const championInfo = (infoImg,infoName,infoHp,infoHpLvl,infoHpRegen,infoHpRegenLvl,infoMp,infoMpLvl,infoAttack,infoAttackRange,infoMs,infoArmor,infoArmorLvl,infoSpellBlock,infoSpellBlockLvl,infoSplash) =>{
      const championInfoDiv = document.getElementById("championInfo");
     // var body = document.getElementsByTagName('body')[0];
     // body.style.backgroundImage = url
     
      championInfoDiv.innerHTML=""
      championInfoDiv.innerHTML += 
       
       
       `<div align="center">
       <img src="${infoImg}"><br>
         <p class="infoChampNameClass">${infoName}</p>
         <p class="infoChampClass">
         <strong>Vida</strong><br>
         ${infoHp} (+${infoHpLvl} por nivel) <br> 
         <strong>Mana</strong> <br>
         ${infoMp} (+${infoMpLvl} por nivel) <br>
         <strong>Regeneración de vida</strong><br>
          ${infoHpRegen} (+${infoHpRegenLvl} por nivel)<br>
         <strong>Ataque</strong><br>
         ${infoAttack} <br>
         <strong>Rango de ataque</strong><br>
         ${infoAttackRange}<br>
         <strong>Velocidad de movimiento</strong><br>
          ${infoMs} <br>
         <strong>Armadura</strong><br>
         ${infoArmor} (+${infoArmorLvl} por nivel)<br>
         <strong>Resistencia mágica</strong><br>
         ${infoSpellBlock} (+${infoSpellBlockLvl} por nivel)<br>
         
          
     </p>
       </div>`;
       
      }
window.onload = function showAllOnload() {  //funcion para mostrar todos al inicio
 
  let allResultFilter = window.filteringResult("Todos",dataLol)
     allResultFilter.forEach(element => {
    championImgDiv.innerHTML += 
    
   `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="card mt-4" style="background-color: #e2e2e2";>
    <div style="cursor: pointer;" id="${element.id}" onclick=championInfo(${JSON.stringify(element.img)},${JSON.stringify(element.id)},${element.stats.hp},${element.stats.hpperlevel},${element.stats.hpregen},${element.stats.hpregenperlevel},${element.stats.mp},${element.stats.mpperlevel},${element.stats.attackdamage},${element.stats.attackrange},${element.stats.movespeed},${element.stats.armor},${element.stats.armorperlevel},${element.stats.spellblock},${element.stats.spellblockperlevel},${JSON.stringify(element.splash)})
    )>
        <div class="card-header">
        <img src="${element.img}">
        <div class="card-content">
        <p class="pname">${element.name}<p></div>
        
           </div>
       </div> 
    </div>
  </div>`    
  
  
 
 
     });
      

  }
  
  

    
  




selectChange.addEventListener('change', () =>{ 
  let selectedTag = document.getElementById("userSelectedTag").value;
  document.getElementById("userSelectedOrder").value= 0;
  championImgDiv.innerHTML = ""; 
  for(let i=0;i< window.filteringResult(selectedTag,dataLol).length;i++){
    champName= window.filteringResult(selectedTag,dataLol)[i].name;
    champImg= window.filteringResult(selectedTag,dataLol)[i].img;
    
  
   championImgDiv.innerHTML += 
   `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
   <div class="card mt-4" style="background-color: #e2e2e2";>
        <div class="card-header">
        <img src="${champImg}">
        <div class="card-content">
        <p class="pname">${champName}<p>
         
           </div>
       </div> 
    </div>
  </div>`
  }
orderChange.addEventListener('change', () =>{ 
  let selectedOrder = document.getElementById("userSelectedOrder").value;
  
  championImgDiv.innerHTML = ""; 
  let champData = window.filteringResult(selectedTag,dataLol)
  for(let i=0;i< window.orderData(selectedOrder,champData).length;i++){
    champName = window.orderData(selectedOrder,champData)[i].name;
    champImg = window.orderData(selectedOrder,champData)[i].img;
    champDifficulty = window.orderData(selectedOrder,champData)[i].info.difficulty;
    if (selectedOrder == "difficultyEasiestFirst" || selectedOrder == "difficultyHardestFirst"){
    championImgDiv.innerHTML += 
   `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
   <div class="card mt-4" style="background-color: #e2e2e2";>
        <div class="card-header">
        <img src="${champImg}">
        <div class="card-content">
        <p class="pname">${champName}<p>
        <p class="pdifficulty">Dificultad ${champDifficulty}</p>
         
           </div>
       </div> 
    </div>
  </div>`
}else{
  championImgDiv.innerHTML += 
  `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
  <div class="card mt-4" style="background-color: #e2e2e2";>
       <div class="card-header">
       <img src="${champImg}">
       <div class="card-content">
       <p class="pname">${champName}<p>
          </div>
      </div> 
   </div>
 </div>`
}
    
   }})



});


//addevent de boton
//console.log(window.average("Jinx","Bard","Aatrox","Nami", "Soraka", dataLol))