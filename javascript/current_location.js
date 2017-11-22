// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
            url : "https://api.wunderground.com/api/473e5ba859e9731e/geolookup/conditions/q/"+lat+","+long+".json",
  dataType : "jsonp",
  success : function(data) {
  var cityName = data['location']['city'];
  var state = data['location']['state'];
  var temp_f = data['current_observation']['temp_f'];
  var wind_dir = data["current_observation"]["wind_dir"];
  var wind_mph = data["current_observation"]["wind_mph"];
  var precip = data["current_observation"]["precip_today_string"];
  var observation = data["current_observation"]["weather"];
  var icon = data["current_observation"]["icon_url"];
  console.log("Current temperature in " + location + " is: " + temp_f);


let place = document.getElementById("place");
        
        place.innerHTML = cityName + ", " + state;
      
let title = document.getElementById("title");
        title.innerHTML = cityName + "Weather Home";
      
let weather = document.getElementById("current_temp");
        weather.innerHTML = temp_f + "°F";
    
let gusts = document.getElementById("wind");
      if (wind_mph == "0"){
          gusts.innerHTML = "No wind"
      }  
      else{
      gusts.innerHTML = "<b>" + "Wind: " + "</b>" + wind_dir + " @ " + wind_mph + " MPH";
      }
      
let rain = document.getElementById("precip");
        rain.innerHTML = "<b>" + "Precipitation: " + "</b>" + precip;
      
let forecast = document.getElementById("forecast");
        forecast.innerHTML = observation + "</br>" + "<img src='" + icon + "'>";
      
// The following changes the background depending on the forecast
function background_function() {
      var background = document.getElementById("background");
        if (wind_mph >= 10){
            background.innerHTML = "<style> body{background-image:url('/images/plan-images/windy.gif')}</style>";
        }
       else if (observation == "Rain" || observation == "Light Rain" || observation == "Mostly Rainy" || observation == "Heavy Rain"){
            background.innerHTML = "<style> body{background-image:url('/images/plan-images/rainy.gif')}</style>";
        }
        else if (observation == "Snow"){
            background.innerHTML = "<style> body{background-image:url('/images/plan-images/snowy.gif')}</style>";
        }
       else if (observation == "Overcast" || observation == "Mostly Cloudy" || observation == "Scattered Clouds" || observation == "Partly Cloudy"){
            background.innerHTML = "<style> body{background-image:url('/images/plan-images/cloudy.gif')}</style>";
        }
      else {
            background.innerHTML = "<style> body{background-image:url('/images/plan-images/sunny_cropped.gif')}</style>";
        }
}
background_function()
      
        
      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
