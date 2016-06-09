var expect = require('chai').expect;
var myBankAccount = require('../context02');

describe('#myBankAccount', function(){
  it('returns the checkingBalance of the bank account', function(){
    expect(myBankAccount.checkingBalance).to.equal(10);
  });
  it('returns an adjusted checkingBalance when a number is added to checkingBalance', function(){
    myBankAccount.addToChecking(5);

    expect(myBankAccount.checkingBalance).to.equal(15);
  });
  it('returns an adjusted checkingBalance when a number is subtracted to checkingBalance', function(){
    myBankAccount.addToChecking(-5);
    expect(myBankAccount.checkingBalance).to.equal(10);
  });
  it('checkingBalance will be unaffected if passed an invalid argument to addToChecking', function(){
    myBankAccount.addToChecking('10');
    expect(myBankAccount.checkingBalance).to.equal(10);
    myBankAccount.addToChecking(true);
    expect(myBankAccount.checkingBalance).to.equal(10);
    myBankAccount.addToChecking();
    expect(myBankAccount.checkingBalance).to.equal(10);
    myBankAccount.addToChecking(null);
    expect(myBankAccount.checkingBalance).to.equal(10);
    myBankAccount.addToChecking(NaN);
    expect(myBankAccount.checkingBalance).to.equal(10);
    myBankAccount.addToChecking({});
    expect(myBankAccount.checkingBalance).to.equal(10);
    myBankAccount.addToChecking([]);
    expect(myBankAccount.checkingBalance).to.equal(10);
  });
});
