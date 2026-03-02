## Date: 02 March, 2026 - Monday

## Topics:
- CSS Animations
- CSS Tooltip
- CSS Styling Images
- CSS Grid

---

### 1. CSS Animations
- `animation-name`
- `animation-duration`
- `@keyframes` - CSS @keyframes Rule
    - Example with code:
        ```
        @keyframes myAnimation {
            from {background-color: red;}
            to {background-color: yellow;}
        }
        div {
            width: 100px;
            height: 100px;
            background-color: red;
            animation-name: myAnimation;
            animation-duration: 4s;
        }
        ```
    - `@keyframes` rule, which represents 0% (start) and 100% (complete):
        ```
        @keyframes myAnimation {
            0%   {background-color: red;}
            25%  {background-color: yellow;}
            50%  {background-color: blue;}
            100% {background-color: green;}
        }
        div {
            width: 100px;
            height: 100px;
            background-color: red;
            animation-name: myAnimation;
            animation-duration: 4s;
        }
        ```
- `animation-delay` - Specifies a delay for the start of an animation.
- `animation-iteration-count` - Specifies the number of times an animation should run.
- `animation-timing-function` - Specifies the speed curve of the animation. Values are:
    - `ease` - Specifies an animation with a slow start, then fast, then end slowly (this is default)
    - `linear` - Specifies an animation with the same speed from start to end
    - `ease-in` - Specifies an animation with a slow start
    - `ease-out` - Specifies an animation with a slow end
    - `ease-in-out` - Specifies an animation with a slow start and end
    - `cubic-bezier(n,n,n,n)` - Lets you define your own values in a cubic-bezier function
- `animation-direction` - The animation-direction property can have the following values:
    - `normal` - The animation is played as normal (forwards). This is default
    - `reverse` - The animation is played in reverse direction (backwards)
    - `alternate` - The animation is played forwards first, then backwards
    - `alternate-reverse` - The animation is played backwards first, then forwards
- `animation-fill-mode` - The animation-fill-mode property can have the following values:
    - `none` - Default value. Animation will not apply any styles to the element before or after it is executing
    - `forwards` - The element will retain the style values that is set by the last keyframe
    - `backwards` - The element will get the style values that is set by the first keyframe
    - `both` - The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions
- CSS Animation Shorthand Property
    - The example below uses six of the animation properties:
        ```
        div {
            animation-name: myAnimation;
            animation-duration: 5s;
            animation-timing-function: linear;
            animation-delay: 2s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }
        ```
    - The same animation effect as above can be achieved by using the shorthand `animation` property:
        ```
        div {
            animation: myAnimation 5s linear 2s infinite alternate;
        }
        ```

---

### 2. CSS Tooltip
- A CSS tooltip is used to specify extra information about something when the user moves the mouse pointer over an element:
    - `Top`
    - `Right`
    - `Bottom`
    - `Left`
- Create a tooltip that appears when the user moves the mouse over an element:
    ```
    <style>
        .tooltip {
            position: relative;
            display: inline-block;
            border-bottom: 1px dotted black;
            cursor: pointer;
        }
        .tooltiptext {
            visibility: hidden;
            width: 130px;
            background-color: black;
            color: #ffffff;
            text-align: center;
            padding: 5px 0;
            border-radius: 6px;
            position: absolute;
            z-index: 1;
        }
        .tooltip:hover .tooltiptext {
            visibility: visible;
        }
    </style>
    <div class="tooltip">Hover over me
        <span class="tooltiptext">Some tooltip text</span>
    </div>
    ```

---

### 3. CSS Styling Images
- Rounded Images
- Thumbnail Images
- Responsive Images
- Polaroid Images / Cards
- Responsive Image Gallery
- CSS Image Opacity
- Image Text Positioning
- Image Hover Overlay

---

### 4. CSS Grid
- `display: grid;`
- `grid-template-columns`
- `grid-template-rows`
- `row-gap`
- `column-gap`
- Shorthand: `gap: 20px 10px; /* row-gap  column-gap */`
- `grid-column-start`
- `grid-column-end`
- `grid-row-start`
- `grid-row-end`
- Shorthand:
    ```
    .item-1 {
        grid-column: 1 / 3; /* start / end */
        grid-row: 1 / 2;
    }
    ```
- `grid-column`
- `grid-row`
- `grid-area`
- Layout mapping with name:
    ```
    .container {
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-template-rows: 60px 1fr 50px;
        grid-template-areas:
        "header  header"
        "sidebar content"
        "footer  footer";
        gap: 10px;
        min-height: 100vh;
    }
    ```
- `minmax()`
- `auto-fill`
- `auto-fit`
- `grid-auto-rows`
- `grid-auto-flow`
- `object-fit`