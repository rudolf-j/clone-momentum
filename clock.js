const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hour = date.getHours();
    clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour
                       }:${minutes < 10 ? `0${minutes}` : minutes
                       }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    // getTime();
    setInterval(getTime, 1000);
    
}

init();