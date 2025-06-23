function updateTime() {
    const nikitaElem = document.getElementById("nikita-time");
    const localElem = document.getElementById("local-time");
    const timeH = document.getElementById("timezone");

    const now = new Date();



    const hours = now.getHours();
    let greeting;
    if (hours >= 5 && hours < 11) {
        greeting = "Good morning 🌻";
    } else if (hours >= 11 && hours < 14) {
        greeting = "Good noon 🌞";
    } else if (hours >= 14 && hours < 17) {
        greeting = "Good afternoon 🌞";
    } else if (hours >= 17 && hours < 21) {
        greeting = "Good evening 🌙";
    } else {
        greeting = "Good night 🌜";
    }
    if (timeH) timeH.textContent = greeting;



    if (localElem) {
        localElem.textContent = "Local time: " + now.toLocaleTimeString();
    }



    if (nikitaElem) {
        const nikitaTimeString = now.toLocaleTimeString("en-GB", { hour12: false, timeZone: "Europe/Berlin" });

        nikitaElem.textContent = "Nikita time (Europe/Berlin): " + nikitaTimeString;
    }
}

// -------------------------------------------------------------------------------------------------------------------------------------------- //


function updateWeather() {

    const ip = "https://api.ipify.org?format=json";

    // -> ipinfo

    // -> city

    // -> pass it onto weather api




    // 3ecb6948ccb5426abd2203902252306
    // 401? -> not activated yet; fix later

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Traunstein,de&appid=3ecb6948ccb5426abd2203902252306&units=metric')
        .then(response => response.json())
        .then(data => {

            const temp = Math.round(data.main.temp);
            const desc = data.weather[0].description;
            weatherElem.textContent = `Weather in Traunstein: ${temp}°C, ${desc}`;

        })
        .catch(error => {
            const weatherElem = document.getElementById("local-weather");
            if (weatherElem) {
                weatherElem.textContent = "Unable to fetch weather data.";
            }
        });





}





window.onload = function () {
    const weatherElem = document.getElementById("local-weather");
    weatherElem.textContent = "Loading weather...";
    updateTime();
    updateWeather();

    setInterval(updateTime, 1000); // update every second
};
