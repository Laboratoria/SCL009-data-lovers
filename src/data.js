/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


  const filteringResult = (selectedTag,allChampionData)=>{
  const allChampionNames = Object.keys(allChampionData);
  let filterChampTag = allChampionNames.filter( singleChampionName =>{ 
  if(selectedTag==="Todos"){ //true para todos
    return allChampionData[singleChampionName];
  }else{
    return allChampionData[singleChampionName].tags.includes(selectedTag);} //true si incluye tag
  });

    return filterChampTag;
    } 
  
window.filteringResult = filteringResult;

//const resultFilterhouse= data.filter(element =>{
  //return element.house === condicion;
//})
//return resultFilterhouse
//)


 
     
  
