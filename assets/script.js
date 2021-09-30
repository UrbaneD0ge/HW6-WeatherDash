// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={cc173e9e542edac08053c19dd02b4516}
const key = "cc173e9e542edac08053c19dd02b4516";
var rUrl = "https://api.openweathermap.org/data/2.5/onecall?";
var gUrl = "http://api.openweathermap.org/geo/1.0/direct?";
var lat = 33.74;
var long = -84.38;
var limit = 1;
var part;
var loch = "Atlanta, GA"
var q;
// var searchTarget = $('#letsGeo')

// form handler
$('#letsGeo').submit(function(event) {
    event.preventDefault();
    loch = $('#geo').val();
    localStorage.setItem("city", loch);
    console.log($('#geo').val());
    geo();
});

//console.log(loch);

// GeoAPI call
function geo () {
    let request = gUrl + 'q=' + encodeURIComponent(loch) + '&limit=' + limit + '&appid=' + key;
    console.log(request);
    fetch (request)
    .then(function
        (response) {
            console.log(response);
            if (response.ok) {
                response.json().then(function (data) {
                    console.log('return from API',data);
                    [lat,long] = [data[0].lat,data[0].lon];
                    meteo();
                })
            } else {alert('Error: ' + response.statusText);}
        })
    .catch(function (error) {
            alert('Unable to get geo data from OpenWeather');
        });
};

// 'OneCall' Forecast API call

function meteo() {
    let request = rUrl + 'lat=' + lat + '&lon=' + long + '&units=imperial' + '&appid=' + key;
    fetch(request)
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
    };