
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
    return  allChampionNames.sort()
  }else if(sortBy == "nameZ_A"){
    orderResult = allChampionNames.sort((a,b)=>{
      return b.name.localeCompare(a.name)
     
  })}
  return orderResult;
  };
window.orderData = orderData;

const calculateAllAttacks = (top,jungle,mid,adc,support,data)=>{//CALCULAR PROMEDIO ATAQUE
  return (data[top].info.attack+data[jungle].info.attack+data[mid].info.attack+data[adc].info.attack+data[support].info.attack)/5
}
 window.calculateAllAttacks = calculateAllAttacks;

 const calculateAttackRange = (top,jungle,mid,adc,support,data)=>{//CALCULAR PROMEDIO DE RANGO DE ATAQUE
  return (data[top].stats.attackrange+data[jungle].stats.attackrange+data[mid].stats.attackrange+data[adc].stats.attackrange+data[support].stats.attackrange)/5
}
 window.calculateAttackRange = calculateAttackRange;  

 const calculateDefense = (top,jungle,mid,adc,support,data)=>{ //CALCULAR PROMEDIO DEFENSA
  return (data[top].info.defense+data[jungle].info.defense+data[mid].info.defense+data[adc].info.defense+data[support].info.defense)/5
}
window.calculateDefense = calculateDefense;

const calculateMagic = (top,jungle,mid,adc,support,data)=>{ //CALCULAR PROMEDIO ATAQUE MAGICO
  return (data[top].info.magic+data[jungle].info.magic+data[mid].info.magic+data[adc].info.magic+data[support].info.magic)/5
}
window.calculateMagic = calculateMagic;