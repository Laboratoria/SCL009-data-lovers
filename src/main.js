const accessValue = Object.values(LOL.data); // OB arr q contiene los valores de las prop de obj
    //console.log(accessValue);
    
accessValue.forEach(element => {
    element.tags;
});  // asi me da ahora.  

////////////////////////////////////////////////////////////////////////////

function tagsSelect() {
    const selecRol= document.getElementById("rol-lol");
    const optionSelect = selecRol.options[selecRol.selectedIndex].value;   
const resultado = window.filterData(accessValue, optionSelect);
console.log(resultado); 
}
