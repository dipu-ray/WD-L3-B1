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

---

### 2. JS Operators

- **Arithmetic Operators:**
    | Operator | Description | Example |
    | -------- | -------- | -------- |
    | + | Addition | x + y |
    | - | Subtraction | x - y |
    | * | Multiplication | x * y |
    | / | Division | x / y |
    | % | Modulus | x % y |

- **Assignment Operators:**
    | Operator | Description | Example | Same As |
    | -------- | -------- | -------- | -------- |
    | = | Assign | x = y | x = y |
    | += | Add and assign | x += y | x = x + y |
    | -= | Subtract and assign | x -= y | x = x - y |
    | *= | Multiply and assign | x *= y | x = x * y |
    | /= | Divide and assign quotient | x /= y | x = x / y |
    | %= | Divide and assign modulus | x %= y | x = x % y |

- **String Operators:**
    | Operator | Description | Example |
    | -------- | -------- | -------- |
    | + | Concatenation | str1 + str2 |
    | += | Concatenation assignment | str1 += str2 |

- **Incrementing and Decrementing Operators:**
    | Operator | Name | Effect |
    | -------- | -------- | -------- |
    | ++x | Pre-increment | Increments x by one, then returns x |
    | x++ | Post-increment | Returns x, then increments x by one |
    | --x | Pre-decrement | Decrements x by one, then returns x |
    | x-- | Post-decrement | Returns x, then decrements x by one |

- **Logical Operators:**
    | Operator | Name | Example |
    | -------- | -------- | -------- |
    | && | And | x && y |
    | OR | Or | x OR y |
    | ! | Not | !x |
    - `||` -> OR

- **Comparison Operators:**
    | Operator | Name | Example |
    | -------- | -------- | -------- |
    | == | Equal | x == y |
    | === | Identical | x === y |
    | != | Not equal | x != y |
    | !== | Not identical | x !== y |
    | < | Less than | x < y |
    | > | Greater than | x > y |
    | >= | Greater than or equal to | x >= y |
    | <= | Less than or equal to | x <= y |

---

### 3. JS Conditions

- There are several conditional statements in JavaScript that you can use to make decisions:
    - The `if` statement
    - The `if...else` statement
    - The `if...else if....else` statement
    - The `switch...case` statement

- The `if` Statement:
    ```
    if(condition) {
        // Code to be executed
    }
    ```
    ```
    let now = new Date();
    let dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6

    if(dayOfWeek == 5) {
        alert("Have a nice weekend!");
    }
    ```

- The `if...else` Statement:
    ```
    if(condition) {
        // Code to be executed if condition is true
    } else {
        // Code to be executed if condition is false
    }
    ```
    ```
    let now = new Date();
    let dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6

    if(dayOfWeek == 5) {
        alert("Have a nice weekend!");
    } else {
        alert("Have a nice day!");
    }
    ```

- The `if...else if...else` Statement:
    ```
    if(condition1) {
        // Code to be executed if condition1 is true
    } else if(condition2) {
        // Code to be executed if the condition1 is false and condition2 is true
    } else {
        // Code to be executed if both condition1 and condition2 are false
    }
    ```
    ```
    let now = new Date();
    let dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6

    if(dayOfWeek == 5) {
        alert("Have a nice weekend!");
    } else if(dayOfWeek == 0) {
        alert("Have a nice Sunday!");
    } else {
        alert("Have a nice day!");
    }
    ```

- The Ternary Operator:
    ```
    let result = (condition) ? value1 : value2
    ```
    ```
    let age = 21;
    let userType = age < 18 ? 'Child' : 'Adult';
    alert(userType); // Displays Adult
    ```

- Using the `Switch...Case` Statement:
    ```
    switch(x){
        case value1:
            // Code to be executed if x === value1
            break;
        case value2:
            // Code to be executed if x === value2
            break;
        ...
        default:
            // Code to be executed if x is different from all values
    }
    ```
    ```
    let d = new Date();
	
    switch(d.getDay()) {
        case 0:
            alert("Today is Sunday.");
            break;
        case 1:
            alert("Today is Monday.");
            break;
        case 2:
            alert("Today is Tuesday.");
            break;
        case 3:
            alert("Today is Wednesday.");
            break;
        case 4:
            alert("Today is Thursday.");
            break;
        case 5:
            alert("Today is Friday.");
            break;
        case 6:
            alert("Today is Saturday.");
            break;   
        default:
            alert("No information available for that day.");
            break;
    }
    ```