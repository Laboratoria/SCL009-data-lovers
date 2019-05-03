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
describe('sortData', () => {

  const dataSort = [
    { name: "Aatrox"},
    { name: "Alistar"},
    { name: "Amumu"}
  ]

  it('debería ser una función', () => {
    assert.equal(typeof window.sortData, 'function');
  });

  it('debería retornar los objetos ordenados de forma ascendente', () => {
    assert.deepEqual(window.sortData(dataSort, 'ascendente'),  [
      { name: "Amumu"},
      { name: "Alistar"},
      { name: "Aatrox"}
    ] );
  });
  it('debería retornar los objetos ordenados de forma descendente', () => {
    assert.deepEqual(window.sortData(dataSort, 'descendente'),  [
      { name: "Amumu"},
      { name: "Alistar"},
      { name: "Aatrox"}
    ] );
  });
})

describe('sortDifficulty', () => {

  const dataDifficulty = [
    { name: "Aatrox", info: {difficulty: 4} },
    { name: "Alistar", info: {difficulty: 7} },
    { name: "Amumu", info: {difficulty: 3} }
  ]

  it('debería ser una función', () => {
    assert.equal(typeof window.sortDifficulty, 'function');
  });

  it('debería retornar los objetos ordenados de menor a mayor dificultad', () => {
    assert.deepEqual(window.sortDifficulty(dataDifficulty, 'lowDifficult'),  [
    
      { name: "Alistar", info: {difficulty: 7} },
      { name: "Aatrox", info: {difficulty: 4} },
      { name: "Amumu", info: {difficulty: 3} }
      
    ] );
  });
  it('debería retornar los objetos ordenados de mayor a menor dificultad', () => {
    assert.deepEqual(window.sortDifficulty(dataDifficulty, 'highDifficult'),  [
      { name: "Alistar", info: {difficulty: 7} },
      { name: "Aatrox", info: {difficulty: 4} },
      { name: "Amumu", info: {difficulty: 3} }
     
    ] );
  });
})
