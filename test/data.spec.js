global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('function filteringResult' ()=>{
	const datalol=[
	{
		name: 'Akali',
		tags: 'Assassin'
	}
	{
		name: 'Annie',
		tags: 'Mage'
	}
	];
	it('deberia retornar el objeto Akali al filtrar', ()=>{
		assert.deepEqual(window.filteringResult(datalol, 'Assassin'),[{name:'Akali', tags:'Assassin'}])
	})
})

describe('example', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})
