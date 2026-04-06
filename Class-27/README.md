## Date: 06 April, 2026 - Monday

## Topics:

- JS DOM

---

### 1. JS DOM

> The **DOM** (Document Object Model) lets JavaScript read and manipulate HTML as a tree of nodes.

- **Selecting Elements:**
    ```js
    // Most used — always prefer these two
    document.getElementById('myId')         // one element by id
    document.querySelector('.card')         // first match by CSS selector
    document.querySelectorAll('.card')      // all matches → static NodeList

    // Convert NodeList to array
    const arr = [...document.querySelectorAll('li')]
    ```

- **Traversing:**
    ```js
    el.parentElement               // parent element
    el.children                    // child elements
    el.firstElementChild           // first child
    el.lastElementChild            // last child
    el.nextElementSibling          // next sibling
    el.previousElementSibling      // previous sibling
    el.closest('.wrapper')         // walks UP the tree — nearest ancestor match
    ```

- **Read & Write Content:**
    ```js
    el.textContent = 'Hello'            // ✅ safe — plain text only
    el.innerHTML   = '<b>Bold</b>'      // ⚠️ parses HTML — risk with user input
    el.outerHTML                        // includes the element itself

    // Safer targeted insertion
    el.insertAdjacentHTML('beforeend', '<span>new</span>')
    // positions: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'
    ```

- **Attributes & Data:**
    ```js
    el.getAttribute('src')
    el.setAttribute('alt', 'photo')
    el.removeAttribute('disabled')
    el.hasAttribute('hidden')          // true | false

    // data-* attributes  →  <div data-user-id="5">
    el.dataset.userId                  // "5"
    el.dataset.userId = '99'           // sets data-user-id="99"

    // Direct property (fastest for standard attrs)
    input.value    = 'text'
    input.disabled = true
    img.src        = 'photo.jpg'
    ```

- **Classes & Styles:**
    ```js
    // classList — always prefer over className string
    el.classList.add('active')
    el.classList.remove('hidden')
    el.classList.toggle('open')           // add if missing, remove if present
    el.classList.toggle('open', bool)     // force add/remove
    el.classList.contains('active')       // true | false
    el.classList.replace('old', 'new')

    // Inline styles
    el.style.color           = 'red'
    el.style.backgroundColor = 'tomato'

    // Read ACTUAL computed style (accounts for CSS files)
    getComputedStyle(el).fontSize          // "16px"
    ```

- **Create, Insert & Remove:**
    ```js
    // Create
    const div = document.createElement('div')
    div.textContent = 'Hello'
    div.className   = 'card'

    // Insert
    parent.append(div)       // at end  (accepts nodes + strings)
    parent.prepend(div)      // at start
    el.before(newEl)         // before el
    el.after(newEl)          // after el

    // Clone
    el.cloneNode(true)       // deep clone (includes children)
    el.cloneNode(false)      // shallow clone

    // Remove / Replace
    el.remove()
    el.replaceWith(newEl)

    // Batch insert — ONE DOM update (better performance)
    const frag = document.createDocumentFragment()
    items.forEach(item => frag.appendChild(item))
    parent.append(frag)
    ```

- **Events:**
    ```js
    // Add / Remove
    el.addEventListener('click', handler)
    el.removeEventListener('click', handler)   // needs same function reference

    // Useful options
    el.addEventListener('click',  handler, { once: true })     // fires once only
    el.addEventListener('scroll', handler, { passive: true })  // better scroll perf
    ```

- **Event Object:**
    ```js
    el.addEventListener('click', (e) => {
    e.target            // element that was clicked
    e.currentTarget     // element the listener is on
    e.preventDefault()  // stop default (form submit, link nav, etc.)
    e.stopPropagation() // stop bubbling up to parents
    })

    // Keyboard
    document.addEventListener('keydown', (e) => {
    e.key      // "Enter", "ArrowUp", "a"
    e.ctrlKey  // true if Ctrl held
    e.shiftKey // true if Shift held
    })
    ```

- **Event Delegation ✅ (best pattern for lists):**
    ```js
    // ONE listener on the parent — works for dynamic elements too
    document.querySelector('#list').addEventListener('click', (e) => {
    if (e.target.matches('.item')) {
        console.log(e.target.textContent)
    }
    // for nested elements use closest()
    const card = e.target.closest('.card')
    if (card) console.log(card.dataset.id)
    })
    ```

- **Most Used Events:**
    | Type     | Events |
    |----------|--------|
    | Mouse    | `click` `dblclick` `mouseenter` `mouseleave` `mousemove` |
    | Keyboard | `keydown` `keyup` |
    | Form     | `submit` `input` `change` `focus` `blur` |
    | Window   | `DOMContentLoaded` `load` `resize` `scroll` |
    ```js
    // DOMContentLoaded → HTML is parsed, safe to query DOM (before images load)
    document.addEventListener('DOMContentLoaded', () => { })

    // load → everything fully loaded (images, stylesheets)
    window.addEventListener('load', () => { })
    ```

- **Forms:**
    ```js
    const form  = document.querySelector('form')
    const input = document.querySelector('input[name="email"]')

    input.value      // current text value
    input.checked    // checkbox / radio boolean
    input.focus()

    form.addEventListener('submit', (e) => {
    e.preventDefault()                       // stop page reload
    const data = new FormData(form)
    const obj  = Object.fromEntries(data)    // → { email: '...', ... }
    })
    ```

- **Size, Position & Scroll:**
    ```js
    // Most useful — position + size relative to viewport
    const rect = el.getBoundingClientRect()
    rect.top; rect.left; rect.width; rect.height

    el.offsetWidth    // width with padding + border
    el.clientWidth    // width with padding only

    el.scrollIntoView({ behavior: 'smooth' })

    window.scrollY    // page vertical scroll position
    window.scrollTo({ top: 500, behavior: 'smooth' })
    ```

- **Script Loading:**
    ```html
    <!-- ✅ defer — executes after HTML is parsed, in order (recommended) -->
    <script src="app.js" defer></script>

    <!-- async — executes as soon as downloaded, order NOT guaranteed -->
    <script src="analytics.js" async></script>
    ```

- **Quick Cheat Sheet:**
    ```
    Select   →  querySelector / querySelectorAll / getElementById
    Read     →  textContent / getAttribute / dataset / value
    Write    →  textContent / innerHTML / setAttribute / classList / style
    Create   →  createElement → append / prepend / before / after
    Remove   →  el.remove() / el.replaceWith(newEl)
    Events   →  addEventListener(type, handler, { once, passive })
    Traverse →  parentElement / children / closest()
    Position →  getBoundingClientRect() / scrollIntoView()
    ```