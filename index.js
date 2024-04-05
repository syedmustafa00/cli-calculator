#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "firstnumber" },
    { message: "enter second your number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division",]
    },
]);
//conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log((answer.firstnumber / answer.secondnumber).toFixed(4));
}
