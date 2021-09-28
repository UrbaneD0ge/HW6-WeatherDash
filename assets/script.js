// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={cc173e9e542edac08053c19dd02b4516}
const key = "cc173e9e542edac08053c19dd02b4516";
var lat = 33.74;
var long = -84.38;
var part;
var rUrl = "https://api.openweathermap.org/data/2.5/onecall?";
var gUrl = "http://api.openweathermap.org/geo/1.0/direct?"
var loch; 
var q;
var limit = 5;
// var searchTarget = $('#letsGeo')

$('#letsGeo').submit(function(event) {
    event.preventDefault;
    console.log('I need sleep.');
    console.log($('#geo').val());
    // window.alert('You need sleep!');
    let loch = ($('#geo').val);
    geo(loch);
})

// function geo () {
//     fetch (gUrl + 'q=' + q + '&limit=' + limit + '&appid=' + key )
//         .then(function
//             (response) {
//                 if (response.ok) {
//                     console.log(response);
//                     response.json().then(function (data) {
//                         console.log(data);
//                     })
//                 } else {alert('Error: ' + response.statusText);}
//             })
//             .catch(function (error) {
//                 alert('Unable to get geo data from OpenWeather');
//             });
// };

function meteo(lat, long) { fetch (rUrl + 'lat=' + lat + '&lon=' + long + '&units=imperial' + '&appid=' + key )
    debugger
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