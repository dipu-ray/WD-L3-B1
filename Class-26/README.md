## Date: 05 April, 2026 - Sunday

## Topics:

- JS Arrays
- JS Objects

---

### 1. JS Arrays

- **What is an Array** An Array is a special variable that can hold more than one value at a time under a single name. Instead of declaring separate variables for every item, you can store them all in one list. For example:
    ```javascript
    let color1 = "Red";
    let color2 = "Green";
    let color3 = "Blue";
    ```

- **Creating an Array**
    ```javascript
    var myArray = [element0, element1, ..., elementN];
    var myArray = new Array(element0, element1, ..., elementN);
    ```

- **Accessing the Elements of an Array**
    ```javascript
    let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
 
    document.write(fruits[0]); // Prints: Apple
    document.write(fruits[1]); // Prints: Banana
    document.write(fruits[2]); // Prints: Mango
    document.write(fruits[fruits.length - 1]); // Prints: Papaya
    ```

- **Length and Loops in Array**
    ```javascript
    // Length
    let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
    document.write(fruits.length); // Prints: 5

    // Using loops
    let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
    // Iterates over array elements
    for(let fruit of fruits) {    
        document.write(fruit + "<br>"); // Print array element
    }
    ```

- **Code and details with comments:**
    ```javascript
    colors.push("Yellow"); // Adding New Elements at Last
    colors.unshift("Yellow"); // Adding New Elements at First
    let last = colors.pop(); // Removing Elements at Last
    let first = colors.shift(); // Removing Elements at First

    // Adding or Removing Elements at Any Position
    let removed = colors.splice(0,1); // Remove the first element
    removed = colors.splice(1, 1, "Purple", "Voilet"); // Insert two values, remove one

    // Creating a String from an Array
    let colors = ["Red", "Green", "Blue"];
    document.write(colors.join()); // Prints: Red,Green,Blue
    document.write(colors.join("")); // Prints: RedGreenBlue
    document.write(colors.join("-")); // Prints: Red-Green-Blue
    document.write(colors.join(", ")); // Prints: Red, Green, Blue

    let animals = pets.concat(wilds, bugs); // Merging Two Arrays

    // Searching Through an Array
    let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
    document.write(fruits.indexOf("Apple")); // Prints: 0
    document.write(fruits.indexOf("Banana")); // Prints: 1
    document.write(fruits.indexOf("Pineapple")); // Prints: -1

    // Searching Through an Array
    let arr = [1, 0, 3, 1, false, 5, 1, 4, 7];
    document.write(arr.includes(1)); // Prints: true
    document.write(arr.includes(6)); // Prints: false
    document.write(arr.includes(1, 2)); // Prints: true
    document.write(arr.includes(3, 4)); // Prints: false
    ```

---

### 2. JS Objects

- **What is an Object?** In JavaScript, an Object is a standalone entity that holds data in the form of key-value pairs. While an Array is like a numbered list (0, 1, 2...), an Object is like a dictionary where you give each piece of data a specific name (a Key) to describe its value. For example with Creating Objects:
    ```javascript
    // 1. Defining an Object named 'person'
    let person = {
        // 2. String Property: Key is 'name', Value is "Peter"
        name: "Peter",
        
        // 3. Number Property: Key is 'age', Value is 28
        age: 28,
        
        // 4. String Property: Key is 'gender', Value is "Male"
        gender: "Male",
        
        // 5. Method: A function stored as a property is called a 'Method'
        displayName: function() {
            // 'this' refers to the object itself (the 'person' object).
            // 'this.name' means "take the value of 'name' from THIS object".
            alert(this.name); 
        }
    };

    // 6. Calling the Method:
    // This will trigger a browser alert showing "Peter".
    person.displayName(); 
    ```

- **Accessing Object's Properties:**
    ```javascript
    let person = {
        name: "Peter",
        age: 28
    };

    // Accessing properties using dot notation
    console.log(person.name); // Output: Peter
    console.log(person.age);  // Output: 28
    ```

- **Looping Through Object's Properties:**
    ```javascript
    let person = {
        name: "Peter",
        age: 28,
        gender: "Male"
    };

    // Loop through each 'key' in the 'person' object
    for (let key in person) {
        // Accessing the Key and its Value
        console.log(key + ": " + person[key]);
    }

    /* 
    Output:
    name: Peter
    age: 28
    gender: Male
    */
    ```

- **Deleting Object's Properties:**
    ```javascript
    // 1. Create an object
    let user = {
        name: "Arif",
        age: 25,
        city: "Dhaka",
        isDeveloper: true
    };

    // 2. Delete the 'city' property using Dot Notation
    delete user.city;

    // 3. Check the object (city is now gone)
    console.log(user); 
    // Output: { name: "Arif", age: 25, isDeveloper: true }

    // 4. Delete the 'isDeveloper' property using Bracket Notation
    delete user["isDeveloper"];

    // 5. Final check
    console.log(user);
    // Output: { name: "Arif", age: 25 }
    ```

---

- `https://scrimba.com/` - Learning platform with video with code.
- `async/await javascript` - Clear those concept before jump to ReactJS.