// JavaScript Arrays
document.write(
    "<h2>JavaScript Arrays</h2> <hr>"
);

// Creating arrays
let colors = ["Red", "Green", "Blue"]; 
let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
let cities = ["London", "Paris", "New York"];
let person = ["John", "Wick", 32];

// Print colors, fruits, cities and person arrays
document.write("<b>Creating arrays:</b> <br>");
document.write(colors + "<br>");
document.write(fruits + "<br>");
document.write(cities + "<br>");
document.write(person + "<br><br><br>");

// Accessing fruits array elements
document.write("<b>Accessing fruits array elements:</b> <br>");
document.write(fruits[0] + "<br>");
document.write(fruits[1] + "<br>");
document.write(fruits[2] + "<br>");
document.write(fruits[fruits.length - 1] + "<br><br><br>");

// Length of fruits array
document.write("<b>Length of fruits array:</b> <br>");
document.write(fruits.length + "<br><br><br>");

// Looping through fruits array
document.write("<b>Looping through fruits array:</b> <br>");
for(let fruit of fruits) {    
    document.write(fruit + "<br>");
}
document.write("<br><br>");

// Adding new elements to colors array
document.write("<b>Adding new elements to colors array:</b> <br>");
colors.push("Yellow"); // Adding element into first
document.write(colors + " = ");
document.write(colors.length + " (Length) <br>");
colors.unshift("Black"); // Adding element into last
document.write(colors + " = ");
document.write(colors.length + " (Length) <br><br><br>");

// Removing elements from colors array
document.write("<b>Removing elements from colors array:</b> <br>");
let last = colors.pop(); // Removing element into last
document.write(last + "<br> Length = ");
document.write(colors.length + "<br>");
let first = colors.shift(); // Removing element into first
document.write(first + "<br> Length = ");
document.write(colors.length + "<br><br><br>");

// Creating a string from colors array
document.write("<b>Creating a string from colors array:</b> <br>");
document.write(colors.join() + "<br>");
document.write(colors.join("") + "<br>");
document.write(colors.join("-") + "<br>");
document.write(colors.join(", ") + "<br><br><br>");

// Merging two or more arrays
document.write("<b>Merging two or more arrays:</b> <br>");
let pets = ["Cat", "Dog", "Parrot"];
let wilds = ["Tiger", "Wolf", "Zebra"];
let animals = pets.concat(wilds);
document.write(pets + "<br>");
document.write(wilds + "<br>");
document.write("Merging two arrays => " + animals + "<br><br><br>");

// Searching index with element from fruits array
document.write("<b>Searching index with element from fruits array:</b> <br>");
document.write("Fruits: " + fruits + "<br>");
document.write("Apple index: " + fruits.indexOf("Apple") + "<br>");
document.write("Banana index: " + fruits.indexOf("Banana") + "<br>");
document.write("Pineapple index: " + fruits.indexOf("Pineapple") + "<br><br><br><br><br>");





// JavaScript Objects
document.write(
    "<h2>JavaScript Objects</h2> <hr>"
);

// Accessing object's properties
document.write("<b>Accessing object's properties:</b> <br>");
let book = {
    "name": "Harry Potter and the Goblet of Fire",
    "author": "J. K. Rowling",
    "year": 2000
};
document.write(book.author + "<br>");
document.write(book["year"] + "<br><br><br>");

// Looping through object's properties
document.write("<b>Looping through object's properties:</b> <br>");
for(let i in book) {  
    document.write(book[i] + "<br>");
}
document.write("<br><br>");


// Setting object's properties
document.write("<b>Setting object's properties:</b> <br>");
let person2 = {
    names: "Peter",
    age: 28,
    gender: "Male"
};

// Print Before Setting Objects
document.write("Before Setting Objects: <br>");
for(let i in person2) {  
    document.write(person2[i] + "<br>");
}
document.write("<br>");

// Setting a new property
person2.country = "United States";
document.write(person2.country + "<br>");
person2["email"] = "peterparker@mail.com";
document.write(person2.email + "<br>");

// Updating existing property
person2.age = 30;
document.write(person2.age + "<br>");
person2["names"] = "Peter Parker";
document.write(person2.names + "<br><br>");

// Print After Setting Objects
document.write("After Setting Objects: <br>");
for(let i in person2) {  
    document.write(person2[i] + "<br>");
}
document.write("<br><br>");


// Deleting object's properties
document.write("<b>Deleting object's properties:</b> <br>");
document.write("Before Delete: " + person2.age + "<br>");
delete person2.age;
document.write("After Delete: " + person2.age + "<br><br>");