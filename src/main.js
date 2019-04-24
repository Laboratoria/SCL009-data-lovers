/* Manejo del DOM */
const data= LOL.data;
const dataKeys= Object.keys(data)
const championImg = document.getElementById("championImg");
const selectChange = document.getElementById("userSelectedTag");


selectChange.addEventListener('change', () =>{ 
     
  let selectedTag = document.getElementById("userSelectedTag").value
 
   
  const resultFilterTag = dataKeys.filter( (element)=>{
    if(selectedTag==="Todos"){
      return data[element];
    }else{
    return data[element].tags.includes(selectedTag);}
   
    })
    
    
    
    
    championImg.innerHTML = "";
    for(let i=0;i<resultFilterTag.length;i++){
      let champName = resultFilterTag[i]
      let champImg = data[champName].img
      championImg.innerHTML += `<div class="estilo"> ${ resultFilterTag[i]} <img src="${champImg}">  </div>`}
    

})
        
      
   


  