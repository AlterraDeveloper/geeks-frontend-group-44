// Callback functions - функции обратного вызова

document.querySelector("button")?.addEventListener("click", () => {});

function add(a, b) {
  return a + b;
}

console.log(add(5, 6));

function calculate(a, b, callbackFn) {
  return callbackFn(a, b);
}

console.log(calculate(5, 6, add));
console.log(
  calculate(5, 6, function (num1, num2) {
    return num1 * num2;
  })
);
console.log(calculate(30, 6, (n1, n2) => n1 / n2));

let numbers = [500, 1400, 1700, 800, 900, 350];

// for(let price of numbers){
//    callback(price)
// }

// map, filter, reduce

let blackFriday = numbers.map(function (price) {
  return price / 2;
});

console.log(numbers);
console.log(blackFriday);

let newYear = numbers.map((price) => price + 100);

console.log(newYear);

let operations = [1000, 5000, 7000, 12000];

// chaining
let visaOperations = operations
  .map((x) => x / 86.5)
  .map((x) => Math.round(x))
  .map((x) => x + "$");

console.log(operations);
console.log(visaOperations);

// filter

// let forClient = numbers.filter(function(price){
//     return price <= 1000;
// });
let forClient = numbers.filter((price) => price <= 1000);

console.log(forClient);

let names = ["Alina", "Daniyar", "Janna", "Svetlana", "Azat", "Marina"];
console.log(names.filter((name) => name.startsWith("A")));
console.log(names.filter((name) => name.endsWith("a")));
console.log(names.filter((name) => name.length > 5));

// reduce

let sum = operations.reduce(function (total, x) {
  return (total += x);
}, 0);

console.log(sum);

// [500, 1400, 1700, 800, 900, 350]
let mostExpensive = numbers.reduce(function (max, price) {
  return Math.max(max, price);
});
let cheapest = numbers.reduce((min, price) => Math.min(min, price));

console.log("Max = ", mostExpensive);
console.log("Min = ", cheapest);

let array = [14, 7, 2, 5, 13, 8, 6, 12];

console.log(

    array
    .filter(x => x < 10)
    .map(x => {
        switch(x) {
            case 1: return "I";
            case 2: return "II";
            case 3: return "III";
            case 4: return "IV";
            case 5: return "V";
            case 6: return "VI";
            case 7: return "VII";
            case 8: return "VIII";
            case 9: return "XI";
        }
    })
);

