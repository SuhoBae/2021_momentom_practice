
const API_KEY = "a27b8f4ef87a04fc6f1c804844e74e7c"



function onGeoOK(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    //여기서의 POSITION이 아마도 THIS?
    console.log("You live in, ", lat, log);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            const name = data.name;
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
    }); //실제로 url에 우리가 갈 필요 없이 javascript가 url을 불러온다
}

function onGeoError(){
    console.log("Can't find you. No wearher for you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError );
//안내문에서 실행위한 최소 요소들을 받을 수 있다!  