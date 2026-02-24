## Date: 24 February, 2026 - Tuesday

## Topics:
- CSS Pseudo-classes and Pseudo-Elements
- CSS Gradients, CSS Box Model and CSS Outline

---

### 1. CSS Pseudo-classes and Pseudo-Elements
- Pseudo-classes:
    - `:hover`
    - `:focus`
    - `:active`
    - `:link`
    - `:visited`
    - `:first-child`
    - `:last-child`
    - `:nth-child(n)`
- Pseudo-Elements:
    - `::first-line`
    - `::first-letter`
    - `::before`
    - `::after`
- CSS Properties:
    - `content`
    - `font-family`
    - `content` and `font-family` must be use two at the same time.

---

### 2. CSS Gradients, CSS Box Model and CSS Outline
- CSS Gradients:
    - Three types of gradients:
        - `Linear Gradients` - Down, up, left, right, or diagonally.
        - `Radial Gradients` - Out from a central point.
        - `Conic Gradients` - Is rotated around a center point.
- CSS Box Model:
    - Every box consists of four parts:
        - `Content` - The content of the box, where text and images appear.
        - `Padding` - Clears an area around the content. The padding is transparent.
        - `Borders` - A border that goes around the padding and content.
        - `Margins` - Clears an area outside the border. The margin is transparent.
    - An example with CSS code:
        ```
        div {
            background-color: lightgrey;
            width: 300px;
            border: 15px solid green;
            padding: 50px;
            margin: 20px;
        }
        ```
- CSS Outline:
    - CSS outline properties:
        - `outline-style`
        - `outline-color`
        - `outline-width`
        - `outline-offset`
        - `outline`
    - CSS outline shorthand:
        - An example with CSS code:
            ```
            {outline: dashed;}
            {outline: dotted red;}
            {outline: 7px solid yellow;}
            {outline: thick ridge pink;}
            ```
        - CSS outline also look like `border` and almost same. CSS outline you can use `border-radius`.