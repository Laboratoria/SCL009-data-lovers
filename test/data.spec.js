global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('example', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})


describe('filteringResult',() =>{
  it('deberia ser una funcion',() =>{
assert.equal(typeof filteringResult, 'function')
  });
  it('deberia retornar Ashe,Azir,Caitlyn,Corki,Draven,Ezreal,Graves,Jayce,Jhin,Jinx,Kalista,Kennen,Kindred,KogMaw,Lucian',() => { 
    assert.equal(window.filteringResult('Marksman',data),"Ashe","Azir");
  });

})
