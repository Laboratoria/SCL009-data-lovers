const homePage = document.getElementById("homePage");
const sectionEdu = document.getElementById("sectionEdu");
const sectionLab = document.getElementById("sectionLab");
const sectionSoc = document.getElementById("sectionSoc");
const sectionOrder = document.getElementById("sectionOrder");
const contact = document.getElementById("contact");


sectionEdu.style.display = 'none';
sectionLab.style.display = 'none';
sectionSoc.style.display = 'none';
sectionOrder.style.display = 'none';
contact.style.display = 'none';
document.getElementById("selectNivEdu").style.display = 'none';
document.getElementById("selectInsSco").style.display = 'none';
document.getElementById("selectNivIns").style.display = 'none';
document.getElementById("selectNivDes").style.display = 'none';
document.getElementById("selectLabFor").style.display = 'none'
document.getElementById("selectParLab").style.display = 'none';
document.getElementById("selectNivVio").style.display = 'none';
document.getElementById("tableDataPage").style.display = 'none';
document.getElementById("containerInformacion").style.display = 'none';
document.getElementById("containerSelectCountry").style.display = 'none';
document.getElementById("containerSelectDecade").style.display = 'none';



//                                      EVENTOS CATEGORIAS EDU/SOC/LAB
// evento click categoria educacion
document.getElementById('edubtn').addEventListener('click', () => {
    document.getElementById("tableData").innerHTML = "";
    sectionLab.style.display = 'none';
    sectionSoc.style.display = 'none';
    document.getElementById("selectNivEdu").style.display = 'none';
    document.getElementById("selectInsSco").style.display = 'none';
    document.getElementById("selectNivIns").style.display = 'none';
    document.getElementById("selectNivDes").style.display = 'none';
    document.getElementById("selectLabFor").style.display = 'none';
    document.getElementById("selectParLab").style.display = 'none';
    document.getElementById("selectNivVio").style.display = 'none';
    sectionOrder.style.display = 'none';
    contact.style.display = 'none';
    homePage.style.display = 'none';
    document.getElementById("tableDataPage").style.display = 'none';
    sectionEdu.style.display = 'block';
    document.getElementById("containerSelectCountry").style.display = 'none';
    document.getElementById("containerSelectDecade").style.display = 'none';

});
// evento click categoria social
document.getElementById('socbtn').addEventListener('click', () => {
    document.getElementById("tableData").innerHTML = "";
    homePage.style.display = 'none';
    contact.style.display = 'none';
    sectionEdu.style.display = 'none';
    sectionLab.style.display = 'none';
    sectionOrder.style.display = 'none';
    document.getElementById("selectNivEdu").style.display = 'none';
    document.getElementById("selectInsSco").style.display = 'none';
    document.getElementById("selectNivIns").style.display = 'none';
    document.getElementById("selectNivDes").style.display = 'none';
    document.getElementById("selectLabFor").style.display = 'none';
    document.getElementById("selectParLab").style.display = 'none';
    document.getElementById("selectNivVio").style.display = 'none';
    document.getElementById("tableDataPage").style.display = 'none';
    sectionSoc.style.display = 'block';
    document.getElementById("containerSelectCountry").style.display = 'none';
    document.getElementById("containerSelectDecade").style.display = 'none';
});
// evento click categoria laboral
document.getElementById('labbtn').addEventListener('click', () => {
    document.getElementById("tableData").innerHTML = "";
    homePage.style.display = 'none';
    contact.style.display = 'none';
    sectionSoc.style.display = 'none';
    sectionEdu.style.display = 'none';
    sectionOrder.style.display = 'none';
    document.getElementById("selectNivEdu").style.display = 'none';
    document.getElementById("selectInsSco").style.display = 'none';
    document.getElementById("selectNivIns").style.display = 'none';
    document.getElementById("selectNivDes").style.display = 'none';
    document.getElementById("selectLabFor").style.display = 'none';
    document.getElementById("selectParLab").style.display = 'none';
    document.getElementById("selectNivVio").style.display = 'none';
    document.getElementById("tableDataPage").style.display = 'none';
    sectionLab.style.display = 'block';
    document.getElementById("containerSelectCountry").style.display = 'none';
    document.getElementById("containerSelectDecade").style.display = 'none';
});
// evento click en el home 
document.getElementById('homebtn').addEventListener('click', () => {
    document.getElementById("tableData").innerHTML = "";
    sectionLab.style.display = 'none';
    contact.style.display = 'none';
    sectionSoc.style.display = 'none';
    sectionEdu.style.display = 'none';
    sectionOrder.style.display = 'none';
    document.getElementById("selectNivEdu").style.display = 'none';
    document.getElementById("selectInsSco").style.display = 'none';
    document.getElementById("selectNivIns").style.display = 'none';
    document.getElementById("selectNivDes").style.display = 'none';
    document.getElementById("selectLabFor").style.display = 'none';
    document.getElementById("selectParLab").style.display = 'none';
    document.getElementById("selectNivVio").style.display = 'none';
    document.getElementById("tableDataPage").style.display = 'none';
    homePage.style.display = 'block';
    document.getElementById("containerSelectCountry").style.display = 'none';
    document.getElementById("containerSelectDecade").style.display = 'none';
});

document.getElementById('indexbtn').addEventListener('click', () => {
    document.getElementById("tableData").innerHTML = "";
    homePage.style.display = 'none';
    sectionLab.style.display = 'none';
    sectionSoc.style.display = 'none';
    sectionEdu.style.display = 'none';
    contact.style.display = 'none';
    document.getElementById("selectNivEdu").style.display = 'none';
    document.getElementById("selectInsSco").style.display = 'none';
    document.getElementById("selectNivIns").style.display = 'none';
    document.getElementById("selectNivDes").style.display = 'none';
    document.getElementById("selectLabFor").style.display = 'none';
    document.getElementById("selectParLab").style.display = 'none';
    document.getElementById("selectNivVio").style.display = 'none';
    document.getElementById("tableDataPage").style.display = 'none';
    sectionOrder.style.display = 'block';
    document.getElementById("containerSelectCountry").style.display = 'none';
    document.getElementById("containerSelectDecade").style.display = 'none';
});

document.getElementById('contactbtn').addEventListener('click', () => {
    document.getElementById("tableData").innerHTML = "";
    homePage.style.display = 'none';
    sectionLab.style.display = 'none';
    sectionSoc.style.display = 'none';
    sectionEdu.style.display = 'none';
    sectionOrder.style.display = 'none';
    document.getElementById("selectNivEdu").style.display = 'none';
    document.getElementById("selectInsSco").style.display = 'none';
    document.getElementById("selectNivIns").style.display = 'none';
    document.getElementById("selectNivDes").style.display = 'none';
    document.getElementById("selectLabFor").style.display = 'none';
    document.getElementById("selectParLab").style.display = 'none';
    document.getElementById("selectNivVio").style.display = 'none';
    document.getElementById("tableDataPage").style.display = 'none';
    contact.style.display = 'block';
    document.getElementById("containerSelectCountry").style.display = 'none';
    document.getElementById("containerSelectDecade").style.display = 'none';
});
//                                       CLICK SUBCATEGORIA EDUCACION 
//click cuando se hace click en nivel de educacion 
document.getElementById('btnSecNivEdu').addEventListener('click', () => {
    document.getElementById("containerSelectCountry").style.display = 'block';
    document.getElementById("containerSelectDecade").style.display = 'block';

    document.getElementById("containerInformacion").style.display = 'block';

    document.getElementById("selectCountry").innerHTML = "";
    document.getElementById("selectNivEduIndicator").innerHTML = "";
    document.getElementById("selectDecade").innerHTML = "";
    sectionEdu.style.display = 'none';
    document.getElementById("selectNivEdu").style.display = 'block';
 
    selectCountryGeneral();
    selectNivEduOption();
    selectDecadeGeneral();
});
// click cuando se hace click en inscripcion escolar 
document.getElementById('btnSecInsSco').addEventListener('click', () => {
    document.getElementById("containerSelectCountry").style.display = 'block';
    document.getElementById("containerSelectDecade").style.display = 'block';

    document.getElementById("containerInformacion").style.display = 'block';

    document.getElementById("selectCountry").innerHTML = "";
    document.getElementById("selectInsScoIndicator").innerHTML = "";
    document.getElementById("selectDecade").innerHTML = "";
    sectionEdu.style.display = 'none';
    document.getElementById("selectInsSco").style.display = 'block';
    selectCountryGeneral();
    selectInsScoOption();
    selectDecadeGeneral();
});
// click cuando se hace click en nivel de inscripcion

document.getElementById('btnSecNivIns').addEventListener('click', () => {
    document.getElementById("containerSelectCountry").style.display = 'block';
    document.getElementById("containerSelectDecade").style.display = 'block';

    document.getElementById("containerInformacion").style.display = 'block';
    document.getElementById("selectCountry").innerHTML = "";
    document.getElementById("selectNivInsIndicator").innerHTML = "";
    document.getElementById("selectDecade").innerHTML = "";
    sectionEdu.style.display = 'none';
    document.getElementById("selectNivIns").style.display = 'block';
    selectNivInsOption();
    selectCountryGeneral();
    selectDecadeGeneral();
});
//                                       CLICK SUBCATEGORIA LABORAL
// click cuando se hace click en nivel de desempleo
document.getElementById('btnSecNivDes').addEventListener('click', () => {
    document.getElementById("containerSelectCountry").style.display = 'block';
    document.getElementById("containerSelectDecade").style.display = 'block';

    document.getElementById("containerInformacion").style.display = 'block';
    document.getElementById("selectCountry").innerHTML = "";
    document.getElementById("selectNivDesIndicator").innerHTML = "";
    document.getElementById("selectDecade").innerHTML = "";
    sectionLab.style.display = 'none';
    document.getElementById("selectNivDes").style.display = 'block';
    selectNiveDesOption();
    selectCountryGeneral();
    selectDecadeGeneral();
})

document.getElementById('btnSecLabFor').addEventListener('click', () => {
    document.getElementById("containerSelectCountry").style.display = 'block';
    document.getElementById("containerSelectDecade").style.display = 'block';
    document.getElementById("containerInformacion").style.display = 'block';
    document.getElementById("selectCountry").innerHTML = "";
    document.getElementById("selectLabForIndicator").innerHTML = "";
    document.getElementById("selectDecade").innerHTML = "";
    sectionLab.style.display = 'none';
    document.getElementById("selectLabFor").style.display = 'block';
    selectForLabOption();
    selectCountryGeneral();
    selectDecadeGeneral();
});
document.getElementById('btnSecParLab').addEventListener('click', () => {
    document.getElementById("containerSelectCountry").style.display = 'block';
    document.getElementById("containerSelectDecade").style.display = 'block';
    document.getElementById("containerInformacion").style.display = 'block';
    document.getElementById("selectCountry").innerHTML = "";
    document.getElementById("selectParLabIndicator").innerHTML = "";
    document.getElementById("selectDecade").innerHTML = "";
    sectionLab.style.display = 'none';
    document.getElementById("selectParLab").style.display = 'block';
    selectParLabOption();
    selectCountryGeneral();
    selectDecadeGeneral();
});
//                                       CLICK SUBCATEGORIA SOCIAL
// click cuando se hace click en nivel de desempleo

document.getElementById('btnSecNivVio').addEventListener('click', () => {
    document.getElementById("containerSelectCountry").style.display = 'block';
    document.getElementById("containerSelectDecade").style.display = 'block';
    document.getElementById("containerInformacion").style.display = 'block';
    document.getElementById("selectCountry").innerHTML = "";
    document.getElementById("selectNivVioIndicator").innerHTML = "";
    document.getElementById("selectDecade").innerHTML = "";
    sectionSoc.style.display = 'none';
    document.getElementById("selectNivVio").style.display = 'block';
    selectNivVioOption();
    selectCountryGeneral();
    selectDecadeGeneral();
})




let year = "";
let question = "";
let country = "";
let condition = "";

//                                     S  E  L  E  C  T  I  O  N      O  F     T  H  E     U  S  E  R
// STORING USER SELECTION - LEVEL OF EDUCATION
// Country

const selectCountrySave = document.getElementById("selectCountry");
selectCountrySave.addEventListener("change", () => {
    condition = selectCountrySave.options[selectCountrySave.selectedIndex].text;

    pais(condition);
});


//                                       I  N  D  I  C  A  T  O  R  S
// Indicators nivel educacion
const selectNivEduIndicatorSave = document.getElementById("selectNivEduIndicator");
// const containerDos = document.getElementById("containerselectNivEduPreguntas");
selectNivEduIndicatorSave.addEventListener("change", () => {
    question = selectNivEduIndicatorSave.options[selectNivEduIndicatorSave.selectedIndex].text;

});
// Indicators Inscripcion Escolar
const selectInsScoIndicatorSave = document.getElementById("selectInsScoIndicator");
// const containerDos = document.getElementById("containerselectNivEduPreguntas");
selectInsScoIndicatorSave.addEventListener("change", () => {
    question = selectInsScoIndicatorSave.options[selectInsScoIndicatorSave.selectedIndex].text;

});
// Indicators Nivel de instruccion 
const selectNivInsIndicatorSave = document.getElementById("selectNivInsIndicator");
selectNivInsIndicatorSave.addEventListener("change", () => {
    question = selectNivInsIndicatorSave.options[selectNivInsIndicatorSave.selectedIndex].text;
});
// Indicators Nivel de Desempleo
const selectNivDesIndicatorSave = document.getElementById("selectNivDesIndicator");
selectNivDesIndicatorSave.addEventListener("change", () => {
    question = document.getElementById("selectNivDesIndicator").options[document.getElementById("selectNivDesIndicator").selectedIndex].text;
});
// Indicators Fuerza Laboral
const selectLabForIndicatorSave = document.getElementById("selectLabForIndicator");
selectLabForIndicatorSave.addEventListener("change", () => {
    question = selectLabForIndicatorSave.options[selectLabForIndicatorSave.selectedIndex].text;
});
// Indicators Participacion Laboral
const selectParLabIndicatorSave = document.getElementById("selectParLabIndicator");
selectParLabIndicatorSave.addEventListener("change", () => {
    question = selectParLabIndicatorSave.options[selectParLabIndicatorSave.selectedIndex].text;
});
// Indicators Nivel violencia 
const selectNivVioIndicatorSave = document.getElementById("selectNivVioIndicator");
selectNivVioIndicatorSave.addEventListener("change", () => {
    question = selectNivVioIndicatorSave.options[selectNivVioIndicatorSave.selectedIndex].text;
});

//                          Y E A R  == D E C A D E 
// D   E   C   A   D   E

const selectDecadeSave = document.getElementById("selectDecade");
// const year = document.getElementById("containerselectNivEduDecada");
selectDecadeSave.addEventListener("change", () => {
    year = selectDecadeSave.options[selectDecadeSave.selectedIndex].text;
});

//   M O S T R A R      D A T O S ; 
//VARIABLES VACIAS fx aplicar()

// Aqui hay que hacer una linea de codigo de un solo boto cuando ese boton haya click toma el valor de los select 
document.getElementById("btnGenerandoTable").addEventListener("click", () => {
    document.getElementById("containerSelectCountry").style.display = 'none';
    document.getElementById("containerSelectDecade").style.display = 'none';

    document.getElementById("selectNivEdu").style.display = 'none';
    document.getElementById("selectNivIns").style.display = 'none';
    document.getElementById("selectNivIns").style.display = 'none';
    document.getElementById("selectNivDes").style.display = 'none';
    document.getElementById("selectLabFor").style.display = 'none'
    document.getElementById("selectParLab").style.display = 'none';
    document.getElementById("selectNivVio").style.display = 'none';
    

  
    if (year == "" || question == "" || country == "") {
        alert("Debe completar todos los datos requeridos");
    } else {
        window.aplicar(year, question, country);
        document.getElementById("tableDataPage").style.display = 'block';
        document.getElementById("containeBtnGenerandoTable").style.display = 'none';
    }
});


// funcion condicional pais
function pais(condition) {
    if (condition === "PERU") {
        country = arrPeru;
    } else if (condition === "MEXICO") {
        country = arrMexico;
    } else if (condition === "BRASIL") {
        country = arrBrasil;
    } else {
        country = arrChile;
    }
    //  return country;
}

const arrSelectGralCountry = ["PERU", "MEXICO", "BRASIL", "CHILE"];

const intervalos = ["1999",
    "2000", "2001", "2002", "2003", "2004", "2005", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013",
    "2014", "2015", "2016", "2017"];

const { PER, MEX, BRA, CHL } = window.WORLDBANK;
const arrPeru = PER.indicators;
const arrMexico = MEX.indicators;
const arrBrasil = BRA.indicators;
const arrChile = CHL.indicators;

// // const sectionEdu = document.getElementById('sectionEdu');
// // inicialmente 
//                                                          I N D I C A T O R S          S U B C  A T E G  O R  I  A 
//  INDICATORS SUBCATEGORIA  EDUCACION 
const arrSelectNivEduIndicators = ["Educacin terciaria, profesores (% de mujeres)",
    "Educación de nivel primario, alumnos (% de mujeres)",
    "Educación de nivel primario, maestras (% de mujeres)",
    "Educación de nivel secundario, alumnos (% de mujeres)",
    "Educación de nivel secundario, alumnos en programas de educación general (% de mujeres)",
    "Educación de nivel secundario, alumnos en programas vocacionales (% de mujeres)"];
const arrselectInsScoIndicators = ["Inscripción escolar, nivel preprimario, mujeres (% bruto)",
    "Inscripción escolar, nivel primario, mujeres (% bruto)",
    "Inscripción escolar, nivel primario, mujeres (% neto)",
    "Inscripción escolar, nivel secundario, mujeres (% bruto)",
    "Inscripción escolar, nivel secundario, mujeres (% neto)",
    "Inscripción escolar, nivel terciario, mujeres (% bruto)"];
const arrselectNivInsIndicators = ["Nivel de instrucción, al menos ciclo inferior de la escuela secundaria completo, población de más de 25 años, mujeres (%) (acumulativo)",
    "Nivel de instrucción, al menos ciclo superior de la escuela secundaria completo, población de más de 25 años, mujeres (%) (acumulativo)",
    "Nivel de instrucción, al menos escuela de nivel posterior a la secundaria completa, población de más de 25 años, mujeres (%) (acumulativo)",
    "Nivel de instrucción, al menos escuela primaria completa, población de más de 25 años, mujeres (%) (acumulativo)",
    "Nivel de instrucción, al menos escuela terciaria de ciclo corto finalizada, población de más de 25 años, mujeres (%) (acumulativo)",
    "Nivel de instrucción, al menos nivel de doctorado o equivalente, población de más de 25 años, mujeres (%) (acumulativo)",
    "Nivel de instrucción, al menos nivel de licenciatura o equivalente, población de más de 25 años, mujeres (%) (acumulativo)",
    "Nivel de instrucción, al menos nivel de maestría o equivalente, población de más de 25 años, mujeres (%) (acumulativo)"];
//  INDICATORS SUBCATEGORIA  LABORAL 
const arrselectNivDesIndicators = ["Desempleo, total (% de participación total en la fuerza laboral) (estimación nacional)",
    "Desempleo, total de jóvenes (% del total de participación en la fuerza laboral de 15 a 24 años) (estimación nacional)",
    "Desempleo, mujeres (% de participación femenina en la fuerza laboral) (estimación nacional)",
    "Desempleo, varones (% de participación masculina en la fuerza laboral) (estimación nacional)",
    "Desempleo, mujeres jóvenes (% de participación en la fuerza laboral de mujeres de 15 a 24 años) (estimación nacional)",
    "Desempleo, varones jóvenes (% de participación en la fuerza laboral de varones de 15 a 24 años) (estimación nacional)"];
const arrselectLabForIndicators = ["Fuerza laboral con educación avanzada (% del total)",
    "Fuerza laboral con educación avanzada, mujeres (% de la fuerza laboral femenina)",
    "Fuerza laboral con educación avanzada, varones (% de la fuerza laboral masculina)",
    "Fuerza laboral con educación básica (% del total)",
    "Fuerza laboral con educación básica, mujeres (% de la fuerza laboral femenina)",
    "Fuerza laboral con educación básica, varones (% de la fuerza laboral masculina)",
    "Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)",
    "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)"];

const arrselectLabParIndicators = ["Tasa de población activa, mujeres (% de la población femenina mayor de 15 años) (estimación modelado OIT)",
    "Tasa de participación en la fuerza laboral, de 15 a 24 años, mujeres (%) (estimación nacional)",
    "Tasa de participación en la fuerza laboral, de 15 a 24 años, total (%) (estimación nacional)",
    "Tasa de participación en la fuerza laboral, de 15 a 24 años, varones (%) (estimación nacional)",
    "Tasa de participación en la fuerza laboral, hombres (% de la población masculina entre 15-64 años) (estimación modelado OIT)",
    "Tasa de participación en la fuerza laboral, mujeres (% de la población femenina entre 15-64 años) (estimación modelado OIT)",
    "Tasa de participación en la fuerza laboral, mujeres (% de la población femenina mayor de 15 años) (estimación nacional)",
    "Tasa de participación en la fuerza laboral, total (% de la población total mayor de 15 años) (estimación nacional)",
    "Tasa de participación en la fuerza laboral, total (% del total de la población entre 15-64 años) (estimación modelado OIT)",
    "Tasa de participación en la fuerza laboral, varones (% de la población masculina mayor de 15 años) (estimación nacional)"];

const arrseleccNioVioIndicators = ["Mujeres que creen que está justificado que un marido golpee a su esposa (cualquiera de las cinco razones) (%)",
    "Mujeres que creen que está justificado que un marido golpee a su esposa cuando a ella se le quema la comida (%)",
    "Mujeres que creen que está justificado que un marido golpee a su esposa cuando descuida a los hijos (%)",
    "Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella discute con él (%)",
    "Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella se niega a tener relaciones sexuales (%)",
    "Mujeres que creen que está justificado que un marido golpee a su esposa cuando sale sin avisarle (%)",
    "Mujeres que se casaron por primera vez antes de los 18 (% de mujeres 10-24)"];


//     F U N C T I O N S   C R E A T I O N    S E L E C T 
//            EDUCACION
//     creacion de select generales = country y decade 
function selectCountryGeneral(){


    let selectCountry = document.getElementById("selectCountry");

    let option = document.createElement("option");  //opcion por defecto
    selectCountry.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    for (let m = 0; m < arrSelectGralCountry.length; m++) {

        let option = document.createElement("option");
        selectCountry.appendChild(option); //Metemos la opción en el select
        option.setAttribute("value", "id"); //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrSelectGralCountry[m];
        option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    }

}

function selectDecadeGeneral(){

    let selecIntervalos = document.getElementById("selectDecade");
    //opcion por defecto
    option = document.createElement("option");
    selecIntervalos.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    for (let m = 0; m < intervalos.length; m++) {

        let option = document.createElement("option");
        selecIntervalos.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id"); //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = intervalos[m];
        option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    }
    
}

//     creacion de select para nivel de educacion
function selectNivEduOption() {
    //Tu array de PAISES  aqui en el array tenemos el contenido de las opciones y tienen un id por pais PER,MEX,BRA,CHL
    // let selectCountryNivEdu = document.getElementById("selectNivEduCountry");

    // let option = document.createElement("option");  //opcion por defecto
    // selectCountryNivEdu.appendChild(option);
    // option.setAttribute("value", "id");
    // option.value = ""
    // option.innerHTML = "Seleccione..."

    // //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    // for (let m = 0; m < arrSelectGralCountry.length; m++) {

    //     let option = document.createElement("option");
    //     selectCountryNivEdu.appendChild(option); //Metemos la opción en el select
    //     option.setAttribute("value", "id"); //Creamos la opcion y se le dan los atriculos

    //     option.value = m;
    //     option.id = arrSelectGralCountry[m];
    //     option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    // }

    let selectIndicatorNivEdu = document.getElementById("selectNivEduIndicator");

    option = document.createElement("option");//opcion por defecto
    selectIndicatorNivEdu.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""
    for (let m = 0; m < arrSelectNivEduIndicators.length; m++) {

        let option = document.createElement("option");
        selectIndicatorNivEdu.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");//Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrSelectNivEduIndicators[m];
        option.innerHTML = arrSelectNivEduIndicators[m]; //Metemos el texto en la opción
    }

    // let selecIntervalosNivEdu = document.getElementById("selectNivEduDecade");
    // //opcion por defecto
    // option = document.createElement("option");
    // selecIntervalosNivEdu.appendChild(option);
    // option.setAttribute("value", "id");
    // option.value = ""
    // option.innerHTML = "Seleccione..."

    // for (let m = 0; m < intervalos.length; m++) {

    //     let option = document.createElement("option");
    //     selecIntervalosNivEdu.appendChild(option); //Metemos la opción en el select

    //     option.setAttribute("value", "id"); //Creamos la opcion y se le dan los atriculos

    //     option.value = m;
    //     option.id = intervalos[m];
    //     option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    // }
}
// creacion de select para Inscripcion Escolar
function selectInsScoOption() {

    //Tu array de PAISES  aqui en el array tenemos el contenido de las opciones y tienen un id por pais PER,MEX,BRA,CHL
    // let selectCountryNivEdu = document.getElementById("selectInsScoCountry");

    // //opcion por defecto
    // let option = document.createElement("option");
    // selectCountryNivEdu.appendChild(option);
    // option.setAttribute("value", "id");
    // option.value = ""
    // option.innerHTML = "Seleccione..."


    // //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    // for (let m = 0; m < arrSelectGralCountry.length; m++) {

    //     let option = document.createElement("option");
    //     selectCountryNivEdu.appendChild(option); //Metemos la opción en el select

    //     option.setAttribute("value", "id");
    //     //Creamos la opcion y se le dan los atriculos

    //     option.value = m;
    //     option.id = arrSelectGralCountry[m];
    //     option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    // }

    let selectIndicatorInsSco = document.getElementById("selectInsScoIndicator");

    //opcion por defecto
    option = document.createElement("option");
    selectIndicatorInsSco.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""
    for (let m = 0; m < arrselectInsScoIndicators.length; m++) {

        let option = document.createElement("option");
        selectIndicatorInsSco.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");//Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrselectInsScoIndicators[m];
        option.innerHTML = arrselectInsScoIndicators[m]; //Metemos el texto en la opción
    }

    // let selecIntervalosNivEdu = document.getElementById("selectInsScoDecade");
    // //opcion por defecto
    // option = document.createElement("option");
    // selecIntervalosNivEdu.appendChild(option);
    // option.setAttribute("value", "id");
    // option.value = ""
    // option.innerHTML = "Seleccione..."
    // for (let m = 0; m < intervalos.length; m++) {

    //     let option = document.createElement("option");
    //     selecIntervalosNivEdu.appendChild(option); //Metemos la opción en el select

    //     option.setAttribute("value", "id");//Creamos la opcion y se le dan los atriculos

    //     option.value = m;
    //     option.id = intervalos[m];
    //     option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    // }
}
// creacion de select para Nivel de instruccion 
function selectNivInsOption() {

    //Tu array de PAISES  aqui en el array tenemos el contenido de las opciones y tienen un id por pais PER,MEX,BRA,CHL
    // let selectCountryNivIns = document.getElementById("selectNivInsCountry");

    // //opcion por defecto
    // let option = document.createElement("option");
    // selectCountryNivIns.appendChild(option);
    // option.setAttribute("value", "id");
    // option.value = ""
    // option.innerHTML = "Seleccione..."


    // //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    // for (let m = 0; m < arrSelectGralCountry.length; m++) {

    //     let option = document.createElement("option");
    //     selectCountryNivIns.appendChild(option); //Metemos la opción en el select

    //     option.setAttribute("value", "id");
    //     //Creamos la opcion y se le dan los atriculos

    //     option.value = m;
    //     option.id = arrSelectGralCountry[m];
    //     option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    // }

    let selectIndicatorNivIns = document.getElementById("selectNivInsIndicator");

    //opcion por defecto
    option = document.createElement("option");
    selectIndicatorNivIns.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""
    for (let m = 0; m < arrselectNivInsIndicators.length; m++) {

        let option = document.createElement("option");
        selectIndicatorNivIns.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id"); //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrselectNivInsIndicators[m];
        option.innerHTML = arrselectNivInsIndicators[m]; //Metemos el texto en la opción
    }

    // let selecIntervalosNivIns = document.getElementById("selectNivInsDecade");
    // //opcion por defecto
    // option = document.createElement("option");
    // selecIntervalosNivIns.appendChild(option);
    // option.setAttribute("value", "id");
    // option.value = ""
    // option.innerHTML = "Seleccione..."
    // for (let m = 0; m < intervalos.length; m++) {

    //     let option = document.createElement("option");
    //     selecIntervalosNivIns.appendChild(option); //Metemos la opción en el select

    //     option.setAttribute("value", "id");//Creamos la opcion y se le dan los atriculos

    //     option.value = m;
    //     option.id = intervalos[m];
    //     option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    // }
}

//           LABORAL 
// creacion de select para Nivel de Desempleo
function selectNiveDesOption() {

    // se crea contenedor del select en pais 
    // let selectCountryNivDes = document.getElementById("selectNivDesCountry");
    // //opcion por defecto
    // let option = document.createElement("option");
    // selectCountryNivDes.appendChild(option);
    // option.setAttribute("value", "id");
    // option.value = ""
    // option.innerHTML = "Seleccione..."


    // //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    // for (let m = 0; m < arrSelectGralCountry.length; m++) {

    //     let option = document.createElement("option");
    //     selectCountryNivDes.appendChild(option); //Metemos la opción en el select

    //     option.setAttribute("value", "id");
    //     //Creamos la opcion y se le dan los atriculos

    //     option.value = m;
    //     option.id = arrSelectGralCountry[m];
    //     option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    // }

    let selectIndicatorNivDes = document.getElementById("selectNivDesIndicator");

    //opcion por defecto
    option = document.createElement("option");
    selectIndicatorNivDes.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""
    for (let m = 0; m < arrselectNivDesIndicators.length; m++) {

        let option = document.createElement("option");
        selectIndicatorNivDes.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");//Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrselectNivDesIndicators[m];
        option.innerHTML = arrselectNivDesIndicators[m]; //Metemos el texto en la opción
    }

    // let selecIntervalosNivDes = document.getElementById("selectNivDesDecade");
    // //opcion por defecto
    // option = document.createElement("option");
    // selecIntervalosNivDes.appendChild(option);
    // option.setAttribute("value", "id");
    // option.value = ""
    // option.innerHTML = "Seleccione..."
    // // se toma los valores de los años y se crea la variable intervalos(aunque por mientras los valores estan de manera 
    // // general, es decir año a año desde 1990 hasta 2018-2017, lugo se espera crear intervalos).
    // for (let m = 0; m < intervalos.length; m++) {

    //     let option = document.createElement("option");
    //     selecIntervalosNivDes.appendChild(option); //Metemos la opción en el select

    //     option.setAttribute("value", "id"); //Creamos la opcion y se le dan los atriculos

    //     option.value = m;
    //     option.id = intervalos[m];
    //     option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    // }
}

// creacion de select para Fuerza Laboral
function selectForLabOption() {

    // se crea contenedor del select en pais 
    // let selectCountryLabFor = document.getElementById("selectLabForCountry");
    // //opcion por defecto
    // let option = document.createElement("option");
    // selectCountryLabFor.appendChild(option);
    // option.setAttribute("value", "id");
    // option.value = ""
    // option.innerHTML = "Seleccione..."


    // //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    // for (let m = 0; m < arrSelectGralCountry.length; m++) {

    //     let option = document.createElement("option");
    //     selectCountryLabFor.appendChild(option); //Metemos la opción en el select

    //     option.setAttribute("value", "id");
    //     //Creamos la opcion y se le dan los atriculos

    //     option.value = m;
    //     option.id = arrSelectGralCountry[m];
    //     option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    // }


    let selectIndicatorLabFor = document.getElementById("selectLabForIndicator");

    //opcion por defecto
    option = document.createElement("option");
    selectIndicatorLabFor.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""
    for (let m = 0; m < arrselectLabForIndicators.length; m++) {

        let option = document.createElement("option");
        selectIndicatorLabFor.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrselectLabForIndicators[m];
        option.innerHTML = arrselectLabForIndicators[m]; //Metemos el texto en la opción
    }

    // let selectIntervalosLabFor = document.getElementById("selectLabForDecade");
    // //opcion por defecto
    // option = document.createElement("option");
    // selectIntervalosLabFor.appendChild(option);
    // option.setAttribute("value", "id");
    // option.value = ""
    // option.innerHTML = "Seleccione..."
    // // se toma los valores de los años y se crea la variable intervalos(aunque por mientras los valores estan de manera 
    // // general, es decir año a año desde 1990 hasta 2018-2017, lugo se espera crear intervalos).
    // for (let m = 0; m < intervalos.length; m++) {

    //     let option = document.createElement("option");
    //     selectIntervalosLabFor.appendChild(option); //Metemos la opción en el select

    //     option.setAttribute("value", "id");
    //     //Creamos la opcion y se le dan los atriculos

    //     option.value = m;
    //     option.id = intervalos[m];
    //     option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    // }
}

// creacion de select para Participacion Laboral 
function selectParLabOption() {

    // se crea contenedor del select en pais 
    // let selectCountryParLab = document.getElementById("selectParLabCountry");
    // //opcion por defecto
    // let option = document.createElement("option");
    // selectCountryParLab.appendChild(option);
    // option.setAttribute("value", "id");
    // option.value = ""
    // option.innerHTML = "Seleccione..."


    // //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    // for (let m = 0; m < arrSelectGralCountry.length; m++) {

    //     let option = document.createElement("option");
    //     selectCountryParLab.appendChild(option); //Metemos la opción en el select

    //     option.setAttribute("value", "id");
    //     //Creamos la opcion y se le dan los atriculos

    //     option.value = m;
    //     option.id = arrSelectGralCountry[m];
    //     option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    // }


    let selectIndicatorLabPar = document.getElementById("selectParLabIndicator");

    //opcion por defecto
    option = document.createElement("option");
    selectIndicatorLabPar.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""
    for (let m = 0; m < arrselectLabParIndicators.length; m++) {

        let option = document.createElement("option");
        selectIndicatorLabPar.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrselectLabParIndicators[m];
        option.innerHTML = arrselectLabParIndicators[m]; //Metemos el texto en la opción
    }

    // let selecIntervalosLabPar = document.getElementById("selectParLabDecade");
    // //opcion por defecto
    // option = document.createElement("option");
    // selecIntervalosLabPar.appendChild(option);
    // option.setAttribute("value", "id");
    // option.value = ""
    // option.innerHTML = "Seleccione..."
    // // se toma los valores de los años y se crea la variable intervalos(aunque por mientras los valores estan de manera 
    // // general, es decir año a año desde 1990 hasta 2018-2017, lugo se espera crear intervalos).
    // for (let m = 0; m < intervalos.length; m++) {

    //     let option = document.createElement("option");
    //     selecIntervalosLabPar.appendChild(option); //Metemos la opción en el select

    //     option.setAttribute("value", "id");
    //     //Creamos la opcion y se le dan los atriculos

    //     option.value = m;
    //     option.id = intervalos[m];
    //     option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    // }

}
//            SOCIAL
// creacion de select para Nivel de Desempleo
function selectNivVioOption() {

    // se crea contenedor del select en pais 
    // let selectCountryNivVio = document.getElementById("selectNivVioCountry");
    // //opcion por defecto
    // let option = document.createElement("option");
    // selectCountryNivVio.appendChild(option);
    // option.setAttribute("value", "id");
    // option.value = ""
    // option.innerHTML = "Seleccione..."


    // //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    // for (let m = 0; m < arrSelectGralCountry.length; m++) {

    //     let option = document.createElement("option");
    //     selectCountryNivVio.appendChild(option); //Metemos la opción en el select

    //     option.setAttribute("value", "id");
    //     //Creamos la opcion y se le dan los atriculos

    //     option.value = m;
    //     option.id = arrSelectGralCountry[m];
    //     option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    // }


    let selectIndicatorNivVio = document.getElementById("selectNivVioIndicator");

    //opcion por defecto
    option = document.createElement("option");
    selectIndicatorNivVio.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""
    for (let m = 0; m < arrseleccNioVioIndicators.length; m++) {

        let option = document.createElement("option");
        selectIndicatorNivVio.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrseleccNioVioIndicators[m];
        option.innerHTML = arrseleccNioVioIndicators[m]; //Metemos el texto en la opción
    }

    // let selecIntervalosNivVio = document.getElementById("selectNivVioDecade");
    // //opcion por defecto
    // option = document.createElement("option");
    // selecIntervalosNivVio.appendChild(option);
    // option.setAttribute("value", "id");
    // option.value = ""
    // option.innerHTML = "Seleccione..."
    // // se toma los valores de los años y se crea la variable intervalos(aunque por mientras los valores estan de manera 
    // // general, es decir año a año desde 1990 hasta 2018-2017, lugo se espera crear intervalos).
    // for (let m = 0; m < intervalos.length; m++) {

    //     let option = document.createElement("option");
    //     selecIntervalosNivVio.appendChild(option); //Metemos la opción en el select

    //     option.setAttribute("value", "id");
    //     //Creamos la opcion y se le dan los atriculos

    //     option.value = m;
    //     option.id = intervalos[m];
    //     option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    // }
}

//                                                                     FUNCTION ORDER

//EVENT - FUNCTION ORDER ASCEN
document.getElementById("orderAZbtn").addEventListener("click", () => {
    const WORLDBANK = window.WORLDBANK;
    const dataGral = WORLDBANK;
    window.orderData(dataGral);
    const resultFxOrdenar = window.orderData(WORLDBANK);

    function creandoListaorderData(resultFxOrdenar) {
        let arrayListaIndicadoresDom = resultFxOrdenar;
        var ul = document.createElement("ul");
        document.getElementById("OrdenarAscendentecontenedor").appendChild(ul);
        arrayListaIndicadoresDom.forEach(function (nombre) {
            var li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML += nombre;
        });
    }
    creandoListaorderData(resultFxOrdenar);
    document.getElementById("OrdenarAscendentecontenedor").style.display = "block";
    document.getElementById("OrdenarDescendentecontenedor").style.display = "none";
    document.getElementById("orderAZbtn").disabled = true;
});
// // EVENT - FUNCTION ORDER DESC
document.getElementById("orderZAbtn").addEventListener("click", () => {
    const WORLDBANK = window.WORLDBANK;
    const dataGral = WORLDBANK;
    window.orderDataDes(dataGral);
    const resultFxOrdenarDes = window.orderDataDes(WORLDBANK);

    function creandoListaorderDataDes(resultFxOrdenarDes) {
        let arrayListaIndicadoresDom = resultFxOrdenarDes;
        var ul = document.createElement("ul");
        document.getElementById("OrdenarDescendentecontenedor").appendChild(ul);
        arrayListaIndicadoresDom.forEach(function (nombre) {
            var li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML += nombre;
        });

    }
    creandoListaorderDataDes(resultFxOrdenarDes);
    document.getElementById("OrdenarDescendentecontenedor").style.display = "block";
    document.getElementById("OrdenarAscendentecontenedor").style.display = "none";
    document.getElementById("orderZAbtn").disabled = true;

});

document.getElementById("btnInformacion").addEventListener("click", () => {

    let porcentaje = "";
    let fuerzaDeTrabajo = "";
    const arrayObjectCountry = Object.values(window.WORLDBANK);

    const arrayIndicadoresChile = arrayObjectCountry[3].indicators;

    const indicadorDesempleo = arrayIndicadoresChile[106].indicatorName;
    const dataDesempleoTotalVarones = arrayIndicadoresChile[106].data;

    const dataDesempleoTotalMujeres = arrayIndicadoresChile[107].data;
    const dataDesempleoTotal2017Varones = dataDesempleoTotalVarones[2017];
    const dataDesempleoTotal2017Mujeres = dataDesempleoTotalMujeres[2017];
    const fuerzaDeTrabajoVarones = 3744;
    const fuerzaDeTrabajoMujeres = 3744;
    window.empleoOcupados(porcentaje, fuerzaDeTrabajo);


    function info() {

        const parrafoInfoUno = document.createElement("p");
        document.getElementById("containerInformacion").appendChild(parrafoInfoUno);
        parrafoInfoUno.innerHTML += ("El año 2017 segun la Minuta de empleo Nacional, el indicador :  " + indicadorDesempleo +
            "\nfue de un " + dataDesempleoTotal2017Varones.toFixed(2) + " % para HOMBRES y de un " + dataDesempleoTotal2017Mujeres.toFixed(2) + " % para MUJERES");


        const parrafoInfoDos = document.createElement("p");
        document.getElementById("containerInformacion").appendChild(parrafoInfoDos);
        const datoUnoMujeres = window.empleoOcupados(dataDesempleoTotal2017Mujeres, fuerzaDeTrabajoMujeres);

        const datoDosHombres = window.empleoOcupados(dataDesempleoTotal2017Varones, fuerzaDeTrabajoVarones);
        parrafoInfoDos.innerHTML += "De lo cual, se puede obtener la cantidad de trabajadores ocupados y desocupados, segun calculos estos son:" +
            "\n Mujeres Trabajadoras Ocupadas = " + datoUnoMujeres + " miles" +
            "\n Hombres Trabajadores Ocupados = " + datoDosHombres + "miles";

    }
    info();






});
