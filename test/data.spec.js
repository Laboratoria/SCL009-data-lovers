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
    name:"Morgana",
    info: { difficulty: 1}
  },
  Varus: {
      name:"Varus",
      info: {difficulty: 2}
    },
    Amumu: {
        name:"Amumu",
        info: {difficulty: 3},
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
  it('deberia retornar values de Aatrox y Camille al filtrar por tank',() => { 
    assert.deepEqual(window.filteringResult("Tank",dataTest.data),[{
      id: "Aatrox",
     name: "Aatrox",
     tags: ["Fighter", "Tank"],
     },
    {
     id: "Camille",
     name: "Camille",
     tags: ["Fighter", "Tank"],
     }]);})

});

describe('orderData',() =>{
  
  it('deberia ser una funcion',() =>{
assert.equal(typeof orderData, 'function')
  });
  
  it('deberia retornar 3,2,1 al ordenar por difficultyHardestFirst ',() => { 
    assert.deepEqual(window.orderData("difficultyHardestFirst",dataTestOrder.data),
    [{name:"Amumu", info: {difficulty:3}},
         {name:"Varus", info: {difficulty:2}},
          {name:"Morgana", info: {difficulty:1}}]
  );
  });

  it('deberia retornar en orden values: Varus, Morgana, Amumu al ordenar por nombre de Z a A',() => { 
    assert.deepEqual(window.orderData("nameZ_A",dataTestOrder.data),
    [{name:"Varus", info: {difficulty:2}},
    {name:"Morgana", info: {difficulty:1}},
     {name:"Amumu", info: {difficulty:3}}]
);
});
})
