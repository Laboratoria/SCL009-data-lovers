//FUNCIONES

function aplicar(year, question, country) {

  for (let i = 0; i < country.length; i++) {
    // entonces recorremos cada indicatorName; 
    let a = country[i].indicatorName;
    // si ese indicador es el mismo que el que selecciono el usuario entonces 
    // buscamos la data de este elemento asi tenemos sus keys -- año y values ---
    if (a === question) {

      let data = (country[i].data);

      // aqui un array con los años
      let arrayKeysObjetos = Object.keys(data);

      // AQUI un array con los % (values)
      let arrayValuesObjetos = Object.values(data);

      //busco la posicion del año que ingreso el usuario en el arrayKeyss
      let posicionYearKeys = arrayKeysObjetos.indexOf(year);

      // Creamos la tabla 

      const newtabla = document.createElement('table');
      //esta el container div para la tabla donde esta fijado en main.js que se insertara la tabla 
      const container = document.getElementById("tableData");
      container.appendChild(newtabla);

      let fila = document.createElement('tr');
      let columna = document.createElement('td')

      columna.innerHTML = "Años";
      fila.appendChild(columna);
      newtabla.appendChild(fila);

      // aqui estaria la primera fila - los años provenientes de los 

      for (let j = posicionYearKeys; j < (posicionYearKeys + 5); j++) {

        let row = document.createElement('td')

        //newtabla.appendChild(columna);
        row.innerHTML = arrayKeysObjetos[j];

        fila.appendChild(row)
      }


      // aqui estaria la segunda fila - los valores 

      let fila2 = document.createElement('tr')

      newtabla.appendChild(fila2);
      columna = document.createElement('td');
      columna.innerHTML = "Valores";
      fila2.appendChild(columna);





      for (let j = posicionYearKeys; j < (posicionYearKeys + 5); j++) {
        let valor = arrayValuesObjetos[j];

        let columna = document.createElement('td')
        newtabla.appendChild(columna);
        columna.innerHTML = (valor == "") ? "ND" : valor.toFixed(2);

        fila2.appendChild(columna);

      }



      newtabla.setAttribute("border", "3");

    }
  }
}
// window.WORLDBANK = WORLDBANK;
window.aplicar = aplicar;
// // FUNCTION      mostrar datos Chile - desempleo
// const poblacionEdadDeTrabajarVarones = 7588; 
// const poblacionEdadDeTrabajarMujeres = 7588??; 
let porcentaje = "";
let fuerzaDeTrabajo = "";

function empleoOcupados(porcentaje, fuerzaDeTrabajo) {

  let diferenciaPorcentaje = 100 - porcentaje;
  let deltaTrabajadores = diferenciaPorcentaje * fuerzaDeTrabajo;

  return ((deltaTrabajadores / 100).toFixed(3));

}
empleoOcupados(porcentaje, fuerzaDeTrabajo);
window.empleoOcupados = empleoOcupados;
// function ordenar alfabeticamente A - Z
function orderData(dataGral) {

  let data = dataGral.BRA.indicators;
  let contenedorLista = [];
  for (let element of data) {
    contenedorLista.push(element.indicatorName);
  }
  contenedorLista.sort();
  return contenedorLista;
}
window.orderData = orderData;
// function ordenar alfabeticamente Z- A
function orderDataDes(dataGral) {

  let data = dataGral.BRA.indicators;
  let contenedorLista = [];
  for (let element of data) {
    contenedorLista.push(element.indicatorName);
  }
  let contenedorListaOrdenada = contenedorLista.sort();
  return contenedorListaOrdenada.reverse();
}
window.orderDataDes = orderDataDes;

// FIN FUNCIONES
