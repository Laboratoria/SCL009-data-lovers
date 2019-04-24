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
    return data[element].tags.includes(selectedTag)}
    })

    console.log(resultFilterTag);

    championImg.innerHTML = "";
    //resultFilterTag.forEach(element=>{})
    for(let i=0;i<resultFilterTag.length;i++){
      //championImg.innerHTML += `<div class="estilo"> ${resultFilterTag[i]} </div>`}
      championImg.innerHTML += `<div class="card" id="cards" style="width: 18rem;">
  <img src="${element.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${resultFilterTag[i]}</h5>
    <p class="card-text">${element.blurb}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`
  }

})
        
      
   


  