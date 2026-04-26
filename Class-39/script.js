class TodoApp {
    constructor() {
        // Load existing todos from LocalStorage or initialize an empty array
        this.todos = JSON.parse(localStorage.getItem("glowingTodos")) || [];
        this.init();
    }

    // Initialize application logic
    init() {
        this.bindEvents();
        this.render();
        this.updateClearButton();
    }

    // Set up click and keyboard event listeners
    bindEvents() {
        // Handle "Add Task" button click
        document
            .getElementById("addBtn")
            .addEventListener("click", () => this.addTodo());

        // Allow adding tasks by pressing the "Enter" key
        document.getElementById("todoInput").addEventListener("keypress", (e) => {
            if (e.key === "Enter") this.addTodo();
        });

        // Handle "Clear Completed" button click
        document
            .getElementById("clearAllBtn")
            .addEventListener("click", () => this.clearCompleted());
    }

    // Logic to create a new todo item
    addTodo() {
        const input = document.getElementById("todoInput");
        const text = input.value.trim();
        if (!text) return; // Prevent empty tasks

        // Add new task to the start of the list with a unique ID (timestamp)
        this.todos.unshift({ id: Date.now(), text, completed: false });
        input.value = ""; // Reset input field
        this.save();
        this.render();
        this.updateClearButton();

        // Visual feedback: brief shake animation on the input box
        input.style.animation = "shake 0.5s ease-in-out";
        setTimeout(() => (input.style.animation = ""), 500);
    }

    // Switch task status between completed and pending
    toggleTodo(id) {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.save();
            this.render();
            this.updateClearButton();
        }
    }

    // Remove a single todo by its ID
    deleteTodo(id) {
        this.todos = this.todos.filter((t) => t.id !== id);
        this.save();
        this.render();
        this.updateClearButton();
    }

    // Remove all tasks marked as completed
    clearCompleted() {
        this.todos = this.todos.filter((t) => !t.completed);
        this.save();
        this.render();
        this.updateClearButton();
    }

    // Only show the "Clear" button if there are actually completed tasks
    updateClearButton() {
        const done = this.todos.filter((t) => t.completed).length;
        document.getElementById("clearAllBtn").style.display =
            done > 0 ? "block" : "none";
    }

    // Update the UI to reflect the current state of the todos array
    render() {
        const container = document.getElementById("todos");
        container.innerHTML = ""; // Clear current list before rebuilding
        this.todos.forEach((todo) => {
            const el = document.createElement("div");
            el.className = `todo-item${todo.completed ? " completed" : ""}`;

            // Build the HTML structure for each todo item
            el.innerHTML = `
                        <span class="todo-text" title="Click to toggle">${this.escapeHtml(todo.text)}</span>
                        <button class="delete-btn" data-id="${todo.id}">✕</button>
                    `;

            // Click listener to toggle completion
            el.querySelector(".todo-text").addEventListener("click", () =>
                this.toggleTodo(todo.id),
            );

            // Click listener for the delete button
            el.querySelector(".delete-btn").addEventListener("click", () =>
                this.deleteTodo(todo.id),
            );
            container.appendChild(el);
        });
    }

    // Persist current todos to the browser's local storage
    save() {
        localStorage.setItem("glowingTodos", JSON.stringify(this.todos));
    }

    // Security helper: prevents Cross-Site Scripting (XSS) by sanitizing user input
    escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }
}

// Instantiate the app to start the program
const app = new TodoApp();