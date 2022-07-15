/* Code found in https://www.youtube.com/watch?v=buS3mweBWCA */

let gotPosition= function(pos){
    let lat= pos.coords.latitude;
    let long=pos.coords.longitude;
    getForecast(lat,long);
}

let getForecast= function(lat,long){
    let url= `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&long=${long}&exclude=current,minutely,hourly,alerts&units=imperial&appid=625b3e54582f7765110b7e680ff34db6`;
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
    for(x=0; x < dailyForecast.length; x++){
        let day= dailyForecast[x];
        let today = new Date().getDay() + x;
        if (today > 3) {
            today = today-7;
        }
    let dayOfWeek = getDayOfWeek(today);
    let icon= day.weather[0].icon;
    let description= day.weather[0].description;
    let highTemp=day.temp.max;
    let lowTemp=day.temp.min;
    let humidity= weather[0];
    displayWeatherDay(dayOfWeek,icon,description,highTemp,lowTemp,humidity)
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

let displayWeatherDay=function(dayOfWeek,icon,description,highTemp,lowTemp,humidity){
    let out=`<div class='weatherDay'><img src="http://openweathermap.org/img/wn/${icon}.png" alt=${description}>`
    out += `<h3>${dayOfWeek}</h3>`;
    out +=`<p>High Temperature: ${description}</p>`;
    out +=`<p>High Temperature: ${highTemp}</p>`;
    out +=`<p>Low Temperature: ${lowTemp}</p>`;
    out +=`<p>Humidity: ${humidity}</p></div>`;
    document.getElementById("forecast").innerHTML += out;
}

navigator.geolocation.getCurrentPosition(gotPosition);