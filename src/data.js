/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


  const filteringResult = (selectedTag,allChampionData)=>{
  const allChampionValues = Object.values(allChampionData);
  let filterChampTag = allChampionValues.filter( element =>{ 
  if(selectedTag==="Todos"){ //true para todos
    return element;
  }else{
    return element.tags.includes(selectedTag);} //true si incluye tag
  });

    return filterChampTag;
    } 
  
window.filteringResult = filteringResult;



const orderDifficulty = (selectOrder,allChampionData) =>{
 
  const allChampionNames = Object.values(allChampionData);
  if(selectOrder === "difficulty"){
    let orderResult = allChampionNames.sort(function (a, b){
    return  a.info.difficulty-b.info.difficulty;})
    
  return orderResult;
  }
  
};


window.orderDifficulty = orderDifficulty

//const resultFilterhouse= data.filter(element =>{
  //return element.house === condicion;
//})
//return resultFilterhouse
//)


 
     
  
