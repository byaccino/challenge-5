var APIKey = "88aa2ea1f7aa2668694ae75823678469";

var city;

document.getElementById('search-btn').addEventListener('click', function () {
    city = document.getElementById('city-input').value.trim();
    if (city) {
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
        //  store the OpenWeather Current Weather Data URL and the necessary variable
        fetch(queryURL)
            .then(function (response) {
                console.log("Response: ", response);
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("City not found");
                }
            })
            .then(function (data) {
                console.log(data);
                document.getElementById('city-name').textContent = city;
                document.getElementById('temperature').textContent = data.main.temp;
                document.getElementById('humidity').textContent = data.main.humidity
                document.getElementById('wind-speed').textContent = data.wind.speed
                document.getElementById('weather-conditions').textContent = data.weather[0].description;
                // at this point in our function scope we HAVE ACCESS to LAT and LONG
                let lat = data.coord.lat;
                let lon = data.coord.lon;
                return { lat, lon }
            })
            .then(function (data) {
        
                console.log("Data: ", data);
                var forecastURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&appid=${APIKey}`;
                console.log("Forecst URL: ", forecastURL);

                fetch(forecastURL)
                    .then(function (response) {
                        console.log("Response: ", response);
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error("City not found");
                        }
                    })
                    .then(function (data) {
                        console.log(data);
                        
                        let forecastArr = data.list;
                        for(let i = 0; i < forecastArr.length; i++) {
                            console.log(forecastArr[i].dt_txt);

                            if (forecastArr[i].dt_text == "18:00:00"

                        }
                    /*    document.getElementById('city-name').textContent = city;
                        document.getElementById('temperature').textContent = data.main.temp;
                        document.getElementById('humidity').textContent = data.main.humidity
                        document.getElementById('wind-speed').textContent = data.wind.speed
                        document.getElementById('weather-conditions').textContent = data.weather[0].description;
                        */

                    })
            })
            .catch(function (error) {
                console.error(error);
            });
        }
});