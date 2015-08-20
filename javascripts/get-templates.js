define (function(require) {
  return {
    tripTpl: require("hbs!../templates/list-trips"),
    locTypeTpl: require("hbs!../templates/location_types"),
    visitedTpl: require("hbs!../templates/visited"),
    wishTpl: require("hbs!../templates/wish_list"),
  };
});