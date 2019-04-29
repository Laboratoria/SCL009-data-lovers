const filterData =(data, condition) =>{

    const datatype = data.filter(el=> {
    
    return el.type.includes(condition);
    });
    
    return datatype;
    };


window.filterData = filterData;

