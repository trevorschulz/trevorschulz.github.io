$("#page-nav").on("click", "#anvils", function (event) {
  event.preventDefault();
$.getJSON("/acme/js/acme.json" , function (JSON){
    var items=[];
    $.each(JSON, function (key, val){
        if(val.prod_number == 1){
           
               $.ajax({
            url : "/acme/js/acme.json",
  dataType : "json",
  success : function(data) {
  var name = data['name'];



let name = document.getElementById("product-name");
        
        name.innerHTML = name;
        }
    });
});
  
  });


// Get the data from the wunderground API

      