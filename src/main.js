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
    //resultFilterTag.forEach(element=>{})
    for(let i=0;i<resultFilterTag.length;i++){

      let champName = resultFilterTag[i];
      let champImg = data[champName].img;
      let champTitle= data[champName].title;
      let champText= data[champName].blurb;

      //championImg.innerHTML += `<div class="estilo"> ${champName} <img src="${champImg}"> 
      //<p>${champTitle}</p> </div>`
      championImg.innerHTML+=`<div class="card" style="width: 12rem;">
  <img id="tamaño" src="${champImg}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${champText}</p>
  </div>
</div>`
    }
    


})
        
      
   


  