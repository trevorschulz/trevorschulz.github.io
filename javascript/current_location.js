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
  console.log("Current temperature in " + location + " is: " + temp_f);


let place = document.getElementById("place");
        
        place.innerHTML = cityName + ", " + state;
      
let weather = document.getElementById("current_temp");
        weather.innerHTML = temp_f + "°F";
    
let gusts = document.getElementById("wind");
       gusts.innerHTML = "<b>" + "Wind: " + "</b>" + wind_dir + " @ " + wind_mph + " MPH";
      
let rain = document.getElementById("precip");
       rain.innerHTML = "<b>" + "Precipitation: " + "</b>" + precip;
      
let forecast = document.getElementById("forecast");
       forecast.innerHTML = observation + "</br>" + "<img src='http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif' alt='forecast_pic' style='width:50px;height:50px;'>";
      
        
      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
