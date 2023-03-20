let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let time = new Date();
let date = time.getDate();
let month = months[time.getMonth()];
let day = days[time.getDay()];
let hours = time.getHours();
let minutes = time.getMinutes();
let year = time.getFullYear();
let timeShown = document.querySelector("h2");
timeShown.innerHTML = `${day} ${month}  ${date}, ${hours}: ${minutes},  ${year}`;
//console.log(timeShown)

function getCity(city) {
  let apiKey = "b42d2c4be99c58640c37a2d33565fcbe";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 
  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) { //from search-Temparature
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#Temp").innerHTML = Math.round(
    response.data.main.temp);
document.querySelector("#humidity").innerHTML=`Humidity: ${Math.round(response.data.main.humidity)} %`;
 
  //console.log(temp)
  document.querySelector("#wind").innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )}m/s;`
}

//console.log(wind)

function enterCity() {
  let city = document.querySelector("#city-input");
  //console.log(city.value);

  let h1 = document.querySelector("h1");

  h1.innerHTML = ` ${city.value} City`;
}
// Search function 
function handleSubmit(event) {
  //debugger;
  event.preventDefault();
 
  let city = document.querySelector("#city-input").value;
 //api call to open weather map
 //Response is the city name and temparature
  getCity(city);

  
}
function getLocation(position){
  let apiKey = "b42d2c4be99c58640c37a2d33565fcbe";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`
  axios.get(apiUrl).then(showWeather);
}

function getCurrentLocation(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLocation)
}
let currentlocationButton= document.querySelector("#currentLocation-button")
currentlocationButton.addEventListener("click",getCurrentLocation)

   

/*function convertFahrenheit(event) {
  event.preventDefault();
  let fahrenheit = document.querySelector("#Temp");
  fahrenheit.innerHTML = 77;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertFahrenheit);

function convertCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#Temp");
  temperatureElement.innerHTML = 25;
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertCelsius);*/


let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

getCity("New York");//display by default
