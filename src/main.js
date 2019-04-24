/* Manejo del DOM */
const data= LOL.data;
const dataKeys= Object.keys(data)
const championImg = document.getElementById("championImg");
const selectChange = document.getElementById("userSelectedTag");


selectChange.addEventListener('change', () =>{ 
     
  let selectedTag = document.getElementById("userSelectedTag").value
  
   
  const resultFilterTag = dataKeys.filter( (element)=>{
    return data[element].tags.includes(selectedTag)})


   }
   
})
   
        
      
   
;


  