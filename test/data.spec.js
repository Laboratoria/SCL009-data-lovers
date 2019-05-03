global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('../src/data/lol/lol');





describe('filteringResult',() =>{
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

  it('deberia ser una funcion',() =>{
assert.equal(typeof filteringResult, 'function')
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
     }]);
  });
  it('deberia retornar 3 al filtrar por fighter',() => { 
    assert.equal(window.filteringResult("Fighter",dataTest.data).length,3);
  });

})
