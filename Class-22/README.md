## Date: 30 March, 2026 - Monday

## Topics:
- Basic JavaScript
- JS Syntax

---

### 1. Basic JavaScript
- `JS Where To`
    - In HTML, JavaScript code is inserted between `<script>` and `</script>` tags. For example:
        ```
        <script>
            document.getElementById("demo").innerHTML = "My First JavaScript";
        </script>
        ```
    - JavaScript you can use in `<head>` or `<body>` tags.
    - JS can add with html with 3 types
        - **Inline JavaScript**
            ```
            <button onclick="alert('Hello World!')">Click Me</button>
            ```
        - **Internal JavaScript**
            ```
            <script>
                function sayHello() {
                    console.log("Hello from Internal JS!");
                }
                sayHello();
            </script>
            ```
        - **External JavaScript**
            - Create a js file then write this code:
            ```
            console.log("This is from external file");
            ```
            - External References:
                - With a full URL (a full web address)
                - With a file path (like /js/)
                - Without any path
- `JS Output`
    - JavaScript Display Possibilities:
        - Writing into an HTML element, using - `innerHTML` or `innerText`
        - Writing into the HTML output using - `document.write()`
        - Writing into an alert box, using - `window.alert()`
        - Writing into the browser console, using - `console.log()`
    - **Using innerHTML:**
        ```
        document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";
        ```
    - **Using innerText:**
        ```
        document.getElementById("demo").innerText = "Hello World";
        ```
    - **Using document.write():**
        ```
        document.write(5 + 6);
        ```
    - **Using window.alert():**
        ```
        window.alert(5 + 6);
        ```
    - **Using console.log():**
        ```
        console.log(5 + 6);
        ```
    - **JavaScript Print:**
        ```
        <button onclick="window.print()">Print this page</button>
        ```

---

### 2. JS Syntax
- `JS Syntax`
    - JavaScript Identifiers:
        - Must start with a letter, \_, or $
        - Can contain digits after the first character
        - Cannot be a reserved keyword (let, const, if, etc.)
        - Are case-sensitive
    - JavaScript uses **arithmetic operators** `( + - * / )` to compute values.
    - **JavaScript Expressions:**
        - (5 + 6) * 10 evaluates to 110:
            ```
            (5 + 6) * 10
            ```
        - Expressions can also contain variable:
            ```
            x * 10
            ```
        - "John" + " " + "Doe", evaluates to "John Doe":
            ```
            "John" + " " + "Doe"
            ```

- `JS Statements`
    - JavaScript Statements:
        ```
        let x, y, z;    // Statement 1
        x = 5;          // Statement 2
        y = 6;          // Statement 3
        z = x + y;      // Statement 4
        ```
  - **JavaScript Statements:**
    ```
    <!DOCTYPE html>
    <html>
        <body>
            <h1>JavaScript Statements</h1>
            <p>In HTML, JavaScript statements are executed by the browser.</p>
            <p id="demo"></p>
            <script>
                document.getElementById("demo").innerHTML = "Hello Dolly.";
            </script>
        </body>
    </html>
    ```
  - **JavaScript Code Blocks:**
    ```
    function myFunction() {
        document.getElementById("demo1").innerHTML = "Hello Dolly!";
        document.getElementById("demo2").innerHTML = "How are you?";
    }
    ```
  - **JavaScript Keywords:**
    - `var`
    - `let`
    - `const`
    - `if`
    - `switch`
    - `for`
    - `function`
    - `return`
    - `try`

- `JS Comments`
    - Single Line Comments - `//`
    - Multi-line Comments - `/* ... */`

- `JS Variables`
    - Variables = Data Containers
    - **Modern JavaScript:**
        - Using `let` - When value should be changed
        - Using `const` - When value should not be changed
    - **Older JavaScript:**
        - Using `var` (Not Recommended)
        - Automatically (Not Recommended)
    - JavaScript Arithmetic: `=` and `+`.

- `JS Types`
    - JavaScript has 8 Data types:
        - `1. String` - `let name = "John";`
        - `2. Number` - `let age = 25;`
        - `3. BigInt` - `let bigNumber = 12345678901234567890n;`
        - `4. Boolean` - `let isCodingFun = true;`
        - `5. Undefined` - `let x; // Not set a value`
        - `6. Null` - `let salary = null;`
        - `7. Symbol` - `let id = Symbol("id");`
        - `8. Object` - `const person = {firstName: "John", lastName: "Doe"};`