$("#page-nav").on("click", "#anvils", function (change) {
  change.preventDefault();
$getJSON("/acme/js/acme/json" , function (JSON){
    var items=[];
    $.each(JSON, function (key, val){
        if(val.prod_number == 1){
            $("home-content").text("");
            $("product-name").text(val.name);
            $("product-description").text(val.description);
            $("product-manufacturer").text("Manufacturer: " + val.manufacturer);
            $("product-reviews").text("Reviews: " + val.reviews + " Stars");
            $("product-price").text("Price: " + "$" + val.price);
        }
    });
};)
  
  });



$("#page-nav").on("click", "#explosives", function (change) {
  change.preventDefault();
$getJSON("/acme/js/acme/json" , function (JSON){
    var items=[];
    $.each(JSON, function (key, val){
        if(val.prod_number == 2){
            $("home-content").text("");
            $("product-name").text(val.name);
            $("product-description").text(val.description);
            $("product-manufacturer").text("Manufacturer: " + val.manufacturer);
            $("product-reviews").text("Reviews: " + val.reviews + " Stars");
            $("product-price").text("Price: " + "$" + val.price);
        }
    });
};)
  
  });



$("#page-nav").on("click", "#decoys", function (change) {
  change.preventDefault();
$getJSON("/acme/js/acme/json" , function (JSON){
    var items=[];
    $.each(JSON, function (key, val){
        if(val.prod_number == 3){
            $("home-content").text("");
            $("product-name").text(val.name);
            $("product-description").text(val.description);
            $("product-manufacturer").text("Manufacturer: " + val.manufacturer);
            $("product-reviews").text("Reviews: " + val.reviews + " Stars");
            $("product-price").text("Price: " + "$" + val.price);
        }
    });
};)
  
  });



$("#page-nav").on("click", "#traps", function (change) {
  change.preventDefault();
$getJSON("/acme/js/acme/json" , function (JSON){
    var items=[];
    $.each(JSON, function (key, val){
        if(val.prod_number == 4){
            $("home-content").text("");
            $("product-name").text(val.name);
            $("product-description").text(val.description);
            $("product-manufacturer").text("Manufacturer: " + val.manufacturer);
            $("product-reviews").text("Reviews: " + val.reviews + " Stars");
            $("product-price").text("Price: " + "$" + val.price);
        }
    });
};)
  
  });