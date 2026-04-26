class TodoApp {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem("glowingTodos")) || [];
        this.init();
    }

    init() {
        this.bindEvents();
        this.render();
        this.updateClearButton();
    }

    bindEvents() {
        document
            .getElementById("addBtn")
            .addEventListener("click", () => this.addTodo());
        document.getElementById("todoInput").addEventListener("keypress", (e) => {
            if (e.key === "Enter") this.addTodo();
        });
        document
            .getElementById("clearAllBtn")
            .addEventListener("click", () => this.clearCompleted());
    }

    addTodo() {
        const input = document.getElementById("todoInput");
        const text = input.value.trim();
        if (!text) return;

        this.todos.unshift({ id: Date.now(), text, completed: false });
        input.value = "";
        this.save();
        this.render();
        this.updateClearButton();

        input.style.animation = "shake 0.5s ease-in-out";
        setTimeout(() => (input.style.animation = ""), 500);
    }

    toggleTodo(id) {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.save();
            this.render();
            this.updateClearButton();
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter((t) => t.id !== id);
        this.save();
        this.render();
        this.updateClearButton();
    }

    clearCompleted() {
        this.todos = this.todos.filter((t) => !t.completed);
        this.save();
        this.render();
        this.updateClearButton();
    }

    updateClearButton() {
        const done = this.todos.filter((t) => t.completed).length;
        document.getElementById("clearAllBtn").style.display =
            done > 0 ? "block" : "none";
    }

    render() {
        const container = document.getElementById("todos");
        container.innerHTML = "";
        this.todos.forEach((todo) => {
            const el = document.createElement("div");
            el.className = `todo-item${todo.completed ? " completed" : ""}`;
            el.innerHTML = `
                        <span class="todo-text" title="Click to toggle">${this.escapeHtml(todo.text)}</span>
                        <button class="delete-btn" data-id="${todo.id}">✕</button>
                    `;
            el.querySelector(".todo-text").addEventListener("click", () =>
                this.toggleTodo(todo.id),
            );
            el.querySelector(".delete-btn").addEventListener("click", () =>
                this.deleteTodo(todo.id),
            );
            container.appendChild(el);
        });
    }

    save() {
        localStorage.setItem("glowingTodos", JSON.stringify(this.todos));
    }

    escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }
}

const app = new TodoApp();
