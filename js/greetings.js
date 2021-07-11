const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function handleSubmit(event) {
  event.preventDefault();

  const userName = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(userName) {
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Yes now we have internet with ${userName}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", handleSubmit);
} else {
  paintGreetings(savedUserName);
}

loginForm.addEventListener("submit", handleSubmit);
