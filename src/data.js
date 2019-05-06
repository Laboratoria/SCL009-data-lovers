/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


  const filteringResult = (selectedTag,allChampionData)=>{
  const allChampionValues = Object.values(allChampionData);
  let filterChampTag = allChampionValues.filter( element =>{ 
  if(selectedTag=="Todos"){ //true para todos
    return element;
  }else{
    return element.tags.includes(selectedTag);} //true si incluye tag
  });

    return filterChampTag;
    } 
  
window.filteringResult = filteringResult;



const orderData = (sortBy,allChampionData) =>{
 let orderResult;
  const allChampionNames = Object.values(allChampionData);
  if(sortBy == "difficultyEasiestFirst"){
    orderResult = allChampionNames.sort((a, b)=>{
    return  a.info.difficulty-b.info.difficulty;})
  
  }else if(sortBy == "difficultyHardestFirst"){
    orderResult = allChampionNames.sort((a, b)=>{
      return  b.info.difficulty-a.info.difficulty;})

  }else if(sortBy == "nameA_Z"){
    orderResult = allChampionNames.sort((a, b)=>{
      return  a.info.name-b.info.name;})
  }else if(sortBy == "nameZ_A"){
    orderResult = allChampionNames.sort()
      return  orderResult.reverse()
  }
  return orderResult;
  };
  


  


window.orderData = orderData;






 
     
  
