module.exports = {
  accountHolder: 'Andreas',
  checkingBalance: 10,
  savingsBalance: 200,
  addToChecking: function (dollarAmount){
    if (typeof dollarAmount === 'number') {
      if (!isNaN(dollarAmount)) this.checkingBalance += dollarAmount;
    }
  }
};
