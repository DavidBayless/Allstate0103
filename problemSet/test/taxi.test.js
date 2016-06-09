var expect = require('chai').expect;
var Taxi = require('../taxi');

describe('Taxi', function() {
  describe('#goToLocation', function() {
    describe('should take a string as an argument as an end location', function() {
      it('is equal to 123 Sesame Street', function() {
        var taxi = new Taxi();
        taxi.goToLocation('123 Sesame Street');
        expect(taxi.endLocation).to.equal('123 Sesame Street');
      });
      it('is equal to Drury Lane', function() {
        var taxi = new Taxi();
        taxi.goToLocation('555 Drury Lane');
        expect(taxi.endLocation).to.equal('555 Drury Lane');
      });
    });
    describe('should not accept non-string arguments', function() {
      it('will return "Current Location"', function() {
        var taxi = new Taxi();
        taxi.goToLocation(323);
        expect(taxi.endLocation).to.equal('Current Location');
      });
    });
    describe('begins with number and ends with a street name', function() {
      it('begins with a number and does not have a street name', function() {
        var taxi = new Taxi();
        taxi.goToLocation('123');
        expect(taxi.endLocation).to.equal('Current Location');
      });
      it('does not begin with a street number', function() {
        var taxi = new Taxi();
        taxi.goToLocation('Sesame Street');
        expect(taxi.endLocation).to.equal('Current Location');
      });
    });
  });
  describe('#addPassengers', function() {
    describe('increase taxi passengers by ...', function() {
      it('5', function() {
        var taxi = new Taxi();
        taxi.addPassengers(5, '123 Sesame Street');
        expect(taxi.numPassengers).to.equal(5);
      });
      it('2', function() {
        var taxi = new Taxi();
        taxi.addPassengers(2, '123 Sesame Street');
        expect(taxi.numPassengers).to.equal(2);
      });
    });
    describe('when adding passengers set endLocation for duration of ride', function() {
      it('should set endLocation to 123 Sesame Street', function() {
        var taxi = new Taxi();
        taxi.addPassengers(3, '123 Sesame Street');
        expect(taxi.endLocation).to.equal('123 Sesame Street');
      });
      it('should not add passengers with invalid address information', function() {
        var taxi = new Taxi();
        taxi.addPassengers(3, 3);
        expect(taxi.endLocation).to.equal('Current Location');
        expect(taxi.numPassengers).to.equal(0);
      })
    });
  });
  describe('#arrive', function(){
    describe('should change endLocation and change state to startLocation', function(){
      it('will change state of startLocation', function() {
        var taxi = new Taxi();
        taxi.goToLocation('123 Sesame Street');
        taxi.arrive();
        var test = {
          endLocation: taxi.endLocation,
          startLocation: taxi.startLocation
        };
        expect(test).to.deep.equal({endLocation: 'Current Location', startLocation: '123 Sesame Street'});
      });
      it('will change state of startLocation over multiple calls', function(){
        var taxi = new Taxi();
        taxi.goToLocation('123 Sesame Street');
        taxi.arrive();
        taxi.goToLocation('555 Drury Lane');
        taxi.arrive();
        var test = {
          endLocation: taxi.endLocation,
          startLocation: taxi.startLocation
        };
        expect(test).to.deep.equal({endLocation: 'Current Location', startLocation: '555 Drury Lane'});
      })
    });
    describe('should remove passengers from the cab', function() {
      it('should set numPassengers to 0', function() {
        var taxi = new Taxi();
        taxi.addPassengers(3, '123 Sesame Street');
        taxi.arrive();
        expect(taxi.numPassengers).to.equal(0);
      });
    });
  });
});
