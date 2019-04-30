/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


const filterData =(data, condition) =>{

    const datatype = data.filter(elemento => {
    
    return elemento.type.includes(condition);
    });
    
    return datatype;
    };
     
    
    
    
    const sortData = (data, sortBy, sortOrder) =>{
    
    let dataSort;
    
        if (sortOrder === "ascaz"){
        dataSort = data.sort((a,b) => {
            return a[sortBy].localeCompare(b[sortBy]);
        });
    
    }
    
    else if (sortOrder === "descza"){
        dataSort = data.sort((a,b) => {
             return b[sortBy].localeCompare(a[sortBy]);
         });
     
     }
    
     else if (sortOrder === "ascnum"){
        dataSort = data.sort((a,b) => {
             return a[sortBy].localeCompare(b[sortBy]);
         });
     
     }
     
     else if (sortOrder === "descnum"){
        dataSort = data.sort((a,b) => {
             return b[sortBy].localeCompare(a[sortBy]);
         });
     
     }
        
     return dataSort;
    
    }
    
    
    
    
    window.filterData = filterData;
    
    window.sortData = sortData;
    
    
    
    
    
       
    