/* Manejo del DOM */

const championImg = document.getElementById("championImg");
const selectChange = document.getElementById("userSelectedTag");
const dataLol = window.LOLdata;

let champImg;
let champName;
//window. la funcion se vuelve global
window.onload = function showAllOnload() {  //funcion para mostrar todos al inicio
 
  for(let i=0;i< window.filteringResult("Todos",dataLol).length;i++){
    champName= (window.filteringResult("Todos",dataLol)[i].id);
    champImg=(window.filteringResult("Todos",dataLol)[i].img)
  
   championImg.innerHTML += 
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
  championImg.innerHTML = ""; //
  for(let i=0;i< window.filteringResult(selectedTag,dataLol).length;i++){
    champName= (window.filteringResult(selectedTag,dataLol)[i].id);
    champImg=(window.filteringResult(selectedTag,dataLol)[i].img)
  
   championImg.innerHTML += 
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
});






 
    
    
    
    
    

        
      
   

}
