## Date: 26 February, 2026 - Thursday

## Topics:
- CSS Media Queries
- CSS Grid Layout

---

### 1. CSS Media Queries
- Responsive breakpoints:
    - `xs: <576px (Extra small devices)`
    - `sm: >=576px (Small devices)`
    - `md: >=768px (Medium devices)`
    - `lg: >=992px (Large devices)`
    - `xl: >=1200px (Extra large devices)`
    - `xxl: >=1400px (Extra extra large devices)`
- Hide Elements With Media Queries
    - Here, we use media queries to hide an element on small screens:
    ```
    @media screen and (max-width: 600px) {
        #div1 {
            display: none;
        }
    }
    ```
- Change Font Size With Media Queries
    - Here, we use media queries to change the font size of an element on different viewport widths:
    ```
    @media screen and (min-width: 600px) {
        #div1 {
            font-size: 80px;
        }
    }
    ```

---

### 2. CSS Grid Layout
- CSS grid layout using flex for responsive design. There have to multiple container responsive with css grid layout.
- Base column style: `[class*="col-"]`