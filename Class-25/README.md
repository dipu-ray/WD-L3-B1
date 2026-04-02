## Date: 02 April, 2026 - Thursday

## Topics:

- JS Functions

---

### 1. JS Functions

- **What is Function?** A function is a group of statements that perform specific tasks and can be kept and maintained separately form main program. Functions provide a way to create reusable code packages which are more portable and easier to debug.

- **JavaScript Function Syntax:** Syntax is the set of rules that defines the structure of a language. In programming, it determines how symbols, keywords, and characters must be combined to write valid code.
    ```
    function name( p1, p2, ... ) {
        // code to be executed
    }
    ```

- **Function Parameters:** Parameters allow you to pass (send) values to a function. Parameters are listed inside the parentheses in the function definition.
    ```
    function multiply(a, b) { // a and b are parameters
        // Code to be executed
    }
    multiply(value a, value b);
    ```

- **Function Return:** A function can return a value back to the code that called it. The return statement is used to send a value out of a function.
    ```
    function sayHello() {
        return "Hello World";
    }
    console.log(sayHello());
    ```

- **Function Arguments:** Arguments are the real values passed to, and received by the function.
    ```
    function multiply(a, b) {
        return a * b;
    }
    let result = multiply(4, 5); // 4 and 5 are arguments
    ```

- **Function Expressions:** A function expression is a function stored in a variable.
    ```
    // Standard Function (Function Declaration)
    function multiplyStandard(a, b) {
        return a * b;
    }
    console.log("Standard Function Output: " + multiplyStandard(5, 4)); 

    // Function Expression
    const multiplyExpression = function(a, b) {
        return a * b;
    };
    console.log("Function Expression Output: " + multiplyExpression(10, 2)); 
    ```
    ```
    const multiply = function (a, b) {return a * b};
    // Or
    const add = function add(a, b) {return a + b;};
    ```

- **Arrow Functions:**
    ```
    // Arrow Function Syntax
    const add = (a, b) => {
        return a + b;
    };

    // Shorter Syntax
    // Before Arrow
    const multiply = function(a, b) {return a * b}

    // With Arrow
    const multiply = (a, b) => a * b;

    // Arrow Functions with One Parameter
    // With Paranthesis
    const square = (x) => x * x;

    // Without Paranthesis
    const square = x => x * x;

    // Arrow Functions Return Value by Default
    const hello = () => "Hello World!";

    // Arrow Functions and the this Keyword
    const person = {
        name: "John",
        greet: function() {
            return this.name;
        }
    };
    ```