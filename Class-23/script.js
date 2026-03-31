// There have five problems.

// 01. Write a program to check if a number is even or odd
let number = 21;
if (number % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}





// 02. Check if a person is eligible to vote (age >= 18)
let age = 17;
if (age >= 18) {
    console.log("They can vote.");
}
else {
    console.log("They can't vote.");
}





// 03. Create a grading system
let grade = 99;
if (grade >= 80 && grade <= 100) {
    console.log("A+");
}
else if (grade >= 70 && grade < 80) {
    console.log("A");
}
else if (grade >= 60 && grade < 70) {
    console.log("B");
}
else if (grade >= 50 && grade < 60) {
    console.log("C");
}
else if (grade >= 40 && grade < 50) {
    console.log("D");
}
else {
    console.log("Fail");
}





// 04. Check if a number is positive, negative or zero
let num = 0;
if (num > 0) {
    console.log("Positive Number");
}
else if (num < 0) {
    console.log("Negative Number");
}
else {
    console.log("Zero");
}





// 05. Use if else to check whether a user entered password matches "admin123"
let password = "admin123";
if (password == "admin123") {
    console.log("Correct password");
}
else {
    console.log("Incorrect Password");
}