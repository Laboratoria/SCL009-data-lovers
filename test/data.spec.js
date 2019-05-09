global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('filterData', () => {

  const data = [
    { name: "Aatrox", tags: ["Fighter", "Tank"] },
    { name: "Alistar", tags: ["Tank", "Support"] },
    { name: "Amumu", tags: ["Tank", "Mage"] }
  ]

  it('debería ser una función', () => {
    assert.equal(typeof window.filterData, 'function');
  });

  it('debería retornar los objetos filtrados por rol seleccionado', () => {
    assert.deepEqual(window.filterData(data, 'Fighter'), [{ name: "Aatrox", tags: ["Fighter", "Tank"] }]);
  });

})
describe('sortData', () => {

  const dataSort = [
    { name: "Aatrox" },
    { name: "Alistar" },
    { name: "Amumu" }
  ]

  it('debería ser una función', () => {
    assert.equal(typeof window.sortData, 'function');
  });

  it('debería retornar los objetos ordenados de forma ascendente', () => {
    assert.deepEqual(window.sortData(dataSort, 'name', 'a-z'), [
      { name: "Aatrox" },
      { name: "Alistar" },
      { name: "Amumu" }
    ]);
  });
  it('debería retornar los objetos ordenados de forma descendente', () => {
    assert.deepEqual(window.sortData(dataSort, 'name', 'z-a'), [
      { name: "Amumu" },
      { name: "Alistar" },
      { name: "Aatrox" }
    ]);
  });
})

describe('sortDifficulty', () => {

  const dataDifficulty = [
    { name: "Aatrox", info: { difficulty: 4 } },
    { name: "Alistar", info: { difficulty: 7 } },
    { name: "Amumu", info: { difficulty: 3 } }
  ]

  it('debería ser una función', () => {
    assert.equal(typeof window.sortDifficulty, 'function');
  });

  it('debería retornar los objetos ordenados de menor a mayor dificultad', () => {
    assert.deepEqual(window.sortDifficulty(dataDifficulty, 'info.difficulty', 'lowDifficult'), [
      { name: "Amumu", info: { difficulty: 3 } },
      { name: "Aatrox", info: { difficulty: 4 } },
      { name: "Alistar", info: { difficulty: 7 } }
    ]);
  });
  it('debería retornar los objetos ordenados de mayor a menor dificultad', () => {
    assert.deepEqual(window.sortDifficulty(dataDifficulty, 'info.difficulty', 'highDifficult'), [
      { name: "Alistar", info: { difficulty: 7 } },
      { name: "Aatrox", info: { difficulty: 4 } },
      { name: "Amumu", info: { difficulty: 3 } }

    ]);
  });
})

describe('computeStats', () => {

  const dataStats = [
    { name: "Aatrox", stats: { hp: 537.8} },
    { name: "Alistar", stats: { hp: 613.36} },
    { name: "Amumu", stats: { hp: 613.12} }
  ]

  it('debería ser una función', () => {
    assert.equal(typeof window.computeStats, 'function');
  });

  it('debería retornar el máx, mín y promedio del array', () => {
    assert.deepEqual(window.computeStats(dataStats), [613.36, 537.8, 575.5]);
  });
})

describe('statsRol', () => {

  const dataStatsRol = [
    { name: "Aatrox", tags: ["Fighter", "Tank"] },
    { name: "Alistar", tags: ["Tank", "Support"] },
    { name: "Amumu", tags: ["Tank", "Mage"] },
    { name: "Anivia", tags: ["Mage", "Support"] },
    { name: "Annie", tags: ["Mage"] }
  ]

  it('debería ser una función', () => {
    assert.equal(typeof window.statsRol, 'function');
  });

  it('debería retornar el porcentaje de los campeones', () => {
    assert.deepEqual(window.statsRol(dataStatsRol), 7);
  });

})