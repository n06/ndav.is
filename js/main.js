(function() {
  var VENDOR = "../bower_components/";
  require.config({
    paths: {
      "jquery"           : VENDOR + "jquery/dist/jquery.min",
      "bootstrap"        : VENDOR + "bootstrap/dist/js/bootstrap.min",
      "handlebars"       : VENDOR + "handlebars/handlebars.min",
      "text"             : VENDOR + "requirejs-text/text",
      "hbs"            : VENDOR + "requirejs-handlebars/hb",
      "backbone"         : VENDOR + "backbone/backbone",
      "underscore"       : VENDOR + "lodash/dist/lodash.underscore.min",
      "moment"           : VENDOR + "moment/min/moment.min"
    },

    shim: {
      bootstrap : ["jquery"],
      handlebars : { exports : "Handlebars" }
    }
  });
}());

require(["jquery", "backbone", "routers/router", "views/homeView"],
        function($, Backbone, Router, HomeView){

  $( document ).ready(function() {
    console.log("loading webapp...");
    this.homeView = new HomeView();
    this.homeView.render();
    this.router = new Router();
  });
});
