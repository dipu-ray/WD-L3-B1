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
- CSS grid layout using with responsive design. There have to multiple container responsive with css grid layout.
- Base column style syntax: `[class*="col-"]`
- Row based grid layout code:
    - `HTML Code`:
        ```
        <div class="row">
            <div class="col-1"></div>
            <div class="col-2"></div>
            <div class="col-3"></div>
            <div class="col-4"></div>
            <div class="col-5"></div>
            <div class="col-6"></div>
            <div class="col-7"></div>
            <div class="col-8"></div>
            <div class="col-9"></div>
            <div class="col-10"></div>
            <div class="col-11"></div>
            <div class="col-12"></div>
        </div>
        ```
    - `CSS Code`:
        ```
        .row {
            display: flex;
            flex-wrap: wrap;
            margin-left: -15px; /* Just for alignment */
            margin-right: -15px; /* Just for alignment */
        }
        /* Extra small devices (portrait phones, less than 576px) */
        .col-1 {
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
        }
        .col-2 {
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }
        .col-3 {
            flex: 0 0 25%;
            max-width: 25%;
        }
        .col-4 {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
        .col-5 {
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
        .col-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }
        .col-7 {
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }
        .col-8 {
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }
        .col-9 {
            flex: 0 0 75%;
            max-width: 75%;
        }
        .col-10 {
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }
        .col-11 {
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
        }
        .col-12 {
            flex: 0 0 100%;
            max-width: 100%;
        }
        ```
        - There use media queries for every single devices for css grid layout.
            - `xs: <576px (Extra small devices)`
            - `sm: >=576px (Small devices)`
            - `md: >=768px (Medium devices)`
            - `lg: >=992px (Large devices)`
            - `xl: >=1200px (Extra large devices)`
            - `xxl: >=1400px (Extra extra large devices)`