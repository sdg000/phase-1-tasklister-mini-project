document.addEventListener("DOMContentLoaded", () => {
 
  //create form and attach event listeners
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", createNewTask);

  
  //variables for advanced modification
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  const newTaskUl = document.getElementById("tasks");

  
});

const createNewTask = event => {
  event.preventDefault();
  const todoForm = document.getElementById("new-task-description");
  const todo = document.createElement("p");
  todo.innerText = todoForm.value;

  const btn = document.createElement('button')
  btn.textContent = "  x"
  todo.appendChild(btn)
  btn.addEventListener('click', del)

  appendNewTask(todo);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};

function del(){
  event.target.parentNode.remove()
}