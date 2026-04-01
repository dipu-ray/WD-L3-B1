## Date: 01 April, 2026 - Wednesday

## Topics:

- JS Loops

---

### 1. JS Loops

- Different Types of Loops in JavaScript:
    - `while`
    - `do...while`
    - `for`
    - `for...in`
    - `for...of`

- The **while** Loop:
    ```
    while(condition) {
        // Code to be executed
    }
    ```
    ```
    let i = 1;
    while(i <= 5) {    
        document.write("<p>The number is " + i + "</p>");
        i++;
    }
    ```

- The **do...while** Loop:
    ```
    do {
        // Code to be executed
    }
    while(condition);
    ```
    ```
    let i = 1;
    do {
        document.write("<p>The number is " + i + "</p>");
        i++;
    }
    while(i <= 5);
    ```

- The **for** Loop:
    ```
    for(initialization; condition; increment) {
        // Code to be executed
    }
    ```
    ```
    for(let i=1; i<=5; i++) {
        document.write("<p>The number is " + i + "</p>");
    }
    ```

- The **for...in** Loop:
    ```
    for(variable in object) {
        // Code to be executed
    }
    ```
    ```
    // An object with some properties 
    let person = {"name": "Clark", "surname": "Kent", "age": "36"};
    
    // Loop through all the properties in the object  
    for(let prop in person) {  
        document.write("<p>" + prop + " = " + person[prop] + "</p>"); 
    }
    ```

- The **for...of** Loop:
    ```
    for (variable of iterable) {
        // statement
    }
    ```
    ```
    const numbers = [1, 2, 3, 4, 5];

    for (const num of numbers) {
        if (num === 3) break; // When 4 then break
        console.log(num); 
    }
    // Output: 1, 2
    ```