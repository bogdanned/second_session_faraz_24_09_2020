// screate a dynamic string: "I am {number} years old!""

let age = 43;
let bornIn = 1990;
let computeAge = new Date().getFullYear() - bornIn; // calculate age

console.log(`I am ${age} years old`);
console.log(`I am ${computeAge} years old`);

// Arrays and Objects

let fruits = ["orange", "apple"];

console.log(fruits.length);

console.log(fruits[1]);

fruits.push("banana"); // ads to the end

console.log(fruits);

fruits.pop(); // removes from the end

fruits[1] = "strawberry";

//you can either add or delete (but not in the middle)

// el1, el2, el3 -- push -- ads el3, length + 1

fruits.unshift("banana"); // expnsive
fruits.shift(); // expnsive

// el1, el2, el3 -- unshift; el3 -> el4, el2 -> el3, el1 -> el2, newEl -> el1

let veg = ["carrot", "onion"];

console.log(fruits.concat(veg, "potato")); // old ways
console.log([...fruits, ...veg, "potato"]);

// array function
console.log(
  fruits.findIndex(function find(fruit) {
    return fruit === "orange";
  })
);

const numbers = [3, 5, 9, 1, 3, 4];

// compare function
console.log(
  numbers.sort(function compare(a, b) {
    if (a < b) {
      return 1;
    }

    if (a > b) {
      return -1;
    }
    return 0;
  })
);

//
let cars = ["bmw", "mercedes"];
// for iterator
for (let i = 0; i < cars.length; i++) {
  console.log("electric_" + cars[i]);
}

// map -> returns a new array
const redCars = cars.map(function paint(car) {
  return "red_" + car;
});

console.log(redCars);

const newCars = ["tesla", "volvo", "bmw"];

const isElectric = newCars.map(function checkelec(newCar) {
  return newCar === "tesla";
}).map().reduce().sort().forEach();

console.log(isElectric);

// reduce function
const listNumbers = [1, 3, 6, 9, 6, 2, 8, 9];

console.log(
  listNumbers.reduce(function sum(acc, num) {
    return acc + num;
  }, "0"), "number sum"
);

console.log(
  listNumbers.reduce(function sum(acc, num) {
    return acc - num;
  }, 100)
);

const letters = ["F", "a", "r", "a", "z"];

function nameConcatenator(acc, letter) {
  return acc + "__" + letter;
}


function nameConcatenatorTwo(acc, letter) {
  return acc + letter;
}



console.log(
  letters.reduce(nameConcatenator, "_"),
);

// function(accumulator, arrayElement, indexArray, array)