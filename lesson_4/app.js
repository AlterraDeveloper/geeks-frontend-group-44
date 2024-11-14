// hoisting - всплытие
function printSpliter() {
  console.log("---------------------------------------");
}

let students = ["Alina", "Pavel", "Azat"];
// indexes         0        1        2

let studentsAsObject = {
  0: "Alina",
  1: "Pavel",
  2: "Azat",
  length: 3,
};

console.log("First student:", students[0]);
console.log("I have " + students.lenght + " students");

console.log(typeof students);
console.log(students);

let carInfo = {
  brand: "BMW",
  model: "X5",
  engineVolume: 5000,
  color: "black",
  allowShadows: true,
};

printSpliter();
console.log("My car is " + carInfo.brand + " " + carInfo["model"]);

// DRY - Don't repeat yourself
// functions - функции

function printSpliter() {
  console.log("-".repeat(25));
}

// numbers -> [1,2,3,4,5]
// default params - параметры по умолчанию
function getMean(numbers = []) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  let mean = sum / numbers.length;

  if (isNaN(mean)) return 0;

  return mean;
}

// getFromRange(1, 5) -> [1 2 3 4 5]
function getFromRange(start, end) {
  let result = [];
  if (end > start) {
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i--) {
      result.push(i);
    }
  }

  return result;
}

// 123 -> 321
function reverseString(text) {
  let newText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    newText += text[i];
  }
  return newText;
}

function reverseV2(text){
    return text.split("").reverse().join("");
}
