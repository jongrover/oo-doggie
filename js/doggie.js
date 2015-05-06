"use strict";

function Dog(firstName, age) {
  //put properties and methods that are unique for each dog.
  this.firstName = firstName;
  this.age = age;
  // push dog instance into array of all dogs.
  this.constructor.all.push(this);
}
Dog.all = [];

// put properties that are same for each dog goes in prototype
Dog.prototype.bark = function () {
  return this.firstName+" bark bark!";
};

// create dogs
var dog1 = new Dog("Fido",3);
var dog2 = new Dog("Tobie",2);
