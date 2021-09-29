// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={cc173e9e542edac08053c19dd02b4516}
const key = "cc173e9e542edac08053c19dd02b4516";
var rUrl = "https://api.openweathermap.org/data/2.5/onecall?";
var gUrl = "http://api.openweathermap.org/geo/1.0/direct?";
var lat = 33.74;
var long = -84.38;
var limit = 5;
var part;
var loch = "Atlanta, GA"
var q;
// var searchTarget = $('#letsGeo')

// form handler
$('#letsGeo').submit(function(event) {
    event.preventDefault;
    localStorage.setItem("city", ($('#geo').val()));
    console.log($('#geo').val());
    geo();
});

console.log(loch);

// GeoAPI call
function geo () {
    fetch (gUrl + 'q=' + loch + '&limit=' + limit + '&appid=' + key )
    .then(function
        (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    // meteo(response.lat,response.lon)
                })
            } else {alert('Error: ' + response.statusText);}
        })
        .catch(function (error) {
                debugger;
                alert('Unable to get geo data from OpenWeather');
            });
};

// 'OneCall' Forecast API call
function meteo() { fetch (rUrl + 'lat=' + lat + '&lon=' + long + '&units=imperial' + '&appid=' + key )
    then(function
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
    };