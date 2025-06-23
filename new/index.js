

function updateTime(){


    const timeH = document.getElementById("timezone");


    // time greeting

    const time = new Date();

    const hours = time.getHours();



    let greeting;

    if (hours >= 5 && hours < 11) {
        greeting = "Good morning 🌻";
    } else if (hours >= 11 && hours < 14) {
        greeting = "Good noon 🌞";
    } else if (hours >= 14 && hours < 17) {
        greeting = "Good afternoon 🌞";
    } else if (hours >= 17 && hours < 21) {
        greeting = "Good evening 🌙";
    } else if (hours >= 21 || hours < 5) {
        greeting = "Good night 🌜";
    } else {
        greeting = "Hello 👋"; // if nothing works or sum
    }


    if (timeH) {
        timeH.textContent = greeting;
    }
}




window.onload = function() {
    
    updateTime();
    setInterval(updateTime, 60000);
}