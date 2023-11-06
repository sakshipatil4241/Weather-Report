

let time = document.getElementById("current-time");
let date = document.getElementById("current-date");


let t = new Date();
time.innerHTML = t.toLocaleTimeString();

let d = new Date();
date.innerHTML = d.toLocaleDateString();


const apikey = "d4c36c5b3cc1857afe30d452850ff715";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box-container input");
const searchBtn = document.querySelector(".search-box-container label");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  document.querySelector(".desc").innerHTML = data.weather[0].description;
  document.querySelector(".max").innerHTML = Math.round(data.main.temp_max) + "°C"+" mix temp";
  document.querySelector(".min").innerHTML = Math.round(data.main.temp_min) + "°C"+ " min temp";


  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "assets/images/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "assets/images/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "assets/images/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "assets/images/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "assets/images/mist.png";
  }



} 

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})




