console.log("lesson 2");

// variables - переменные
// let, const, var

// Camel case - myFirstVariable
let purchaseAmount = 1500;
let discountInPercents = 40;

purchaseAmount = 1800;
let discountCoef = (100 - discountInPercents) / 100; // 0.6
let purchaseAmountWithDiscount = purchaseAmount * discountCoef;

// comparing operators - операторы сравнения
// > < >= <= == === != !==

let productQuantity = 5;
let productAvailable = productQuantity > 0;

// conditions - условия
if (!productAvailable) {
  console.error("Product out of stock");
} else if (productQuantity < 10) {
  console.warn("Few items available. Hurry up to purchase!!!");
}

// data types - типы данных

// 1. number - числовой
// 2. string - текстовый
// 3. boolean - логический (булевский)
// 4. undefined - неопределенный
// 5. null

let clientBirthDate; // undefined
let clientAge = null;

let marketName = "Globus";
let marketAddress = "TC Vefa";
let purchaseDate = "04.11.2024";
let purchaseTime = "19:54";

let bankMessage = "Purchase in " + marketName + " in branch: " + marketAddress; // concatenation - конкатенация
console.log("Bank message:", bankMessage);

let hasBonusCard = true;
let hasGiftCertificate = false;

let purchaseSum = prompt("Enter purchase sum");
let hasBonusCardAnswer = prompt("Do you have bonus card? 1 - Yes, 0 - No");
hasBonusCard = hasBonusCardAnswer === "1";

if (hasBonusCard) {
  // calculate bonuses
}

let paymentType = prompt(
  "How you want to pay? 1 - Bank card, 2 - QR code, 3 - cash"
);

if (paymentType === "1") {
  // Bank card
  console.log(bankMessage);
} else if (paymentType === "2") {
  // QR code
  document.body.style.backgroundImage =
    "url(data:image/png;base64,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)";
} else if (paymentType === "3") {
  // Cash
  console.warn("Go to cashier!!!");
} else {
  console.error("Invalid payment type");
}

switch (paymentType) {
  case "1": // Bank card
    console.log(bankMessage);
    break;
  case "2": // QR code
    document.body.style.backgroundImage =
      "url(data:image/png;base64,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)";
    break;
  case "3": // Cash
    console.warn("Go to cashier!!!");
    break;
  default:
    console.error("Invalid payment type");
}
