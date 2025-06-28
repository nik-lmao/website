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

    if (localElem) localElem.textContent = now.toLocaleTimeString();


    if (nikitaElem) {

        const nikitaTimeString = now.toLocaleTimeString("en-GB", {

            hour12: false,

            timeZone: "Europe/Berlin"

        });

        nikitaElem.textContent = nikitaTimeString;
    }
}

// ------------------------------------------------------------------------------------------------------------------



function updateWeather() {
    const weatherElem = document.getElementById("local-weather");
    const locationNameElem = document.getElementById("location-name");

    weatherElem.textContent = "Loading weather...";

    fetch("https://api.ipify.org?format=json")

        .then(res => res.json())

        .then(ipData => {

            const ip = ipData.ip;
            return fetch(`https://ipinfo.io/${ip}?token=f4defad31d60d0`);
        })
        .then(res => res.json())

        .then(locationData => {
            const city = locationData.city;
            const country = locationData.country;

            return fetch(`https://api.weatherapi.com/v1/current.json?key=3ecb6948ccb5426abd2203902252306&q=${city},${country}`);

        })

        .then(res => res.json())

        .then(data => {
            let temp = data.current.temp_c;
            let desc = data.current.condition.text;

            if (desc.includes("Sunny")) {
                desc = "☀️";
            } else if (desc.includes("Cloudy")) {
                desc = "☁️";
            } else if (desc.includes("Rain") || desc.includes("Showers")) {
                desc = "🌧️";
            } else if (desc.includes("Storm")) {
                desc = "⛈️";
            }
            else if (desc.includes("Clear")) {
                desc = "🌤️";
            }
            else if (desc.includes("Snow")) {
                desc = "❄️";

            } else {
                desc = "🌥️"; // defualt
            }

            


            temp = Math.round(temp); // round

            weatherElem.textContent = `${desc} ${temp}°C`;
            weatherElem.style.display = "block";
            locationNameElem.textContent = `${data.location.name}, ${data.location.country}`;
        })

        .catch(error => {
            weatherElem.textContent = "Unable to fetch weather data....";
        });

}


// ------------------------------------------------------------------------------------------------------------------



// only works if im active on discord, duh
function updateSpotify(){
    fetch("https://api.lanyard.rest/v1/users/969253860508061737")
        .then(res => res.json())
        .then(data => {
            
            
            const spotifyName = document.getElementById("spotify-track-name");
            const spotifyArtist = document.getElementById("spotify-artist-name");
            const spotifyPic = document.getElementById("spotify-album-art");
            const spotifyLink = document.getElementById("spotify-link");

            if (data.data && data.data.listening_to_spotify) {
                const track = data.data.spotify;
                const artist = track.artist;
                const song = track.song;

                spotifyName.textContent = song;
                spotifyArtist.textContent = artist;



                
                
                const img = new Image();
                img.crossOrigin = "Anonymous";


                img.src = track.album_art_url;


                img.onload = function() {



                    const canvas = document.createElement("canvas");

                    canvas.width = img.width;
                    canvas.height = img.height;

                    const ctx = canvas.getContext("2d");


                    ctx.drawImage(img, 0, 0, img.width, img.height);

                    const imageData = ctx.getImageData(0, 0, img.width, img.height).data;



                    let r = 0, g = 0, b = 0, count = 0;
                    for (let i = 0; i < imageData.length; i += 4) {
                        r += imageData[i];
                        g += imageData[i + 1];
                        b += imageData[i + 2];
                        count++;
                    }


                    r = Math.round(r / count);
                    g = Math.round(g / count);
                    b = Math.round(b / count);


                    // ai helped me a bit with the color detection


                    const albumArtElem = document.getElementById("spotify-album-art");
                    albumArtElem.onmouseenter = function() {
                        albumArtElem.style.filter = `drop-shadow(0 0 20px rgba(${r}, ${g}, ${b}, 0.7))`;
                    };
                    albumArtElem.onmouseleave = function() {
                        albumArtElem.style.filter = "";
                    };


                    
                };





                spotifyPic.src = track.album_art_url;
                spotifyLink.href = `https://open.spotify.com/track/${track.track_id}`;




                if(spotifyName.textContent.length > 30) {
                    spotifyName.textContent = spotifyName.textContent.slice(0, 30) + "...";
                }


            } else {
                spotifyName.textContent = "Not listening to Spotify (or offline on discord)";
                spotifyArtist.textContent = "";
                spotifyPic.src = "https://images.steamusercontent.com/ugc/1811021954136916356/7E1974B61B8D02405DFE3FEBFA7527339B3D83BE/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true";
            }
        })


}


// ------------------------------------------------------------------------------------------------------------------


let weatherActive = false;
document.getElementById("weather-box").onclick = function () {
    if (!weatherActive) {
        weatherActive = true;
        updateWeather();
    }
}


// ------------------------------------------------------------------------------------------------------------------


window.onload = function () {

    updateTime();
    updateSpotify();

    setInterval(updateTime, 1000); // update every second
    setInterval(updateSpotify, 60000); // update every minute
};