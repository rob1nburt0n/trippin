define(function(require){
  //dependencies
var $ = require("jquery");

//module level variables
var visited = false;

$("#visited").click(function(){
  visited = true;
});

$("#wish-list").click(function(){
  visited = false;
});

  //POST the data to Firebase when Add Location button is clicked
    $("#add-location").click(function(){
    var newLocation = {
      location: $("#location-name").val(),
      location_type: $("#location-type").val(),
      visited: visited
    };

    console.log("newLocation", newLocation);

  $.ajax({
      url: "https://nss-robin-trippin.firebaseio.com/trips.json",
      method: "POST",
      data: JSON.stringify(newLocation)
  })
    .done(function(newData){
      console.log("newData", newData);

    }).fail(function(xhr, status, error) {
      console.log("error", error);
    });

  });

});