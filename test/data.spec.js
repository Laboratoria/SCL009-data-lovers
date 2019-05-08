global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

  const data = [
    {"num": "037",
    "name": "Vulpix",
    "type": [
      "Fire"],
      "egg": "5 km"
    },
    
    {"num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"],
      "egg": "2 km"
  
    },    
    
      {"num": "095",
    "name": "Onix",
    "type": [
      "Rock",
      "Ground"],
      "egg": "10 km"
    },
    
    {"num": "002",
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"],
      "egg": "Not in Eggs"
    } 


]


describe('filterData', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof filterData, 'function');
  });

  it('debería retornar "Vulpix para cuando filtro por tipo Fire"', () => {
    assert.deepEqual(window.filterData(data,'Fire','type'), [{
    "num": "037",
    "name": "Vulpix",
    "type": [
      "Fire"],
      "egg": "5 km"}])
  });


  it('debería retornar "Bulbasaur y Ivysaur para cuando filtro por tipo Grass"', () => {
    assert.deepEqual(window.filterData(data,'Grass','type'), [
    {
    "num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"],
      "egg": "2 km"},

      {"num": "002",
      "name": "Ivysaur",
      "type": [
        "Grass",
        "Poison"],
        "egg": "Not in Eggs"
      } 
    
    ])
  });


  it('debería retornar "Bulbasaur y Ivysaur para cuando filtro por tipo Poison"', () => {
    assert.deepEqual(window.filterData(data,'Poison','type'), [
    {
    "num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"],
      "egg": "2 km"},
      
      {"num": "002",
      "name": "Ivysaur",
      "type": [
        "Grass",
        "Poison"],
        "egg": "Not in Eggs"
      } 
    ])

      
  });


  it('debería retornar "Onix para cuando filtro por tipo Rock"', () => {
    assert.deepEqual(window.filterData(data,'Rock','type'), [
    {
    "num": "095",
    "name": "Onix",
    "type": [
      "Rock",
      "Ground"],
      "egg": "10 km"}])
  });

  it('debería retornar "Onix para cuando filtro por tipo Ground"', () => {
    assert.deepEqual(window.filterData(data,'Ground','type'), [{
    "num": "095",
    "name": "Onix",
    "type": [
    "Rock",
    "Ground"],
    "egg": "10 km"}])
  });

   it('debería retornar "Bulbasaur para cuando filtro huevos 2 km"', () => {
    assert.deepEqual(window.filterData(data,'2 km','egg'), [{
    "num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"],
      "egg": "2 km"}])
  });
  
  it('debería retornar "Vulpix para cuando filtro huevos 5 km"', () => {
    assert.deepEqual(window.filterData(data,'5 km','egg'), [{
      "num": "037",
      "name": "Vulpix",
      "type": [
        "Fire"],
        "egg": "5 km"}])
  });

  it('debería retornar "Vulpix para cuando filtro huevos 10 km"', () => {
    assert.deepEqual(window.filterData(data,'10 km','egg'), [{
      "num": "095",
    "name": "Onix",
    "type": [
    "Rock",
    "Ground"],
    "egg": "10 km"}])
  });
  it('debería retornar "Ivysaur para cuando filtro por Not in Eggs"', () => {
    assert.deepEqual(window.filterData(data,'Not in Eggs','egg'), [{
    "num": "002",
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"],
      "egg": "Not in Eggs"}])
  });





});

describe('sortData', () => {

  
  it('debería ser una función', () => {
    assert.equal(typeof sortData, 'function');
  });


  it('debería retornar la data ordenada a-z por nombre', () => {
    assert.deepEqual(window.sortData(data,"name","A-Z"), [
       {"num": "001",
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"],
        "egg": "2 km"
      },  
      
      {"num": "002",
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"],
      "egg": "Not in Eggs"
    } ,
             
    {"num": "095",
    "name": "Onix",
    "type": [
      "Rock",
      "Ground"],
      "egg": "10 km"
    },
    {"num": "037",
    "name": "Vulpix",
    "type": [
      "Fire"],
      "egg": "5 km"
    }

  ]
  )
  });

  it('debería retornar la data ordenada z-a por nombre', () => {
    assert.deepEqual(window.sortData(data,"name","Z-A"), [
      
    {"num": "037",
    "name": "Vulpix",
    "type": [
      "Fire"],
      "egg": "5 km"
    },
    {"num": "095",
    "name": "Onix",
    "type": [
      "Rock",
      "Ground"],
      "egg": "10 km"
    },
    {"num": "002",
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"],
      "egg": "Not in Eggs"
    },
      
      {"num": "001",
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"],
        "egg": "2 km"
      }
               
    
  ]
  )
  });

  it('debería retornar la data ordenada 1-151 por numero', () => {
    assert.deepEqual(window.sortData(data,"num","Ascendente"), [
      {"num": "001",
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"],
        "egg": "2 km"
      },  
    {"num": "002",
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"],
      "egg": "Not in Eggs"
    } ,
    {"num": "037",
    "name": "Vulpix",
    "type": [
      "Fire"],
      "egg": "5 km"
    },
    {"num": "095",
    "name": "Onix",
    "type": [
      "Rock",
      "Ground"],
      "egg": "10 km"
    }

      
    ]
  )
  });


  it('debería retornar la data ordenada 151-1 por numero', () => {
    assert.deepEqual(window.sortData(data,"num","Descendente"), [
      {"num": "095",
    "name": "Onix",
    "type": [
      "Rock",
      "Ground"],
      "egg": "10 km"
    }, 
    {"num": "037",
    "name": "Vulpix",
    "type": [
      "Fire"],
      "egg": "5 km"
    },
    {"num": "002",
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"],
      "egg": "Not in Eggs"
    },
    {"num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"],
      "egg": "2 km"
    }
       
      
    ]
  )
  });


});