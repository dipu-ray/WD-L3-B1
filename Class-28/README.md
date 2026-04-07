## Date: 07 April, 2026 - Tuesday

## Topics:

- jQuery

---

# jQuery:

---

## jQuery — Essential Reference

> **jQuery** simplifies DOM manipulation, events, animations, and AJAX with a short, cross-browser API.

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

---

## 1. Ready

```js
$(function () {
  // DOM is ready — always wrap your code here
});
```

---

## 2. Selecting Elements

```js
$("#myId"); // by ID
$(".card"); // by class
$("p"); // by tag
$('input[type="text"]'); // by attribute
$(".card:first"); // first match
$(":checked"); // checked inputs
$(":visible"); // visible elements
```

> `$()` always returns a jQuery object — never null.

---

## 3. Traversing

```js
$el.parent()             // direct parent
$el.closest('.wrap')     // nearest ancestor (walks up)
$el.children()           // direct children
$el.find('p')            // all descendants matching
$el.siblings()           // all siblings
$el.next()               // next sibling
$el.prev()               // previous sibling
$el.filter('.active')    // keep matching
$el.first() / .last()    // first or last element
```

---

## 4. Read & Write Content

```js
$("h1").text(); // read text
$("h1").text("Hello!"); // write text  ✅ safe

$(".box").html(); // read HTML
$(".box").html("<b>Hi</b>"); // write HTML  ⚠️ XSS risk

$("input").val(); // read input value
$("input").val("default"); // write input value
```

---

## 5. Attributes & Data

```js
$("img").attr("src"); // get
$("img").attr("alt", "photo"); // set
$("input").removeAttr("disabled");

$("input").prop("checked"); // true | false
$("input").prop("disabled", true);

// <div data-user-id="5">
$("div").data("userId"); // "5"
$("div").data("userId", 99); // set
```

---

## 6. Classes & Styles

```js
$(".box").addClass("active");
$(".box").removeClass("hidden");
$(".box").toggleClass("open");
$(".box").hasClass("active"); // true | false

$(".box").css("color"); // get
$(".box").css("color", "red"); // set
$(".box").css({ color: "red", fontSize: "16px" }); // set multiple
```

---

## 7. Create, Insert & Remove

```js
const $div = $('<div class="card">Hello</div>'); // create

$("body").append($div); // inside, at end
$("body").prepend($div); // inside, at start
$(".ref").before($div); // before element
$(".ref").after($div); // after element

$(".card").clone(true); // clone with events
$(".card").remove(); // remove from DOM
$(".card").empty(); // remove children only
```

---

## 8. Events

```js
$("#btn").on("click", function () {
  console.log($(this).text());
});

// Multiple events
$("#btn").on("mouseenter mouseleave", fn);

// Remove
$("#btn").off("click");

// Fire once only
$("#btn").one("click", fn);

// Trigger manually
$("#btn").trigger("click");
```

---

## 9. Event Delegation

```js
// ONE listener handles current + future elements
$("#list").on("click", ".item", function () {
  console.log($(this).data("id"));
});
```

---

## 10. Effects

```js
$('.box').show() / .hide() / .toggle()
$('.box').fadeIn(400) / .fadeOut(400) / .fadeToggle()
$('.menu').slideDown(300) / .slideUp(300) / .slideToggle()

// Callback after effect
$('.box').fadeOut(400, function () {
  $(this).remove()
})
```

---

## 11. AJAX

```js
// GET
$.get("/api/users", function (data) {
  console.log(data);
});

// POST
$.post("/api/users", { name: "Sara" }, function (data) {});

// Full control
$.ajax({
  url: "/api/users",
  method: "GET",
  success: (data) => console.log(data),
  error: (err) => console.error(err),
});

// Load HTML into element
$("#content").load("/page.html");
```

---

## 12. Forms

```js
$("form").on("submit", function (e) {
  e.preventDefault(); // stop page reload
  const qs = $(this).serialize(); // "name=Sara&role=dev"
  const arr = $(this).serializeArray(); // [{name,value}, ...]
  $.post("/api", $(this).serialize(), (res) => console.log(res));
});
```

---

## 13. Chaining & Iteration

```js
// Chain — methods return the jQuery object
$(".box").addClass("active").css("color", "red").fadeIn(300);

// Loop
$("li").each(function (i, el) {
  console.log(i, $(el).text());
});

// Check if element exists
if ($("#myId").length) {
  /* exists */
}
```

---

## Quick Cheat Sheet

```
Ready      →  $(function(){})
Select     →  $('#id')  $('.cls')  $('tag')  $('[attr]')
Traverse   →  .parent()  .find()  .closest()  .siblings()
Content    →  .text()  .html()  .val()
Attrs      →  .attr()  .prop()  .data()
Classes    →  .addClass()  .removeClass()  .toggleClass()
Styles     →  .css()
DOM        →  .append()  .prepend()  .remove()  .empty()  .clone()
Events     →  .on(event, fn)  .off()  .one()  .trigger()
Delegate   →  .on(event, selector, fn)
Effects    →  .show/hide/toggle  .fadeIn/Out  .slideDown/Up
AJAX       →  $.get()  $.post()  $.ajax()  .load()
Forms      →  .serialize()  .serializeArray()
Utility    →  .each()  .length  .clone()  chaining
```
