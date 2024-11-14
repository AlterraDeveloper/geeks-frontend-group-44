// let amount = prompt("benzin");
// let fuelType = prompt("type");

// switch (fuelType) {
//   case "92":
//     console.log(amount / 45);
//     break;
//   case "92":
//     console.log(amount / 45);
//     break;
//   case "92":
//     console.log(amount / 45);
//     break;
// }

// let fuelLiters = prompt("litres");
// let cardType = prompt("card type, 1 - silver, 2 - gold, 3 - platinum");

// switch(cardType){
//     case "1":
//         fuelLiters * 0.5;
//     case "2":

//     case "3"
// }

let bonuses = 0;

// if (cardType == 1) {
//   bonuses = fuelLiters * 0.5;
// } else if (cardType == 2) {
//   bonuses = fuelLiters * 0.75;
// } else if (cardType == 3) {
//   bonuses = fuelLiters * 1;
// }

// console.log("cardType -> ", typeof cardType);

// switch (
//   Number(cardType) // ===
// ) {
//   case 1:
//     bonuses = fuelLiters * 0.5;
//     break;
//   case 2:
//     bonuses = fuelLiters * 0.75;
//     break;
//   case 3:
//     bonuses = fuelLiters;
//     break;
//   default:
//     console.error("invalid card type");
// }

// console.log("My bonuses:", bonuses);

// let carBrand = "KIA";
// switch (carBrand) {
//   case "KIA":
//   case "HYINDAI":
//     console.log("Korea");
//     break;
//   case "BMW":
//   case "MERS":
//   case "VW":
//   case "AUDI":
//     console.log("Germany");
//     break;
//   case "BYD":
//     console.log("China");
//     break;
// }

// DRY - Don't Repeat Yourself

// data types - типы данных

// 1. number - числовой
// 2. string - текстовый
// 3. boolean - логический (булевский)
// 4. undefined - неопределенный
// 5. null
// 6. object - объект
// 7. bigint
// 8. Symbol

// key - value
let geeksStudent = {
  name: "Evgeniy",
  surname: "Kiselev",
  telegram: "@testQWE",
  age: 18,
  phone: "+996500112233",
  course: null,
};

let phoneBook = {
  Mom: "55555555",
  Papa: "7777777",
  Sister: "3333333",
  Boss: "9999999",
};

console.log("Call Mom...", phoneBook.Mom);
console.log("Call Papa...", phoneBook["Papa"]);

// Array
let points = [10, 9, 8, 7, 8, 10, 0, 0];
//             0  1  2  3  4   5  6  7 indexes - индексы
console.log(points.length);
console.log("1st HW ", points[0]);

let total = 0;
// total += points[0];
// total += points[1];
// total += points[2];
// total += points[3];

// Loops - циклы

// for..of
for (let point of points) {
  total += point;
}
console.log("Total:", total);

let operations = [25000, -4000, -500, -3000, 7000, -700, -1000];

let incomes = 0;
let expenses = 0;

for (let oper of operations) {
  if (oper > 0) {
    incomes += oper;
  } else {
    expenses += Math.abs(oper);
  }
}

console.log("Доходов:", incomes, "Расходов:", expenses);
