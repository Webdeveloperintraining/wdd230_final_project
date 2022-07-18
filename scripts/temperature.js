/* Code found in https://www.youtube.com/watch?v=buS3mweBWCA */
var cityName
var latitude=38.984653;
var longitude=-77.094711;

let gotPosition= function(pos){
    let lat= pos.coords.latitude;
    let long=pos.coords.longitude;
    getForecast(lat,long)
}

let getForecast= function(lat,long){
    let url= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&units=imperial&appid=625b3e54582f7765110b7e680ff34db6`;
    let url2= `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=625b3e54582f7765110b7e680ff34db6`;
    getWeatherText(url,url2);
}

async function getWeatherText(url,url2){
    let weatherObject= await fetch(url);
    let weatherText = await weatherObject.text();
    let weatherPlace= await fetch(url2);
    const name = await weatherPlace.json();
    parseWeather(weatherText,name);
    cityName=name[0].name
}

let parseWeather = function (weatherText,name){
    let weatherJSON = JSON.parse(weatherText);
    let dailyForecast = weatherJSON.daily;
    for(x=0; x < 3; x++){
        let day= dailyForecast[x];
        let today = new Date().getDay() + x;
        if (today > 6) {
            today = today-7;
        }
    let dayOfWeek = getDayOfWeek(today);
    let icon= day.weather[0].icon;
    let currentWeather= weatherJSON.current.temp.toFixed(0);
    let description= day.weather[0].description;
    let highTemp=day.temp.max;
    let lowTemp=day.temp.min;
    let humidity= day.humidity;
    let windSpeed= day.wind_speed;
    let cityName=name[0].name;
    displayWeatherDay(currentWeather,cityName,dayOfWeek,icon,description,highTemp,lowTemp,humidity,windSpeed)
    }
}

let getDayOfWeek = function (dayNum){
    var weekday=new Array(7);
    weekday[0]="Sunday"
    weekday[1]="Monday"
    weekday[2]="Tuesday"
    weekday[3]="Wednesday"
    weekday[4]="Thursday"
    weekday[5]="Friday"
    weekday[6]="Saturday"

    return (weekday[dayNum])
}

let displayWeatherDay=function(currentWeather,cityName,dayOfWeek,icon,description,highTemp,lowTemp,humidity,windSpeed){
    document.querySelector("#weather h2:nth-child(1)").innerHTML="Weather in "+cityName;
    let out=`<div class='weatherDay'><h3>${dayOfWeek}</h3>`
    out += `<img src="https://openweathermap.org/img/wn/${icon}.png" alt=${description}>`;
    out +=`<p>${currentWeather} &deg;F</p>`
    out +=`<p id="description">${description}</p>`;
    out +=`<p>High Temperature: ${highTemp.toFixed(1)} &deg;F</p>`;
    out +=`<p>Low Temperature: ${lowTemp.toFixed(1)} &deg;F</p>`;
    out +=`<p>Humidity: ${humidity}%</p>`;
    out +=`<p>Wind Speed: ${windSpeed.toFixed(1)}mph</p></div>`;
    document.getElementById("forecast").innerHTML += out;
}

var globalWeather=navigator.geolocation;
globalWeather.getCurrentPosition(gotPosition);
    
function displayForecast(){
    let button=document.getElementById("forecastBtn");
    let weather1=document.querySelector("#forecast  .weatherDay:nth-child(2)");//.style.display="block";
    let weather2=document.querySelector("#forecast  .weatherDay:nth-child(3)");//.style.display="block";
    if (weather1.style.display === "none" || weather1.style.display === "") {
        weather1.style.display = "block";
        weather2.style.display = "block";
        button.innerHTML="Today's Weather"
        document.querySelector("#weather h2:nth-child(1)").innerHTML="Weather Forecast in "+cityName;
      } else {
        button.innerText="Weather Forecast"
        weather1.style.display = "none";
        weather2.style.display = "none";
        document.querySelector("#weather h2:nth-child(1)").innerHTML="Weather in "+cityName;
      }
}