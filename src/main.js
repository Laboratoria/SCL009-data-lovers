const accessValue = Object.values(LOL.data); // OB arr q contiene los valores de las prop de obj
    //console.log(accessValue);
    
accessValue.forEach(element => {
    element.tags;
});  // asi me da ahora.  

////////////////////////////////////////////////////////////////////////////

function tagsSelect() {
    const selecRol= document.getElementById("rol-lol");
    const optionSelect = selecRol.options[selecRol.selectedIndex].value;   
const resultado = window.filterData(accessValue, optionSelect.value);
console.log(resultado); 
}





// lo de abajo es con btns 27 abril
/*const accessValue = Object.values(LOL.data); // OB arr q contiene los valores de las prop de obj
console.log(LOL.data);
accessValue.forEach(elemento => {
    console.log(elemento);
});  // asi me da ahora. 


const btnAssasin = document.getElementById("assassin");
btnAssasin.addEventListener("click", () => {
    const championTags = "Assasin"; // declaro una constante con el nombre exacto que aparece en mi lol.js
    const filterRol = accessValue.filter((element) => { // le hago el filter a mi funcion global
        return (element.tags[0] === "Assassin" || element.tags[1] === "Assassin");
      });
      return console.log(filterRol);
}) */