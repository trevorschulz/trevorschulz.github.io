$("#page-nav").on("click", "#anvils", function (change) {
  change.preventDefault();
$.getJSON("/acme/js/acme.json" , function (JSON){
    var items=[];
    $.each(JSON, function (key, val){
        if(val.prod_number == 1){
            $(".home-content").empty();
            $(".product-name").text(val.name);
            $("#product-picture").html("<img id='product-picture' src='" + val.path +"' alt='Acme Rocket'>");
            $("#product-description").text(val.description);
            $("#product-manufacturer").text("Manufacturer: " + val.manufacturer);
            $("#product-reviews").text("Reviews: " + val.reviews + " Stars");
            $("#product-price").text("Price: " + "$" + val.price);
                console.log(key);
                console.log(val);
        }
    });
});
  
  });



$("#page-nav").on("click", "#explosives", function (change) {
  change.preventDefault();
$.getJSON("/acme/js/acme.json" , function (JSON){
    var items=[];
    $.each(JSON, function (key, val){
        if(val.prod_number == 2){
          $(".home-content").empty();
            $("#product-name").text("val.name");
            $("#product-picture").html("<img id='product-picture' src='" + val.path +"' alt='Acme Rocket'>");
            $("#product-description").text(val.description);
            $("#product-manufacturer").text("Manufacturer: " + val.manufacturer);
            $("#product-reviews").text("Reviews: " + val.reviews + " Stars");
            $("#product-price").text("Price: " + "$" + val.price);
            console.log(key);
        console.log(val);
        }
    });
});
  
  });



$("#page-nav").on("click", "#decoys", function (change) {
  change.preventDefault();
$.getJSON("/acme/js/acme.json" , function (JSON){
    var items=[];
    $.each(JSON, function (key, val){
        if(val.prod_number == 3){
            $(".home-content").empty();
            $("#product-name").text("val.name");
            $("#product-picture").html("<img id='product-picture' src='" + val.path +"' alt='Acme Rocket'>");
            $("#product-description").text(val.description);
            $("#product-manufacturer").text("Manufacturer: " + val.manufacturer);
            $("#product-reviews").text("Reviews: " + val.reviews + " Stars");
            $("#product-price").text("Price: " + "$" + val.price);
            console.log(key);
        console.log(val);
        }
    });
});
  
  });



$("#page-nav").on("click", "#traps", function (change) {
  change.preventDefault();
$.getJSON("/acme/js/acme.json" , function (JSON){
    var items=[];
    $.each(JSON, function (key, val){
        if(val.prod_number == 4){
            $(".home-content").empty();
            $("#product-name").text("val.name");
            $("#product-picture").html("<img id='product-picture' src='" + val.path +"' alt='Acme Rocket'>");
            $("#product-description").text(val.description);
            $("#product-manufacturer").text("Manufacturer: " + val.manufacturer);
            $("#product-reviews").text("Reviews: " + val.reviews + " Stars");
            $("#product-price").text("Price: " + "$" + val.price);
            console.log(key);
        console.log(val);
        }
    });
});
  
  });