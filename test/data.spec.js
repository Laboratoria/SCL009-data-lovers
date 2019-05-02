global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

  const data = [
    {"num": "010",
    "name": "Caterpie",
    "type": [
      "Bug"]
    },
    
    {"num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"]
    },    
    
      {"num": "004",
    "name": "Charmander",
    "type": [
      "Fire"]
    } 
]


describe('filterData', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof filterData, 'function');
  });

  it('debería retornar "Charmander para cuando filtro por tipo Fire"', () => {
    assert.deepEqual(window.filterData(data,'Fire'), [{
      "num": "004","name": "Charmander", "type": ["Fire"]}])
  });

  it('debería retornar "Bulbasaur para cuando filtro por tipo Grass"', () => {
    assert.deepEqual(window.filterData(data,'Grass'), [{
      "num": "001","name": "Bulbasaur", "type": ["Grass", "Poison"]}])
  });


  it('debería retornar "Bulbasaur para cuando filtro por tipo Poison"', () => {
    assert.deepEqual(window.filterData(data,'Poison'), [{
      "num": "001","name": "Bulbasaur", "type": ["Grass", "Poison"]}])
  });


  it('debería retornar "Caterpie para cuando filtro por tipo Bug"', () => {
    assert.deepEqual(window.filterData(data,'Bug'), [{
      "num": "010","name": "Caterpie", "type": ["Bug"]}])
  });


});

describe('sortData', () => {

  
  it('debería ser una función', () => {
    assert.equal(typeof sortData, 'function');
  });


  it('debería retornar la data ordenada a-z por nombre', () => {
    assert.deepEqual(window.sortData(data,"name","ascaz"), [
       {"num": "001",
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"]
      },  
      
      {"num": "010",
      "name": "Caterpie",
      "type": [
        "Bug"]
      },
             
        {"num": "004",
      "name": "Charmander",
      "type": [
        "Fire"]
      } 
  ]
  )
  });

  it('debería retornar la data ordenada z-a por nombre', () => {
    assert.deepEqual(window.sortData(data,"name","descza"), [
      {"num": "004",
      "name": "Charmander",
      "type": [
        "Fire"]
      },
        {"num": "010",
      "name": "Caterpie",
      "type": [
        "Bug"]
      },
      
      {"num": "001",
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"]
      }
               
    
  ]
  )
  });

  it('debería retornar la data ordenada 1-151 por numero', () => {
    assert.deepEqual(window.sortData(data,"num","ascnum"), [
        {"num": "001",
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"]
      },
      {"num": "004",
      "name": "Charmander",
      "type": [
        "Fire"]
      },
        {"num": "010",
      "name": "Caterpie",
      "type": [
        "Bug"]
      }
      
    ]
  )
  });


  it('debería retornar la data ordenada 151-1 por numero', () => {
    assert.deepEqual(window.sortData(data,"num","descnum"), [
        {"num": "010",
      "name": "Caterpie",
      "type": [
        "Bug"]
      }, 
      {"num": "004",
      "name": "Charmander",
      "type": [
        "Fire"]
      },{"num": "001",
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"]
      }
       
      
    ]
  )
  });


});