global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('filterData', () => {

  const data = [
    { name: "Aatrox", tags: ["Fighter", "Tank"]},
    { name: "Alistar", tags: ["Tank", "Support"]},
    { name: "Amumu", tags: ["Tank", "Mage"]}
  ]

  it('debería ser una función', () => {
    assert.equal(typeof window.filterData, 'function');
  });

  it('debería retornar los objetos filtrados por rol seleccionado', () => {
    assert.deepEqual(window.filterData(data, 'Fighter'),  [{ name: "Aatrox", tags: ["Fighter", "Tank"]}] );
  });

})

//usar deepEqual porq es para array y objetos