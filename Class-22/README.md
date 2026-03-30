## Date: 30 March, 2026 - Monday

## Topics:
- Basic JavaScript
- JS Syntax

---

### 1. Basic JavaScript
- `JS Tutorial`
    - How do I get JavaScript?
        - JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone.
    - Where can I download JavaScript?
        - You don't have to get or download JavaScript.
    - Is JavaScript Free?
        - JavaScript is free to use for everyone.
- `JS Introduction`
    - JavaScript Can Change HTML Content
    - JavaScript Can Change HTML Attribute Values
    - JavaScript Can Change HTML Styles (CSS)
    - JavaScript Can Hide HTML Elements
    - JavaScript Can Show HTML Elements
- `JS Where To`
    - In HTML, JavaScript code is inserted between `<script>` and `</script>` tags. For example:
        ```
        <script>
            document.getElementById("demo").innerHTML = "My First JavaScript";
        </script>
        ```
    - JavaScript in `<head>`. For example:
        ```
        <!DOCTYPE html>
        <html>
            <head>
                <script>
                    function myFunction() {
                    document.getElementById("demo").innerHTML = "Paragraph changed.";
                    }
                </script>
            </head>
            <body>
                <h2>Demo JavaScript in Head</h2>
                <p id="demo">A Paragraph</p>
                <button type="button" onclick="myFunction()">Try it</button>
            </body>
        </html>
        ```
    - JavaScript in `<body>`. For example:
        ```
        <!DOCTYPE html>
        <html>
            <body>
                <h2>Demo JavaScript in Body</h2>
                <p id="demo">A Paragraph</p>
                <button type="button" onclick="myFunction()">Try it</button>
                <script>
                    function myFunction() {
                    document.getElementById("demo").innerHTML = "Paragraph changed.";
                    }
                </script>
            </body>
        </html>
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
    - Using innerHTML:
        ```
        document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";
        ```
    - Using innerText:
        ```
        document.getElementById("demo").innerText = "Hello World";
        ```
    - Using document.write():
        ```
        document.write(5 + 6);
        ```
    - Using window.alert():
        ```
        window.alert(5 + 6);
        ```

---

### 2. JS Syntax
- `JS Syntax`
  - The JavaScript syntax defines two types of values:
    - Literals (Fixed values)
    - Variables (Variable values)
  - JavaScript Identifiers:
    - Must start with a letter, \_, or $
    - Can contain digits after the first character
    - Cannot be a reserved keyword (let, const, if, etc.)
    - Are case-sensitive
- `JS Statements`
  - JavaScript Statements:
    ```p
    let x, y, z;    // Statement 1
    x = 5;          // Statement 2
    y = 6;          // Statement 3
    z = x + y;      // Statement 4
    ```
  - JavaScript Statements:
    ```
    document.getElementById("demo").innerHTML = "Hello Dolly.";
    ```
  - JavaScript Code Blocks:
    ```
    function myFunction() {
        document.getElementById("demo1").innerHTML = "Hello Dolly!";
        document.getElementById("demo2").innerHTML = "How are you?";
    }
    ```
  - JavaScript Keywords:
    - `var`
    - `let`
    - `const`
    - `if`
    - `switch`
    - `for`
    - `function`
    - `return`
    - `try`
