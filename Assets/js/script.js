var APIKey = "88aa2ea1f7aa2668694ae75823678469";

var city;

document.getElementById('search-btn').addEventListener('click', function () {
    city = document.getElementById('city-input').value.trim();
    if (city) {
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
//  store the OpenWeather Current Weather Data URL and the necessary variable
        fetch(queryURL)
        .then(function(response) {
            if (response.ok) {
                return response.json ();
            } else {
                throw new Error("City not found");
            }
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function (error) {
            console.error(error);
        });
    } else {
        alert("Please enter a city name.");
    }
});

