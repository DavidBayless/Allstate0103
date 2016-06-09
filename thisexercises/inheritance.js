
function Mammal(name, age) {
  this.name = name;
  this.age = age;
  this.offspring = [];
}

Mammal.prototype.procreate = function() {
  var createdOffspring = new Mammal("Baby " + this.name);
  this.offspring.push(createdOffspring);
}

Mammal.prototype.toString = function() {
  return this.offspring.map(function(baby) {
    return baby.name;
  }).join('\n');
}

function Dog(name, age, breed) {
  this.breed = breed;
  Mammal.apply(this, arguments);
}

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Mammal;

var myDog = new Dog('Charles Barky', 3, 'Lab');
myDog.procreate();
console.log(myDog.toString());
console.log(myDog);
