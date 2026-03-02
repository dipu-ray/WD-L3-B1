## Date: 02 March, 2026 - Monday

## Topics:
- CSS Animations
- CSS Tooltip
- CSS Image Styling
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
- `Abc`

---

### 3. CSS Image Styling
- `Abc`

---

### 4. CSS Grid
- `Abc`