// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={cc173e9e542edac08053c19dd02b4516}

const key = "cc173e9e542edac08053c19dd02b4516";
var lat = 33.74;
var long = -84.38;
var part;
var rUrl = "https://api.openweathermap.org/data/2.5/onecall?";

fetch (rUrl + 'lat=' + lat + '&lon=' + long + '&units=imperial' + '&appid=' + key )
    .then(function
        (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    // displayFn(data,city);
                })
            } else {
                alert('Error: ' + response.statusText);
        }
        })
        .catch(function (error) {
            alert('Unable to connect to OpenWeather');
        });
    
    