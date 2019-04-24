/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

for (let i=0;i<POKEMON.pokemon.length;i++){
console.log(POKEMON.pokemon[i].name);
console.log(POKEMON.pokemon[i].id);


}
 



window.example = example;
