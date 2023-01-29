document.addEventListener("DOMContentLoaded", function() {
  let todoForm = document.getElementById("newTodoForm");
  let todoList = document.getElementById("todoList");

  todoForm.addEventListener("submit", function(Event) {
    Event.preventDefault();

    let removeButton = document.createElement("button");
    removeButton.innerText = "X";

    let newTodo = document.createElement("li");
    newTodo.innerText = document.getElementById("task").value;

    todoList.appendChild(newTodo);
    newTodo.appendChild(removeButton);

    todoForm.reset();
  });

  todoList.addEventListener("click", function(Event) {
    const targetTagToLowerCase = Event.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "li") {
      Event.target.style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === "button") {
      Event.target.parentNode.remove();
    }
  });
});
