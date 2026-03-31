## Date: 31 March, 2026 - Tuesday

## Topics:
- JS Variable
- JS Operators
- JS Conditions

---

### 1. JS Variable
- **Variable:** Variables are used to store data, like string of text, numbers, etc. In modern javascript using `let` and `const`. In older javascript `var` and `automatically` those two are not recommended.
- JavaScript has 8 data types:
    - `1. String` - A text of characters enclosed in quotes
    - `2. Number` - A number representing a mathematical value
    - `3. Bigint` - A number representing a large integer
    - `4. Boolean` - A data type representing true or false
    - `5. Object` - A collection of key-value pairs of data
    - `6. Undefined` - A primitive variable with no assigned value
    - `7. Null` - A primitive value representing object absence
    - `8. Symbol` - A unique and primitive identifier
    ```
    // Declaring Variable
    let userName = "Clark Kent"; // string
    let age = 21; // number
    let _x = 2; // start with underscore
    let $myMoney = 5; // start with dollar sign

    // BigInt
    let x = 1234567890123456789012345n;
    let y = BigInt(1234567890123456789012345)
    let isMarried = false; // boolean
    const person = {firstName:"John", lastName:"Doe"}; // objects
    const cars = ["Saab", "Volvo", "BMW"]; // array
    let x; // undefined
    let x = null; // null
    const x = Symbol(); // symbol
    ```