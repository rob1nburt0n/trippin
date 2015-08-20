define(function(require){
  var firebase = require("firebase");
  var templates = require("get-templates");

  var $ = require("jquery");

  console.log(templates);
  var myFirebaseRef = new Firebase("https://nss-robin-trippin.firebaseio.com/");

  myFirebaseRef.child("location_types").on("value", function(snapshot) {
    var location_types = snapshot.val();
    console.log(location_types);
 

  var populatedTemplate = templates.locTypeTpl(location_types);
  $("#location-type").html(populatedTemplate);

   });

  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val(); 

    console.log("trips",trips);

    var visitedTemplate = templates.visitedTpl(trips);
    var wishTemplate = templates.wishTpl(trips);
     //insert the DOM string into the appropriate element
    $("#visitedListFb").html(visitedTemplate);
    $(".beenThere").filter('[visited="true"]').show();
    $(".beenThere").filter('[visited="false"]').hide();
    $("#wishListFb").html(wishTemplate);
    $(".wishToGo").filter('[visited="true"]').hide();
    $(".wishToGo").filter('[visited="false"]').show();

  });
});

