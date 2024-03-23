const weatherApiKey = "99ed75487e0ffcedbb277411183da77e";
const weatherApiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 const search = document.querySelector(".search input");
 const searchbtn = document.querySelector(".search button");

 const weatherIcon = document.querySelector(".weather-icon");
async function getweather(City) {
    const response = await fetch(weatherApiurl + City + `&appid=${weatherApiKey}`);

    var data = await response.json();

    console.log(data);

    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";

   if(data.weather[0]=="Clouds"){
       
    weatherIcon.src = "images/Clouds.png";

   }
   else if (data.weather[0].main== "Clear") {
    weatherIcon.src = "images/clear.png";
    
   }
   else if (data.weather[0].main== "Rain") {
    weatherIcon.src = "images/rain.png";
    
   }

   else if (data.weather[0].main== "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
    
   }

   else if (data.weather[0].main== "Mist") {
    weatherIcon.src = "images/mist.png";
    
   }
    
}
searchbtn.addEventListener("click", ()=>{
    getweather(search.value);
})