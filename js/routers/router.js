define(['jquery', 'underscore', 'backbone', 'views/homeView', 'views/aboutView',
        'views/resumeView'],
function($, _, Backbone, HomeView, AboutView, ResumeView){
  return Backbone.Router.extend({
    routes : {
      ''          : "home",
      'about'     : "about",
      'resume'    : "resume"
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
    },

    resume: function() {
      if(!this.resumeView) {
        this.resumeView = new ResumeView();
      }
      this.resumeView.render();
    }
  });
});
