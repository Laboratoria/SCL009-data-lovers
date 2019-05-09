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
      return  a.name-b.name;})
  }else if(sortBy == "nameZ_A"){
    orderResult = allChampionNames.sort((a,b)=>{
      return b.name.localeCompare(a.name)
     
  })}
  return orderResult;
  };
window.orderData = orderData;

const calculateAllAttacks = (top,jungle,mid,adc,support,data)=>{
  const allAttack = [data[top].stats.attackdamage,data[jungle].stats.attackdamage,data[mid].stats.attackdamage,data[adc].stats.attackdamage,data[support].stats.attackdamage]
  return allAttack.reduce((a,b)=>{
     return Math.round(a+b)
    })
}
 window.calculateAllAttacks = calculateAllAttacks;

 const calculateAllHp = (top,jungle,mid,adc,support,data)=>{
  const allHp = [data[top].stats.hp,data[jungle].stats.hp,data[mid].stats.hp,data[adc].stats.hp,data[support].stats.hp]
  return allHp.reduce((a,b)=>{
     return Math.round(a+b)
    })
}
 window.calculateAllHp = calculateAllHp;

 const calculateAttackRange = (top,jungle,mid,adc,support,data)=>{
  const allAttackRange = [data[top].stats.attackrange,data[jungle].stats.attackrange,data[mid].stats.attackrange,data[adc].stats.attackrange,data[support].stats.attackrange]
   let result = allAttackRange.reduce((a,b)=>{
     return (a+b)
    })
    return Math.round(result/5)
}
 window.calculateAttackRange = calculateAttackRange;

 








// const calculateAllAttacks = (top,jungle,mid,adc,support, data)=>{
// const allAttacks = [data[top].stats.attackdamage,data[jungle].stats.attackdamage,data[mid].stats.attackdamage,data[adc].stats.attackdamage,data[support].stats.attackdamage];
   
// return allAttacks.reduce((a,b)=>{
//     return a+b
//   })
// }




 
     
  
