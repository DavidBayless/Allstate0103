function Taxi(){
  this.endLocation = 'Current Location';
  this.startLocation = '1 Taxi Lane';
  this.numPassengers = 0;
}

Taxi.prototype.goToLocation = function(endLocation){
  if (typeof endLocation === 'string'){
    var strArr = endLocation.split(' ');
    if (!isNaN(Number(strArr[0])) && strArr[1]) {
      this.endLocation = endLocation;
    }
  };
};

Taxi.prototype.arrive = function() {
  this.startLocation = this.endLocation;
  this.endLocation = 'Current Location';
  this.numPassengers = 0;
}

Taxi.prototype.addPassengers = function(numPassengers, endLocation){
  this.goToLocation(endLocation);
  if (this.endLocation !== 'Current Location') {
    this.numPassengers += numPassengers;
  }
}


module.exports = Taxi;
