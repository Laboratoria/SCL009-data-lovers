const filterData = (data, rol) => {
  const nowFilter = data.filter((element) => {

    return element.tags.includes(rol);
  });
  return nowFilter;
}
window.filterData = filterData;

const sortData= (data, sortBy, sortOrder) => {
//const dataSort= data;
  if(sortBy==="name" && sortOrder === "a-z" ){
    return data;
   /* dataSort.sort((a,b)=>{
        if(a.name>b.name){
          return 1;
        }
        if(a.name<b.name){
          return -1;
       }
      //return 0;
    });*/
  }
  if(sortBy==="name" && sortOrder === "z-a" ){
    return data.reverse();
    /*dataSort.sort((a,b)=>{
   
     if(a.name<b.name){
       return 1;
      }
     if(a.name>b.name){
     return -1;
     }
// return 0;
    });*/
 // } return dataSort;
} }
window.sortData = sortData;

const sortDifficulty= (data, sortBy, sortOrder) => {
  const difficultySort= data;
  if (sortBy === "info.difficulty" && sortOrder === "lowDifficult") {
    difficultySort.sort((a, b) => {

      if (a.info.difficulty>b.info.difficulty) {
        return 1;
      }
      if(a.info.difficulty<b.info.difficulty){
        return -1;
       }
       //return 0;
    });
  }
  if (sortBy === "info.difficulty" && sortOrder === "highDifficult") {
    difficultySort.sort((a, b) => {

      /*if (a.info.difficulty < b.info.difficulty) {
        return 1;
      }*/
      if(a.info.difficulty>b.info.difficulty){
        return -1;
       }
 
       //return 0;
   
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

const statsRol = (data) => {
  const rolStats = Math.round(data.length * 134 / 100);
  return rolStats;
};

window.statsRol = statsRol;

const searchChampion = (data, texto) => {
  const resultChampion = data.filter( (element) => {
     let nameChampion = element.name;
        if (nameChampion.search(texto) > -1  || nameChampion.toLowerCase().search(texto) > -1 || nameChampion.toUpperCase().search(texto) > -1 ) {
           return true;
        }
      // return false;
  });
  return resultChampion;
}
window.searchChampion = searchChampion;