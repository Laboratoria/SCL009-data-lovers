const filterData = (data, rol) => {
  const nowFilter = data.filter((element) => {

    return element.tags.includes(rol);
  });
  return nowFilter;
};
window.filterData = filterData;

const sortData= (data, sortBy, sortOrder) => {
  const dataSort= data;
  if(sortBy==="name" && sortOrder === "a-z" ){
    dataSort.sort((a,b)=>{
     if(a.nam<b.name){
      return -1;
     }
     if(a.name>b.name){
       return 1;
      }

    });
  }
  if(sortBy==="name" && sortOrder === "z-a" ){
    dataSort.sort((a,b)=>{
   
     if(a.name>b.name){
       return -1;
      }
     if(a.name<b.name){
      return 1;
     }
 
    });
  }
  return dataSort;
}
window.sortData = sortData;

const sortDifficulty= (data, sortBy, sortOrder) => {
  const difficultySort= data;
  if(sortBy==="info.difficulty" && sortOrder === "lowDifficult" ){
    difficultySort.sort((a,b)=>{
     
    if(a.info.difficulty>b.info.difficulty){
        return 1;
      }
      if(a.info.difficulty<b.info.difficulty){
       return -1;
      }
 
    });
  }
  if(sortBy==="info.difficulty" && sortOrder === "highDifficult" ){
    difficultySort.sort((a,b)=>{
    
     if(a.info.difficulty<b.info.difficulty){
     return 1;
      }
     if(a.info.difficulty>b.info.difficulty){
       return -1;
      }

    });
  }
  return difficultySort;
}
window.sortDifficulty = sortDifficulty;


const computeStats = (data) => {
  const statsCompute = data.map((element) => {
      return element.stats.hp;
  });
 
  const maxValue = Math.max(...statsCompute);
  // var max = Math.max(...arr); devuelve el mayor de cero o más números.
  const minValue = Math.min(...statsCompute);
  // var min = Math.min(...arr); devuelve el menor de cero o más números.

  let average = Math.round(maxValue + minValue) / 2; //promedio
  
  const statsResults = [maxValue, minValue, average];
  
  return statsResults;
};
window.computeStats = computeStats;