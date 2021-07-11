const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoNull = document.getElementById("null");

const TODOS_KEY = "todos";

let toDos = [];

function nullList() {
  if (toDos.length > 0) {
    toDoNull.classList.add(HIDDEN_CLASSNAME);
  } else {
    toDoNull.classList.remove(HIDDEN_CLASSNAME);
  }
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
  nullList();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  //
  const label = document.createElement("label");
  const input = document.createElement("input");
  input.type = "checkbox";
  const checkmark = document.createElement("div");
  checkmark.className = "checkmark";
  const text = document.createElement("div");
  text.className = "text";
  text.innerText = newTodo.text;
  label.appendChild(input);
  label.appendChild(checkmark);
  label.appendChild(text);
  //
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", deleteTodo);
  //
  li.appendChild(label);
  li.appendChild(button);
  toDoList.appendChild(li);
  toDoNull.classList.add(HIDDEN_CLASSNAME);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
  nullList();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
