// function Employee(superior, employees) {
//   this.employees = [];
//   if (!superior) {
//     this.title = 'CEO';
//     this.superior = '';
//   } else if (superior && employees) {
//     this.title = 'Manager';
//     this.superior = superior;
//     this.employees = employees
//     var self = this;
//     employees.forEach(function(employee) {
//       employee.superior = self;
//     });
//   } else {
//     this.title = 'Employee';
//     this.superior = superior;
//     this.employees = [];
//     superior.employees.push(this)
//   }
//
// }

function Employee(name) {
  this.name = name;
  this.reportsTo = {};
}

function Manager() {
  Employee.apply(this, arguments);
  this.employees = [];
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Employee;

function CEO() {
  Manger.apply(this, arguments);
  this.reportsTo;
}

CEO.prototype = Object.create(Manager.prototype);
CEO.prototype.constructor = Manager;

exports.employee = Employee;
exports.manager = Manager;
exports.ceo = CEO;
