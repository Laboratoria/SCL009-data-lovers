global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('../src/data/lol/lol');
const dataTestOrder = {
  type: "champion",
  format: "standAloneComplex",
  version: "6.24.1",
  data: {
  Morgana: {
   info: {
   difficulty: 1}
  },
    Varus: {
      info: {
      difficulty: 2}
    },
       Amumu: {
        info: {
        difficulty: 3},
        }}};

        const dataTest = {
  type: "champion",
  format: "standAloneComplex",
  version: "6.24.1",
  data: {
    Aatrox: {
      id: "Aatrox",
     name: "Aatrox",
     tags: ["Fighter", "Tank"],
     },
     Camille: {
     id: "Camille",
     name: "Camille",
     tags: ["Fighter", "Tank"],
     },
     Gangplank: {
      id: "Gangplank",
      name: "Gangplank",
      tags: ["Fighter"],
      },}}




describe('filteringResult',() =>{
  
  it('deberia ser una funcion',() =>{
assert.equal(typeof filteringResult, 'function')
  });
  
  it('deberia retornar 3 al filtrar por fighter',() => { 
    assert.equal(window.filteringResult("Tank",dataTest.data).length,2);
  });

});

describe('orderData',() =>{
  
  it('deberia ser una funcion',() =>{
assert.equal(typeof orderData, 'function')
  });
  
  it('deberia retornar 3,2,1 al ordenar por difficultyHardestFirst ',() => { 
    assert.equal(window.orderData("difficultyHardestFirst",dataTestOrder.data),
    [
{"info": {
         "difficulty": 3 }},
         {"info": {
          "difficulty": 2 }},
          {"info": {
            "difficulty": 1 }} ]
    
    
    
    
    
    );
  });

})
