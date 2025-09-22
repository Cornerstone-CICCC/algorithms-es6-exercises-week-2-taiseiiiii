/*
There's a new attraction at this year's Codeville festival. The organizers have decided to bring in several inflatable attractions, but they have no clue how to much blow them up. Each attraction needs to be pumped to a precise volume to achieve maximum festival fun!

The attractions are each made up of a combination of several different shapes: cones, spheres and prisms. For example, the giant inflatable duck is made up of two spheres (the body and head) and a cone (the beak) 🦆.

Each shape has a different calculation for determining volume, so we'll need to create a few functions that will help us figure out the volume of the various inflatable attractions.

In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

sphereVolume()will calculate the volume of a sphere given a radius
coneVolume() will calculate the volume of a cone given a radius and a height
prismVolume() will calculate the volume of a prism given a height, a width, and a depth
Note
Don't worry about getting the answers to the perfect precision, just check to see that you're close.

Note
We can find the formulas for calculating the volume of a sphere, cone, and prism online.

The fourth function, totalVolume(), will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.

Instruction
Implement the functions one by one. The example inputs and outputs below will help you check that each function is correct.
*/

// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  // Code here!
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189); //true

const coneVolume = function (radius, height) {
  // And here!
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49); //true

const prismVolume = function (height, width, depth) {
  // Probably here too!
};

console.log(prismVolume(3, 4, 5) === 60); //true

const totalVolume = function (solids) {
  // Code here? Yup!
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000); //true

module.exports = {
  totalVolume,
  sphereVolume,
  coneVolume,
  prismVolume,
};
