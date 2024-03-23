#! /usr/bin/env node

//SHABANG { # is SHA and ! is BANG }


// Imports the data from the inquirer package
import inquirer from "inquirer";

// write const for one time using variable
// variable type is answer for user
// = assigned value
// await is waiting for user response get all data from user
// in inquirer the prompt is asking user to enter user data
const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "num1" },
  { message: "Enter your second number", type: "number", name: "num2" },
  {
    message: "Please select the operator to perform the action",
    type: "list",
    name: "operator",
    choices: [
      "addition",
      "multiplication",
      "subtraction",
      "division",
      "modulus",
    ],
  },
]);

// Conditions Statements
// if and else if condition 
// agar answer operator ka value add ho toh console.log answer num1 + answer num2 krdo
if (answer.operator === "addition") {
  console.log(answer.num1 + answer.num2);
} else if (answer.operator === "multiplication") {
  console.log(answer.num1 * answer.num2);
} else if (answer.operator === "subtraction") {
  console.log(answer.num1 - answer.num2);
} else if (answer.operator === "division") {
  console.log(answer.num1 / answer.num2);
} else if (answer.operator === "modulus") {
  console.log(answer.num1 % answer.num2);
} else {
  console.log("Invalid Operator");
}
