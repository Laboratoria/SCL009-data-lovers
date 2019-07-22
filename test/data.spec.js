global.window = global;
global.assert = require('chai').assert;
require('../src/data/worldbank/worldbank.json');
require('../src/js/data');
require('./data.spec.js');


// TEST FUNCION APLICAR
describe('aplicar', () => {

  it('debería ser una function', () => {
    assert.equal( typeof aplicar,'function');
  })

});

// TEST FUNCION ORDENAR DATA
describe('orderData', () => {

  it('debería ser una function', () => {
    assert.equal( typeof orderData,'function');
  })

});



// TEST APLICACION    FUNCION ORDENAR NADA
describe('orderData', () => {
   
  const testOrderData = {
    "BRA": {
      "indicators": [
        {
          "data": {
            "2000": "",
            "2001": "",
            "2002": "",
            "2003": "",
            "2004": "",
            "2005": "",
            "2006": "",
            "2007": "",
            "2008": "",
            "2009": "",
            "2010": "",
            "2011": "",
            "2012": "",
            "2013": "",
            "2014": "",
            "2015": "",
            "2016": "",
            "2017": ""
          },
          "countryName": "Brasil",
          "countryCode": "BRA",
          "indicatorName": "Proporción de mujeres víctimas de violencia física o sexual en los últimos 12 meses (% de mujeres de entre 15 y 49 años)",
          "indicatorCode": "SG.VAW.1549.ZS"
        },
        {
          "data": {
            "2000": 2.02999997138977,
            "2001": 2.43700003623962,
            "2002": 2.67600011825562,
            "2003": 2.5220000743866,
            "2004": 2.54500007629395,
            "2005": 2.86400008201599,
            "2006": 2.9909999370575,
            "2007": 2.52300000190735,
            "2008": 3.11800003051758,
            "2009": 2.82599997520447,
            "2010": 2.38899993896484,
            "2011": 2.41199994087219,
            "2012": 2.60500001907349,
            "2013": 2.77999997138977,
            "2014": 2.77300000190735,
            "2015": 2.93400001525879,
            "2016": 3.01999998092651,
            "2017": 3.05200004577637
          },
          "countryName": "Brasil",
          "countryCode": "BRA",
          "indicatorName": "Empleadores, mujeres (% del empleo femenino)",
          "indicatorCode": "SL.EMP.MPYR.FE.ZS"
        },
      ],
      "dataSource": "Indicadores del desarrollo mundial",
      "lastUpdated": "2018-11-14"
    }}
    ;


  it('debería retornar ["Empleadores, mujeres (% del empleo femenino)", "Proporción de mujeres víctimas de violencia física…mos 12 meses (% de mujeres de entre 15 y 49 años)"] para (testOrderData)', () => {
    assert.deepEqual( window.orderData(testOrderData),["Empleadores, mujeres (% del empleo femenino)","Proporción de mujeres víctimas de violencia física o sexual en los últimos 12 meses (% de mujeres de entre 15 y 49 años)"]);
  });


});

// TEST FUNCION ORDENAR DATA DESCENDENTE 
describe('orderDataDes', () => {

  it('debería ser una function', () => {
    assert.equal( typeof orderDataDes,'function');
  })

  const testOrderData = {
    "BRA": {
      "indicators": [
        {
          "data": {
            "2000": "",
            "2001": "",
            "2002": "",
            "2003": "",
            "2004": "",
            "2005": "",
            "2006": "",
            "2007": "",
            "2008": "",
            "2009": "",
            "2010": "",
            "2011": "",
            "2012": "",
            "2013": "",
            "2014": "",
            "2015": "",
            "2016": "",
            "2017": ""
          },
          "countryName": "Brasil",
          "countryCode": "BRA",
          "indicatorName": "Proporción de mujeres víctimas de violencia física o sexual en los últimos 12 meses (% de mujeres de entre 15 y 49 años)",
          "indicatorCode": "SG.VAW.1549.ZS"
        },
        {
          "data": {
            "2000": 2.02999997138977,
            "2001": 2.43700003623962,
            "2002": 2.67600011825562,
            "2003": 2.5220000743866,
            "2004": 2.54500007629395,
            "2005": 2.86400008201599,
            "2006": 2.9909999370575,
            "2007": 2.52300000190735,
            "2008": 3.11800003051758,
            "2009": 2.82599997520447,
            "2010": 2.38899993896484,
            "2011": 2.41199994087219,
            "2012": 2.60500001907349,
            "2013": 2.77999997138977,
            "2014": 2.77300000190735,
            "2015": 2.93400001525879,
            "2016": 3.01999998092651,
            "2017": 3.05200004577637
          },
          "countryName": "Brasil",
          "countryCode": "BRA",
          "indicatorName": "Empleadores, mujeres (% del empleo femenino)",
          "indicatorCode": "SL.EMP.MPYR.FE.ZS"
        },
      ],
      "dataSource": "Indicadores del desarrollo mundial",
      "lastUpdated": "2018-11-14"
    }}
    ;

  it('debería retornar ["Proporción de mujeres víctimas de violencia física…mos 12 meses (% de mujeres de entre 15 y 49 años)","Empleadores, mujeres (% del empleo femenino)"] para (testOrderData)', () => {
    assert.deepEqual( window.orderDataDes(testOrderData),["Proporción de mujeres víctimas de violencia física o sexual en los últimos 12 meses (% de mujeres de entre 15 y 49 años)","Empleadores, mujeres (% del empleo femenino)"]);
  });

});

// TEST FUNCION EMPLEO FUERZA LABORAL CHILE 2017 
describe('empleoOcupados', () => {

  it('debería ser una function', () => {
    assert.equal( typeof empleoOcupados,'function');
  });

  it ('deberia retornar "3960.000" para (1,4000)',() => {
   assert.deepEqual( window.empleoOcupados(1, 4000),"3960.000");
  });
});