//Click Counter Function Demo
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }



  //Example Array
  var fruitArray = ["apple", "banana", "pineapple", "orange"];
//   document.getElementById("fruit").innerHTML = fruitArray[2];

//   //Storing an Array

//   // Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("fruity", fruitArray);
    // Retrieve
    document.getElementById("array_store").innerHTML = localStorage.getItem("fruity");
  } else {
    document.getElementById("array_store").innerHTML = "Sorry, your browser does not support Web Storage...";
  }


