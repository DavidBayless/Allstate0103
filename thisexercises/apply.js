function setMileage(miles) {
  this.mileage = miles;
  console.log(this);
}
//
// var car = {
//   make: 'Honda',
//   model: 'Accord'
// }
//
// var anotherCar = {
//   make: 'Toyota',
//   model: 'Camry',
//   mileage: 3232
// }
//
// console.log(car);
// setMileage.apply(car, [28984]);
// console.log(car);
// console.log(anotherCar);
// setMileage.apply(anotherCar, [787499]);
// console.log(anotherCar);

function Car(make, model) {
  this.make = make;
  this.model = model
}

var myCar = new Car('Toyota', 'Camry');

console.log(myCar);
setMileage.call(new Car('Honda', 'Accord'), 14890);
console.log(myCar);
