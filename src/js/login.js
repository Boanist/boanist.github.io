const username = document.querySelector("#username");
const input = document.querySelector("#username input");
const loginY = document.querySelector(".loginY");
const HIDDEN = "hidden";
const logined = () => {
  if (localStorage.getItem("username") !== null) {
    console.log("username is not null");
    //login(localStorage.getItem("username"));

    username.classList.toggle(HIDDEN);
    loginY.classList.toggle(HIDDEN);
    loginY.innerText = `Hello, ${localStorage.getItem("username")}`;
  }
};

const nameinput = (event) => {
  event.preventDefault();
  localStorage.setItem("username", input.value);
  //login(`${input.value}`);

  username.classList.toggle(HIDDEN);
  loginY.classList.toggle(HIDDEN);
  loginY.innerText = `Hello, ${input.value}`;
};

logined();
username.addEventListener("submit", nameinput);
