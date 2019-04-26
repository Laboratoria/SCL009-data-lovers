/* Manejo del DOM */
<<<<<<< HEAD
const data= LOL.data;   // ingresar a la data
const dataKeys= Object.keys(data); // cada uno de los champs
=======

>>>>>>> a0c755dc2e038a3ea68520f093819a5268192467
const championImg = document.getElementById("championImg");
const selectChange = document.getElementById("userSelectedTag");


selectChange.addEventListener('change', () =>{ 
   

  let selectedTag = document.getElementById("userSelectedTag").value;
  
  
 
 championImg.innerHTML = ""; //
 for(let i=0;i< window.filteringResult(selectedTag,data).length;i++){
  champName= (window.filteringResult(selectedTag,data)[i]);
  champImg= data[champName].img

  championImg.innerHTML += `<div class="card" style="width: 8rem;">
  <img id="tamaño" src="${champImg}" class="card-img-top" alt="...">
  <div class="card-body">
    <p id="textNameCard" class="card-text">${champName}</p>
  </div>
</div>`

 
 }
});






 
    
    
    
    
    

        
      
   


