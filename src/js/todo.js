const form = document.querySelector("#todoInput");
const list = document.querySelector(".todolist");
const inputBox = document.querySelector("#todoInput input");
const ul = document.querySelector("ul");
let toDos = [];

const deleteToDo = (event) => {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDo();
};

const saveToDo = () => {
  localStorage.setItem("todos", JSON.stringify(toDos));
};

const paintToDo = (newToDo) => {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "DONE";
  span.innerText = newToDo.text;
  button.addEventListener("click", deleteToDo);
  ul.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
};

const OnSubmit = (event) => {
  event.preventDefault();
  const newTodo = inputBox.value;
  inputBox.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
};

form.addEventListener("submit", OnSubmit);

const savedToDos = localStorage.getItem("todos");

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
