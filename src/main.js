/* Manejo del DOM */

const championImg = document.getElementById("championImg");
const selectChange = document.getElementById("userSelectedTag");


selectChange.addEventListener('change', () =>{ 
   

  let selectedTag = document.getElementById("userSelectedTag").value;
  
  
 
 championImg.innerHTML = ""; //
 for(let i=0;i< window.filteringResult(selectedTag,data).length;i++){
  champName= (window.filteringResult(selectedTag,data)[i]);
  champImg= data[champName].img    
//agregar "a" para boton sin clase  
 championImg.innerHTML += // <a class="btn btn-primary" aria-pressed="true" role="button">
 `<div class="col-md-2">
  <div class="card cardstyle">
      
      <div class="card-body cardstyle">
         <img src="${champImg}">
         <p class="card-text"> ${champName} </p>
       
         
      </div>
  </div>
</div>`
//</a>



   
 
 }
});






 
    
    
    
    
    

        
      
   


