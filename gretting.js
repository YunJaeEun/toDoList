const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const gretting = document.querySelector(".js-grettings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function checkTime(){
    const date = new Date();
    const hours = date.getHours();
    if(5 <= hours && hours < 12){
        return "Good Morning";
    }else if(12 <= hours && hours < 17){
        return "Good Afternoon";
    }else{
        return "Good Evening";
    }
    
} 

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    gretting.classList.add(SHOWING_CN);
    const timegretting = checkTime();
    gretting.innerText =`${timegretting}, ${text}.`;
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