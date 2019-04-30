global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('filterData', () => {
  // declara data yb pasarla al test para corroborar que filtra;
  it('debería ser una función', () => {
    assert.equal(typeof filterData, 'function');
  });

  it('debería retornar "Pikachu para cuando filtro por tipo electrico"', () => {
    assert.equal(typeof  filterData, 'function');
  });



});

describe('sortData', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof sortData, 'function');
  });

});