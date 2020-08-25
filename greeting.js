const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function savename(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    savename(currentValue);
}
      
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
    localStorage.removeItem("toDos");
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
    document.querySelector(".js-toDoForm").classList.add(SHOWING_CN);
    document.querySelector(".js-toDoList").classList.add(SHOWING_CN);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();    
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();