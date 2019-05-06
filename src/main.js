/* Manejo del DOM */
const championInfoDiv = document.getElementById("championInfo");
const championImgDiv = document.getElementById("championImg");
const orderChange = document.getElementById("userSelectedOrder");
const selectChange = document.getElementById("userSelectedTag");
const dataLol = window.LOLdata;
let champImg;
let champName;
let champDifficulty;


 const championInfo = (InfoHp,InfoHpLvl) =>{
      const championInfoDiv = document.getElementById("championInfo");
      championInfoDiv.innerHTML=""
       championInfoDiv.innerHTML += 
       
       `<div>
         <p> HP : ${InfoHp} (+${InfoHpLvl} por nivel) <br>
         </p>
       </div>`;
       
      }
window.onload = function showAllOnload() {  //funcion para mostrar todos al inicio
 
  let allResultFilter = window.filteringResult("Todos",dataLol)
     allResultFilter.forEach(element => {
    champName= element.name;
    champImg= element.img;
    champInfoHp= element.stats.hp;
    champInfoHpLvl= element.hpperlevel;
    console.log(champInfoHp)




   championImgDiv.innerHTML += 
   `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="card mt-4" style="background-color: #e2e2e2";>
        <button id="${champName}">
        <div class="card-header">
        <img src="${champImg}">
        <div class="card-content">
        <p class="pname">${champName}<p></button>
        
           </div>
       </div> 
    </div>
  </div>`    
  
  document.getElementById(champName).onclick = championInfo(champName,champInfoHp);
 
 
     });
      

  }
  let buttons = document.getElementsByTagName('button');
  

  for (let e = 0; e<buttons.length; ++e) {
    Allbuttons = buttons[e];
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

