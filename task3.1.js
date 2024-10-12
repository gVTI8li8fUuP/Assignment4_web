1
console.log(
    "Hello, my name is " + prompt("Enter your first name:") + " " +
    prompt("Enter your last name:") + " and I am " +
    prompt("Enter your age:") + " years old."
);

// // 2
//
// var age = prompt("Enter your age:");
//
// var hasLicense = prompt("Do you have a driver's license? (yes/no)");
//
// if (age >= 18 && hasLicense.toLowerCase() === "yes") {
//     console.log("You are eligible to drive.");
// } else if (age < 18) {
//     console.log("You are not eligible to drive because you are underage.");
// } else if (hasLicense.toLowerCase() !== "yes") {
//     console.log("You are not eligible to drive because you don't have a driver's license.");
// }


//3
//
// var number = Number(prompt("Enter a number:"));
//
// var isEven = number % 2 === 0;
// var isOdd = number % 2 !== 0;
// var isMultipleOfFive = number % 5 === 0;
// var isGreaterThanTen = number > 10;
//
// console.log(`You entered: ${number}`);
// console.log(`Is the number even? ${isEven}`);
// console.log(`Is the number odd? ${isOdd}`);
// console.log(`Is the number a multiple of 5? ${isMultipleOfFive}`);
// console.log(`Is the number greater than 10? ${isGreaterThanTen}`);
//
// if (isMultipleOfFive || isGreaterThanTen) {
//     console.log("The number is special!");
// } else {
//     console.log("The number is not special.");
// }

//4

// function type_input(input) {
//     if (input.toLowerCase() === 'true' || input.toLowerCase() === 'false') {
//         return 'boolean';
//     }
//     var numberValue = Number(input);
//     if (!isNaN(numberValue)) {
//         return 'number';
//     }
//     return 'string';
// }
//
// var input1 = prompt("Enter a value (number, string, boolean):");
// var input2 = prompt("Enter another value (number, string, boolean):");
// var input3 = prompt("Enter one more value (number, string, boolean):");
//
// console.log("Input 1: " + type_input(input1));
//
// console.log("Input 2: " + type_input(input2));
//
// console.log("Input 3: " + type_input(input3));


//5
// var length = Number(prompt("Initial length: "));
// var width = Number(prompt("Initial width: "));
//
// var S = length * width;
//
// console.log("Area is: " + S);
//
// var update = prompt("Update (Enter 'length' or 'width')");
//
// if (update === "length") {
//     length = Number(prompt("new length:"));
// } else if (update === "width") {
//     width = Number(prompt("new width:"));
// }
//
// S = length * width;
//
// console.log("Updated area is: " + S);
//

//6
//
// var numberOfColors = Number(prompt("Enter the number of colors :"));
// var colors = [];
//
// for (var i = 0; i < numberOfColors; i++) {
//     colors[i] = prompt("Enter color " + (i + 1) + ":");
// }
//
// console.log("First Color: " + colors[0]);
// console.log("Last Color: " + colors[colors.length - 1]);
//

// //7
//
// var name = prompt("Your name:");
// var age = Number(prompt("Your age:"));
// var hobby = prompt("Your favorite hobby:");
//
// var user_Details = {
//     name: name,
//     age: age,
//     hobby: hobby
// };
//
// console.log(user_Details);
//


// //8
// var num1 = Number(prompt("Enter the first number:"));
// var num2 = Number(prompt("Enter the second number:"));
//
// var Greater_than = num1 > num2;
// var Less_than = num1 < num2;
// var Equal_to = num1 === num2;
//
// console.log("first number greater than the second number: " + Greater_than);
// console.log("first number less than the second number: " + Less_than);
// console.log("first number equal to the second number: " + Equal_to);

// 9
//
// var numberOfFruits = Number(prompt("Number of fruits: "));
// var fruits = [];
//
// for (var i = 0; i < numberOfFruits; i++) {
//     var fruit = prompt("Enter fruit " + (i + 1) + ":");
//     fruits.push(fruit);
// }
//
// fruits.pop();
//
// var newFruit = prompt("A new fruit:");
// fruits.unshift(newFruit);
//
// console.log("Updated Fruit List: ", fruits);
//

// // 10
//
// var num1 = Number(prompt("1-number:"));
// var num2 = Number(prompt("2-number:"));
// var operation = prompt("An operation (addition, subtraction, multiplication, division):").toLowerCase();
//
// var result;
//
// if (operation === "addition") {
//     result = num1 + num2;
// }
// else if (operation === "subtraction") {
//     result = num1 - num2;
// }
// else if (operation === "multiplication") {
//     result = num1 * num2;
// }
// else if (operation === "division") {
//     if (num2 === 0) {
//         console.log("Error: Division by zero is not allowed.");
//     } else {
//         result = num1 / num2;
//     }
// }
//
// else {
//     console.log("Error: Invalid operation.");
// }
//
// if (result !== undefined) {
//     console.log("Result: " + result);
// }
//
//
//
//
//
//