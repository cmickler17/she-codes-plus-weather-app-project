let now = new Date();

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMinutes = now.getMinutes();
if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
}

let dayTime = document.querySelector("#day-time");
dayTime.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;



function showTemp(response){
    document.querySelector("#city").innerHTML = response.data.name;
    let temp = Math.round(response.data.main.temp);
    let tempElement = document.querySelector ("#temp");
    tempElement.innerHTML = `${temp}°F`;
}


function handleSubmit(event){
    event.preventDefault();
    let city = document.querySelector("#search-city").value;
    
    let apiKey = "f5e66638242de3dc22bd15c331cb267e";
    let unit = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(`${apiUrl}`).then(showTemp);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);



function handlePosition(position) {

let lat = position.coords.latitude;
let lon = position.coords.longitude;

let apiKey = "f5e66638242de3dc22bd15c331cb267e";
let unit = "imperial";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
axios.get(`${apiUrl}`).then(showTemp);
}

function getCurrentPosition(){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handlePosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);