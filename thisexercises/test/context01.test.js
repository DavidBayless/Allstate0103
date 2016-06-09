var expect = require('chai').expect;
var setGlobalProp = require('../context01');

describe('#setGlobalProp', function(){
  it('sets a property of globalProp on a global object using this', function(){
    setGlobalProp();
    expect(global.globalProp).to.equal("Hello World");
  })
})
