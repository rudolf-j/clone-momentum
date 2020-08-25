const API_KEY = `bfc69b6e61b6de1e3993b7e21b1556e9`;
const COORDS = `coords`;
const weather = document.querySelector(".js-weather");

function saveCoords(coordObj){
  localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function getWeather(lat, lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then((Response) => {return Response.json()})
    .then((json) => {
      const city = json.name;
      const temp = json.main.temp;
      weather.innerText = `${city} @ ${temp}℃`;
    });
  
}

function handleSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordObj = {
    latitude, longitude
  };
  saveCoords(coordObj);
  getWeather(latitude, longitude);
}

function handleError(){
  console.log("can't access geo location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  } else {
    const parsedCoord = JSON.parse(loadedCoords);
    getWeather(parsedCoord.latitude, parsedCoord.longitude);
  }
}

function init(){
  loadCoords();
}

init();