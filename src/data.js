/* Manejo de data */

const filterData =(data, condition,filterBy) =>{
// declaro la variable filterDataBy que contendra los pokemones de acuerdo al filtro elegido
let filterDataBy;
//condicional para filtrar por huevos o por tipo
// si se selecciono por huevos
if (filterBy === "egg"){
    filterDataBy = data.filter(elemento => {

return elemento[filterBy].includes(condition);
});

}
//si se selecciono por tipo
else if (filterBy === "type"){

filterDataBy = data.filter(elemento => {

return elemento[filterBy].includes(condition);
});
}

//data con el filtro elegido
return filterDataBy;
};
 



const sortData = (data, sortBy, sortOrder) =>{
// declaro la variable dataSort que sera la nueva data ordenada
let dataSort;
//coloco las condiciones en la que se realizara el orden
    if (sortOrder === "A-Z"){
    dataSort = data.sort((a,b) => {
        return a[sortBy].localeCompare(b[sortBy]);
    });

}

else if (sortOrder === "Z-A"){
    dataSort = data.sort((a,b) => {
         return b[sortBy].localeCompare(a[sortBy]);
     });
 
 }

 else if (sortOrder === "Ascendente"){
    dataSort = data.sort((a,b) => {
         return a[sortBy].localeCompare(b[sortBy]);
     });
 
 }
 
 else if (sortOrder === "Descendente"){
    dataSort = data.sort((a,b) => {
         return b[sortBy].localeCompare(a[sortBy]);
     });
 
 }
    
 return dataSort;

}

const computeStats = (data)=> {

return(Math.round((data.length*100)/151));


}


window.filterData = filterData;

window.sortData = sortData;

window.computeStats = computeStats;





   
