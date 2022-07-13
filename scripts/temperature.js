// Document location where I want my results displayed
let temp=document.querySelector("#temperature");
let humidity=document.querySelector("#humidity");
const weatherImg=document.querySelector("#weather-img");
const description=document.querySelector("#w_description");

//Using Weather API to display weather
const url= "https://api.openweathermap.org/data/2.5/weather?q=Bethesda&exclude=current,hourly,minutely,alerts&units=imperial&appid=625b3e54582f7765110b7e680ff34db6";
const url2= "https://api.openweathermap.org/data/2.5/forecast?q=Bethesda&exclude=current,hourly,alerts&units=imperial&appid=625b3e54582f7765110b7e680ff34db6";

async function getJson(link){
    let response = await fetch(link);
    if (response.ok) {
        const data = await response.json();
        displayTempSingle(data)
        //forecast(data)
}
};
getJson(url)

function displayTempSingle(city){
    var temperature=parseInt(city.main.temp);
    weatherImg.setAttribute("src",`https://openweathermap.org/img/wn/${city.weather[0].icon}.png`);
    weatherImg.setAttribute("alt",`${city.weather[0].description}`);
    temp.innerHTML= `<p>${temperature.toFixed(0)} &deg;F</p>`;
    humidity.innerHTML=`<p>Humidity: ${city.main.humidity}% </p>`;
    description.innerHTML=`<h3>${city.weather[0].description}</h3>`;
};
//getJson(url2)



// function forecast (day){
//     const day1=day[0];
//     const day2=day[1];
//     const day3=day[2];
//     displayTempSingle(day1)
//     displayTempSingle(day2)
//     displayTempSingle(day3)

// }



// fetchForecast = function () {
// 	var endpoint =
//         "https://api.openweathermap.org/data/2.5/forecast?q=Bethesda&exclude=current,hourly,minutely,alerts&units=imperial&appid=625b3e54582f7765110b7e680ff34db6";
// 	var forecastEl = document.getElementsByClassName("forecast");

// 	fetch(endpoint)
// 	.then(function (response) {
// 		if (200 !== response.status) {
// 			console.log(
// 				"Looks like there was a problem. Status Code: " + response.status
// 			);
// 			return;
// 		}

// 		forecastEl[0].classList.add('loaded');

// 		response.json().then(function (data) {
// 			var fday = "";
// 			data.daily.forEach((value, index) => {
// 				if (index > 0) {
// 					var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
// 						weekday: "long",
// 					});
// 					var icon = value.weather[0].icon;
// 					var temp = value.temp.day.toFixed(0);
// 					fday = `<div class="forecast-day">
// 						<p>${dayname}</p>
// 						<p><span class="ico-${icon}" title="${icon}"></span></p>
// 						<div class="forecast-day--temp">${temp}<sup>°C</sup></div>
// 					</div>`;
// 					forecastEl[0].insertAdjacentHTML('beforeend', fday);
//                     let day=1++
                    
// 				}
// 			});
// 		});
// 	})
// 	.catch(function (err) {
// 		console.log("Fetch Error :-S", err);
// 	});
// };