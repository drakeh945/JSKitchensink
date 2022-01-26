var myName = "Drake Herring";

const states = 50;

var nine = 5 + 4;
// this exercise is drilling us on basic JS priciples

function sayHello() {
  alert("Hello World!");
}
// should say hello world

function checkAge(name, age) {
  if (age < 21) {
    alert("Sorry " + name + ", you are't old enough to view this page!");
  }
}
checkAge("Charles", 22);
checkAge("Abby", 21);
checkAge("James", 18);
checkAge("John", 17);

var veggies = [
  "Broccolli",
  "Spinanch",
  "Sweet Potatoes",
  "Green Beans",
  "Zucchini",
];

for (var i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}

var pet = {
  name: "pumpkin",
  breed: "Domestic Short Hair",
};
console.log(pet.name);
console.log(pet.breed);

let people = [
  { name: "Nikki", age: 28 },

  { name: "Jarod", age: 19 },

  { name: "Drew", age: 31 },

  { name: "Margeret", age: 20 },

  { name: "Timmy", age: 37 },
];

for (let i = 0; i < people.lengthl; i++) {
  checkAge(people[i].name, people[i].age);
}

function getLength(word) {
  return word.length;
}

let one = getLength("hello world");

if (one % 2 == 0) {
  console.log("the world is nice and even");
} else {
  console.log("the world is odd place!");
}
