/* Manejo del DOM */

const championImg = document.getElementById("championImg");
const selectChange = document.getElementById("userSelectedTag");
const dataMain = window.LOL.data;
let champImg;
let champName;
window.onload = function showAllOnload() {  //funcion para mostrar todos al inicio
 
  for(let i=0;i< window.filteringResult("Todos",dataMain).length;i++){
    champName= (window.filteringResult("Todos",dataMain)[i]);
    champImg= dataMain[champName].img    
  
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

  let selectedTag = document.getElementById("userSelectedTag").value;
  championImg.innerHTML = ""; //
 for(let i=0;i< window.filteringResult(selectedTag,dataMain).length;i++){
  champName= (window.filteringResult(selectedTag,dataMain)[i]);
  champImg= dataMain[champName].img    
//agregar "a" para boton sin clase  
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
