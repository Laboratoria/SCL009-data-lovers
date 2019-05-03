/* Manejo del DOM */

const championImgDiv = document.getElementById("championImg");
const orderChange = document.getElementById("userSelectedOrder");
const selectChange = document.getElementById("userSelectedTag");
const dataLol = window.LOLdata;

let champImg;
let champName;
window.onload = function showAllOnload() {  //funcion para mostrar todos al inicio
 
  for(let i=0;i< window.filteringResult("Todos",dataLol).length;i++){
    champName= (window.filteringResult("Todos",dataLol)[i].id);
    champImg=(window.filteringResult("Todos",dataLol)[i].img)
  
   championImgDiv.innerHTML += 
   `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="card mt-4 cardstyle">
        <div class="card-header">
        <img class="chamIcon" src="${champImg}">
        <div class="card-content">
        <p class="pname">${champName}<p>
         
           </div>
       </div> 
    </div>
  </div>`
}



selectChange.addEventListener('change', () =>{ 
//let selectedTag = userselectedTag.options[userselectedTag.selectedIndex]
  let selectedTag = document.getElementById("userSelectedTag").value;
  document.getElementById("userSelectedOrder").value= 0;
  championImgDiv.innerHTML = ""; //
  for(let i=0;i< window.filteringResult(selectedTag,dataLol).length;i++){
    champName= (window.filteringResult(selectedTag,dataLol)[i].id);
    champImg=(window.filteringResult(selectedTag,dataLol)[i].img);
    
  
   championImgDiv.innerHTML += 
   `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="card mt-4 cardstyle">
        <div class="card-header">
        <img class="chamIcon" src="${champImg}">
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
  for(let i=0;i< window.orderDifficulty(selectedOrder,champData).length;i++){
    champName = window.orderDifficulty(selectedOrder,champData)[i].id;
    champImg = window.orderDifficulty(selectedOrder,champData)[i].img;
    championImgDiv.innerHTML += 
   `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="card mt-4 cardstyle">
        <div class="card-header">
        <img class="chamIcon" src="${champImg}">
        <div class="card-content">
        <p class="pname">${champName}<p>
         
           </div>
       </div> 
    </div>
  </div>`
    
   }})



});








 
    
    
    
    
    

        
      
   

}
