/* Manejo del DOM */
const data= LOL.data; // ingresar a la data
const dataKeys= Object.keys(data) // cada uno de los champs
const championImg = document.getElementById("championImg");
const selectChange = document.getElementById("userSelectedTag");


selectChange.addEventListener('change', () =>{ 
   

  let selectedTag = document.getElementById("userSelectedTag").value;
  
  
 
 championImg.innerHTML = ""; //
 for(let i=0;i<filteringResult(selectedTag,data).length;i++){
  champName= (filteringResult(selectedTag,data)[i]);

  championImg.innerHTML += `<div class="card" style="width: 12rem;">
  <img id="tamaño" src="" class="card-img-top" alt="...">
  <div class="card-body">
    <p id="textNameCard" class="card-text">${champName}</p>
  </div>
</div>`

 
 }
});






 
    
    
    
    
    

        
      
   


