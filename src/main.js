/* Manejo del DOM */

const championImg = document.getElementById("championImg");
const selectChange = document.getElementById("userSelectedTag");


selectChange.addEventListener('change', () =>{ 
   

  let selectedTag = document.getElementById("userSelectedTag").value;
  
  
 
 championImg.innerHTML = ""; //
 for(let i=0;i< window.filteringResult(selectedTag,data).length;i++){
  champName= (window.filteringResult(selectedTag,data)[i]);
  champImg= data[champName].img
championImg.innerHTML +=
  `<div class="col-md-1">
  <div class="card">
      <div class="card-img"><img src="${champImg}"></div>
      <div class="card-body">
         
         <h4 class="textNameChamp"> ${champName} </h4>
       
         
      </div>
  </div>
</div></a>`



   
 
 }
});
console.log(championImg);





 
    
    
    
    
    

        
      
   


