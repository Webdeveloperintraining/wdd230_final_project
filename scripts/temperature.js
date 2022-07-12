// Document location where I want my results displayed
let temp=document.querySelector("#temperature");
let wind=document.querySelector("#wind");
let windChill=document.querySelector("#wind-chill");
const weatherImg=document.querySelector("#weather-img");
const description=document.querySelector("#w_description");

//Using Weather API to display weather
const url= "https://api.openweathermap.org/data/2.5/weather?q=Tijuana&appid=625b3e54582f7765110b7e680ff34db6&units=imperial";

async function getJson(){
    let response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayTemp(data)
}
};
getJson()

function displayTemp(Tijuana){
    var temperature=parseInt(Tijuana.main.temp);
    var wSpeed=parseFloat(Tijuana.wind.speed);
    temp.innerHTML= `<p>${temperature.toFixed(0)} &deg;F</p>`;
    wind.innerHTML=`${wSpeed} mPH`;
    weatherImg.setAttribute("src",`https://openweathermap.org/img/wn/${Tijuana.weather[0].icon}.png`);
    weatherImg.setAttribute("alt",`${Tijuana.weather[0].description}`);
    description.innerHTML=`<h3>${Tijuana.weather[0].description}</h3>`;
    Chill(temperature, wSpeed)
};

//Buttons that Changes Celsius or Farenheit
function turnCelsius(){
    const celsius= (temperature)=>(temperature-32)*5/9;
    temp.innerHTML=`<p>${celsius(temperature).toFixed(0)} &deg;C</p>`;
    const kmH=wSpeed*1.60934;
    wind.innerHTML=`${kmH.toFixed(2)} kMH`;

};

function turnFarenheit (){
    temp.innerHTML=`<p>${temperature.toFixed(0)} &deg;F</p>`;
    wind.innerHTML=`${wSpeed.toFixed(2)} mPH`;

};

document.querySelector("#celBtn").addEventListener("click", turnCelsius)
document.querySelector("#farBtn").addEventListener("click", turnFarenheit)
