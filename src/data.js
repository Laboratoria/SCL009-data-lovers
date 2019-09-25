const counterForType = (codePoke, condition, counterBy) => {
  let resultCounter = codePoke.reduce((contador, codePoke) => {
    if (codePoke[counterBy].includes(condition)) {
      return contador + 1;
    } else {
      return contador;
    }
  }, 0)
  return resultCounter;
}
window.counterForType = counterForType;

// FILTRADO POR TIPO
const pokedexType = (codePoke, condition) => {
  const pokeByFilter = codePoke.filter(element => {

    return element.type.includes(condition);

  });

  return pokeByFilter;

}
window.pokedexType = pokedexType;

// FILTRADO POR DEBILIDAD
const pokedexWeaknesses = (codePoke, conditionTwo) => {
  const pokeByWeakness = codePoke.filter(element => {

    return element.weaknesses.includes(conditionTwo);

  });
  return pokeByWeakness;
}
window.pokedexWeaknesses = pokedexWeaknesses;

//funcion ordenar : sort code => codepoke es la data; sortcodeby: es lo que quiero ordenar; sortcodeorder: es como lo voy a ordenar
const sortCode = (codePoke, sortCodeBy, sortCodeOrder) => {
  const comparar = codePoke.sort((a, b) => {
    return a[sortCodeBy].localeCompare(b[sortCodeBy])
  })
  if (sortCodeOrder === "az") {
    return comparar;
  }
  if (sortCodeOrder === "za") {
    return comparar.reverse();
  }
  if (sortCodeOrder === "asc") {
    return comparar;
  }
  if (sortCodeOrder === "des") {
    return comparar.reverse();
  }
}
window.sortCode = sortCode;
