// Make Array of Objects
const products = [
    { names: "Laptop", price: 50000 },
    { names: "Phone", price: 25000 },
    { names: "Tablet", price: 30000 },
];

// Make list using js for of loops
let html = "<ul>";
for (const product of products) {
    html += `<li>${product.names} - ${product.price}TK</li>`;
}
html += "</ul>";

// Print product list
document.getElementById("productList").innerHTML = html;