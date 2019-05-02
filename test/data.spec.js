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
       },}}

  it('deberia ser una funcion',() =>{
assert.equal(typeof filteringResult, 'function')
  });
  it('deberia retornar Aatrox y Camille al filtrar por tank',() => { 
    assert.deepEqual(window.filteringResult("Tank",dataTest.data),["Aatrox", "Camille"]);
  });

})
