/* Code found in https://www.youtube.com/watch?v=buS3mweBWCA */

let gotPosition= function(pos){
    let lat= pos.coords.latitude;
    let long=pos.coords.longitude;
    getForecast(lat,long);
}

let getForecast= function(lat,long){
    let url= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly&units=imperial&appid=625b3e54582f7765110b7e680ff34db6`;
    getWeatherText(url)
}

async function getWeatherText(url){
    let weatherObject= await fetch(url);
    let weatherText = await weatherObject.text();
    parseWeather(weatherText);
}

let parseWeather = function (weatherText){
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
    let description= day.weather[0].description;
    let highTemp=day.temp.max;
    let lowTemp=day.temp.min;
    let humidity= day.humidity;
    let windSpeed= day.wind_speed;
    displayWeatherDay(dayOfWeek,icon,description,highTemp,lowTemp,humidity,windSpeed)
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

let displayWeatherDay=function(dayOfWeek,icon,description,highTemp,lowTemp,humidity,windSpeed){
    let out=`<div class='weatherDay'><h3>${dayOfWeek}</h3>`
    out += `<img src="http://openweathermap.org/img/wn/${icon}.png" alt=${description}></img>`;
    out +=`<p id="description">${description}</p>`;
    out +=`<p>High Temperature: ${highTemp} &deg;F</p>`;
    out +=`<p>Low Temperature: ${lowTemp} &deg;F</p>`;
    out +=`<p>Humidity: ${humidity} %</p>`;
    out +=`<p>Wind Speed: ${windSpeed} mph</p></div>`;
    document.getElementById("forecast").innerHTML += out;
}

navigator.geolocation.getCurrentPosition(gotPosition);
    
function displayForecast(){
    let button=document.getElementById("forecastBtn");
    let weather1=document.querySelector("#forecast  .weatherDay:nth-child(2)");//.style.display="block";
    let weather2=document.querySelector("#forecast  .weatherDay:nth-child(3)");//.style.display="block";
    if (weather1.style.display === "none" ||weather1.style.display === "") {
        weather1.style.display = "block";
        weather2.style.display = "block";
        button.innerHTML="Today's Weather"
      } else {
        button.innerText="Forecast"
        weather1.style.display = "none";
        weather2.style.display = "none";
      }
}

//document.getElementById("forecastBtn").addEventListener("click",displayForecast)