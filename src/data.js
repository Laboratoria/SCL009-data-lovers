/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const data= LOL.data; // ingresar a la data
const dataKeys= Object.keys(data) // cada uno de los champs
const example = () => {
  return 'example';
};

window.example = example;

  const filteringResult = (selectedTag,data)=>{
  let filterChampTag = dataKeys.filter( (element)=>{ 
  if(selectedTag==="Todos"){ //true para todos
    return data[element];
  }else{
    return data[element].tags.includes(selectedTag);} //true si incluye tag
  });
    return filterChampTag;  // champs seleccionados
  } 
  
window.filteringResult = filteringResult;

 
     
  
