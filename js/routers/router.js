define(['jquery', 'underscore', 'backbone', 'views/homeView', 'views/aboutView'],
function($, _, Backbone, HomeView, AboutView){
  return Backbone.Router.extend({
    routes : {
      ''          : "home",
      'about'    : "about"
    },

    initialize : function() {
      Backbone.history.start();
    },

    home : function() {
      if(!this.homeView) {
        this.homeView = new HomeView();
      }
      this.homeView.render();
    },

    about : function() {
      if(!this.aboutView) {
        this.aboutView = new AboutView();
      }
      this.aboutView.render();
      console.log("about view!");
    }
  });
});
