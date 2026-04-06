const list = document.getElementById("list");
const addButton = document.getElementById("addBtn");
const removeButton = document.getElementById("rmvBtn");

addButton.addEventListener("click", function() {
    const newListItem = document.createElement("li");
    newListItem.innerText = "Xiaomi";
    list.appendChild(newListItem);
});

removeButton.addEventListener("click")