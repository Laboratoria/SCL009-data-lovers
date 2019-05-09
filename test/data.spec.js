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

      const dataTestCalculate = {
        data:{
        Kled:{
        stats: {
          hp: 511.68,
          movespeed: 335,
          armor: 19.22,
          spellblock: 30,
          attackrange: 575,
          attackdamage: 50.41,}},
          Nunu:{
            stats: {
              hp: 598.28,
              movespeed: 350,
              armor: 26.38,
              spellblock: 32.1,
              attackrange: 125,
              attackdamage: 59,}},
          Ahri:{
                stats: {
                  hp: 514.4,
                  movespeed: 330,
                  armor: 20.88,
                  spellblock: 30,
                  attackrange: 550,
                  attackdamage: 53.04,}},
          Caitlyn:{
                  stats: {
                  hp: 524.4,
                  movespeed: 325,
                  armor: 22.88,
                  spellblock: 30,
                  attackrange: 650,
                  attackdamage: 53.66,}},
          Bard:{
            stats: {
            hp: 535,
            movespeed: 330,
            armor: 25,
            spellblock: 30,
            attackrange: 500,
            attackdamage: 52,}}

      }}




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

  it('deberia retornar en orden: Varus, Morgana, Amumu al ordenar por nombre de Z a A',() => { 
    assert.deepEqual(window.orderData("nameZ_A",dataTestOrder.data),
    [{name:"Varus", info: {difficulty:2}},
    {name:"Morgana", info: {difficulty:1}},
     {name:"Amumu", info: {difficulty:3}}]
);
});
})

describe('calculateAllAttacks',() =>{
  
  it('deberia ser una funcion',() =>{
assert.equal(typeof calculateAllAttacks, 'function')
  })

  it('deberia retornar para Kled,Nunu,Ahri,Caitlyn y Bard',() => { 
    assert.equal(window.calculateAllAttacks("Kled","Nunu","Ahri","Caitlyn","Bard",dataTestCalculate.data),268)
});
})
