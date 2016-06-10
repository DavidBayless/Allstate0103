var expect = require('chai').expect;
var Employee = require('../orgchart').employee;
var Manager = require('../orgchart').manager;

// describe('#Employee', function(){
//   it('checks employee title', function(){
//     var employee = new Employee();
//     expect(employee.title).to.equal('CEO');
//   });
//   it('checks to find employee superior in an array of employees', function(){
//     var superior = new Employee();
//     var inferior = new Employee(superior);
//     expect(inferior.title).to.equal('Employee');
//     expect(superior.title).to.equal('CEO');
//     expect(inferior.superior).to.deep.equal(superior);
//     expect(superior.employees[0]).to.deep.equal(inferior);
//     expect(superior.superior).to.equal('');
//   });
//   it('checks to find employee manager of array of employees', function(){
//     var ceo = new Employee();
//     var employee = new Employee(ceo);
//     var manager = new Employee(ceo, [employee]);
//
//     expect(manager.title).to.equal('Manager');
//     expect(manager.superior).to.deep.equal(ceo);
//     expect(manager.employees[0]).to.deep.equal(employee);
//     expect(employee.superior).to.deep.equal(manager);
//   });
//   it('checks to find an employee manager managing another manager', function(){
//     var ceo = new Employee();
//     var employee = new Employee(ceo);
//     var upperManagement = new Employee(ceo, [employee]);
//     var lowerManagement = new Employee(upperManagement, [employee]);
//     expect(manager.title).to.equal()
//   })
// });
describe('#Employee', function(){
  describe('#addEmployees', function() {
    it('checks that a manager can take employees', function(){
      var employee = new Employee('Suzy');
      var manager = new Manager('George');
      manager.addEmployees([employee]);
      expect(employee.reportsTo).to.deep.equal(manager);
      expect(manager.employees[0]).to.deep.equal(employee);
    });
  });
});
