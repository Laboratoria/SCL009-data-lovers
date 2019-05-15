/* Manejo de data */


/* Funcion de filtrar data por tipo de pokemony por tipo de huevo
recibe 3 parametros: la data, la condicion y la propiedad por la que se filtra */

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
if (filterBy === "type"){

filterDataBy = data.filter(elemento => {

return elemento[filterBy].includes(condition);
});
}
//si se selecciono por nombre
if (filterBy === "name"){

    filterDataBy = data.filter(elemento => {
    
    return elemento[filterBy].includes(condition);
    });
    }


//data con el filtro elegido
return filterDataBy;
};
 

/* Funcion de ordenar data por tipo de pokemon y por tipo de huevo
recibe 3 parametros: la data, la propiedad por la que se filtra y el orden */

const sortData = (data, sortBy, sortOrder) =>{
// declaro la variable dataSort que sera la nueva data ordenada
let dataSort;
//coloco las condiciones en la que se realizara el orden
    if (sortOrder === "A-Z"){
    dataSort = data.sort((a,b) => {
        return a[sortBy].localeCompare(b[sortBy]);
    });

}

if (sortOrder === "Z-A"){
    dataSort = data.sort((a,b) => {
         return b[sortBy].localeCompare(a[sortBy]);
     });
 
 }

 if (sortOrder === "Ascendente"){
    dataSort = data.sort((a,b) => {
         return a[sortBy].localeCompare(b[sortBy]);
     });
 
 }
 
 if (sortOrder === "Descendente"){
    dataSort = data.sort((a,b) => {
         return b[sortBy].localeCompare(a[sortBy]);
     });
 
 }
 //retornando la data ordenada de acuerdo a la condicion   
 return dataSort;

}

/* Funcion de calculo de porcentaje de pokemones de acuerdo al 
tipo y al huevo, recibe la data filtrada y la data que contiene todos los pokemones
retrona el porcentaje de acuerdo al tamano de la data filtrada*/
const computeStats = (dataFilter, data)=> {

return(Math.round((dataFilter.length*100)/data.length));


}


window.filterData = filterData;

window.sortData = sortData;

window.computeStats = computeStats;





   
