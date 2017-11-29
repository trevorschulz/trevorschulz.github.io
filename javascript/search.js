$('#query').keyup(function(){
  // All code will be inside of this block
var value = $('#query').val();

    
    
var rExp = new RegExp(value, "i");
  
$.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
      console.log(data);

     // Begin building output
   
    
    
    var output = '<ol>';
    $.each(data.RESULTS, function(key, val) {
      if (val.name.search(rExp) != -1) {
        output += '<li>';      
        output += '<a href="https://api.wunderground.com/api/473e5ba859e9731e/conditions' + val.l + ".json" + '" title="See results for ' + val.name + '">' + val.name + '</a>';
        output += '</li>';
          
      }
    }); // end each
    output += '</ol>';
    $("#searchResults").html(output); 
    // send results to the page
     $.ajax({
            url : "https://api.wunderground.com/api/473e5ba859e9731e/conditions' + val.l + '.json'",
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
      }
    });
  
  }); // end getJSON




}); // end keyup



