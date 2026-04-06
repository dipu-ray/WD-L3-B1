let items = [];
let editIndex = -1;

function render() {
    const list = document.getElementById('list');
    list.innerHTML = '';

    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'item';

        div.innerHTML = `
        <span>${item}</span>
        <div class="actions">
          <button class="edit-btn" onclick="editItem(${index})">Edit</button>
          <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
        </div>
      `;

        list.appendChild(div);
    });
}

function addItem() {
    const input = document.getElementById('inputText');
    const value = input.value.trim();

    if (!value) return;

    if (editIndex === -1) {
        items.push(value);
    } else {
        items[editIndex] = value;
        editIndex = -1;
    }

    input.value = '';
    render();
}

function editItem(index) {
    const input = document.getElementById('inputText');
    input.value = items[index];
    editIndex = index;
}

function deleteItem(index) {
    items.splice(index, 1);
    render();
}